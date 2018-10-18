import React, { Component } from 'react';
import PageTop from '../utils/page_top';


import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';


class Product extends Component {
     



    render() {
        return (
            <div>
                <PageTop
                    title="Product detail"
                />
                <div className="container">
                    <h1> product page here </h1>

                </div>
                <div className="container">
                    <h2>Product Page!</h2>
                    <h3> name: {this.props.user.name} </h3>

                </div>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default Product;