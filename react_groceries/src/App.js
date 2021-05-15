
import './App.css';
import Title from './components/Title';
import List from './components/List';
import ListJS from './components/ListJS';
import ListTest from './components/ListTest';

function App() {
  return (
    <div>

      <Title/>

      <div className="btnCreateNewList" onClick>

      
      <List/>
      </div>
      <div>
        <ListTest/>
      </div>
  
      
      
    </div>
  );
}



export default App;
