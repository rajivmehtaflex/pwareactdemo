import React, { Component } from 'react';
import './MContainer.css';

class MContainer extends Component {
    render() {
        return (
            <div className="container">
                This is MContainer
                {this.props.children}
            </div>
        );
    }
}

export default MContainer;