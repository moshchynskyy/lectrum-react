// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Provider } from './../../components/HOC/withProfile';
import Feed from './../../components/Feed/index';
import avatar from 'theme/assets/lisa.png';


const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName: 'Simpson',
};

@hot(module)
export default class App extends Component {
    render() {
        return (
            <Provider value={ options } >
                <Feed />
            </Provider>
        );
    }
}
