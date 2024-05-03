import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, onSearch }) => {
    const handleSearch = (e) => {
      onSearch(e.target.value);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/todo">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-white">
                                <Link className="nav-link active text-white" aria-current="page" to="/todo">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/newtask">Add Task</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
