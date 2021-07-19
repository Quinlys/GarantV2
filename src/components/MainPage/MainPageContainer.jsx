import MainPage from './MainPageC'
import {connect} from "react-redux";
import {changeHousesList} from "../../redux/user-reducer";

const mapStateToProps = (state) => {
    return {
        data: state.userReducer.data,
        sortList: state.userReducer.sortList,
        readyData: state.userReducer.readyData
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        changeHousesList: (data) => {
            dispatch(changeHousesList(data))
        }
    }
};

const MainPageContainer = connect(mapStateToProps, mapStateToDispatch)(MainPage);

export default MainPageContainer
