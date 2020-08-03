import React,{Fragment} from "react";
import "../styles.css";
import Header from "./Header.jsx"
import Footer from "./footer.jsx"
import Note from "./Note.jsx"
import {Route} from "react-router-dom";
function App()
{
    return (
        <div>
            <Route exact path="/" component={Header} />
            <Route path="/note" component={Note} />
            <Footer/>
        </div>
        );
}
export default App;
