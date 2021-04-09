// bullshit incarnated
import {render} from "../index";
import ava from "./../images/ava.png"
import facepalm from "./../images/facepalm.jpg"

export type storeType = {
    _state: stateType
    getState: (arg0: number) => object
    toNextPage: () => void
    toPrevPage: () => void
    hw1start: () => void
    hw2start: () => void
    hw3start: () => void
    hw4start: () => void
    _getEstTime: () => void
    filterAffairs: (arg0: string | number) => void
    changePriority: (arg0: number, arg1: number) => void
    deleteAffair: (arg0: number) => void
    dispatch: (arg0: string) => void
}

type stateType = {
    pageStates: Array<any>
    currentPage: number
}

export type HW1Type = {
    initialMessages: Array<any>
    messages: Array<any>
    hw1isstarted: boolean
}

export type HW2Type = {
    initialAffairs: Array<any>
    filteredAffairs: Array<any>
    estTime: number
    isCodingPresents: boolean
    hw2isstarted: boolean
}

export type HW3Type = {
    hw3isstarted: boolean
}

export type HW4Type = {
    hw4isstarted: boolean
    isUnsubscribeButtonDisabled: boolean
    unsubscribeButtonClicks: number
    onClickMessage: string
    onSecondClickMessage: string
    isCaptchaNeeded: boolean
    answer: number
    errorMessages: Array<string>
    errorMessage: string
    currentErrMsgIndex: number
    isVariantsEnabled: boolean
    isEnd: boolean
}

//--------------------------bicycle store------------------------------------------

