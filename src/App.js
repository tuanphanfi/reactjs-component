import logo from './logo.svg';
import './App.css';
import Button from './components/commons/Button'
import Input from './components/commons/Input';
import Text from './components/commons/Text'
import HomePage from './pages/Home/HomePage';
// import Def from './components/Def'
function App() {
  return (
    <div className="App">
      {/* <Input></Input> */}
      <HomePage></HomePage>
      {/* <Text /> */}
    </div>
  );
}

export default App;
