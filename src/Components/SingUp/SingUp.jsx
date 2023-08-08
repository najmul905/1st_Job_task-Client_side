import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SingUp = () => {

const {createUser,updateUserProfile}=useContext(AuthContext)

const data=import.meta.env.VITE_Image_API_Key
const image_hosting_URL= `https://api.imgbb.com/1/upload?expiration=600&key=${data}`

const {register,handleSubmit,formState:{errors}}= useForm()
const onsubmit=(data)=>{
    console.log(data)
    const formData= new FormData();
  formData.append('image',data.Image[0])
  fetch(image_hosting_URL,{
      method:'POST',
  body:formData
     
  })
  .then(res=>res.json())
  .then(postData=>{
   
    if(postData.success){
        const image=postData.data.url
        console.log(image)
        const {name,email,password}=data
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            updateUserProfile(name,image)
            .then(res=>{console.log(res.user)})
            .catch(err=>console.log(err.message))
        })
        .catch(error=>{
            console.log(error)
        })
       const users={name:name,email:email,image:image}
       fetch('https://y-umber-sigma.vercel.app/users',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(users)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))

    }
  })
}

console.log(errors)
return (
    
        <div>
              <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
   
    <div className="card  bg-base-100">
      <form onSubmit={handleSubmit(onsubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="Name" {...register("name")} placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="Email" {...register("email")} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="Password" {...register("password")} placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" name="Image" {...register("Image")} className="file-input file-input-bordered file-input-md w-full max-w-xs" />
        </div>
        <div className="form-control mt-6">
         <button>Sing Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SingUp;