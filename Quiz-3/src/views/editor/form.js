import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/movieEditor";
import { FormEditorContext } from "../../context/formEditor";
import Axios from "axios";

function Home() {
    const [movie, setMovie, loadMovie] = useContext(MovieContext);
    const [input, setInput, index, setIndex] = useContext(FormEditorContext);
    useEffect((e) => {
        loadMovie();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        console.log(e.target.name);
        e.preventDefault();
        if (index == -1)
            Axios.post(
                "http://backendexample.sanbercloud.com/api/movies",
                input
            ).then(() => loadMovie(0));
        else {
            Axios.put(
                `http://backendexample.sanbercloud.com/api/movies/${movie[index].id}`,
                input
            ).then(() => loadMovie(0));
            setIndex(-1);
        }
        setInput({
            title: "",
            description: "",
            year: "",
            duration: "",
            genre: "",
            rating: "",
        });
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="form-add">
                    <h1> Add Fruit Form </h1>
                    <div className="input-group">
                        <label>
                            <b>Title : </b>
                        </label>
                        <input
                            type="text"
                            value={input.title}
                            onChange={handleChange}
                            name="title"
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            <b>Description : </b>
                        </label>
                        <textarea onChange={handleChange} name="description">
                            {input.description}
                        </textarea>
                    </div>
                    <div className="input-group">
                        <label>
                            <b>Year : </b>
                        </label>
                        <input
                            type="number"
                            value={input.year}
                            onChange={handleChange}
                            name="year"
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            <b>Duration : </b>
                        </label>
                        <input
                            type="number"
                            value={input.duration}
                            onChange={handleChange}
                            name="duration"
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            <b> Genre : </b>
                        </label>
                        <input
                            type="text"
                            value={input.genre}
                            onChange={handleChange}
                            name="genre"
                        />
                    </div>
                    <div className="input-group">
                        <label>
                            <b> Rating : </b>
                        </label>
                        <input
                            type="number"
                            value={input.rating}
                            onChange={handleChange}
                            name="rating"
                        />
                    </div>
                    <div className="submit-add">
                        <button type="submit"> Submit </button>
                    </div>
                </div>
            </form>
        </section>
    );
}
export default Home;
