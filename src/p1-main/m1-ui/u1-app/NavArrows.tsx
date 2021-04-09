import React from 'react'
import classes from './App.module.css'
import {NavLink} from "react-router-dom";

const NavArrows: React.FC<any> = ({state, toNextPage, toPrevPage}) => {
    const next = () => toNextPage()
    const prev = () => toPrevPage()
    return (
            <>
                {state.currentPage===1                       //рассинхрон при обновлении страницы
                    ? <div> </div>                                  //неудивительно
                    : <NavLink to={`/pre-junior/hw${state.currentPage-1}`}
                               className={`${classes.button} + ${classes.prev}`}
                               onClick={() => {prev()}}>
                        {'<'} </NavLink>}
                {state.currentPage===5
                    ? <div> </div>
                    : <NavLink to={`/pre-junior/hw${state.currentPage+1}`}
                               className={`${classes.button} + ${classes.next}`}
                               onClick={() => {next()}}>
                        {'>'} </NavLink>
                         }
            </>

    )
}

export default NavArrows
