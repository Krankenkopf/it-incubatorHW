import classes from './Message.module.css'
import React from 'react'
import Message from './Message'
import AlternativeMessage from "./AlternativeMessage";
import {HW1Type} from "../../p3-bicycleStore/store";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Ignat',
    message: 'npm start продавил?',
    time: '12:11:23',
}

type PropsType = {
    state: any,
    hw1start: () => void
    className: string
}

function HW1(props: PropsType) {
    let messages: any = props.state.messages.map((m: any) => m.name === 'Ignat'
        ? <Message key={m.id} avatar={m.avatar} message={m.message} name={m.name} time={m.time}/>
        : <AlternativeMessage key={m.id} messages={m}/>)
    let start = () => {
        return props.hw1start()
    }
    return (
        <div className={props.className}>
            <div className={classes.mainBox}>

                <hr/>
                homeworks 1
                {/*may be will work*/}
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
                <hr/>
                {props.state.hw1isstarted
                    ? <div> {messages} </div>
                    : <button className={classes.startButton} onClick={start}> Ответить </button>}
                <hr/>
            </div>
        </div>

    )
}

export default HW1
