import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { INITIAL_COLOR } from "./constants";
import { Container, 
  Main, 
  IFrameContainer, 
  ContentContainer, 
  Header, 
  Footer, 
  Nav, 
  Link,
  Text
} from "./components";

const App = () => {

  const {item: color, setItem: setColor} = useLocalStorage(INITIAL_COLOR, 'color')

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
  };

  return (
    <Container>
      <Main>
        <IFrameContainer>
          <ChatBotIFrame value={color}/>
        </IFrameContainer>
        <ContentContainer>
          <Header>ColorPicker Demo Challenge</Header>
          <Text>Select a color from the ColorPicker and watch the chatbox icon change</Text>
          <ColorPicker
            value={color}
            onChange={handleColorChange}
          />
        </ContentContainer>
      </Main>
      <Footer>
        <Nav>
          <Link href='https://github.com/clinton-slice/memberstack-frontend-challenge'>
            Check the code out on GitHub
          </Link>
        </Nav>
      </Footer>
    </Container>
  );
}

export default App;

