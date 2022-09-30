import './App.css';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { MainRoutes } from '../routes';
import { Header } from "../components/Header/Header";


export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Outlet />
        <MainRoutes />
      </div>
    </BrowserRouter>
  )
}