

function Cakecard({cake, setSelectedCake, handleRemove}) {
  
    return (
        <>
        <div onClick={() => setSelectedCake(cake)}>
        <h1>{cake.flavor}</h1>
        <p>{cake.price}</p>
        <p>{cake.size}</p>
        </div>
        <button name={cake.flavor} onClick={handleRemove}>Remove Cake</button>
        </>
    );
};

export default Cakecard;