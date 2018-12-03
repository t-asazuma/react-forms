import React, { Component } from 'react';
import Control from './control';
import withForm from './withform';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }

        if(this.props.onChange) {
            this.props.onChange(event);
        }
        console.log(this);
    }

    componentDidMount() {
        console.log(this);
        // this.props.refer.current = this;
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.state = {
            value: props.value
        }

        if(this.props.onChange) {
            this.props.onChange(event);
        }
    }

    changeValue(event) {
        if(this.props.onChange) {
            this.props.onChange(event);
        } else {
            this.setState({value: event.target.value});
        }
    }

    render() {
        console.log(this);
        const { isMultiLine, name, value, ...attributes } = this.props;

        if(isMultiLine) {
            return <textarea onChange={this.changeValue.bind(this)} name={name} value={this.state.value} {...attributes}/>
        }

        return(
            <input type="text" onChange={this.changeValue.bind(this)} name={name} value={this.state.value} {...attributes}/>
        )
    }
}

export default withForm(Text);
