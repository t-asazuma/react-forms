import React, { PureComponent, Fragment } from 'react';
import withForm from './withform';

class Choice extends PureComponent {
    constructor(props) {
        super(props);
        this.init(props);
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.init(props);
    }

    init(props) {
        const value = typeof props.value === 'object' ? props.value.id: props.value;
        this.state = {
            items: props.items ? props.items: [],
            value: value
        }
    }

    getValue(originVal) {
        const value = typeof originVal == 'object' ? originVal.id: originVal;
        this.setState({value: value});

        return value;
    }

    componentDidMount() {
        this.props.setNode(this);
        this.props.setModel(this.props.name, this.props.defaultValue ? this.props.defaultValue: '');
    }

    getChild(items) {
        return items.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
        });
    }

    handleChangeEvent(event) {
        this.props.setModel(this.props.name, event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        const { refer, setNode, getNode, setModel, clearModel, submit, items, type, api, unSelectValue, ...attributes } = this.props;
        const children = this.getChild(this.state.items);

        return(
            <select onChange={this.handleChangeEvent.bind(this)} {...attributes} value={this.state.value}>
                {(() => {
                    if(unSelectValue) {
                        return <option value=''>{unSelectValue}</option>
                    }
                })()}
                {children}
            </select>
        )
    }
}

export default withForm(Choice);