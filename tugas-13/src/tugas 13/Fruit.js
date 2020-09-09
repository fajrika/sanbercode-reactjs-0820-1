
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fruit.css'


const Fruit = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState({});
	// NOTE - index -1 di tujukan untuk menandai submit bertipe insert atau store, selain -1 akan submit akan bertipe update
	const [index, setIndex] = useState(-1);
	const link = "http://backendexample.sanbercloud.com/api/fruits";

	// NOTE - function untuk loadData dari api
	const loadData = () => axios.get(link).then(res => setData(res.data))

	// NOTE - parameter kedua di isi [index], maka jika index mengalami perubahan nilai, useEffect ini akan di proses
	useEffect((e) => {
		if (index !== -1) {
			let tmp = data.find(val => { return val.id === index });
			// NOTE - ?? di gunakan untuk validasi, jadi ketika nilainya null, maka akan di gantikan dengan nilai yang ada di sebelah kanannya
			setInput({
				name: tmp.name ?? "",
				price: tmp.price ?? 0,
				weight: tmp.weight ?? 0
			});
		}
	}, [index])// eslint-disable-line react-hooks/exhaustive-deps

	// NOTE - fungsi ini di gunakan untuk menangani perubahan input
	const handleChange = e => {
		const { name, value } = e.target;
		// NOTE - menggunakan prevstate untuk mengambil nilai sebelumnya, 
		// NOTE - dan ketika ada inputan baru, akan langsung di timpa dengan [name]: value
		setInput(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	// NOTE - fungsi ini di tujukan untuk menghandle 2 jenis submit, yaitu insert/store data dan update data
	const handleSubmit = (e) => {
		// NOTE - untuk merubah default event browser, yang awalnya kebanyakan browser akan load halaman,
		// NOTE - dengan ini load halaman tidak akan terjadi karena event nya di buat kosong
		// NOTE - sebenarnya ada cara tanpa preventDefault, yaitu merubah type button menjadi button, dan handeSubmit di akses ketika onClick di buttonnya
		e.preventDefault()

		// NOTE - setelah axios selesai insert/store atau update, maka akan loadData ulang untuk menampilkan hasilnya
		// NOTE - submit tipe insert/store
		if (index === -1) axios.post(link, input).then(() => loadData())
		else {
			// NOTE - submit tipe update
			axios.put(`${link}/${index}`, input).then(() => loadData());
			setIndex(-1);
		}
		// NOTE - Setelah insert/store atau update, input-an akan di kosongkan
		setInput({ name: '', price: '', weight: '' })

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
							data.map((val) => {
								return (
									<tr key={val.id}>
										<td>{val.name}</td>
										<td>{val.price}</td>
										<td>{val.weight / 1000} kg</td>
										<td>
											{/* NOTE tombol ini akan mengupdate nilai index, dan seketika akan menjalankan useEffect() ke 2 */}
											<button onClick={() => { setIndex(val.id) }}> Edit </button>
											{/* NOTE delete di lakukan di onlick agar val.id tidak perlu di ambil melalui event */}
											<button onClick={() => axios.delete(`${link}/${val.id}`).then(() => { loadData() })}> Hapus </button>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
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
		</div >
	)
}

export default Fruit;
