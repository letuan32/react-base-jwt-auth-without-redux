import {Outlet} from "react-router-dom";

const Layout = () =>{
    return(
        <main className="App">
            Hello
            <Outlet></Outlet>
        </main>
    )
}
export  default  Layout