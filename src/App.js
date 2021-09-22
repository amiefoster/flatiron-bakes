import CakeCard from "./Cakecard.js";
import Header from "./Header";
import Search from "./Search";
import cakes from "./Data";
import { useState } from "react"



function App() {
  const [visible, setVisible] = useState(false)
  
  return (
    <>
      <Header />
      {visible ? <Search /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'Goodbye Form' : 'Form'}</button>

      {cakes.map(cake => <CakeCard key={cake.flavor} flavor={cake.flavor} price={cake.price} size={cake.size}/>)};
  
    </>
    
  )
}

export default App;
