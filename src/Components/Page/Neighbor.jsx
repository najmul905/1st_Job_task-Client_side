import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Neighbor = () => {

    const {user}=useContext(AuthContext)

const [userData,setUserData]=useState(null)
useEffect(()=>{
    fetch(`https://y-umber-sigma.vercel.app/userData`)
    .then(res=>res.json())
    .then(data=>setUserData(data))
},[])

const LoginUser=userData?.find(fd=>fd.email==user?.email)
// console.log(LoginUser)

const sameLocationUser=userData?.filter(fd=>fd.location==LoginUser?.location)

// const withOutLogInUser=sameLocationUser?.splice(pp=>pp?.email==user?.email)
console.log(sameLocationUser)

    return (
        <div>

            {userData?.map(data=><div key={data._id}>

                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Image</th>
        <th>Name</th>
        <th>Contact</th>
        <th>location</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
      
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"></div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
        {data.name}
        </td>
        <td>
        
          <br/>
          <span className="badge badge-ghost badge-sm">{data.email}</span>
        </td>
        <td>{data.location}</td>
        <th>
          <Link to={`/details/${data._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
      </tr>
    </tbody>
  </table>
</div>
            </div>)}
            
        </div>
    );
};

export default Neighbor;