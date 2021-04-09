import React, {useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from "./AlternativeAffairs";
import classes from "../h1/Message.module.css";
import {HW2Type} from "../../p3-bicycleStore/store";

// types
type PropsType = {
    state: any
    hw2start: () => void
    filterAffairs: (arg0: number| string) => void
    changePriority: (arg0: number, arg1: number) => void
    deleteAffair: (arg0: number) => void
}
export type AffairPriorityType = string // needed to be fixed
export type AffairType = { // needed to be fixed
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // needed to be fixed
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // needed to be fixed
    if (filter === 'all') return affairs
    else return affairs.filter((a: AffairType) => a.priority === filter)// needed to be fixed
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // needed to be fixed
    return affairs.filter((a: AffairType) => a._id !== _id)// needed to be fixed
}

function HW2(props: PropsType) {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // needed to be fixed
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // needed to be fixed
    let start = () => {
        return props.hw2start()
    }
    return (
        <div>
            <hr/>
            homeworks 2
            {/*may be will work*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {props.state.hw2isstarted
                ? <AlternativeAffairs data={props.state.filteredAffairs}
                                      estTime={props.state.estTime}
                                      isCodingPresents={props.state.isCodingPresents}
                                      filterAffairs={props.filterAffairs}
                                      changePriority={props.changePriority}
                                      deleteAffair={props.deleteAffair}/>
                : <button className={classes.startButton} onClick={start}> Когда я найду работу??77 </button>}

            <hr/>
        </div>
    )
}

export default HW2
