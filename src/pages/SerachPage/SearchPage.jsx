import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../store/bookSlice';
import { Loading } from '../../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from "react-icons/fa";
import coverImg from "../../assests/coverImg.png";
import bgImg from "../../assests/main_bg.png";
import "../index.css";
const SearchPage = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.data.docs);
    const status = useSelector((state) => state.books.status);
    const error = useSelector((state) => state.books.error);
    const [query, setQuery] = useState('');
    const userID = "demoUser";
    useEffect(() => {
        if (query) {
            dispatch(fetchBooks(query));
        }
    }, [query, dispatch]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const addToPersonalLib = (book) => {
        const userBooks = JSON.parse(localStorage.getItem(userID)) || [];
        userBooks.push(book);
        localStorage.setItem(userID, JSON.stringify(userBooks));
        toast.success('Book added to your personal library');
    };

    return (
        <section className='main-page-container' style={{ backgroundImage: `url(${bgImg})` }}>
            <h1> Find The Book of your Choice....</h1>
            <ToastContainer />
            <div className='input-field'>
                <div className='search-box'>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search..."
                        required
                    />
                    <div className='search-icon'>
                        <FaSearch />
                    </div>
                </div>
            </div>
            {status === 'loading' && <Loading />}
            {status === 'succeeded' && (
                <div className="search-result">
                    {
                        books.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}.jpg` : coverImg} alt="book-cover" />
                                <div className="container">
                                    <h4><b>{item.title}</b></h4>
                                    <p><b>Author: </b>{item.author_name.join(", ")}</p>
                                    <span><b>No. of Editions: {item.edition_count}</b></span>
                                    <span><b>Published in: </b>{item.first_publish_year}</span>
                                </div>
                                <button onClick={() => addToPersonalLib(item)}>Add to Personal Lib</button>
                            </div>
                        ))
                    }
                </div>)
            }
            {status === 'failed' && toast.error(error.message)}
        </section >
    )
}

export default SearchPage