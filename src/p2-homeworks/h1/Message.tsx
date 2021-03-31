import classes from './Message.module.css'
import React from 'react'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    let imgTrigger = (path: string) => {
        if (path.slice(path.length-4, path.length) === '.jpg')
            return true
    }
    return (
        <div>
            <div className={classes.messageMainBox}>
                <div className={classes.ntng}>

                </div>
                <div className={classes.messageAvaBox}>
                    <img className={classes.ava} src={props.avatar} alt={'ava'}/>
                </div>
                <div className={classes.arrow}>
                    <div className={classes.arrowL2}> </div>
                    <div className={classes.arrowL1}> </div>

                </div>
                <div className={classes.messageBox}>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.message}>
                        {imgTrigger(props.message)
                            ? <img src={props.message} className={classes.image} alt={'img'} />
                            : props.message}
                    </div>
                </div>
                <div className={classes.timeFrame}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
