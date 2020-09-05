import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
    return (
        <div className="card">
            <h1>Form Pembelian Buah</h1>
            <form>
                <div className="form-group">
                    <label>Nama Pelanggan</label>
                    <input />
                </div>
                <div className="form-group">
                    <label>Daftar Item</label>
                    <div>
                        <input type="checkbox" />
                        <label>Semangka</label>
                        <br />
                        <input type="checkbox" />
                        <label>Jeruk</label>
                        <br />
                        <input type="checkbox" />
                        <label>Nanas</label>
                        <br />
                        <input type="checkbox" />
                        <label>Salak</label>
                        <br />
                        <input type="checkbox" />
                        <label>Anggur</label>
                        <br />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit">Kirim</button>
                </div>
            </form>
        </div>
    );
}

export default App;
