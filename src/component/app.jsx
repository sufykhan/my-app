import React from "react";
import "../styles.css";
import Header from "./Header.jsx"
import Footer from "./footer.jsx"
import Note from "./Note.jsx"
import {Route,Switch} from "react-router-dom";
function App()
{
    return (
             <Switch>
            <Route path="/" component={Header} />
            <Route path="/note" component={Note} />
            <Route path="/" component={Footer} />
            </Switch>
        );
}
export default App;
