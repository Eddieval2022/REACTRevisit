import { useState, useEffect } from "react";
import Image from "../components/image";


const PhotoFeed = (user) => {


const [photos, setPhotos] = useState([]);
 

const FetchImages = async () => {
    try{
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
   setPhotos(data);
    }catch(error){
        console.log(error);
    }
  };




 useEffect(() => {
   FetchImages(setPhotos);
 }, []);


 
 return (
   <div className="App">

   <h1>{user}</h1>
   {/* <button onClick = {() => fetchImages()}>Click me</button> */}
   
   <div>
    {user && photos.map((item, i)=>{
     return <Image key={i} author={item.author} url={item.download_url} />;
     



    
    })} </div> 
  </div>

 
 );
}
 
 export default PhotoFeed