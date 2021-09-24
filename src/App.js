import CakeCard from "./Cakecard.js";
import Header from "./Header";
import Search from "./Search";
import cakes from "./Data";
import { useState } from "react"
import CakeDetail from "./CakeDetail"
import CakeForm from "./CakeForm"



function App( ) {
  const [visible, setVisible] = useState(false)
  const[selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakeList] = useState(cakes)

  const handleRemove = (event) => {
    const cakeToRemove = event.target.name
    //console.log(cakeToRemove)
    const newCakeList = cakeList.filter(cake => cake.flavor !== cakeToRemove)
    //console.log(newCakeList)
    return setCakeList(newCakeList);

  }

  function handleAddCake(cake) {
    const newCake = cake
    setCakeList([...cakeList, newCake])
    
  }

  return (
    <>
      <Header />
      <CakeForm handleAddCake={handleAddCake}/>
      {visible ? <Search /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'Goodbye Form' : 'Form'}</button>

      <br/>
      {selectedCake ? <CakeDetail cake={selectedCake} /> : null}
      
      {cakeList.map(cake => <CakeCard handleRemove={handleRemove}  key={cake.flavor} cake={cake} setSelectedCake={setSelectedCake}/>)};
  
    </>
    
  )
}

export default App;
