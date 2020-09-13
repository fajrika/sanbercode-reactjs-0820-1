import React, { useContext, useEffect } from "react";
import "../../assets/css/about.css";
import { MovieContext } from "../../context/movieEditor";
import { FormEditorContext } from "../../context/formEditor";
import Axios from "axios";

function List() {
    const [movie, , loadMovie] = useContext(MovieContext);
    const [, setInput, , setIndex] = useContext(FormEditorContext);

    useEffect((e) => {
        loadMovie();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleEdit = (e) => {
        let tmpIndex = e.target.name;
        setIndex(tmpIndex);
        setInput(movie[tmpIndex]);
        console.log(movie[tmpIndex]);
    };
    const handleDelete = (e) => {
        Axios.delete(
            `http://backendexample.sanbercloud.com/api/movies/${
                movie[e.target.name].id
            }`
        ).then(() => {
            loadMovie();
        });
    };
    return (
        <div>
            <h1> Tabel Harga Buah </h1>
            <div className="tabel-list">
                <table>
                    <thead>
                        <tr>
                            <th> Title </th>
                            <th> Description </th>
                            <th> Year </th>
                            <th> Duration </th>
                            <th> Genre </th>
                            <th> Rating </th>
                            <th> Image url</th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {movie.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.title}</td>
                                    <td>{v.description}</td>
                                    <td>{v.year}</td>
                                    <td>{v.duration}</td>
                                    <td>{v.genre}</td>
                                    <td>{v.rating}</td>
                                    <td>{v.image_url}</td>
                                    <td>
                                        {/* NOTE tombol ini akan mengupdate nilai index, dan seketika akan menjalankan useEffect() ke 2 */}
                                        <button onClick={handleEdit} name={i}>
                                            {" "}
                                            Edit{" "}
                                        </button>
                                        {/* NOTE delete di lakukan di onlick agar v.id tidak perlu di ambil melalui event */}
                                        <button onClick={handleDelete} name={i}>
                                            {" "}
                                            Hapus{" "}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default List;
