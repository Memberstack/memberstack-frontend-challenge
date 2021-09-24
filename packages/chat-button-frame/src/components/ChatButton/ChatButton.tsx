import { makeStyles } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import logo from "../../chat.png";

type ChatButtonParams = {
  color: string;
}

const useStyles = makeStyles((theme) => ({
  chatIcon: { 
    borderRadius: '50%',
    display: 'inline-flex',
    padding: theme.spacing(1.25),
    border: '1px solid rgba(81,92,93,0.1)',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  chatIconImage: {
    height: theme.spacing(3.75)
  }
}))
export const ChatButton: React.FC = () => {
  const { color: codedColor } = useParams<ChatButtonParams>();
  const classes = useStyles();
  
  const color = useMemo(() => {
    if (codedColor) {
      try {
        return atob(codedColor);
      } catch(e) {
        console.error("Invalid color was recieved in query parameters");
      }
    }

    return '#e66465';
  }, [codedColor])

  return (
    <div className={classes.chatIcon} style={{backgroundColor: color }}>
      <img src={logo} className={classes.chatIconImage} alt="logo" />
    </div>
  )
}

export default ChatButton;