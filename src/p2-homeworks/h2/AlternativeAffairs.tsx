import React from 'react'
import classes from "./AltAffairs.module.css"


function AlternativeAffairs(props: any) {
    const setAll = () => props.filterAffairs('all')
    const setHigh = () => props.filterAffairs(3)
    const setMiddle = () => props.filterAffairs(2)
    const setLow = () => props.filterAffairs(1)
    const mappedAffairs = props.data.map((a: any) => (
        <AltAffair
            key={a._id}
            affair={a}
            priority={a.priority}
            changePriority={props.changePriority}
            deleteAffair={props.deleteAffair}
        />))
    return (
        <div className={classes.mainBox}>
            <div className={classes.affairsBlock}>
                {mappedAffairs}
            </div>
            <div className={classes.timemessage}>
                {props.isCodingPresents
                ? `Estimating time for getting a job:
                ${props.estTime>10000
                ? 'never'
                : ' '+Math.ceil((301+props.estTime)/30)+' months'}`
                : 'Do you really want to enter IT?'}

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

function AltAffair(props: any) {
    let className
    if (props.priority===3) className=classes.aaa
    if (props.priority===2) className=classes.aa
    if (props.priority===1) className=classes.a
    return (
        <div className={`${classes.altAffair} ${className}`} >
            {props.affair.affair}
            <div>
                {props.priority === 1
                    ? <button onClick={() => {props.deleteAffair(props.affair.id)}}>×</button>
                    : <button onClick={() => {props.changePriority(props.affair.id, 0)}}>−</button>}
                <button disabled={props.priority === 3}
                        onClick={() => {props.changePriority(props.affair.id, 1)}}>
                    +</button>
            </div>

        </div>
    )
}

export default AlternativeAffairs
