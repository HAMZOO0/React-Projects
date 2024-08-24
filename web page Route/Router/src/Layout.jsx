// * What is going on : we crate this file for make out footer nad header strick at  its orignal postion when we change the page


import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {

    // header and footer remain same - outlet will change - we make it dynamic
    return (
        <>
        <Header/> 
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout