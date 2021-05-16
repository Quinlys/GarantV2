import {adminReducer} from "./admin-reducer";
import {rerenderEntireTree} from "..";

let store = {
    _state: {
        mainPage: {
            data:   [
                {
                    id: 1,
                    img: ['https://img.lunstatic.net/building-440x330/40188.jpg','https://img.lunstatic.net/building-440x330/40188.jpg','https://img.lunstatic.net/building-440x330/40188.jpg','https://img.lunstatic.net/building-440x330/40188.jpg'],
                    type: 1,
                    description: 'strias;kldasl;kdjhkdskjasdkldjklaskdjkdkhladslkhasd;asdalskdng',
                    longDescription: 'longString  lofadsndadjasdnsadaskdljad;ibjasdjadabdn;dsaskdfjksfnsw;newpijfbwihofcbwdicwoifwowhwejofbjj',
                    price: '111 211$',
                    address: 'Кри8'
                },
                {
                    id: 2,
                    img: ['https://img.lunstatic.net/building-440x330/40188.jpg'],
                    type: 1,
                    description: 'string',
                    longDescription: 'longString',
                    price: '111 211$',
                    address: 'Кри8'
                },
                {
                    id: 3,
                    img: ['https://img.lunstatic.net/building-440x330/40188.jpg'],
                    type: 2,
                    description: 'string',
                    longDescription: 'longString',
                    price: '111 111$',
                    address: 'Крипякча 8'
                },
                {
                    id: 4,
                    img: ['https://img.lunstatic.net/building-440x330/40188.jpg'],
                    type: 3,
                    description: 'ring',
                    longDescription: 'longString',
                    price: '111 211$',
                    address: 'Крипякевича 2'
                }
            ]
        },
        adminPage: {
            imgInputsFields: 1,
            addItem: {
                id: '',
                img: '',
                typeSell: '',
                typeBuild: '',
                countRooms: '',
                description: '',
                longDescription: '',
                price: '',
                address: ''
            }
        },
    },
    getState() {
      return this._state;
    },
    dispatch(action) {
        this._state.adminPage = adminReducer(this._state.adminPage, action);

        rerenderEntireTree(this)

    }
};



export default store;
window.store = store;