import CakeCard from "./Cakecard.js";
import Header from "./Header";
import Search from "./Search";
import cakes from "./Data";
import { useState } from "react"
import CakeDetail from "./CakeDetail"



function App( ) {
  const [visible, setVisible] = useState(false)
  const[selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakeList] = useState(cakes)

  const handleRemove = (event) => {
    const cakeToRemove = event.target.name
    console.log(cakeToRemove)
    const newCakeList = cakeList.filter(cake => cake.flavor !== cakeToRemove)
    console.log(newCakeList)
    return setCakeList(newCakeList);

  }
  
  return (
    <>
      <Header />
      {visible ? <Search /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'Goodbye Form' : 'Form'}</button>

      <br/>
      {selectedCake ? <CakeDetail cake={selectedCake} /> : null}
      
      {cakes.map(cake => <CakeCard handleRemove={handleRemove} key={cake.flavor} cake={cake} setSelectedCake={setSelectedCake}/>)};
  
    </>
    
  )
}

export default App;
