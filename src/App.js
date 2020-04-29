import React from 'react';
import './App.css';
import Tuesday from "./Components/Tuesday/Tuesday";
import {HashRouter, Route} from "react-router-dom";
import Monday from "./Components/Monday/Monday";
import Navbar from "./Components/Header/Navbar/Navbar";
import Header from "./Components/Header/Header";

class App extends React.Component {


    // newTextRef = React.createRef();
    // state = {
    //     number: 0,
    //     names: [
    //         {name: 'someName'}
    //     ],
    //     style: 'bordred',
    //     title: ''
    // }
    //
    //
    // onChange = (event) => {
    //     if (event.currentTarget.value === '') {
    //         this.setState({style: 'bordred'})
    //     } else {
    //         this.setState({style: 'bord'})
    //     }
    // }
    // onClickUp = () => {
    //     this.setState((preNum) => {
    //         return {
    //             number: preNum.number + 1,
    //         };
    //     })
    //     let newTitle = this.newTextRef.current.value;
    //     alert('Hey, ' + this.newTextRef.current.value + '!');
    //     this.newTextRef.current.value = '';
    //     let newText = {
    //         name: newTitle
    //     };
    //     let newName = [...this.state.names, newText];
    //     this.setState({names: newName});
    // };
    //
    // // handleChange(event) {
    // //     this.setState({value: event.target.value});
    // // }
    // onKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         this.onClickUp()
    //     }
    //
    // }

    render = () => {
        return (

            <HashRouter>
            <div className="App">
                <Header/>
                <Route path='/monday'
                       render={() => <Monday/>}/>
                <Route path='/tuesday'
                       render={() => <Tuesday/>}/>


                {/*<Text number={this.state.number}/>*/}
                {/*<Input*/}
                {/*    value={this.newTextRef}*/}
                {/*    style={this.state.style}*/}
                {/*    onChange={this.onChange}*/}
                {/*    onKeyPress={this.onKeyPress}*/}
                {/*/>*/}
                {/*<Button onClickUp={this.onClickUp}/>*/}

            </div>
            </HashRouter>
        );
    }
}

export default App;

// handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//         console.log('fvwefvef')
//     }    // handleKeyPress = e => {
//     //     if (e.key === "Enter") {
//     //         const { onAccept } = this.newTextRef.current.value;
//     //         onAccept && onAccept(e.target.value);
//     //     }
//     // }
//let newTitle = this.newTextRef.current.value === '' ? this.state.style = this.state.style + 'red' : alert('Hey, ' + this.newTextRef.current.value + '!');
//
// changeStyle = (newStyleValue) => {
//     this.setState({
//         style: newStyleValue
//     });
// }
// _onClickUp = (e) => {
//     if (e.key === 'Enter') {
//         this.onClickUp();
//     }
// };
// let newStyle = this.state.style.map(s => {
// if (this.newTextRef.current.value === ''){
//     return this.style ==='bord';
// }   return this.style;
// })
