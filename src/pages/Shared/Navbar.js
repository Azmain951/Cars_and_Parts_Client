import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const logout = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='allProducts'>All Products</Link></li>
                        <li><Link to='blogs'>Blogs</Link></li>
                        <li><Link to='portfolio'>My Portfolio</Link></li>
                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <li tabindex="0">
                            {
                                user ?
                                    <>
                                        <a>
                                            Parent
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-base-100">
                                            <li>{user.name}</li>
                                            <button onClick={logout} className="btn btn-ghost">Sign Out</button>
                                        </ul>
                                    </> : <Link to="/login">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Car's Hub</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='allProducts'>All Products</Link></li>
                    <li><Link to='blogs'>Blogs</Link></li>
                    <li><Link to='portfolio'>My Portfolio</Link></li>
                    {
                        user && <li><Link to="/dashboard">Dashboard</Link></li>
                    }
                    <li tabindex="0">
                        {
                            user ?
                                <>
                                    <a>
                                        Logout
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul class="bg-base-100 p-1">
                                        <li><p className='text-center'> {user.displayName}</p></li>
                                        <button onClick={logout} className="btn btn-ghost">Sign Out</button>
                                    </ul>
                                </> : <Link to="/login">Login</Link>
                        }
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;