import {render} from "../index";
import ava from "./../images/ava.png"
import facepalm from "./../images/facepalm.jpg"

type storeType = {
    _state: {
        initialMessages: Array<any>
        currentPage: number
        hw1isstarted: boolean
        messagesAmount: number
        messages: Array<any>
    }
    getState: () => any
    toNextPage: () => any
    toPrevPage: () => any
    hw1start: () => any
}

let store: storeType = {
    _state: {
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
        currentPage: 1,
        hw1isstarted: false,
        messagesAmount: 0,
        messages: []
    },
    getState() {
        return this._state
    },

    toNextPage() {
        this._state.currentPage++
        render(this)
    },

    toPrevPage() {
        this._state.currentPage--
        render(this)
    },

    async hw1start() {
        this._state.hw1isstarted = true
        let checkAddingZero = (a: number) => a < 10 ? '0' + a : a
        for (let i = 0; i < 3; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000 + (i + 2) * (i - 1) * 500))
            let time = new Date()
            this._state.messagesAmount++
            this._state.initialMessages[i].time =
                checkAddingZero(time.getHours())
                + ':' + checkAddingZero(time.getMinutes())
                + ':' + checkAddingZero(time.getSeconds())
            this._state.messages.push(this._state.initialMessages[i])
            render(this)
        }
    }
}

export default store