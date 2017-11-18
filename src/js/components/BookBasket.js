import React from 'react';
import Basket from './Basket'
import {connect} from 'react-redux';
import {delfrombasket} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => ( bindActionCreators({ delfrombasket }, dispatch) );
const mapStateToProps = (state) => {
    return {book: state.inbasket}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class BookBasket extends React.Component {
    constructor(props){
        super(props)
    }
    state={
        price: ''
    }

    componentDidMount = () =>{
        if(this.props.book !=""){
            let a=0;
            this.props.book.map((item)=>{if(item.code==this.props.books.code){a=a+1}})
            this.refs.number.value=a;
            this.setState({price:a})
        }
    }
    handlePrice = () => {
        this.setState({price: this.refs.number.value})
    }

    bookbuy = () =>{
        // let a=0;
        // for(var i=0; i<this.props.book.length; i++){
        //     console.log('4s')
        // if(this.props.book[i].code==this.props.books.code){
        //     a=a+1
        // }
        // if(a==1){
        //     console.log('1s')
            return(
                <div className="basket_item">
                    <div onClick={this.del} className="delete_butn" style={{backgroundImage: 'url('+ require("../../icon/delete_from_basket.png")+')'}}></div>
                    <div className="book_about">
                        <img  src={this.props.books.img}/>
                        <div className="top_part">
                            <h3 className="basket_book_name">{this.props.books.name}</h3>
                            <p className="summ">Сумма</p>
                        </div>
                        <div className="prices">
                            <div className="elem_price">{`${this.props.books.price} грн.`}</div>

                            <div className="input_container">
                                <input onChange={this.handlePrice} className='basket-number' type='number' ref='number' defaultValue={this.state.price} min='1' max='99'/>
                            </div>
                            
                            <span className="main_price">{`${this.props.books.price*this.state.price} грн.`}</span>
                        </div>                        
                    </div>

                </div>





                
                // <div className='basket-book-wrapper'>
                //     <div key={this.props.index} className='basket-book-one'>
                //     <img className='basket-book-block basket-img' src={this.props.books.img}/>
                //     <div className='basket-book-block name-book'>
                //     <h3>{this.props.books.name}</h3>
                //     </div>
                //     <div className='basket-book-block cost'>
                //         <p>{this.props.books.price*this.state.price}</p>
                //     </div>
                //     <div className='basket-book-block basket-input'>
                //         <input onChange={this.handlePrice} className='basket-number' type='number' ref='number' defaultValue={this.state.price} min='1' max='99'/>
                //     </div>
                //     <button className='basket-book-block basket-button' onClick={this.del}>Удалить</button>
                // </div>
                // </div>
            )
        // }else{
        //     console.log('2s')
        //     return null
        // }
        // }
        // return null
    }

    del = () =>{
        this.props.delfrombasket(this.props.index)
    }

    render() {
            return this.bookbuy()
    }
}