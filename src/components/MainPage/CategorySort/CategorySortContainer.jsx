import CategorySort from './CategorySort'
import {connect} from "react-redux";
import {changeSortList} from "../../../redux/user-reducer";

const mapStateToProps = (state) => {
    return {
        sortList: state.userReducer.sortList
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        changeSortList: (data) => {
            dispatch(changeSortList(data))
        }
    }
};

const CategorySortContainer = connect(mapStateToProps, mapStateToDispatch)(CategorySort);

export default CategorySortContainer
