import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import { BrowserRouter } from 'react-router-dom'
import CardProvider from './context/CardProvider.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CardProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CardProvider>
  </BrowserRouter>
)
