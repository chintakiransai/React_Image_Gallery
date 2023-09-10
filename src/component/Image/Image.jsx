import { Link } from 'react-router-dom'
import './Image.css'
function Image({image,id}) {


    return (
      <Link to = {`/photos/${id}`}>
      <div className='image-container'>
          <img src={image} alt="" />
      </div>
      </Link>
    )
  }
  
  export default Image