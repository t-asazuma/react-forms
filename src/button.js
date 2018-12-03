import React, { Component } from 'react';
import withForm from './withform';


class Button extends Component {
    handleClickEvent(event) {
        event.preventDefault();
        if(this.props.event) {
            this.props.event(event, this.props.getNode, setModel);
        } else {
            this.props.submit();
        }
    }

    render() {
        const { refer, setNode, setModel, getNode, clearModel, submit, children, ...attributes } = this.props;
        console.log(this);
        return(
            <button onClick={this.handleClickEvent.bind(this)} {...attributes}>{children}</button>
        )
    }
}

export default withForm(Button);