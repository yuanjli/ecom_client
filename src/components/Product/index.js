import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import ProdNfo from './prodNfo';

import { connect } from 'react-redux';  // when we get the ID of the product, we need to fetch the information
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';



class Product extends Component {
     
     // fetch the information
    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id)
        // checked for getting the id correctly. 
        this.props.dispatch(getProductDetail(id))

    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }


    render() {
        return (
            <div>
                <PageTop
                    title="Product detail"
                />
                <div className="container">
                    <h1> product page here </h1>
                {
                    this.props.products.prodDetail ?
                    <div className="product_detail_wrapper">
                        <div className="left">
                            images
                        </div>
                        <div className="right">
                            <ProdNfo
                                addToCard={(id)=> this.addToCartHandler(id)}
                                detail={this.props.products.prodDetail}
                            />
                        </div>
                    </div>

                    :'Loading'
                }    

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

export default connect(mapStateToProps)(Product);