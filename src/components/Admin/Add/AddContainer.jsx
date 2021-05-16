import React from 'react'
import Add from "./Add";
import {
    addImgInputsFieldsActionCreator,
    changeCountOfRoomsActionCreator,
    changeTypeOfBuildActionCreator,
    changeTypeOfSellActionCreator
} from "../../../redux/admin-reducer";

const AddContainer = (props) => {

    let state = props.store.getState().adminReducer;

    const changeTypeOfSell = (info) => {
        props.store.dispatch(changeTypeOfSellActionCreator(info))

    };
    const changeTypeOfBuild = (info) => {
        props.store.dispatch(changeTypeOfBuildActionCreator(info))
    };
    const changeCountOfRooms = (info) => {
        props.store.dispatch(changeCountOfRoomsActionCreator(info))
    };
    const addImgInputsFields = () => {
        props.store.dispatch(addImgInputsFieldsActionCreator())
    };



    return (
        <Add
            changeTypeOfSell={changeTypeOfSell}
            changeTypeOfBuild={changeTypeOfBuild}
            changeCountOfRooms={changeCountOfRooms}
            addImgInputsFields={addImgInputsFields}
            imgInputsFields={state.imgInputsFields}
            typeSell={state.addItem.typeSell}
            typeBuild={state.addItem.typeBuild}
            countRooms={state.addItem.countRooms}
            dispatch={props.store.dispatch}
        />
    )
};

export default AddContainer
