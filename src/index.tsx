import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Routers from './containers/Routers'
import createHistory from 'history/createBrowserHistory'
import {configureStore} from './store'
import {Provider} from 'react-redux'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
    <Provider store={store}>
        <Routers/>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker()