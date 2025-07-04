import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({children, active, linkTo}) => {
  return (
    <Link to={linkTo}>

        <div className={`text-center text-[16px] px-6 py-3 rounded-md font-bold
                ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"}
                hover:scale-95 transition-all duration-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]`}>
            {children}
        </div>
    </Link>
  )
}

export default Button