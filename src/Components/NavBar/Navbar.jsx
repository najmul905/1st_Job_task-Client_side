import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const ListItems=<div className="flex items-center">
     <Link className="mx-3 font-semibold hover:bg-slate-400 p-2 rounded" to="/"><button>Home</button></Link>
       { user && <div> <Link className="mx-3 font-semibold hover:bg-slate-400 p-2 rounded" to="/neighbor"><button>Your all Neighbor</button></Link>
        <Link className="mx-3 font-semibold hover:bg-slate-400 p-2 rounded" to="aboutMe"><button>About Me</button></Link></div>}
    </div>

   
    const handelLogOut=()=>{
        logOut()
        .than(res=>console.log(res))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-sky-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {ListItems}
      </ul>
    </div>
  <div><h1 className="text-xl font-bold">Neighbor Good</h1></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {ListItems}
    </ul>
  </div>
  <div className="navbar-end">
 {user? <div className="flex items-center"><div className="flex items-center"> <h1 className="font-semibold">{user.displayName}</h1> <img className="h-10 rounded-full" src={user.photoURL} alt="" /></div><button className="font-bold p-2 bg-sky-600 rounded text-white" onClick={handelLogOut}>LogOut</button> </div>:
   <div className="font-bold mx-5 p-2 bg-sky-600 rounded text-white"><Link  to='/logIn'><button>LogIn</button></Link></div>}
  </div>
</div>
        </div>
    );
};

export default Navbar;