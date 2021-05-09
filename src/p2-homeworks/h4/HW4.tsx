import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import classes from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import Alternative from './Alternative'
import {HW4Type} from "../../p3-bicycleStore/store";

type PropsType = {
    state: any
    hw4start: () => void
    dispatch: (arg0: string) => void
}

const HW4: React.FC<PropsType> = ({state, hw4start, dispatch}) => {
    const [text, setText] = useState<string>('')
    const [text2, setText2] = useState<string>('')
    const error = text ? '' : 'Error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }
    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={classes.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={classes.testSpanError}
                />

                <SuperInputText
                    className={classes.blue}// проверьте, работает ли смешивание классов (должно, но нет)
                    value={text2}
                    onChangeText={setText2}
                />

                {/*----------------------------------------------------*/}

                <SuperButton className={classes.button}
                             onClick={showAlert}>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={() => {setText('')}}
                    disabled={!text}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}
                <div style={{height: '10px'}}> </div>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                    hw4start={hw4start}
                >
                    {checked ? 'You are subscribed' : 'Subscribe to our channel! Please-please!'} {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked}
                               onChange={testOnChange}
                               alt={classes.unseen}
                               hw4start={hw4start}
                >
                    {checked ? 'You have allowed spam mailing to your email ;)' : 'This title is almost unseen'}
                </SuperCheckbox>
            </div>

            <hr/>
            {state.hw4isstarted
                ? <Alternative state={state}
                               dispatch={dispatch}/>
                : ''}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
