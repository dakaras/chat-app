import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from './Store'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3,2)
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  }
}));

export default function DashBoard() {
  //Context Store
  const {allChats, sendChatAction} = React.useContext(CTX)
  const topics = Object.keys(allChats)

  //local state
  const [textValue, handleChange] = React.useState('')
  const [activeTopic, changeActiveTopic] = React.useState(topics[0])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper/>
      <Typography variant='h4' component='h4'>
        Chat App
        </Typography>
        <Typography variant='h3' component='h5'>
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {
                topics.map(topic => (
                  <ListItem onClick={event=> changeActiveTopic(event.target.innerText)} key={topic} button>
                    <ListItemText primary={topic} />
                   </ListItem>
                ))
              }
            </List>
          </div>
          <div className={classes.chatWindow}>
              {
                allChats[activeTopic].map((chat, index) => (
                  <div className={classes.flex} key={index}>
                          <Chip label={chat.from} className={classes.chip}/>
                          <Typography variant='body1' gutterBottom>
                            {chat.msg}
                          </Typography>
                  </div>
                ))
              }
          </div>
        </div>
        <div className={classes.flex}>
          <TextField 
          id="standard-basic" 
          label="Send a Message" 
          value={textValue}
          onChange={event => handleChange(event.target.value)}
          className={classes.chatBox} />
          <Button 
          variant="contained" 
          color="primary"
          className={classes.button}
          onClick={() => {
            sendChatAction(textValue)
            handleChange("")
          }}>
            Send
          </Button>
        </div>
      <Paper />
    </div>
  );
}