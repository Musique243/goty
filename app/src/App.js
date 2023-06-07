import logo from './logo.svg';
import './App.css';
import HomeList from './HomeList.jsx';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <HomeList />
    </div>
  );
}

export default App;
