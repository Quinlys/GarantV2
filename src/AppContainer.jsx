import App from './AppC'
import {connect} from "react-redux";
import {changeHousesList} from "./redux/user-reducer";

const mapStateToProps = (state) => {
    return {
        data: state.userReducer.data,
        state: state
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        changeHousesList: (data) => {
            dispatch(changeHousesList(data))
        }
    }
};

const AppContainer = connect(mapStateToProps, mapStateToDispatch)(App);

export default AppContainer
