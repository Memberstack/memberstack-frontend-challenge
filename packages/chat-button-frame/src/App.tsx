import logo from './assets/chat.png';
import { useAddEventMessageListener } from './hooks/useAddEventMessageListener';
import styled from 'styled-components';


function App() {
  const {color} = useAddEventMessageListener()

  return (
    <ChatIconContainer color={color}>
      <ChatIconImage src={logo} alt="logo" />
    </ChatIconContainer>
  );
}

export default App;

const ChatIconContainer = styled.div<{color?: string}>`
  border-radius: 50%;
  display: inline-flex;
  padding: 10px;
  border: 1px solid rgba(81,92,93,0.1);
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${props => props.color};
`;

const ChatIconImage = styled.img`
  height: 30px;
`;