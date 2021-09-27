import { useState } from "react"

function CakeForm( {handleAddCake} ) {

    const [formData, setFormData] = useState({
        flavor: "",
        size: "",
        image: "",
        price: 0,

    })

    function handleChange(e){
        setFormData({
            ...formData, 
          
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        handleAddCake(formData)
    }



    return (
        <div>
           
        <form onSubmit={handleSubmit}>
        <label>
            Flavor
            <input
                type="text"
                name="flavor"
                onChange={handleChange}
                value={formData.flavor}
                />
             Image
            <input
                type="text"
                name="image"
                onChange={handleChange}
                value={formData.image}
                />
             Size
            <input
                type="text"
                name="size"
                onChange={handleChange}
                value={formData.size}
                />
             Price
            <input
                type="text"
                name="price"
                onChange={handleChange}
                value={formData.price}
                />
        </label>
        <input type="submit"></input>
        </form>
        </div>
    )
}

export default CakeForm;