
// import './App.css';
import HomeList from './HomeList.jsx';
import Navbar from './Navbar';
import Search from './Search';
import GameDetail from './GameDetail';
import { Container } from './Styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    // <Container>
    <Router>
     <Navbar />
     {/* <HomeList /> */}
    <Routes>
      <Route exact path='/search' component={Search} />
      <Route exact path='/game/:name' component={GameDetail} />
    </Routes>
  </Router>
   

  );
}

export default App;
