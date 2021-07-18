import React from 'react'
import getUsers from "../../api/api";
import CategorySortContainer from './CategorySort/CategorySortContainer';
import ProductList from "./ProductsList/ProductList";


class MainPage extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.data.length === 0) {
            getUsers().then(response => {
                this.props.changeHousesList(response.data);
            });
        }
    }



    render() {
        return (
            <div>
                <CategorySortContainer/>

                <ProductList data={this.props.data} sortList={this.props.sortList}/>
            </div>
        )
    }
}

export default MainPage;