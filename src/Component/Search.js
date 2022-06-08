
import './Search.css';
import axios from 'axios';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
export default function Search() {
    const [text, setText] = useState([]);
    const [movie, setMovie] = useState([]);
    function getMovieName(e) {
        e.preventDefault();
        axios.get(`https://www.omdbapi.com/?s=${text}&apikey=bb7da3c`).then((response) => {
            console.log(response.data.Search)
            setMovie(response.data.Search)
            setText('')
        }).catch(error => {
            setMovie(error, "please write valid movie name")
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={getMovieName}>
                            <input className="form-control me-2" value={text} onChange={(e) => setText(e.target.value)} type="search" placeholder="Search movies...." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className='container  '>
                <div className='row  '>

                    {
                        movie.map((value, id) => {
                            return (
                                <>
                                    <div className='col-3  cardhover m-4 p-4' key={id}>
                                        <Card style={{ width: '18rem', col: '3', row: '2' }} key={id} >
                                            <Card.Img variant="top" src={value.Poster} />
                                            <Card.Body  >
                                                <Card.Title >{value.Title}</Card.Title>
                                                <Card.Text  >
                                                    Year: {value.Year}
                                                </Card.Text>

                                            </Card.Body>

                                        </Card>

                                    </div>
                                   

                                </>



                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}
