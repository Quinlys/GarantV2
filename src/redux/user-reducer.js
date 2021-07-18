const CHANGE_HOUSES = 'CHANGE-HOUSES';

// const CHANGE_APARTMENTS = 'CHANGE-APARTMENTS';
// const CHANGE_COTTAGE = 'CHANGE-COTTAGE';
// const CHANGE_HOUSES = 'CHANGE-HOUSES';
// const CHANGE_GARAGES = 'CHANGE-GARAGES';
// const CHANGE_LAND = 'CHANGE-LAND';
// const CHANGE_COMMERCIAL = 'CHAMGE-COMMERCIAL';
// const CHANGE_ONE_ROOM = 'CHANGE-ONE-ROOM';
// const CHANGE_TWO_ROOMS = 'CHANGE-TWO-ROOMS';
// const CHANGE_THREE_ROOMS = 'CHANGE-THREE-ROOMS';
// const CHANGE_FOUR_PLUS_ROOMS = 'CHANGE-FOUR-PLUS-ROOMS';
// const CHANGE_RENT = 'CHANGE-RENT';
// const CHANGE_SELLINNG = 'CHANGE-SELLING';
// const CHANGE_EXCHANGE = 'CHANGE-EXCHANGE';

const CHANGE_SORT_LIST = 'CHANGE-SORT-LIST';



let initialState = {
    sortList: {
        apartments: false,
        cottage: false,
        houses: false,
        garages: false,
        land: false,
        commercial: false,
        oneRoom: false,
        twoRooms: false,
        threeRooms: false,
        fourPlusRooms: false,
        rent: false,
        selling: false,
        exchange: false,
    },
    data:   [

    ]
};

export const userReducer = (state = initialState, action) => {

    let stateCopy = {...state};
    
    switch (action.type) {
        case CHANGE_SORT_LIST:
            stateCopy.sortList = state.sortList;
            stateCopy.sortList = action.info;
            return stateCopy;
        case CHANGE_HOUSES:
            stateCopy.data = state.data;
            stateCopy.data = action.info;
            return stateCopy;
        default:
            return stateCopy;
    }
};


export const changeHousesList = (text) => ({type: CHANGE_HOUSES, info: text});
export const changeSortList = (text) => ({type: CHANGE_SORT_LIST, info: text});