let store: storeType = {
    _state: {
        pageStates: [
            {
                initialMessages: [
                    {
                        id: 1,
                        avatar: ava,
                        name: 'Krank',
                        message: 'ты ща про neo post metal?',
                        time: 'time'
                    },
                    {
                        id: 2,
                        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                        name: 'Ignat',
                        message: 'ох дно',
                        time: 'time'
                    },
                    {
                        id: 3,
                        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                        name: 'Ignat',
                        message: facepalm,
                        time: 'time'
                    }
                ],
                messages: [],
                hw1isstarted: false
            },
            {
                initialAffairs: [
                    {
                        id: 1,
                        affair: 'Sleep',
                        priority: 3,
                        weight: 100
                    },
                    {
                        id: 2,
                        affair: 'Minecraft-building',
                        priority: 1,
                        weight: 10000
                    },
                    {
                        id: 3,
                        affair: 'Reading tut.by',
                        priority: 2,
                        weight: 20
                    },
                    {
                        id: 4,
                        affair: 'Watching the interview with some devs',
                        priority: 2,
                        weight: 20
                    },
                    {
                        id: 5,
                        affair: 'Go drink',
                        priority: 1,
                        weight: 1000
                    },
                    {
                        id: 6,
                        affair: 'Coding the cool things',
                        priority: 3,
                        weight: -100
                    }
                ],
                filteredAffairs: [],
                estTime: 0,
                isCodingPresents: true,
                hw2isstarted: false
            },
            {
                hw3isstarted: false
            },
            {
                hw4isstarted: false,
                isUnsubscribeButtonDisabled: false,
                unsubscribeButtonClicks: 0,
                onClickMessage: 'Invalid click! Try again!',
                onSecondClickMessage: 'This was not human-made click! Try click by yourself!',
                isCaptchaNeeded: false,
                answer: 0.1+0.2,
                errorMessages: [
                    'No god!',
                    'No god please no!',
                    'Noooooooooo!'
                ],
                errorMessage: 'No!',
                currentErrMsgIndex: 0,
                isVariantsEnabled: false,
                isEnd: false
            }
        ],
        currentPage: 1
    },
    getState(i) {                       // отсюда всё пошло не по плану
        return {                                // задумка была в том, чтобы выдавать стейт постранично
            ...this._state.pageStates[i-1],     // и всё было неплохо, учитывая костыльность исполнения
            currentPage: i                      // но потом случился роутинг и всё посыпалось
        }                                       // поэтому целый store по-варварски запихнут в App
    },                                          // где он также по-варварски расчленяется
    toNextPage() {
        this._state.currentPage++
        render(this)
    },

    toPrevPage() {
        this._state.currentPage--
        render(this)
    },

    async hw1start() {
        this._state.pageStates[0].hw1isstarted = true
        let checkAddingZero = (a: number) => a < 10 ? '0' + a : a
        for (let i = 0; i < 3; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000 + (i + 2) * (i - 1) * 500))
            let time = new Date()
            this._state.pageStates[0].initialMessages[i].time =
                checkAddingZero(time.getHours())
                + ':' + checkAddingZero(time.getMinutes())
                + ':' + checkAddingZero(time.getSeconds())
            this._state.pageStates[0].messages.push(this._state.pageStates[0].initialMessages[i])
            render(this)
        }
    },

    hw2start() {
        this._state.pageStates[1].hw2isstarted = true
        this._state.pageStates[1].filteredAffairs = this._state.pageStates[1].initialAffairs.sort((a:any, b:any) => b.priority-a.priority)
        this._getEstTime()
        render(this)
    },

    hw3start() {
        this._state.pageStates[2].hw3isstarted = true
        render(this)
    },

    hw4start() {
        this._state.pageStates[3].hw4isstarted = true
        render(this)
    },

    _getEstTime() {
        let timeArr = this._state.pageStates[1].initialAffairs.map((a:any):number => a.weight*a.priority)
        this._state.pageStates[1].estTime = timeArr.reduce((a: number,b: number):number => a+b)
    },

    filterAffairs(filter) {
        if (filter!=='all')
        this._state.pageStates[1].filteredAffairs = this._state.pageStates[1].initialAffairs.filter((a: any) => a.priority === filter)
        else this._state.pageStates[1].filteredAffairs = this._state.pageStates[1].initialAffairs
        render(this)
    },

    changePriority(id, action) {
        this._state.pageStates[1].isCodingPresents=true
        action===1
            ? this._state.pageStates[1].initialAffairs.forEach((a:any) => a.id===id ? a.priority++ : a)
            : this._state.pageStates[1].initialAffairs.forEach((a:any) => a.id===id ? a.priority-- : a)
        this._state.pageStates[1].filteredAffairs = this._state.pageStates[1].initialAffairs.sort((a:any, b:any) => b.priority-a.priority)
        this._getEstTime()
        render(this)
    },
    deleteAffair(id) {
        this._state.pageStates[1].isCodingPresents=true
        if (id!==6) {
            this._state.pageStates[1].initialAffairs = this._state.pageStates[1].initialAffairs.filter((a:any) => a.id !== id)
            this._state.pageStates[1].filteredAffairs = this._state.pageStates[1].initialAffairs
        }
        else this._state.pageStates[1].isCodingPresents=false
        this._getEstTime()
        render(this)
    },

    dispatch(action) {    // внезапно диспатч... чисто так от скуки
        switch (action) {
            case 'click': {
                if (this._state.pageStates[3].unsubscribeButtonClicks < 2) {
                    this._state.pageStates[3].unsubscribeButtonClicks++
                }
                else {
                    this._state.pageStates[3].unsubscribeButtonClicks++
                    this._state.pageStates[3].isUnsubscribeButtonDisabled = true
                    this._state.pageStates[3].isCaptchaNeeded = true
                }
                break
            }
            case 'enableVariants': {
                this._state.pageStates[3].isVariantsEnabled = true
                break
            }
            case 'setErrorMessage': {
                if (this._state.pageStates[3].currentErrMsgIndex<3) {
                    this._state.pageStates[3].errorMessage = this._state.pageStates[3].errorMessages[this._state.pageStates[3].currentErrMsgIndex]
                    this._state.pageStates[3].currentErrMsgIndex++
                }
                break
            }
            case 'setFinalState': {
                this._state.pageStates[3].isEnd = true
            }
        }
        render(this)
    }

}


export default store