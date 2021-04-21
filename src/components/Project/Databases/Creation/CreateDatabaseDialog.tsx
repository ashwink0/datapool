import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useRouter } from 'next/router';
import { CircularProgress } from '@material-ui/core';
import Alert from '@/components/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import fire from '../../../../../utils/firebase';

type propTypes = {
	open: boolean;
	handleClose: Function;
};
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: `flex`,
			flexWrap: `wrap`,
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 180,
		},
	}),
);

export default function CreateDatabaseDialog(props: propTypes) {
	const classes = useStyles();
	const [created, setCreated] = useState(false);
	const [buttonContent, setButtonContent] = useState<any>(<Button>ASDJK</Button>);
	const [name, setName] = useState(`h`);
	const [db, setdb] = useState(``);
	const [description, setDescription] = useState(``);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	const router = useRouter();
	const handleDialogClose = () => {
		props.handleClose();
	};
	const handleChange = (event: any) => {
		if (event.target.name === `name`) {
			if (event.target.value.length < 40) {
				setName(event.target.value);
			}
		} else if (event.target.name === `description`) {
			if (event.target.value.length < 100) {
				setDescription(event.target.value);
			}
		}
	};
	const handleDBChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setdb(String(event.target.value) || ``);
	};
	const openSnackbar = () => {
		setSnackbarOpen(true);
	};
	const closeSnackbar = (
		event: React.SyntheticEvent | React.MouseEvent,
		reason?: string,
	) => {
		if (reason === `clickaway`) {
			return;
		}
		setSnackbarOpen(false);
	};
	const createDatabase = () => {
		if (name.length > 0) {
			setCreated(true);
			setButtonContent(<CircularProgress />);
			fire
				.auth()
				.currentUser?.getIdToken(true)
				.then((idToken) => {
					fetch(`/api/createProject/${fire.auth().currentUser?.uid}`, {
						method: `POST`,
						headers: {
							Authorization: idToken,
						},
						body: JSON.stringify({
							projectName: name,
							description,
						}),
					})
						.then((r) => r.json())
						.then((data) => {
							setButtonContent(`Success`);
							router.push(`/${data.id}`);
						});
				})
				.catch((error) => {
					setButtonContent(`An error occured.`);
				});
		} else {
			setSnackbarOpen(true);
		}
	};

	function getSteps() {
		return [`Select database type`, `Enter database Information`];
	}

	function getStepContent(step: number) {
		switch (step) {
			case 0:
				return (
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-dialog-select-label">
							Select a Database
						</InputLabel>
						<Select
							labelId="demo-dialog-select-label"
							id="demo-dialog-select"
							value={db}
							onChange={handleDBChange}
							input={<Input />}
						>
							<MenuItem value="mongo">Mongo</MenuItem>
						</Select>
					</FormControl>
				);
			case 1:
				return `Enter database Information`;
			default:
				return ``;
		}
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	function getButtonContent(step: number) {
		switch (step) {
			case 0:
				return (
					<Button onClick={handleNext} disabled={db === ``}>
						Next
					</Button>
				);
			case 1:
				return <Button onClick={handleNext && createDatabase}>Create</Button>;
			default:
				return buttonContent;
		}
	}

	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={props.open}
			onClose={handleDialogClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Create a Database</DialogTitle>
			<DialogContent>
				<DialogContentText>Add a database to your project</DialogContentText>
				<Stepper activeStep={activeStep}>
					{getSteps().map((label: any) => {
						const stepProps: { completed?: boolean } = {};
						const labelProps: { optional?: React.ReactNode } = {};
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				<div style={{ minHeight: `130px` }}>{getStepContent(activeStep)}</div>
				<Button disabled={activeStep === 0} onClick={handleBack}>
					Back
				</Button>
				{getButtonContent(activeStep)}
			</DialogContent>
			<Snackbar
				anchorOrigin={{
					vertical: `bottom`,
					horizontal: `left`,
				}}
				open={snackbarOpen}
				autoHideDuration={2000}
				onClose={closeSnackbar}
			>
				<Alert severity="error">Enter a name to create a project.</Alert>
			</Snackbar>
		</Dialog>
	);
}
