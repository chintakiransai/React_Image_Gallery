
import './App.css'
import ImageDetails from './component/ImageDetails/ImageDetails'
import ImageList from './component/ImageList/ImageList.Jsx'
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<ImageList/>}/>
        <Route path="/photos/:id" element={<ImageDetails/>}/>
        <Route path="*" element={<h1>No Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
