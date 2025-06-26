import { BrowserRouter, Routes,  Route } from "react-router-dom"
import { routes } from "./routes"

export const AppRoutes = ()=>{
return (<BrowserRouter>
        <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
      </BrowserRouter>)
}