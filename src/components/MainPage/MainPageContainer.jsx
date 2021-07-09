import MainPage from './MainPage'
import {connect} from "react-redux";
import {changeHousesList} from "../../redux/user-reducer";

const mapStateToProps = (state) => {
    return {
        data: state.userReducer.data
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        changeHousesList: (info) => {
            dispatch(changeHousesList(info))
        }
    }
};

const MainPageContainer = connect(mapStateToProps, mapStateToDispatch)(MainPage);




export default MainPageContainer
