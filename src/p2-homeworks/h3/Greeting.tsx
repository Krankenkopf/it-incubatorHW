import React from 'react'
import classes from './Greeting.module.css'
import aaa from './../../images/aaaa.png'

type GreetingPropsType = {
    name: string // needed to be fixed
    setNameCallback: (arg0: React.ChangeEvent<HTMLInputElement>) => void // no idea about event type. Google? It didn't help(
    addUser: () => void // needed to be fixed
    error: string // needed to be fixed
    totalUsers: number // needed to be fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass: string | undefined = error ? classes.error : undefined // need to fix with (?:)
    const handle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key==='Enter') {
            e.preventDefault()
            addUser()
        }
    }
    return (
        <div className={classes.form}>
               <span className={classes.h}>If you enter any name, it will be greeting!</span>
                <img src={aaa} alt={'aaaa'}/>


            <label>Enter name </label>
            <input value={name} onChange={setNameCallback} onKeyPress={(e) =>handle(e)} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={classes.names}>{totalUsers} dudes are here</span>
            <div className={classes.errorDesc}>{error}</div>
        </div>
    )
}

export default Greeting
