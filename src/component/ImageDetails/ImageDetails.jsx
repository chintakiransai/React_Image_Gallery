import { useParams } from 'react-router-dom'
import './ImageDetails.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function ImageDetails() {
    const [imageDetails,setImageDetails]= useState({})
    const {id} = useParams()
    const Default_url ='https://api.slingacademy.com/v1/sample-data/photos/'

   async function ImageDetailsDownload()
{
    const res = await axios.get(Default_url + id )
    const imageDetailsData = res.data.photo
    setImageDetails(
        {
            image : imageDetailsData.url,
            title : imageDetailsData.title,
            desc : imageDetailsData.description
        }
    )
}

useEffect(()=>{
    ImageDetailsDownload()
},[])

    return (
        <div className='imageDetails-container'>
        <div><img src={imageDetails.image} alt="" /></div>
        <div className='imageDetails-subcontainer'>
            <div className='imageDetails-title'>{imageDetails.title}</div>
            <div className='imageDetails-desc'>{imageDetails.desc}</div>
        </div>
        </div>
    )
}

export default ImageDetails