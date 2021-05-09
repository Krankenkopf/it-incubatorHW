import React, {ChangeEvent, useState} from 'react'
import classes from './HW4.module.css'
import AlternativeSuperButton from "./common/c2-SuperButton/AlternativeSuperButton";
import AlternativeSuperInputText from "./common/c1-SuperInputText/AlternativeSuperInputText";

// ммм шедевр архитектурной мысли
// руками не трогать

type PropsType = {
    state: any
    dispatch: (arg0: string) => void
}

const Alternative: React.FC<PropsType> = ({state, dispatch}) => {
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string | number>('')
    const [blockedBtnValue, blockButton] = useState<string>('Exit off this crap!')
    const [blockedStatus, changeBlockedStatus] = useState<string>('')
    const processAnswer = () => { // я тупой, поэтому здесь UI и state рассинхронизированы!
        if (Number.parseFloat(text) === state.answer) {
            setError('')
            dispatch('setFinalState')
        } else {
            setError(state.errorMessage)
            dispatch('setErrorMessage')
        }
    }
    const onChangeText = (e: ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setText(e.currentTarget.value)
    }
    const setButtonBlocked = () => {
        blockButton('Exit service is not available')
        changeBlockedStatus('Yo')
    }
    const enableVariants = () => dispatch('enableVariants')
    const clickMessageClassName = `${state.unsubscribeButtonClicks > 2 ? classes.unseen : classes.red}`
    return (                            //unчитэble
        <div className={classes.column}>
            {state.isEnd                // тут я начинаю уметь в глубокие тернарники
                ? <div> Go to <a href={'http://somesenseless.link'}>http://somesenseless.link</a> to unsubscribe </div>
                : <div><AlternativeSuperButton onClick={() => dispatch('click')}
                                               disabled={state.isUnsubscribeButtonDisabled}> Unsubscribe </AlternativeSuperButton>
                    {state.unsubscribeButtonClicks === 1
                        ? <div className={clickMessageClassName}> {state.onClickMessage} </div>
                        : state.unsubscribeButtonClicks > 1
                            ? <div className={clickMessageClassName}>{state.onSecondClickMessage}</div>
                            : ''
                    }
                    {state.isCaptchaNeeded
                        ? <div>
                            <div className={classes.sometitle}>
                                <div> Solve the expression to make sure that you're really you</div>
                                <div> 0.1+0.2=</div>
                            </div>
                            <div className={classes.expressionAnswerArea}>
                                <div>
                                    <AlternativeSuperInputText onChange={onChangeText}
                                                               value={text}
                                                               error={error}/>
                                </div>
                                <div>
                                    <AlternativeSuperButton onClick={processAnswer}> Answer </AlternativeSuperButton>
                                </div>
                            </div>
                            <div>
                                <AlternativeSuperButton disabled={state.isVariantsEnabled}
                                                        onClick={enableVariants}> idunno </AlternativeSuperButton>
                            </div>
                            {state.isVariantsEnabled
                                ? <div>
                                    <div className={classes.sometitle}>
                                        You may choose righteous solution in the variants below
                                    </div>
                                    <div className={classes.answers}>
                                        <div className={classes.answersRow}>
                                            <AlternativeSuperButton onClick={onChangeText}
                                                                    value={'0.3'}> A:\0.3
                                            </AlternativeSuperButton>
                                            <AlternativeSuperButton onClick={onChangeText}
                                                                    value={'42'}> B:\42
                                            </AlternativeSuperButton>
                                            <AlternativeSuperButton onClick={onChangeText}
                                                                    value={'WTF'}> C:\WTF
                                            </AlternativeSuperButton>
                                        </div>
                                        <div className={classes.answersRow}>
                                            <AlternativeSuperButton onClick={onChangeText}
                                                                    value={'0.30000000000000004'}> D:\0.30000000000000004
                                            </AlternativeSuperButton>
                                            <AlternativeSuperButton onClick={onChangeText}
                                                                    value={'???'}> E:\A | B | C | D | E
                                            </AlternativeSuperButton>
                                        </div>
                                        <div className={classes.answersRow}>
                                            <AlternativeSuperButton red
                                                                    disabled={!!blockedStatus}
                                                                    onClick={setButtonBlocked}>
                                                {blockedBtnValue}
                                            </AlternativeSuperButton>
                                        </div>
                                    </div>

                                </div>
                                : ''}
                        </div>
                        : ''}
                </div>}
        </div>
    )

}

export default Alternative