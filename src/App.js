import { AppProvider } from './Contexto';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Footbar from './Componentes/Footbar';
import CreaCliente from './Pages/CreaCliente';
import Home from './Pages/Home';
import './App.css';



function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* cliente */}
            <Route path='/creaCliente' element={<CreaCliente />} />
          </Routes>
        </main>

        <footer>
          <Footbar />
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
