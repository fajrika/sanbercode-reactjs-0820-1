import React from 'react';
import './Fruit.css'

class Fruit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataHargaBuah: [
				{ nama: "Semangka", harga: 10000, berat: 1000 },
				{ nama: "Anggur", harga: 40000, berat: 500 },
				{ nama: "Strawberry", harga: 30000, berat: 400 },
				{ nama: "Jeruk", harga: 30000, berat: 1000 },
				{ nama: "Mangga", harga: 30000, berat: 500 }
			],
			inputName: "",
			inputHarga: "",
			inputBerat: "",
			indexForm: -1
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleHapus = this.handleHapus.bind(this);

	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}
	handleSubmit = (event) => {

		event.preventDefault()
		if (this.state.indexForm === -1) {
			this.setState({
				dataHargaBuah: [...this.state.dataHargaBuah, {
					nama: this.state.inputName,
					harga: this.state.inputHarga,
					berat: this.state.inputBerat
				}],
				inputName: "",
				inputHarga: "",
				inputBerat: ""
			})
		} else {
			let temp = this.state.dataHargaBuah;
			temp[this.state.indexForm] = {
				nama: this.state.inputName,
				harga: this.state.inputHarga,
				berat: this.state.inputBerat
			};
			this.setState({
				dataHargaBuah: temp,
				inputName: "",
				inputHarga: "",
				inputBerat: "",
				indexForm: -1
			})
		}
	}
	handleEdit = (event) => {
		let buah = this.state.dataHargaBuah[event.target.value]
		this.setState({
			inputName: buah.nama,
			inputHarga: buah.harga,
			inputBerat: buah.berat,
			indexForm: event.target.value
		})
		console.log(this.state.dataHargaBuah)
	}
	handleHapus = (event) => {
		let temp = this.state.dataHargaBuah;
		temp.splice(event.target.value, 1);
		this.setState({
			dataHargaBuah: temp
		})
	}
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
								<th> Aksi </th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.dataHargaBuah.map((buah, index) => {
									return (
										<tr>
											<td>{buah.nama}</td>
											<td>{buah.harga}</td>
											<td>{buah.berat / 1000} kg</td>
											<td>
												<button onClick={this.handleEdit} value={index}> Edit </button>
												<button onClick={this.handleHapus} value={index}> Hapus </button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
				{/* <div className='add-button'>
					<button> Tambah Buah </button>

				</div> */}
				<form onSubmit={this.handleSubmit}>
					<div className="form-add">
						<h1>  Add Fruit Form </h1>
						<label><b>Name : </b></label>
						<input type="text" value={this.state.inputName} onChange={this.handleChange} name="inputName" /><br />
						<label><b> Price : </b></label>
						<input type="text" value={this.state.inputHarga} onChange={this.handleChange} name="inputHarga" /><br />
						<label><b> Weight : </b></label>
						<input type="text" value={this.state.inputBerat} onChange={this.handleChange} name="inputBerat" />
						<div className="submit-add">
							<button type="submit"> Submit </button>
						</div>
					</div>
				</form>


			</div >


		)
	}
}

export default Fruit;
