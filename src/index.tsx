import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'
import store from "./p3-bicycleStore/store";


export let render = (store: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 hw1start={store.hw1start.bind(store)}
                 toNextPage={store.toNextPage.bind(store)}
                 toPrevPage={store.toPrevPage.bind(store)}/>
        </React.StrictMode>,
        document.getElementById("root")
    )
}
render(store)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
