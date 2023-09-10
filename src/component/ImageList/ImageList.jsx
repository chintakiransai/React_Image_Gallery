import axios from 'axios'
import { useEffect, useState } from "react"
import Image from '../Image/Image'
import './ImageList.css'


function ImageList() {
 const [image,setImage] = useState([])

 async function DownloadImageList()
  {
    const default_URL ='https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20'
     const res = await axios.get(default_URL)
     const photosData = res.data.photos
     const imageList = photosData.map(item => {
      return {
        id:item.id,
        image:item.url
      }
     })
     setImage(imageList)
  }

useEffect(()=>{DownloadImageList()},[])

    return (
      <>
        <h1>Image List</h1>
        <div className="imageList-container"> {image.map(ele=> <Image key ={ele.id} id ={ele.id} image={ele.image} />)}</div>   
      </>
    )
  }
  
  export default ImageList