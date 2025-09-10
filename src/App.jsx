import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Play from './pages/Play'
import Try from './pages/Try'
import Design from './pages/Design'
import Page1 from './pages/Page1'

function App() {
  
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/try",
          element: <Try />,
        },
        {
          path: "/design",
          element: <Design />,
        },
        {
          path: "/page1",
          element: <Page1 />,
        },
        {
          path: "/play",
          element: <Play />,
        },
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
