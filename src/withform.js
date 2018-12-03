import React from 'react';

import { FormConsumer } from './context';

function withForm(Component) {
    return React.forwardRef((props, ref) => {
        if(ref == null) {
            ref = React.createRef();
        }
        return (
            <FormConsumer>
                {({ ...actions }) => <Component refer={ref} {...actions} {...props}/>}
            </FormConsumer>
        )
    })
}

export default withForm;
