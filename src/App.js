
import './App.css';
import Blog from './blog'
import RecentPosts from './modules/RecentPosts'
import Layout from './Layout';
import {BrowserRouter, Router, Route,Routes} from 'react-router-dom';
import AboutThisPage from './modules/AboutThisPage';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<RecentPosts />}/>
          <Route path="blogs/:post" element={<Blog />} />
          <Route path='about' element={<AboutThisPage />}/>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
