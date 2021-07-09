import Add from "./Add";
import {
    addImgInputsFieldsActionCreator,
    changeCountOfRoomsActionCreator,
    changeTypeOfBuildActionCreator,
    changeTypeOfSellActionCreator
} from "../../../redux/admin-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        imgInputsFields: state.adminReducer.imgInputsFields,
        typeSell: state.adminReducer.addItem.typeSell,
        typeBuild: state.adminReducer.addItem.typeBuild,
        countRooms: state.adminReducer.addItem.countRooms
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        changeTypeOfSell: (info) => {
            dispatch(changeTypeOfSellActionCreator(info))
        },
        changeTypeOfBuild: (info) => {
            dispatch(changeTypeOfBuildActionCreator(info))
        },
        changeCountOfRooms: (info) => {
            dispatch(changeCountOfRoomsActionCreator(info))
        },
        addImgInputsFields: () => {
            dispatch(addImgInputsFieldsActionCreator())
        }
    }
};

const AddContainer = connect(mapStateToProps, mapStateToDispatch)(Add);

export default AddContainer
