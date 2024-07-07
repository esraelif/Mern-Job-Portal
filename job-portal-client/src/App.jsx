import { Outlet } from 'react-router-dom'
import './App.css'
export default function App() {
  return (
    <>
      <nav>Nav Bar</nav>
      <Outlet />
      <footer>Footer</footer>
    </>

  )
}