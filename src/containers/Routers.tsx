import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Home from '../App';
import Login from './pages/Login'
import StockAdjust from './pages/stock-adjust'

class Routers extends React.Component {
     render() {
        return (
            <Router>
                <Route render={({location}) => {
                    return (
                        <Switch key={location.pathname}>
                            <Route location={location} exact={true} path="/" component={Login}/>
                            <Route location={location} path="/home" component={Home}/>
                            <Route location={location} path="/home/stock-adjust" component={StockAdjust}/>
                        </Switch>
                    )
                }}/>
            </Router>
        );
    }
}

export default Routers;