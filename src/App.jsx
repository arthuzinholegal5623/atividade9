import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./assets/pages/Home"

const router = createBrowserRouter([
  {path: "/" , 
  element:<Home />}
])
export default function App() {
  return (
    <div> <RouterProvider router={router} /> </div>
  )
}
