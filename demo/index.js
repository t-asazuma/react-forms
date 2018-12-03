import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ReactForm from 'react-form';

const response = {
    id: '00000000-0000-0000-0000-000000000000',
    name: 'name',
    gender: {
        id: '00000000-0000-0000-0000-000000000001',
        value: '男性'
    },
    prefecture: {
        id: '00000000-0000-0000-0000-000000000000',
        name: '東京'
    },
    flag1: false,
    flag2: true,
}

const gender = [
    {
        id: '00000000-0000-0000-0000-000000000000',
        name: '男性'
    },
    {
        id: '00000000-0000-0000-0000-000000000001',
        name: '女性'
    },
]


class App extends Component {
    constructor(props) {
        super(props);
        // this.test1 = React.createRef();
        // this.test2 = React.createRef();
    }
    componentDidMount() {
        console.log(this);
    }
    componentDidUpdate() {
        console.log(this);
    }
    render() {
        console.log(this);
        return(
            <ReactForm.Form value={response}>
                <div>test</div>
                <div><ReactForm.Control type="text" name="test1" map="id" ref={'test1'}/></div>
                <div><ReactForm.Choice type="text" name="gender" map="gender" items={gender} ref={'test1'}/></div>
                <div><ReactForm.Switch name="flag1" map="flag1" label="フラグ１"/></div>
                <div><ReactForm.Switch name="flag2" map="flag2" label="フラグ２"/></div>
                <ReactForm.Button data-target="test1, test2">test</ReactForm.Button>
                {/* <div><ReactForm.FormControl type="text" ref={this.test2} test={this.test1}/></div>
                <div><ReactForm.Text type="text"/></div> */}
            </ReactForm.Form>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
