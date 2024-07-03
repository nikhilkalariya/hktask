
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Posts1 from './components/Posts'
import PostDetail from './components/PostDeatil'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts1/>}/>
        <Route path='/posts/:id' element={<PostDetail/>}/>       
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
