import Add from "./Add";
import {
    addImgInputsFieldsActionCreator,
    changeCountOfRoomsActionCreator,
    changeTypeOfBuildActionCreator,
    changeTypeOfSellActionCreator,
    // addImg,
    // addDescription,
    // addLongDescription
} from "../../../redux/admin-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Cookie from 'js-cookie'

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
        },
        // addImg: (info) => {
        //     dispatch(addImg(info))
        // },
        // addLongDescription: (info) => {
        //     dispatch(addLongDescription(info))
        // },
        // addDescription: (info) => {
        //     dispatch(addDescription(info))
        // },
        addHouseToDB:  (img, typeSell, typeBuild, CountRooms, longDescription, price, address, description) => {
            const headers = {
                'Authorization': "Bearer " + Cookie.get('id')
            };
            debugger;
            axios.post('https://api.garantbd.pp.ua/posts', {
                img: img,
                typeSell: typeSell,
                typeBuild: typeBuild,
                CountRooms: CountRooms,
                longDescription: longDescription,
                price: price,
                address: address,
                description: description,
            }, {
                headers: headers
            }).then (function (response) {
                debugger;
                document.location.replace('/admin')
            }).catch( function (error) {
                debugger;
                document.location.replace('/errorPage')
            })
        }
    }
};

const AddContainer = connect(mapStateToProps, mapStateToDispatch)(Add);

export default AddContainer
