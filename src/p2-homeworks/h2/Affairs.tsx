import React from 'react'
import Affair from './Affair'
import classes from './Affairs.module.css'
import {AffairType} from './HW2'

type AffairsPropsType = { // needed to be fixed
    data: Array<AffairType>
    setFilter: (arg0: string) => void
    deleteAffairCallback: (arg0: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // may be will work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />))

    const setAll = () => props.setFilter('all') // needed to be fixed
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={classes.mainBox}>
            <div className={classes.affairsBlock}>
                {mappedAffairs}
            </div>
            <div className={classes.buttonsBlock}>
                <button className={classes.buttonAll} onClick={setAll}>All</button>
                <button className={classes.buttonHigh} onClick={setHigh}>High</button>
                <button className={classes.buttonMid} onClick={setMiddle}>Middle</button>
                <button className={classes.buttonLow} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
