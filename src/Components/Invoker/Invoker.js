import React, { Component } from 'react';
import './Invoker.css';
import { connect } from 'react-redux';
//import {getRepos} from '../../StateManager/Action/actionList';
import {getRepos} from '../../StateManager/redux'

class Invoker extends Component {
    onBroadCast =() => {
        //this.props.onPing('Hello Mantra')
        //alert(await this.asynFunc('Mantra'));
        this.props.getRepos('rajivmehtaflex');
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.onBroadCast()}>Invoker</button>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = { getRepos };

export default connect(null, mapDispatchToProps)(Invoker);