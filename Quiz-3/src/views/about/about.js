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
                                <strong>Nama:</strong> Kartika Findra
                            </li>
                            <li>
                                <strong>Email:</strong> kartindra@gmail.com
                            </li>
                            <li>
                                <strong>Sistem Operasi yang digunakan:</strong>{" "}
                                Windows
                            </li>
                            <li>
                                <strong>Akun Gitlab:</strong> kartikafindra
                            </li>
                            <li>
                                <strong>Akun Telegram:</strong> kartikaresiandi
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
