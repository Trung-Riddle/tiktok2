import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import Contact from './pages/Contact';
import Button from '~/components/Button';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/news' element={<NewsPage></NewsPage>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
      <Button primary valueBtn={'click me'}/>
    </div>
  );
}

export default App;
