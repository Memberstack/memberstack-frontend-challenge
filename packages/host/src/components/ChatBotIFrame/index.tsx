import { makeStyles } from "@material-ui/core";

export type ChatBotIFrameProps = {
  color: string;
}

const useStyles = makeStyles((theme) => ({
  iFrame: {
    position: 'absolute',
    bottom: theme.spacing(2.5),
    right: theme.spacing(2.5)
  }
}));

export const ChatBotIFrame = ({ color }: ChatBotIFrameProps) => {
  const classes = useStyles();

  return (<iframe
    frameBorder="0"
    title="Chat bot"
    className={classes.iFrame}
    src={`http://localhost:3002/${btoa(color)}`}
  />)
};

export default ChatBotIFrame;
