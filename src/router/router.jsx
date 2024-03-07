import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"


const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage /> 
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
])

export default routes;