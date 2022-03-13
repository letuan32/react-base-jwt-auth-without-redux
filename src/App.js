import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import PrivateRoute from "./router/PrivateRoute";

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/*public route*/}
                    <Route path="" element={<Home/>}/>

                {/*    private route*/}
                    <Route element={<PrivateRoute allowedRoles={["Admin","Staff"]}/>}>
                        <Route path ="/home" element={<Home/>}/>
                    </Route>>


                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
