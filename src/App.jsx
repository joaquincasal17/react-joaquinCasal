import { BrowserRouter, Routes, Route } from "react-router";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer"
import { Nav } from "./components/navbar/Nav"
import Cart from "./components/cartWidget/Cart"
import DetailProduct from "./components/detailProduct/DetailProduct"



function App() {
  return (
  <>
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:name" element={<ItemListContainer />} />
      <Route path="/carrito" element={<Cart />}/>
      <Route path="/detail/:id" element={<DetailProduct />}/>
    </Routes>
  </BrowserRouter> 
  </>
  )
}

export default App
