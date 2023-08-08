import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
const {GoogleLogIn,logIn}=useContext(AuthContext)

    const handelGoogle=()=>{
GoogleLogIn()
.then(res=>{
    const googleUser=res.user;
        const users={name:googleUser.displayName,image:googleUser.photoURL,email:googleUser.email}

// save users
fetch('https://y-umber-sigma.vercel.app/users',{
                  method:"POST",
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(users)
                })
                .then(res=>res.json())
              .then(data=>{
              console.log(data)
              })
})
.catch(error=>console.log(error))
    }
const handelLogIn=(event)=>{
event.preventDefault()
const form=event.target
const email=form.email.value
const password=form.password.value
logIn(email,password)
.then(res=>
    {
        console.log(res)
    })
.catch(error=>console.log(error))
}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
   
    <div className="card  bg-base-100">
      <form onSubmit={handelLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="number" name="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center">
        <button onClick={handelGoogle}>LogIn With Google</button> <br />
        <Link className="text-green-700 font-serif underline" to="/singUp">Create a new account</Link>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;