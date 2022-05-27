import { BrowserRouter } from 'react-router-dom';
import './global.css';
import MyRoutes from './routes/MyRoutes'

function App() {
  return (
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
