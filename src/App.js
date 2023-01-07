import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Blogs from './components/blogs/Blogs';
import About from './components/about/About';
import NotFound from './components/not-found/NotFound';
import Home from './components/home/Home';
import ShowBlog from './components/show-blog/ShowBlog';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogs/:blogId' element={<ShowBlog></ShowBlog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
