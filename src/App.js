import CakeCard from "./Cakecard.js";
import Header from "./Header";
import Search from "./Search";

const cakes = [
  {
      flavor: 'Vanilla',
      size: '6" cake',
      price: 40.00
  },
  {
      flavor: 'Raspberry Cardamon Rose',
      size: '9" cake',
      price: 50.00
  },
  {
      flavor: 'Pink Champagne',
      size: 'cup cake',
      price: 37.5
  },
  {
      flavor: 'Earl Grey',
      size: 'cup cake',
      price: 18.00
  },
{
      flavor: 'Black Forest',
      price: 18.00
  }
]

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
