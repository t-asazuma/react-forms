import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { FormProvider } from './context';

const porpTypes = {
    read: PropTypes.shape({
        api: PropTypes.string,
        type: PropTypes.oneOf(['GET', 'POST'])
    }),
    write: PropTypes.shape({
        api: PropTypes.string,
        type: PropTypes.oneOf(['GET', 'POST']),
        contentType: PropTypes.string
    }),
    beforeSubmit: PropTypes.func,
    afterSubmit: PropTypes.func
}

class Form extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            isReload: false
        }

        this.values = {};
        this.childControl = {};

        this.actions = {
            setNode: this.setNode.bind(this),
            getNode: this.getNode.bind(this),
            setModel: this.setModel.bind(this),
            clearModel: this.clearModel.bind(this),
            submit: this.submit.bind(this)
        }
    }

    componentDidMount() {
        this.setState({isReload: true});
        Object.keys(this.childControl).forEach(key => {
            const target = this.childControl[key];
            const value = target.getValue(this.getValue(target.props.map, this.props.value));
            this.values[target.props.name] = value;

        })
    }

    getValue(key, value) {
        if(key == null) {
            return null;
        }

        const keys = key.split('.');
        if(keys.length == 1) {
            return value[key];
        }

        const nestedValue = value[keys[0]];
        keys.shift();

        return this.getValue(keys.join('.'), nestedValue);
    }

    setNode(node) {
        console.log(node);
        this.childControl[node.props.name] = node;
    }

    getNode(name) {
        return this.childControl[name];
    }

    setModel(name, value) {
        this.values[name] = value;
    }

    clearModel() {
        this.values = {};
    }

    submit() {
        console.log(this);
        if(this.props.beforeSubmit) {
            this.props.beforeSubmit(this.values)
        }


        if(this.props.afterSubmit) {
            this.props.aferSubmit();
        }
    }

    render() {
        const { read, write, beforeSubmit, afterSubmit, value, children, ...attributes } = this.props;
        return (
            <FormProvider value={this.actions}>
                <form onSubmit={() => { return false; }} { ...attributes }>
                    {children}
                </form>
            </FormProvider>
        )
    }
}

Form.propTypes = porpTypes;

export default Form;
