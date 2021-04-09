import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import AlternativeGreeting from "./AlternativeGreeting";
import classes from './Greeting.module.css'
import {v1 as uuidv1} from 'uuid'
import {HW3Type} from "../../p3-bicycleStore/store";

// types
export type UserType = {
    _id: string // needed to be fixed
    name: string // needed to be fixed
}

type PropsType = {
    state: any
    hw3start: () => void
}

// уровень работы с глобальными данными
const HW3: React.FC<PropsType> = ({state, hw3start}) => {
    const [users, setUsers] = useState<Array<UserType>>([]) // needed to be fixed
    const addUserCallback = (name: string) => { // needed to be fixed
        setUsers([...users, {_id: uuidv1(), name: name}]) // needed to be fixed
    }
    return (
        <div>
            <hr/>
            homeworks 3
            {/*may be will work*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            <div className={classes.altBox}>
                {state.hw3isstarted
                    ? <AlternativeGreeting/>
                    : <button className={classes.button} onClick={hw3start}> Press to continue </button>}
            </div>
            <hr/>
        </div>
    )
}

export default HW3
