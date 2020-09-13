import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieEditor";

function Home() {
    const [movie, , loadMovie] = useContext(MovieContext);
    useEffect((e) => {
        loadMovie("sort");// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <section>
                <h1>Daftar Film Terbaik</h1>
                {movie.map((el) => {
                    return (
                        <div id="article-list" key={el.id}>
                            <div>
                                <h3>{el.title}</h3>
                                <img src={el.image_url} id="logo" width="200px" alt="gambar"/>
                                <p>
                                    <b>Rating : {el.rating}</b>
                                    <br />
                                    <b>Durasi : {el.duration}</b>
                                    <br />
                                    <b>Genre : {el.genre}</b>
                                    <br />
                                    <br />
                                    <b> deskripsi: {el.description}</b>
                                    
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
export default Home;
