import { useState } from "react"

function Cakecard({flavor, price, size}) {
    const [selected, setSelected] = useState(null)

    function handleClick() {
        if(!selected){
            setSelected({border: "3px solid black"})
        } else {
            setSelected(null)
        }
    }

    return (
        <div onClick={handleClick} style={selected}>
        <h1>{flavor}</h1>
        <p>{price}</p>
        <p>{size}</p>
        </div>
    );
};

export default Cakecard;