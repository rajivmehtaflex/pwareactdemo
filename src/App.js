import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import MContainer from './Components/MContainer/MContainer';
import Invoker from './Components/Invoker/Invoker';
import { connect } from 'react-redux';
class App extends Component {
  gdb = [1, 2, 3, 4, 5]

  handleClick = (item) => {
    console.log(item)
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.props.Message ? <span>{this.props.Message}</span> : <span>No Data</span>}
          <Header />
          <MContainer>
            <Invoker />
          </MContainer>
        </div>
        {
          this.gdb.map((item) => {
            return <RowItem click={this.handleClick} key={item} info={item} />
          })
        }
      </div>
    );
  }
}

// StateFul Component version

// class RowItem extends Component {

//   onHandleClick=()=>{
//     this.props.click(this.props.info)
//   }

//   render() {
//     return (
//       <div>
//         {/* <p key={this.props.info} onClick={this.onHandleClick} >{this.props.info}</p> */}
//         <p key={this.props.info} onClick={()=>this.props.click(this.props.info)} >{this.props.info}</p>
//       </div>
//     );
//   }
// }

// Statelesss Component Version
const RowItem = (props) => {
  return <p key={props.info} onClick={() => props.click(props.info)}>{props.info}</p>
}




const MapStateToProps = (state) => {
  return {
    ...state.sampleReducer
  }
}
export default connect(MapStateToProps)(App);
