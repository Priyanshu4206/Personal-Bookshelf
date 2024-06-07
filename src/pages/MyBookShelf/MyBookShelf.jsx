import React, { useEffect, useState } from 'react'
import coverImg from "../../assests/coverImg.png";
import bgImg from "../../assests/main_bg.png";
import { ErrorMsg } from '../../components';
import "../index.css";
const MyBookShelf = () => {
    const [books, setBooks] = useState([]);
    const userID = "demoUser";
    useEffect(() => {
        const data = localStorage.getItem(userID);
        if (data) {
            console.log(JSON.parse(data));
            setBooks(JSON.parse(data));
        }
    }, []);
    return (
        <section className='main-page-container' style={{ backgroundImage: `url(${bgImg})` }}>
            <h1>Personal Collection...</h1>
            <div className="search-result">
                {books.length <= 0 ? (<><ErrorMsg msg="No Book Found" /></>) :
                    <>
                        {books.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}.jpg` : coverImg} alt="book-cover" />
                                <div className="container">
                                    <h4><b>{item.title}</b></h4>
                                    <p><b>Author: </b>{item.author_name.join(", ")}</p>
                                    <span><b>No. of Editions: {item.edition_count}</b></span>
                                    <span><b>Published in: </b>{item.first_publish_year}</span>
                                </div>
                            </div>
                        ))}
                    </>

                }
            </div>
        </section >
    )
}

export default MyBookShelf