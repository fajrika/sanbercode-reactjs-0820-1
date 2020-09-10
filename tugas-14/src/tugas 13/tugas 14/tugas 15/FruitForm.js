import React, { useContext, useEffect } from "react"
import { FruitContext, InputContext, IndexContext } from "./FruitContext"
import axios from "axios"

const FruitForm = () => {
    const [fruit, loadFruit] = useContext(FruitContext)
    const [input, setInput] = useContext(InputContext)
    const [index, setIndex] = useContext(IndexContext)


    useEffect((e) => {
        if (index != -1) {
            let tmp = fruit.find(val => { return val.id == index });
            // NOTE - ?? di gunakan untuk validasi, jadi ketika nilainya null, maka akan di gantikan dengan nilai yang ada di sebelah kanannya
            setInput({
                name: tmp.name ?? "",
                price: tmp.price ?? 0,
                weight: tmp.weight ?? 0
            });
        }
    }, [index])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        console.log(e.target.name)
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        console.log(config)
        if (index == -1) axios.post("http://backendexample.sanbercloud.com/api/fruits", input).then(() => loadFruit(), config)
        else {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${index}`, input).then(() => loadFruit(),config);
            setIndex(-1);
        }
        setInput({ name: '', price: '', weight: '' })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-add">
                    <h1>  Add Fruit Form </h1>
                    <div className="input-group">
                        <label><b>Name : </b></label>
                        <input type="text" value={input.name} onChange={handleChange} name="name" />
                    </div>
                    <div className="input-group">
                        <label><b> Price : </b></label>
                        <input type="text" value={input.price} onChange={handleChange} name="price" />
                    </div>
                    <div className="input-group">
                        <label><b> Weight : </b></label>
                        <input type="text" value={input.weight} onChange={handleChange} name="weight" />
                    </div>
                    <div className="submit-add">
                        <button type="submit"> Submit </button>
                    </div>
                </div>
            </form>
        </>
    )

}

export default FruitForm