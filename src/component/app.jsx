import React from "react";
import "../styles.css";
import Header from "./Header.jsx"
import Footer from "./footer.jsx"
import Note from "./Note.jsx"

function app()
{
    return (
        <div>
            <Header/>
            <Note/>
            <Footer/>
        </div>
        );
}
export default app;