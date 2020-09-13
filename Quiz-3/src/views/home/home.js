import React, { useContext, useEffect } from "react";
// import { HomeProvider } from "./HomeContext";
// import HomeList from "./HomeList";
// import HomeForm from "./HomeForm";
import { MovieContext } from "../../context/movieEditor";

function Home() {
    const [movie, setMovie, loadMovie] = useContext(MovieContext);
    useEffect((e) => {
        loadMovie("sort");
        // return function cleanup() {
        //     ChatAPI.unsubscribeFromFriendStatus(
        //         props.friend.id,
        //         handleStatusChange
        //     );
        // };
    }, []);
    return (
        <div>
            <section>
                <h1>Daftar Film Terbaik</h1>
                {movie.map((el) => {
                    return (
                        <div id="article-list" key={el.id}>
                            <div>
                                <a href="">
                                    <h3>{el.title}</h3>
                                </a>
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
