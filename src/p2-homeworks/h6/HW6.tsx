import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import css from './HW6.module.css'

function HW6() {
    const [value, setValueValidated] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [saveLabel, setSaveLabel] = useState<'Save' | 'Done' | 'smthfckd'>('Save')
    const [disabledSvBtn, toggleDisabledSvBtn] = useState<boolean>(false)

    const save = () => {
        value && saveState<string>('editable-span-value', value)
        value === restoreState<string>('editable-span-value', 'undefied')
            ? setSaveLabel('Done')
            : setSaveLabel('smthfckd')
        value && toggleDisabledSvBtn(true)
    }
    const restore = () => {
        const valueRestored = restoreState<string>('editable-span-value', '')
        setValueValidated(valueRestored)
    }

    const validateInput = (input: string) => {
        toggleDisabledSvBtn(false)
        setSaveLabel('Save')
        setError('')
        input.length < 18
            ? setValueValidated(input)
            : setError('Error (>17)')
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*may be will work*/}
            <div className={css.column}>
                <SuperEditableSpan
                        value={value}
                        error={error}
                        setError={setError}
                        onChangeText={validateInput}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                />
                <SuperButton disabled={disabledSvBtn} onClick={save}>{saveLabel}</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>


            <hr/>
            {/*тут ничего особенного, негде развернуться =)*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
