import { list } from 'postcss';
import React from 'react';

const Navbar = () => {
    const routes = [
        { 
          id: 1, 
          name: "Home", 
          path: "/", 
          
        },
        { 
          id: 2, 
          name: "About", 
          path: "/about", 
          
        },
        { 
          id: 3, 
          name: "Contact", 
          path: "/contact", 
          
        },
        { 
          id: 4, 
          name: "Blog", 
          path: "/blog", 
          
        },
        { 
          id: 5, 
          name: "Post", 
          path: "/blog/:id", 
          
        },
        { 
          id: 6, 
          name: "Dashboard", 
          path: "/dashboard", 
         
        },
      ];
      
    return (
        <nav>
            <ul>
                {
                    routes.map(route => <li>{route.name}</li> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;