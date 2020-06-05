import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed/index';
import New from './pages/New/index';
import Post from './pages/Post/index';

function Routes() {
    return (
        <Switch>
            <Route path="/"exact component={Feed} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;