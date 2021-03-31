import React from 'react'
import classes from "./AlternativeMessage.module.css";

function AlternativeMessage(props: any) {
    return (
        <div>
            <div className={classes.messageMainBox}>
                <div className={classes.ntng}>
                </div>
                <div className={classes.messageAvaBox}>
                    <img className={classes.ava} src={props.messages.avatar} alt={'ava'}/>
                </div>
                <div className={classes.arrow}>
                    <div className={classes.arrowL2}> </div>
                    <div className={classes.arrowL1}> </div>
                </div>
                <div className={classes.messageBox}>
                    <div className={classes.name}>
                        {props.messages.name}
                    </div>
                    <div className={classes.message}>
                        {props.messages.message}
                    </div>
                </div>
                <div className={classes.timeFrame}>
                    {props.messages.time}
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
