import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Car's Hub</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='allProducts'>All Products</Link></li>
                        <li><Link to='dashboard'>Dashboard</Link></li>
                        <li><Link to='blogs'>Blogs</Link></li>
                        <li><Link to='portfolio'>My Portfolio</Link></li>
                        <li><Link to='login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;