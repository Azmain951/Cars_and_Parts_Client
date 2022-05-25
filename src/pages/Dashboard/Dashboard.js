import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="mt-6 drawer-content">
                <h2 className='text-center text-3xl font-bold text-primary'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side shadow-xl">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {admin ?
                        '' :
                        <>
                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            <li><Link to='/dashboard/add-review'>Add a Reviews</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {admin &&
                        <>
                            <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                            <li><Link to='/dashboard/add-products'>Add New Product</Link></li>
                            <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                        </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;