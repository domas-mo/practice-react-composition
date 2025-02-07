import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    submithandler = (event) => {
        event.preventDefault();
        const [name] = event.target.elements;

        this.addUser(name.value);

        name.value = '' ;
    }

    addUser(user) {
        this.setState({
            usersList: [...this.state.usersList, user]
        });
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form eventHandler={this.submithandler}/>
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));