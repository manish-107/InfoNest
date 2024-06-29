import { Link } from "react-router-dom";

const MainNav: React.FC = () => {
  
    return (
        <header className="px-6 py-2 text-white bg-black border-0 shadow-sm md:py-5 sm:px-6 md:px-8">
        <div className="container flex items-center justify-between px-2 py-5 mx-auto border-b md:px-6 border-b-slate-900">
          <p  className="text-2xl font-bold">
          <Link to="/">InfoNest</Link>
          </p>
          <ul className="flex items-center gap-4">
            <li  className="hidden mr-5 text-sm font-semibold md:block hover:underline">
              <Link to="/dashboard">Explore</Link>
            </li>
            <li  className="inline-flex items-center justify-center px-3 py-1 text-sm font-normal text-white transition-colors bg-blue-600 rounded-md shadow md:px-4 md:py-2 md:font-medium bg-gradient-to-br from-purple-600 to-blue-500 ">
               Sign In
            </li>
            <li className="inline-flex items-center justify-center px-3 py-1 text-sm font-normal text-white transition-colors bg-black border rounded-md shadow border-slate-500 hover:bg-slate-800 md:px-4 md:py-2 md:font-medium bg-gradient-to-br ">
               <Link  to="/writeblog">Write Blog</Link> 
            </li>
          
            
          </ul>
        </div>
      </header>
    );
  }
  
  export default MainNav;