import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


export default function SideBar() {

    const location = useLocation();
    useEffect(() => {
        hanldeOnchange();
    },[]);


    const hanldeOnchange = () => {
        const selectedMenu = $('.isActive');
        for(let x=0; x < selectedMenu.length; x ++) { 
            $(selectedMenu[x]).on('click', function(){
                $($(selectedMenu).children()).removeClass('text-black'); 
                $(selectedMenu).removeClass('bg-white');
                $(this).addClass('bg-white');
                const parentClass = $(this).children();
                $(parentClass[0]).addClass('text-black');
                $(parentClass[1]).addClass('text-black');
            });
            const currentRoute = selectedMenu[x].href.replace(window.location.origin, '');
            if(currentRoute == location.pathname){   
                $($(selectedMenu[x]).addClass('bg-white').children()).addClass('text-black')
            } 
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
                <a href="#" className="isActive">
                <i className='bx bx-bar-chart-alt-2' ></i>
                 <span className="links_name uppercase">reports</span>
                </a>
                <span className="tooltip uppercase">reports</span>
            </li>
        </ul>
    </div>
  )
}
