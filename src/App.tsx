import { Routes, Route } from 'react-router-dom'
import './App.scss';
import HomePage from './Pages/HomePage';

function App() {

  return (

    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route></Route>
    </Routes>

  );
}

export default App;
