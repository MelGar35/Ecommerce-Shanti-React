import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';





function App() {
  return (
    <div className="App">
       <Navbar/>
       <ItemListContainer greeting={'Bienvenidos a Shanti'}/>
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
