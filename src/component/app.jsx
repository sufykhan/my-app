import React from "react";
import "../styles.css";
import Header from "./Header.jsx"
import Footer from "./footer.jsx"
import Note from "./Note.jsx"
import {Route,Switch} from "react-router-dom";
function App()
{
    return (
             <>
            <Route path="/" component={Header} />
            <Route exact path="/note" component={Note} />
            <Route path="/" component={Footer} />
            </>
        );
}
export default App;
