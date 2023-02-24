import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {

    useEffect(() => {
        hanldeOnchange();
    },[]);


    const hanldeOnchange = () => {
        const selectedMenu = $('.isActive');
        for(let x=0;x < selectedMenu.length; x ++) { 
            $(selectedMenu[x]).on('click', function(){
                $($(selectedMenu).children()).removeClass('text-black'); 
                $(selectedMenu).removeClass('bg-white');
                $(this).addClass('bg-white');
                const parentClass = $(this).children();
                $(parentClass[0]).addClass('text-black');
                $(parentClass[1]).addClass('text-black');
            });
        }
    }
    
  return (
    <div className="sidebar close rounded shadow">
        <ul className="nav-list p-0 m-0">
            <li className="d-block d-lg-none">
                <i className="bx bx-search"></i>
                <input type="text" placeholder="Search..." />
                <span className="tooltip">Search</span>
            </li>
            <li>
                <Link to="/page/home" className="isActive">
                    <i className='bx bx-home'></i>
                    <span className="links_name uppercase">Home</span>
                </Link>
                <span className="tooltip uppercase">Home</span>
            </li>
            <li>
                <Link to="/page/student_record" className="isActive">
                    <i className='bx bx-group'></i>
                    <span className="links_name uppercase">student record</span>
                </Link>
                <span className="tooltip uppercase">student record</span>
            </li>
            <li>
                <a href="/" className="isActive">
                    <i className='bx bx-collection' ></i>
                    <span className="links_name uppercase">confiscated items</span>
                </a>
                <span className="tooltip uppercase">confiscated items</span>
            </li>
            <li>
                <a href="/" className="isActive">
                <i className='bx bx-bar-chart-alt-2' ></i>
                 <span className="links_name uppercase">reports</span>
                </a>
                <span className="tooltip uppercase">reports</span>
            </li>
        </ul>
    </div>
  )
}
