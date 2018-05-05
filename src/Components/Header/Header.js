import React, { Component } from 'react';
import  './Header.css';
import {connect} from 'react-redux'
class Header extends Component {

    render() {
        return (
            <div onClick={this.props.click} className="container-header">
                This is Header -- {this.props.Message?<span>{this.props.Message}</span>:<span>No Data in the Header</span>}
            </div>
        );
    }
}

const MapStateToProps=(state)=>{
    console.log('reducerObject',{
      ...state.sampleReducer
    });
    return {
      ...state.sampleReducer
    }
  }

export default connect(MapStateToProps)(Header);