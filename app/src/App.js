
// import './App.css';
import HomeList from './HomeList.jsx';
import Navbar from './Navbar';
import { Container, NavBar, Main, ContentBox, Content1, Content2, Content3 } from './Styled';
function App() {
  return (

    <Container>
    <NavBar>
      <Navbar/>
    </NavBar>
    <Main>
      <HomeList/>
    </Main>
    <ContentBox>
    <Content1>Content1</Content1>
    <Content2>Content2</Content2>
    <Content3>Content3</Content3>
    </ContentBox>
    </Container>
  );
}

export default App;
