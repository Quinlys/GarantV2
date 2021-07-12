import React from 'react'
import getUsers from "../../api/api";
import CategorySort from './CategorySort/CategorySort';
import ProductList from "./ProductsList/ProductList";


class MainPage extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.data.length === 0) {
            getUsers().then(response => {
                this.props.changeHousesList(response.data);
            });
        }
        console.log(this.props);


    }



    render() {
        return (
            <div>
                <CategorySort/>

                <ProductList data={this.props.data}/>
            </div>
        )
    }
}

export default MainPage;