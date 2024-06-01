import { useEffect, useState } from "react";
import Header from "../components/Layout/Header/Header";
import Dialog from "../components/Layout/Modals/Dialog/Dialog";
import Search from "../components/Layout/Modals/Search/Search";
import Footer from "../components/Layout/Footer/Footer";

const MainLayout = (props) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
    const [isDialogShow, setIsDialogShow] = useState(true);
    
    useEffect(()=>{
        const dialogStatus = localStorage.getItem("dialog") ? JSON.parse(localStorage.getItem("dialog")) : localStorage.setItem("dialog", JSON.stringify(true))

        setTimeout(()=>{
            setIsDialogShow(dialogStatus)
        },2000)    
    },[])

    return (
        <div className="main-layout">   
            <Header setIsSearchShow={setIsSearchShow} />
            <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
            <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
            {props.children}
            <Footer />
        </div>
    )
}

export default MainLayout