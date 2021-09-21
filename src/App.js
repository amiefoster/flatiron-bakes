import CakeCard from "./Cakecard.js";
import Header from "./Header";
import Search from "./Search";
import cakes from "./Data";

function App() {
  return (
    <>
      <Header />
      <Search />

      {cakes.map(cake => <CakeCard key={cake.flavor} flavor={cake.flavor} price={cake.price} size={cake.size}/>)};
  
    </>
    
  )
}

export default App;
