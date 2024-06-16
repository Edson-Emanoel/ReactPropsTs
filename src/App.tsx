import './App.css'
import ProductComponent from './Components/ProductComponent'

function App() {

  return (
    <>
      <ProductComponent product='Nintendo Switch' price={2500} />
      <ProductComponent product='PS5' price={3000} />
    </>
  )
}

export default App
