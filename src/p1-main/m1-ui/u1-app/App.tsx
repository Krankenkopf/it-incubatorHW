import React from 'react'
import classes from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from '../../../p2-homeworks/h3/HW3';
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from '../../../p2-homeworks/h5/HW5';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import krank from "./../../../images/logo512.png"
import krankenkopf from "./../../../images/krankenkopf(transparent).png"
import Error404 from "../../../p2-homeworks/h5/pages/Error404";
import Navbar from './Navbar'
import NavArrows from "./NavArrows";

export const PATH = {
/*    PRE_JUNIOR: '/pre-junior',*/
    HW1: '/pre-junior/hw1',
    HW2: '/pre-junior/hw2',
    HW3: '/pre-junior/hw3',
    HW4: '/pre-junior/hw4',
    HW5: '/pre-junior/hw5'
}

const App: React.FC<any> = ({store}) => {   // store в App... Ну а чо?
    return (
        <HashRouter>
            <div className={classes.appWrapper}>
                <div className={classes.header}>
                    {/*                    react homeworks:*/}
                    <Navbar/>
                </div>
                {/* {store._state.currentPage===1                                    //рассинхрон при обновлении страницы
                    ? <div> </div>                                                  //неудивительно
                    : <NavLink to={`/pre-junior/hw${store._state.currentPage-1}`}
                               className={`${classes.button} + ${classes.prev}`}    //UP! Решилось дублированием этой дичи
                               onClick={() => {prev()}}>                            //в каждый роут
                        {'<'} </NavLink>}                                           //Повода для гордости всё равно нет
                {store._state.currentPage===5
                    ? <div> </div>
                    : <NavLink to={`/pre-junior/hw${store._state.currentPage+1}`}
                               className={`${classes.button} + ${classes.next}`}
                               onClick={() => {next()}}>
                        {'>'} </NavLink>
                         }*/}
                <div>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to={PATH.HW1}/>}/>
               {/*         <Route path={PATH.PRE_JUNIOR} exact render={() => <Redirect to={PATH.HW1}/>}/>*/}
                        <Route path={PATH.HW1} exact render={() => (
                            <div className={classes.contentWrapper}>
                                <NavArrows state={store.getState(1)}
                                           toNextPage={store.toNextPage.bind(store)}
                                           toPrevPage={store.toPrevPage.bind(store)}/>
                                <HW1 state={store.getState(1)}
                                     hw1start={store.hw1start.bind(store)}
                                     className={classes.hwWrapper}/>
                            </div>)}/>
                        <Route path={PATH.HW2} exact render={() => (
                            <div className={classes.contentWrapper}>
                                <NavArrows state={store.getState(2)}
                                           toNextPage={store.toNextPage.bind(store)}
                                           toPrevPage={store.toPrevPage.bind(store)}/>
                                <HW2 state={store.getState(2)}
                                     hw2start={store.hw2start.bind(store)}
                                     filterAffairs={store.filterAffairs.bind(store)}
                                     changePriority={store.changePriority.bind(store)}
                                     deleteAffair={store.deleteAffair.bind(store)}/>
                            </div>)}/>
                        <Route path={PATH.HW3} exact render={() => (
                            <div className={classes.contentWrapper}>
                                <NavArrows state={store.getState(3)}
                                           toNextPage={store.toNextPage.bind(store)}
                                           toPrevPage={store.toPrevPage.bind(store)}/>
                                <HW3 state={store.getState(3)}
                                     hw3start={store.hw3start.bind(store)}/>
                            </div>)}/>
                        <Route path={PATH.HW4} exact render={() => (
                            <div className={classes.contentWrapper}>
                                <NavArrows state={store.getState(4)}
                                           toNextPage={store.toNextPage.bind(store)}
                                           toPrevPage={store.toPrevPage.bind(store)}/>
                                <HW4 state={store.getState(4)}
                                     hw4start={store.hw4start.bind(store)}
                                     dispatch={store.dispatch.bind(store)}/>
                            </div>)}/>
                        <Route path={PATH.HW5} exact render={() => (
                            <div className={classes.contentWrapper}>
                                <NavArrows state={store.getState(5)}
                                           toNextPage={store.toNextPage.bind(store)}
                                           toPrevPage={store.toPrevPage.bind(store)}/>
                                <div className={classes.hwWrapper}>
                                    <HW5/>
                                </div>
                            </div>)}/>
                        <Route render={() => <Error404/>}/>
                    </Switch>
                </div>
                <div className={classes.footer}>
                    <div> Made by
                        <span>
                            <img src={krankenkopf} className={classes.krankenkopf} alt={'krankenkopf'}/>
                        </span>
                    </div>
                    <img src={krank} className={classes.krank} alt={'krankTM'}/>

                </div>
            </div>
        </HashRouter>
    )
}

export default App
