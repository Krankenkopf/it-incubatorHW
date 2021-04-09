import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // needed to be fixed
    addUserCallback: (arg0: string) => void // needed to be fixed
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // needed to be fixed
    const [error, setError] = useState<string>('') // needed to be fixed
    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // needed to be fixed
        setName(e.currentTarget.value) // needed to be fixed
        setError('')
    }
    const addUser = () => {
        let regExp = /^[A-Za-z']+$/
        if (name.match(regExp)) {
            alert(`Hello ${name}!`) // needed to be fixed
            addUserCallback(name)
        } else if (name.match(/[ ]/g)) setError('Do it again. But without space')
        else setError('Invalid value. Try enter common human name!')
        setName('')
    }

    const totalUsers = users.length // needed to be fixed
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
