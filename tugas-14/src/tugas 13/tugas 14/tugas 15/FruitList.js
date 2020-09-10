import React, { useContext, useEffect } from "react"
import { FruitContext, IndexContext } from "./FruitContext"
import axios from "axios";

const FruitList = () => {

    const [fruit, loadFruit] = useContext(FruitContext);
    const [index, setIndex] = useContext(IndexContext);
    useEffect(() => {
        loadFruit();
    }, [])
    const handleEdit = (e) => {
        setIndex(e.target.name);
    }
    const handleDelete = (e) => {
        console.log(e.target.name)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${e.target.name}`).then(() => {
            loadFruit()
        })
    }
    return (
        <div>
            <h1> Tabel Harga Buah </h1>
            <div className="tabel-atas">
                <table>
                    <thead>
                        <tr>
                            <th> Nama </th>
                            <th> Harga </th>
                            <th> Berat</th>
                            <th> Aksi </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fruit.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{v.name}</td>
                                        <td>{v.price}</td>
                                        <td>{v.weight / 1000} kg</td>
                                        <td>
                                            {/* NOTE tombol ini akan mengupdate nilai index, dan seketika akan menjalankan useEffect() ke 2 */}
                                            <button onClick={handleEdit} name={v.id}> Edit </button>
                                            {/* NOTE delete di lakukan di onlick agar v.id tidak perlu di ambil melalui event */}
                                            <button onClick={handleDelete} name={v.id}> Hapus </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default FruitList