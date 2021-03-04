import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AllProjects from '@/components/Home/Projects/allProjects';
import fire from '../../../utils/firebase';
import styles from '../../styles/ProjectGrid.module.css';
import CreateProjectDialog from './Projects/createProjectDialog';

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

export default function HomePage() {
	const classes = useStyles();
	const photoURL = fire.auth()?.currentUser?.photoURL;
	const name = fire.auth().currentUser!.displayName;
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const signOut = () => {
		fire.auth().signOut();
	};
	const openCreateDialog = () => {
		setDialogOpen(true);
	};
	const closeCreateDialog = () => {
		setDialogOpen(false);
	};

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: `top`, horizontal: `right` }}
			keepMounted
			transformOrigin={{ vertical: `top`, horizontal: `right` }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={signOut}>Sign Out</MenuItem>
		</Menu>
	);

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
						Dashboard
					</Typography>
					<Avatar
						onClick={handleProfileMenuOpen}
						alt="Profile"
						src={photoURL as string}
					/>
				</Toolbar>
			</AppBar>
			{renderMenu}
			<div className={styles.container}>
				<main className={styles.main}>
					<p>Welcome {name}. You are now signed-in!</p>
					<button
						type="button"
						onClick={() => {
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
											projectName: `project`,
											description: `this is a desc`,
										}),
									}).then((r) => {
										console.log(r.status);
									});
								})
								.catch((error) => {
									// Handle error
								});
						}}
					>
						Create
					</button>
					<button
						type="button"
						onClick={openCreateDialog}
						className={styles.card}
						style={{
							backgroundColor: `white`
						}}
					>
						<h3>Create Project +</h3>
					</button>
					<AllProjects />
					<CreateProjectDialog
						open={dialogOpen}
						handleClose={closeCreateDialog}
					/>
				</main>
			</div>
		</div>
	);
}
