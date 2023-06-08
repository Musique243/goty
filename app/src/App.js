
import './App.css';
import HomeList from './HomeList.jsx';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <h1 style={{background: "grey"}}>GOTY APP</h1>
      <image src="https://cdn.vectorstock.com/i/1000x1000/74/14/pixel-art-goat-vector-15317414.webp"/>
      <Navbar />
        <HomeList />
    </div>
  );
}

export default App;
