import './css/App.css'
import MovieCard from './components/MovieCard';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  const movieNumber = 3;  


  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Pokemon />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>  
      </main>
    </MovieProvider>
  );
}
 






function ConditionalRendering() {
  return (
    <>

    <p>return using if else:</p>
    {movieNumber === 1 ? (
      <MovieCard movie={{title: "Tim's Film", release_date: 2024}}/>
    ) : (
      <MovieCard movie={{title: "Lo's Film", release_date: 1997}}/>
    )}
    
    <p>return using if (short circuiting)</p>
    {movieNumber === 3 && <MovieCard movie={{title: "Fila Really?", release_date: 2023}}  />}

    </>
  )
}


function HelloWorld({display}) {
  return (
  <>
    <div>
      <p>{display}</p>
    </div>
  </>
  );
}

export default App
