import React from 'react'
import classes from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";

export type propsType = {
    state: any
    hw1start: () => void
    toNextPage: () => any
    toPrevPage: () => any
}

function App(props: propsType) {
    let paginate = () => {
        switch (props.state.currentPage) {
            case 1: {
                return <HW1 state={props.state}
                            hw1start={props.hw1start}
                            toNextPage={props.toNextPage}
                            toPrevPage={props.toPrevPage}/>
            }
            case 2: {
                return <HW2/>
            }
            default: return <></>
    }}
    let next = () => {
            return props.toNextPage()
    }
    let prev = () => {
        return props.toPrevPage()
    }
    return (
            <div className={classes.appWrapper}>
                <div className={classes.header}>react homeworks:</div>
                {props.state.currentPage===1
                    ? <div> </div>
                    : <button className={`${classes.button} + ${classes.prev}`}
                              onClick={() => {prev()}}>
                        {'<'} </button>}
                {props.state.currentPage===4
                    ? <div> </div>
                    : <button className={`${classes.button} + ${classes.next}`}
                              onClick={() => {next()}}>
                        {'>'} </button>}

                <div className={classes.hwWrapper}>
                    {paginate()}
{/*                    <HW1 state={props.state} hw1start={props.hw1start}/>
                    <HW2/>*/}
                    {/*<HW3/>*/}
                    {/*<HW4/>*/}
                    {/*<HW5/>*/}
                </div>

            </div>

    )
}

export default App
