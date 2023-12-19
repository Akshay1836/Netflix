import logo from './logo.svg';
import './App.css';
import { action,comedy,originals } from './urls';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Rowposter from './components/RowPoster/Rowposter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowposter url={originals} title="Netflix Originals"/>
      <Rowposter url={action} title="Action" smallposter/>
      <Rowposter url={comedy} title="Comedy" smallposter/>
    
    </div>
  );
}

export default App;
