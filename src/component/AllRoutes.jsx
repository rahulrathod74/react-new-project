import { Routes,Route ,Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Task from "../Pages/Task";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes(){
    return(
        <Routes>
           {/* private pages */}
            <Route path="/" element={
                <PrivateRoutes>
                    <Home/>
                </PrivateRoutes>
            
            }/>
            <Route path="/about" element={
                <PrivateRoutes>
                    <About/>
                </PrivateRoutes>
            
            }/>
            <Route path="/contact" element={
                <PrivateRoutes>
                     <Contact/>
                </PrivateRoutes>
           
            }/>

            <Route path="/task" element={
                <PrivateRoutes>
                     <Task/>
                </PrivateRoutes>
           
            }/>
            {/* Public page */}
            <Route path="/login" element={<Login/> }/>
            
        </Routes>
    )
} 