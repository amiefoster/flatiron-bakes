import CakeCard from "./Cakecard.js";
import Header from "./Header";
import Search from "./Search";
//import cakes from "./Data";
import { useState, useEffect} from "react"
import CakeDetail from "./CakeDetail"
import CakeForm from "./CakeForm"
//import FlavorFilter from "./FlavorFilter"




function App( ) {
  const [visible, setVisible] = useState(false)
  const[selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakeList] = useState([])
  //const [flavorList, setFlavorList] = useState([])
  console.log(cakeList)

  useEffect(() => {
    fetch('http://localhost:4000/cakes')
    .then(response => response.json())
    .then(data => setCakeList(data))
 
  }, [])


  const handleRemove = (event) => {
    const cakeToRemove = event.target.name
    //console.log(cakeToRemove)
    const newCakeList = cakeList.filter(cake => cake.flavor !== cakeToRemove)
    //console.log(newCakeList)
    return setCakeList(newCakeList);

  }

  function handleAddCake(cake) {
    fetch('http://localhost:4000/cakes', {
        method: "POST", 
        headers: {
            'Content-Type': "application/jsonq",
        },
        body: JSON.stringify(cake)
    })
    .then(response => response.json())
    .then(newCake => {
        setCakeList([
            ...cakeList, newCake
        ])
    })
}
    


  function handleDelete(id) {
    fetch(`http://localhost:4000/cakes/${id}`, {
      method:'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      const filteredCakes = cakeList.filter(cake => cake.id !== id)
      setCakeList(filteredCakes)
      setSelectedCake(null)
    })
  }

  return (
    <>
      <Header />
      
      <CakeForm handleAddCake={handleAddCake}/>
      {visible ? <Search /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'Goodbye Form' : 'Form'}</button>

      <br/>
      {selectedCake ? <CakeDetail handleDelete={handleDelete} cake={selectedCake} /> : null}
      
      {cakeList.map(cake => <CakeCard handleRemove={handleRemove}  key={cake.flavor} cake={cake} setSelectedCake={setSelectedCake}/>)};
  
    </>
    
  )
}

export default App;
