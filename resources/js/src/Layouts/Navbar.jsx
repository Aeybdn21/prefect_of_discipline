import { Link } from '@inertiajs/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Actions } from '../redux/Actions';

export default function Navbar() {
    const {email} = useSelector((initState) => initState.userInfo.data);
    const dispatch = useDispatch();
    return (
    <ul className="topbar m-0 list-unstyled">
        <div className="topbarChild d-flex justify-content-between align-items-center">
            <li className="topBarLogo text-dark">
                <div className="logo-details d-flex align-items-center">
                <i className="bx bx-menu rounded-circle" id="btn"></i>
                <img className="ms-2 ms-sm-3 my-auto rounded-full" src="/assets/gif/333386347_576911417489522_1333788561299837463_n.gif" width="35" height="35" alt="bcp-logo"/>
                <div className="logo_name text-dark ms-1 ms-sm-3">PREFECT OF DISCPLINE</div>
                    
                </div>
            </li>
            <div className="d-flex align-items-center justify-content-end">
                <li>
                    <i className="bx bxs-message-dots fs-4 me-3 mt-1 m-0"></i>
                    <i className="bx bxs-bell fs-4 mt-1 m-0"></i>
                </li>
                <li>
                    <div className="nav-item dropdown my-auto ms-4">
                        <a id="dropdownmenu" className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <h5 className="m-0 d-none d-sm-block">{email}</h5>
                        <img className="ms-0 ms-sm-3" src="/assets/image/man.png" width="32" height="32" alt="profile-picture"/>
                        </a>
                        <ul className="dropdown-menu border shadow dropdownContainer">
                            <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li> 
                                <Link href={route('logout')} className="dropdown-item" as="button" method="post" onClick={() => dispatch({type: Actions.USER_LOGOUT})}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </div>
              </div>
    </ul>
  )
}
