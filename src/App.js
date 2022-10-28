import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import {CartContextProvider} from "./context/CartContext"
import Checkout from './components/Checkout/Checkout';


function App() {


  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a Shanti'}/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path='/cart/' element={<Cart/>}/>
        <Route path='/checkout/' element={<Checkout/>}/>
        <Route path="#" element={<h1>404 Not Found</h1>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
