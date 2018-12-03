import React, { PureComponent, Fragment } from 'react';
import Control from './control';
import withForm from './withform';

class Switch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue
        }
    }

    componentDidMount() {
        console.log(this);
        this.props.setNode(this);
        this.props.setModel(this.props.name, this.state.isChecked);
    }

    getValue(originVal) {
        console.log(originVal);
        this.setState({value: originVal});

        return originVal;
    }

    changeValue(event) {
        console.log(this);
        console.log(event.target.type);
        if(this.props.onChange) {
            this.props.onChange(event);
        }

        this.props.setModel(this.props.name, event.target.checked);
        this.setState({value: event.target.checked});
    }

    render() {
        const { refer, setNode, getNode, setModel, clearModel, submit, label, children, ...attributes } = this.props;
        return(
            <label><input type="checkbox" onChange={this.changeValue.bind(this)} value={this.state.value} {...attributes}/>{label}</label>
        )
    }
}

export default withForm(Switch);