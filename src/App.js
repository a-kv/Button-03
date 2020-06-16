import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import MondayContainer from "./Components/Monday/Monday";
import TuesdayContainer from "./Components/Tuesday/Tuesday";
import Wednesday from "./Components/Wednesday/Wednesday";

class App extends React.Component {

    render = () => {
        return (

            <HashRouter>
                <div className="App">
                    <Header/>
                    <Route path='/monday'
                           render={() => <MondayContainer/>}/>
                    <Route path='/tuesday'
                           render={() => <TuesdayContainer/>}/>
                    <Route path='/wednesday'
                           render={() => <Wednesday/>}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;

