import { useEffect, useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { categories } from "../../services/apis";
import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { apiConnector } from "../../services/apiconnector"


// const subLinks = [
//   {
//     title:"python",
//     link: "/catalog/pyhton"
//   },

//   {
//     title:"web dev",
//     link: "/catalog/web-developement"
//   }  
// ]


function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation() ;

  const[subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async() => {
        try{
          const result = await apiConnector("GET", categories.CATEGORIES_API);
          console.log("printing subLinks result: ", result);
          console.log(new Date());
          
          setSubLinks(result.data.data);

        } catch(error) {
          console.log("can not fetch the category list");
          
        }
      }
  
  useEffect( () => {
      fetchSubLinks();      
  }, [])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2 group">
                    <p>{link.title}</p>
                    <BsChevronDown/>

                    <div className="invisible absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[40%]
                              flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                              opacity-0 transition-all duration-200 group-hover:visible
                              group-hover:opacity-100 lg:w-[300px] z-10">

                      <div className="absolute left-[50%] top-0 h-6 w-6 rotate-45 rounded
                              translate-x-[80%] translate-y-[-45%] bg-richblack-5">
                      </div>

                      {
                        subLinks !== undefined && subLinks.length >0 ? ( 
                          
                            subLinks.map((subLink, index) => (
                              <Link to={`${subLink.link}`} key={index}>
                                <p>{subLink.title}</p>
                              </Link>
                            ))
                          
                        ) : (<div></div>)
                      }
                    
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="flex gap-x-4 items-center">

          {
            token && user && user?.accountType !== "Instructor" && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart/>
                {
                  totalItems> 0 && (
                    <span>
                      {totalItems}
                    </span>
                  )
                }
              </Link>
            )
          }
          {
            token === null && (
              <Link to="/login">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                        text-richblack-100 rounded-md">
                  Log in
                </button>
              </Link>
            )
          }
          {
            token === null && (
              <Link to="/signup">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                        text-richblack-100 rounded-md">
                  Sign Up
                </button>
              </Link>
            )
          }
          {
            token !== null && <ProfileDropDown/>
          }


        </div>
      
      </div>
    </div>
  )
}

export default Navbar