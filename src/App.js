import React from 'react';
import './App.css';
import Tuesday from "./Components/Tuesday/Tuesday";
import {HashRouter, Route} from "react-router-dom";
import Monday from "./Components/Monday/Monday";
import Header from "./Components/Header/Header";

class App extends React.Component {



    render = () => {
        return (

            <HashRouter>
            <div className="App">
                <Header/>
                <Route path='/monday'
                       render={() => <Monday/>}/>
                <Route path='/tuesday'
                       render={() => <Tuesday/>}/>
            </div>
            </HashRouter>
        );
    }
}

export default App;

