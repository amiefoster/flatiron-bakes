function Cakecard({flavor, price, size}) {
    return (
        <div className="card">
        <h1>{flavor}</h1>
        <p>{price}</p>
        <p>{size}</p>
        </div>
    );
};

export default Cakecard;