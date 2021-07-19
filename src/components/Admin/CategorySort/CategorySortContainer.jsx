import CategorySort from './CategorySort'
import {connect} from "react-redux";
import {changeSortList, changeReadyData} from "../../../redux/user-reducer";

const mapStateToProps = (state) => {
    return {
        sortList: state.userReducer.sortList,
        data: state.userReducer.data,
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        changeSortList: (data) => {
            dispatch(changeSortList(data))
        },
        changeReadyData: (sortList, cardsData) => {
            let cards = [...cardsData];
            if (sortList.apartments || sortList.cottage || sortList.houses || sortList.garages || sortList.land || sortList.commercial || sortList.oneRoom || sortList.twoRooms || sortList.threeRooms || sortList.fourPlusRooms) {
                for (let i = 0; i < cards.length; i++) {
                    if (sortList.apartments === false && (cards[i].typeBuild === 'Квартира')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.cottage === false && (cards[i].typeBuild === 'Дача')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.houses === false && (cards[i].typeBuild === 'Будинок')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.garages === false && (cards[i].typeBuild === 'Гараж')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.land === false && (cards[i].typeBuild === 'Земля')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.commercial === false && (cards[i].typeBuild === 'Комерційна нерухомість')) {
                        cards.splice(i, 1);
                        i--;
                    }
                }
            }
            
            if ((sortList.apartments || sortList.cottage || sortList.houses) && (sortList.oneRoom || sortList.twoRooms || sortList.threeRooms || sortList.fourPlusRooms)) {
                for (let i = 0; i < cards.length; i++) {
                    if (sortList.oneRoom === false && (cards[i].countRooms === '1')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.twoRooms === false && (cards[i].countRooms === '2')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.threeRooms === false && (cards[i].countRooms === '3')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.fourPlusRooms === false && (cards[i].countRooms === '4')) {
                        cards.splice(i, 1);
                        i--;
                    }
                }
            }

            if (sortList.rent || sortList.selling || sortList.exchange) {
                for (let i = 0; i < cards.length; i++) {
                    if (sortList.rent === false && (cards[i].typeSell === 'Оренда')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.selling === false && (cards[i].typeSell === 'Продаж')) {
                        cards.splice(i, 1);
                        i--;
                        continue
                    }
                    if (sortList.exchange === false && (cards[i].typeSell === 'Обмін')) {
                        cards.splice(i, 1);
                        i--;
                    }
                }
            }

            if (cards.length === 0) {
                cards.empty = true;
            }

                dispatch(changeReadyData(cards))
        }
    }
};

const CategorySortContainer = connect(mapStateToProps, mapStateToDispatch)(CategorySort);

export default CategorySortContainer
