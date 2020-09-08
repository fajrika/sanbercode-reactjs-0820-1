import React from 'react';
import Tugastabel from './Tugastabel';
import './Fruit.css'

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]
class Fruit extends React.Component {
    render() {
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataHargaBuah.map(buah => {
                                    return <Tugastabel buah={buah} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        )
    }
}

export default Fruit;
