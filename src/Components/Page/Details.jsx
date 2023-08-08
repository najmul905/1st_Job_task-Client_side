import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
const {id}=useParams()
const [userData,setUserData]=useState(null)
useEffect(()=>{
    fetch(`https://y-umber-sigma.vercel.app/userData`)
    .then(res=>res.json())
    .then(data=>setUserData(data))
},[])
const data=userData?.find(fd=>fd._id==id)
console.log(data)

    return (
        <div>
            <div className="flex justify-around">
                <h1>I am walking: {data?.walking}</h1>
                <h1>I am Running: {data?.running}</h1>
            </div>
            <div className="flex justify-around">
                <h1>I ride bicycling: {data?.bicycling}</h1>
                <h1>I am gardening: {data?.gardening}</h1>
            </div>
            <div className="flex justify-around">
                <h1>I am swimming in: {data?.swimming}</h1>
                <h1>I am watching telivition : {data?.watching_telivition} sports</h1>
            </div>
            <div className="flex justify-around">
                <h1>I am watching: {data?.watching_movie} movie</h1>
                <h1>I am shopping: {data?.shopping}</h1>
            </div>
        </div>
    );
};

export default Details;