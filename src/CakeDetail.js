function CakeDetail({cake, handleDelete}) {
    
    return (
        <>
            <img src={cake.image} style={{width: "200px"}} alt="cake"/>
            <p>Flavor: {cake.flavor}</p>
            <p>Size: {cake.size}</p>
            <p>Price: ${cake.price}</p>
            <p>{cake.description}</p>
            <button onClick={() => handleDelete(cake.id)}>Delete</button>
        </>
    )
}

export default CakeDetail;