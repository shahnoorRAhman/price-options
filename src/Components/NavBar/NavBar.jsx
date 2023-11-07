import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
const NavBar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];
      
    return (
        <nav>
            <div className="md:hidden text-2xl bg-slate-100 p-2" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose ></AiOutlineClose>
                        : <AiOutlineMenu ></AiOutlineMenu>
                }
             
            </div>
            <ul className={`md:flex p-5 absolute duration-1000 lg:static lg:justify-center
            ${open ? 'top-10':'-top-60'}
            bg-slate-100 shadow-lg`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
           
        </nav>
    );

};

export default NavBar;