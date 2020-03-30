import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3,2)
  },
  flex: {
    display: 'flex'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  }
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper/>
      <Typography variant='h4' component='h4'>
        Chat App
        </Typography>
        <Typography variant='h3' component='h5'>
          Topic
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {
                ['topic'].map(topic => (
                  <ListItem key={topic} button>
                    <ListItemText primary={topic} />
                   </ListItem>
                ))
              }
            </List>
          </div>
          <div className={classes.chatWindow}>
              {
                [{from: 'user', msg: 'hello'}].map((chat, index) => (
                  <div className={classes.flex} key={index}>
                          <Chip label={chat.from} className={classes.chip}/>
                          <Typography variant='p'>
                            {chat.msg}
                          </Typography>
                  </div>
                ))
              }
          </div>
        </div>
        <div className={classes.flex}>
          
        </div>
      <Paper />
    </div>
  );
}