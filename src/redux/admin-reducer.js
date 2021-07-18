const CHANGE_TYPE_OF_SELL = 'CHANGE-TYPE-OF-SELL';
const CHANGE_TYPE_OF_BUILD = 'CHANGE-TYPE-OF-BUILD';
const CHANGE_COUNT_OF_ROOMS = 'CHANGE-COUNT-OF-ROOMS';
const ADD_IMG_INPUTS_FIELDS = 'ADD-IMG-INPUTS-FIELDS';

// const ADD_IMG = 'ADD-IMG';
// const ADD_LONG_DESCRIPTION = 'ADD_LONG_DESCRIPTION';
// const ADD_DESCRIPTION = 'ADD_DESCRIPTION';



let initialState = {
    imgInputsFields: 1,
    addItem: {
        img: '',
        typeSell: '',
        typeBuild: '',
        countRooms: '',
        description: '',
        longDescription: '',
        price: '',
        address: ''
    }
};

export const adminReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch(action.type) {
        case ADD_IMG_INPUTS_FIELDS:
            stateCopy.imgInputsFields = state.imgInputsFields;
            stateCopy.imgInputsFields++;
            return stateCopy;
        case CHANGE_TYPE_OF_SELL:
            stateCopy.addItem.typeSell = state.addItem.typeSell;
            stateCopy.addItem.typeSell = action.info;
            return stateCopy;
        case CHANGE_TYPE_OF_BUILD:
            stateCopy.addItem.typeBuild = state.addItem.typeBuild;
            stateCopy.addItem.typeBuild = action.info;
            return stateCopy;
        case CHANGE_COUNT_OF_ROOMS:
            stateCopy.addItem.countRooms = state.addItem.countRooms;
            stateCopy.addItem.countRooms = action.info;
            return stateCopy;
        // case ADD_IMG:
        //     stateCopy.addItem.img = state.addItem.img;
        //     stateCopy.addItem.img = action.img;
        //     return stateCopy;
        // case ADD_DESCRIPTION:
        //     stateCopy.addItem.description = state.addItem.description;
        //     stateCopy.addItem.description = action.info;
        //     return stateCopy;
        // case ADD_LONG_DESCRIPTION:
        //     stateCopy.addItem.longDescription = state.addItem.longDescription;
        //     stateCopy.addItem.longDescription = action.info;
        //     return stateCopy;
        default:
            return stateCopy;

    }
};

export const addImgInputsFieldsActionCreator = () => ({type: ADD_IMG_INPUTS_FIELDS});
export const changeTypeOfSellActionCreator = (text) => ({type: CHANGE_TYPE_OF_SELL, info: text});
export const changeTypeOfBuildActionCreator = (text) => ({type: CHANGE_TYPE_OF_BUILD, info: text});
export const changeCountOfRoomsActionCreator = (text) => ({type: CHANGE_COUNT_OF_ROOMS, info: text});
