import { ItemListContainer } from "./components/itemListContainer/ItemListContainer"
import { Nav } from "./components/navbar/nav"
import {useState} from "react"

function App() {

  const [contador, setContador] = useState(0)
  
  const sumar = () => {
          setContador (contador + 1)
  }
  return (
  <>
    <Nav contador={contador}/>

    <main>
      <h2 className="titulo">Tienda de Hardware</h2>
      <ItemListContainer
      text = {"producto"}
      funcionSumar = {sumar}
      />
     </main>
  </>
  )
}

export default App
