import Login from "./Login";
import {
    addImgInputsFieldsActionCreator,
    changeCountOfRoomsActionCreator,
    changeTypeOfBuildActionCreator,
    changeTypeOfSellActionCreator
} from "../../redux/admin-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state
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

const LoginContainer = connect(mapStateToProps, mapStateToDispatch)(Login);

export default LoginContainer
