import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import './global.css';
import MyRoutes from './routes/MyRoutes'

function App() {
  return (
    <BrowserRouter>
      <MyRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
