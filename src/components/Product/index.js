import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import ProdNfo from './prodNfo';
import ProdImg from './prodImg';

import { connect } from 'react-redux';  // when we get the ID of the product, we need to fetch the information
import { addToCart } from '../../actions/user_actions';
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';



class Product extends Component {
     
     // fetch the information
    componentDidMount(){
        const id = this.props.match.params.id;
        // console.log(id)
        // checked for getting the id correctly. 
        this.props.dispatch(getProductDetail(id)).then(response=>{
            console.log('No product found') // we can redirect to home page or a not found page.
            if(!this.props.products.prodDetail){
                this.props.history.push('/'); //redirected to home. 
            }
        })

    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }

    addToCartHandler(id){
        //console.log(id);
        this.props.dispatch(addToCart(id))
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
                            images:
                            <div style={{width:'500px'}}>
                                <ProdImg
                                    detail={this.props.products.prodDetail}
                                />
                            </div>
                        </div>
                        <div className="right">
                            <ProdNfo
                                addToCart={(id)=> this.addToCartHandler(id)}
                                detail={this.props.products.prodDetail}
                            />
                        </div>
                    </div>

                    :'Loading'
                }    

                </div>
                <div className="container">
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