import { Route, Routes  } from "react-router-dom"
import { Home } from "./Components/Home"
import { Login } from "./Components/Login"
import { ProtectedRoute } from "./Components/ProtecterRoute"
import { Register } from "./Components/Register"
import { AuthProvider } from "./context/authContext"

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes >
          <Route path="/" element={
            <ProtectedRoute>
             
              <Home/>
              
            </ProtectedRoute>         
          }/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}
export default App