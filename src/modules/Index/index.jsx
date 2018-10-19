import { Button, Dialog, Grid } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AppBar, Toolbar } from '@material-ui/core/es/index';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PhotoCamera as CameraIcon } from '@material-ui/icons';
import React from 'react';
import withRoot from '../../withRoot';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  body: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        {/* Appbar */}
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Toolbar>
        </AppBar>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Codedeer
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Place where you can cooperate with top developers to review your code
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Get started
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Become a reviewer
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        {/* Body */}
        <div className={classes.body}>
          <Typography variant="h1" gutterBottom>
            Codedeer
          </Typography>
          <Typography variant="body1" gutterBottom>
            Place where you can cooperate with top developers to review your code
          </Typography>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
            Get started
          </Button>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Index));