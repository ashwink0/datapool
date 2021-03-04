import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

type propTypes = {
	open: boolean;
	handleClose: Function;
};

export default function CreateProjectDialog(props: propTypes) {
	const handleDialogClose = () => {
		props.handleClose()
	};
	return (
		<Dialog
			open={props.open}
			onClose={handleDialogClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To subscribe to this website, please enter your email address here. We
					will send updates occasionally.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Name"
					type="text"
					fullWidth
				/>
				<TextField
					margin="dense"
					id="description"
					label="Description"
					type="text"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleDialogClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleDialogClose} color="primary">
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
}
