import React from "react";
import "../../assets/css/about.css";
class About extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h1>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                    <div id="article-list">
                        <ol>
                            <li>
                                <strong>Nama:</strong> R. Fajrika Hadnis Putra
                            </li>
                            <li>
                                <strong>Email:</strong> rfajrika22@gmail.com
                            </li>
                            <li>
                                <strong>Sistem Operasi yang digunakan:</strong>
                                MacOS, Windows 10
                            </li>
                            <li>
                                <strong>Akun Gitlab:</strong> rfajrika22
                            </li>
                            <li>
                                <strong>Akun Telegram:</strong> fajrika
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
