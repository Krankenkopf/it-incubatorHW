import React from 'react'
import classes from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // needed to be fixed
    deleteAffairCallback: (arg0: number) => void // needed to be fixed
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        return props.deleteAffairCallback(id)
    }// needed to be fixed

    return (
        <div className={classes.affair}>
            {props.affair.name}
            <div>
                <button onClick={() => deleteCallback(props.affair._id)}>×</button>
            </div>

        </div>
    )
}

export default Affair
