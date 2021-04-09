import React from 'react'

const Routes: React.FC<any> = () => {
    return (
        <div>
 {/*           Switch выбирает первый подходящий роут
            <Switch>
            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.HW1} render={() => <HW1 state={props.state}
                                                      hw1start={props.hw1start}/>}/>
            <Route path={PATH.HW2} render={() => <HW2 state={props.state}
                                                      hw2start={props.hw2start}
                                                      filterAffairs={props.filterAffairs}
                                                      changePriority={props.changePriority}
                                                      deleteAffair={props.deleteAffair}/>}/>
            <Route path={PATH.HW3} render={() => <HW3 state={props.state}
                                                      hw3start={props.hw3start}/>}/>
            <Route path={PATH.HW4} render={() => <HW4 state={props.state}
                                                      hw4start={props.hw4start}
                                                      dispatch={props.dispatch}/>}/>*/}
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
 {/*           <Route render={() => <Error404/>}/>
            </Switch>*/}
        </div>
    )
}

export default Routes
