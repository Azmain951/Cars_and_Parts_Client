import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import logo from '../../images/logo.png';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const logout = () => {
        signOut(auth);
        toast.success('User is logged out!!!')
    }
    return (
        <nav className="navbar bg-base-100 px-12">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='allProducts'>Products</Link></li>
                        <li><Link to='blogs'>Blogs</Link></li>
                        <li><Link to='portfolio'>Portfolio</Link></li>
                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }

                        {user ? <li>{user?.displayName}</li> : ''}

                        <li>
                            {user ?
                                <>
                                    <button onClick={logout} className="btn btn-ghost">Sign Out</button>
                                </>
                                : <Link to="/login">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl font-bold" to='/'><img className='mr-2' src={logo} alt="" /> Cars and Parts</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='allProducts'>Products</Link></li>
                    <li><Link to='blogs'>Blogs</Link></li>
                    <li><Link to='portfolio'>Portfolio</Link></li>
                    {
                        user && <li><Link to="/dashboard">Dashboard</Link></li>
                    }
                    {user ? <li>{user?.displayName}</li> : ''}
                    <li>
                        {user ?
                            <>
                                <button onClick={logout} className="btn btn-ghost">Sign Out</button>
                            </>
                            : <Link to="/login">Login</Link>
                        }
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;