import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Home from '../App';
import Login from './pages/Login'

class Routers extends React.Component {
     render() {
        return (
            <Router>
                <Route render={({location}) => {
                    return (
                        <Switch key={location.pathname}>
                            <Route location={location} exact={true} path="/" component={Login}/>
                            <Route location={location} path="/home" component={Home}/>
                            {/*<Route component={NoMatch}/>*/}
                        </Switch>
                    )
                }}/>
            </Router>
        );
    }
}

export default Routers;