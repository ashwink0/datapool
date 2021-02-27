import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import fire from '../../utils/firebase';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const uiConfig = {
	signInFlow: `popup`,
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID,
	],
};

export default function Landing() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<AppBar position="static">
				<Toolbar
					style={{
						display: `flex`,
						flexDirection: `row`,
						justifyContent: `space-between`,
					}}
				>
					<Typography variant="h6" className={classes.title}>
						DataPool
					</Typography>
					<Button onClick={handleOpen} color="inherit">
						Login / Sign Up
					</Button>
				</Toolbar>
			</AppBar>
			<h1>Landing</h1>
			<Dialog
				fullWidth
				maxWidth="xs"
				aria-labelledby="simple-dialog-title"
				open={open}
				onClose={handleClose}
			>
				<DialogTitle id="simple-dialog-title">Login / Sign Up</DialogTitle>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
			</Dialog>
		</div>
	);
}
