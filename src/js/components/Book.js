import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {addNotify, futureBook, addBasket, sideBarHide} from '../actions';
import Star from '../components/Star'

const mapDispatchToProps = dispatch => ( bindActionCreators({ addNotify, futureBook, addBasket, sideBarHide }, dispatch) );

const mapStateToProps = (state, ownProps) => {
    return {books: state.books, futured: state.futured, code: state.code, visible: state.sidebar}
}


@connect (mapStateToProps, mapDispatchToProps)
export default class Book extends React.Component {

    state = {
        flag: 0,

    }

    handleBasket =(e) => {
        e.preventDefault();
        this.props.addBasket(this.props.item)
        this.props.addNotify("В корзину добавлен новый товар!")
    }
    handleClick = () => {
        this.props.futureBook(this.props.item.code)  
    }
    scrolling = () => {
        window.scrollTo(0,0);
    }
    handleAlert = () => {
        console.log(this)
        // console.log(this.refs[])
    }
    star = (x) =>{
        let stars = [];

        for(let i = 4; i>=0; i--){
            if(i<x){
                stars.push(<Star bookPage={false} code={this.props.item.code} data={i} key={i} ></Star>)
            } else{
                stars.push(<Star bookPage={false} code={this.props.item.code} empty={true} data={i}  key={i} ></Star>)
            }
        }
        return stars;
    }

    render() {

            return (
            <div className="book">
                <p className="book_price">{this.props.item.price + " грн."}</p>
                <a id="book_buy" onClick={this.handleBasket} href="#btn">Купить</a>
                <div className="book-inner">

                     <div className="future" ref="futures" style={this.props.item.futured?{backgroundImage: 'url('+ require("../../icon/heart-fill.png")+')'}:{backgroundImage: 'url('+ require("../../icon/heart-empty1.png")+')'} } onClick={this.handleClick}></div> 

                    <Link onClick={this.scrolling} to={"/page"+this.props.item.code}><img src={this.props.item.img? this.props.item.img: require('../../image/no-image.png')}/></Link>
                    <div className="book_stars">
                        
                        {this.star(this.props.item.rating)}

                    </div>
                    <div className="clear"></div>
                    <p className="book_text"><Link onClick={this.scrolling} className="book_link" to={"/page"+this.props.item.code}>{this.props.item.name}</Link></p>
                    <p className="book_author"><Link onClick={this.scrolling} className="book_link" to={"/author/"+this.props.item.author}>{this.props.item.author}</Link></p>
                    {this.props.item.seria? <p className="book_seria">{"Серия: " +this.props.item.seria}</p>: null}
                    
                    
                    
                </div>
            </div>
        )
    }
}