import CakeCard from "./Cakecard.js";
import Header from "./Header";
import Search from "./Search";
//import cakes from "./Data";
import { useState, useEffect} from "react"
import CakeDetail from "./CakeDetail"
import CakeForm from "./CakeForm"
import FlavorFilter from "./FlavorFilter"




function App( ) {
  const [visible, setVisible] = useState(false)
  const[selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakeList] = useState([])
  const [flavorList, setFlavorList] = useState([])
  console.log(cakeList)

  useEffect(() => {
    fetch('http://localhost:4002/cakes')
    .then(response => response.json())
    .then(data => setCakeList(data))
    fetch('http://localhost:4002/flavor')
    .then(response => response.json())
    .then(data => setFlavorList(data))
  }, [])

  console.log(flavorList)

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
      {flavorList.map(flavor => <FlavorFilter flavor={flavor} key={flavor}/>)}
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
