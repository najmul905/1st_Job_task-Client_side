import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AboutMe = () => {

    const {user}=useContext(AuthContext)
    // const{email}=user

const handelUserData=(event)=>{
event.preventDefault();
const form=event.target;
const location=form.Location.value;
const walking=form.walking.value;
const running=form.running.value;
const bicycling=form.bicycling.value;
const gardening=form.gardening.value;
const swimming=form.swimming.value;
const watching_telivition=form.watching_telivition.value;
const watching_movie=form.watching_movie.value;
const shopping=form.Shopping.value;
const userData={location,walking,running,bicycling,gardening,swimming,watching_movie,watching_telivition,shopping,email:user?.email,name:user?.displayName,image:user?.photoURL}
console.log(userData)
fetch('https://y-umber-sigma.vercel.app/userData',{
                  method:"POST",
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(userData)
                })
                .then(res=>res.json())
              .then(data=>{
              console.log(data)
              })
              form.reset()
}

    return (
        <div>
            <h1 className="text-4xl text-center font-semibold my-10">Sharing YOur Activities</h1>
            <form onSubmit={handelUserData} className="m-16 bg-sky-200 p-10 rounded-xl">
                <div className="text-center my-4"><h1><span className="font-semibold ">Add your Location:</span> <input className="border border-black rounded" type="text" name="Location" /></h1></div>
                <div className="flex items-center justify-around">
                    <h1><span className="font-semibold">How do you like to walking:</span> <input className="border border-black rounded" type="text" name="walking" id="" /></h1>
                    <h1><span className="font-semibold">How do you like to Running:</span> <input className="border border-black rounded" type="text" name="running" id="" /></h1>
                </div>
                <br />
                <div className="flex items-center justify-around">
                    <h1><span className="font-semibold">How do you like to Bicycling:</span> <input className="border border-black rounded" type="text" name="bicycling" id="" /></h1>
                    <h1><span className="font-semibold">How do you like to gardening:</span> <input className="border border-black rounded" type="text" name="gardening" id="" /></h1>
                </div>
                <br />
                <div className="flex items-center justify-around">
                    <h1><span className="font-semibold">How do you like to Swimming:</span> <input className="border border-black rounded" type="text" name="swimming" id="" /></h1>
                    <h1><span className="font-semibold">Which telivition Sport mostly watch:</span> <input className="border border-black rounded" type="text" name="watching_telivition" id="" /></h1>
                </div><br />
                <div className="flex items-center justify-around">
                    <h1><span className="font-semibold">Which typ of movie you likely most:</span> <input className="border border-black rounded" type="text" name="watching_movie" id="" /></h1>
                    <h1><span className="font-semibold">Which Products you likely most Shopping:</span> <input className="border border-black rounded" type="text" name="Shopping" id="" /></h1>
                </div>
                <div className="text-center my-6"><button className="p-2 font-bold  bg-sky-400 text-white rounded">Add Info</button></div>
            </form>
        </div>
    );
};

export default AboutMe;