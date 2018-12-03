import React, { PureComponent } from 'react';
import withForm from './withform';

class FormControl extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        console.log(this);
        this.props.setNode(this);
        this.props.setModel(this.props.name, this.props.defaultValue ? this.props.defaultValue: '');
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log(props);
        console.log(this);
    }

    getValue(originVal) {
        this.setState({value: originVal});

        return originVal;
    }

    changeValue(event) {
        console.log(this);
        if(this.props.onChange) {
            this.props.onChange(event);
        }

        this.props.setModel(this.props.name, event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        console.log(this);
        const { refer, setNode, getNode, setModel, clearModel, submit, children, ...attributes } = this.props;
        // this.props.refer.current = this;
        return(
            <input onChange={this.changeValue.bind(this)} value={this.state.value} {...attributes} />
        )
    }
}

export default withForm(FormControl);