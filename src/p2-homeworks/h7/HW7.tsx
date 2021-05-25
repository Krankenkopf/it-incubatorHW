import React, {ChangeEvent, useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import AlternativeSuperRadio from "./common/c6-SuperRadio/AlternativeSuperRadio";
import AlternativeSuperSelect from "./common/c5-SuperSelect/AlternativeSuperSelect";

const arr = ['x', 'y', 'z']
const disArr = ['Чё-то', 'как-то', 'не', 'зашло']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])
    const [set, setSet] = useState<Array<string>>([])
    const [clicks, incClicks] = useState(0)
    const setSetHandler = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        incClicks( c => c+1)
        if (set.find(s => s === e.currentTarget.value)) {
            setSet(set.filter(s => s !== e.currentTarget.value))
        }
        else {
            setSet([...set, e.currentTarget.value])
        }
    }
    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <div>
                <AlternativeSuperSelect
                    options={set}
                    onChange={setSetHandler}
                />
            </div>
            <div>
                <AlternativeSuperRadio
                    name={'radio'}
                    set={disArr}
                    activeSet={set}
                    onChange={setSetHandler}
                />
            </div>
            {clicks>4 ? <div> Вследствие неиллюзорных опасений насчёт своей уверенности в дальнейшей целостности
            моего монитора, я отложу окончательное выполнение этого задания</div> : undefined}
            <hr/>
        </div>
    )
}

export default HW7
