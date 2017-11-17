import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import BookPageComment from '../components/BookPageComment'
import {bindActionCreators} from 'redux';
import {addComment, addNotify, addWatchedBooks, addBasket} from '../actions';
import Star from '../components/Star'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addComment, addNotify,addWatchedBooks,addBasket}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    
    return {item: state.books.find((item, index) => {
        if(item.code == ownProps.match.params.id) {
            return item}
    }), books: state.books}
 }
 
 @connect (mapStateToProps, mapDispatchToProps)
export default  class BookPage extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        like: false,
        disslike: false,
    }
    
    componentDidMount() {
        this.props.addWatchedBooks(this.props.item)
    }
    handleClick = () => {
        if(this.refs.desc.value != "" && this.refs.title.value != ""){    
            let obj = {
                info: {
                    title: this.refs.title.value,
                    desc: this.refs.desc.value,
                    like: 0
                },
                code: this.props.item.code
            }
            this.props.addComment(obj)
            this.refs.title.value = "";
            this.refs.desc.value = "";
        }
    } 
    handleLike = () =>{
        this.setState({like: !this.state.like})
        // console.log(this)
    }
    handleDiss = () => {
        this.setState({disslike: !this.state.disslike})
    }
    bought = () => {
        this.props.addBasket(this.props.item)
        this.props.addNotify("В корзину добавлен новый товар!")
    }
    star = (x) =>{
        let stars = [];

        for(let i = 0; i<5; i++){
            if(i<x){
                stars.push(<Star bookPage={true} code={this.props.item.code} data={i} key={i} ></Star>)
            } else{
                stars.push(<Star bookPage={true} code={this.props.item.code} empty={true} data={i}  key={i} ></Star>)
            }
        }
        return stars;
    }
    render(){
        var counter = 0;
        return(
            <div className="book_page">
                
                    <img id="imeg2" src={this.props.item.img} />
                    <h1 className="page_title">{this.props.item.name}</h1>
                    <p className="page_info"><span>Автор:</span> {this.props.item.author}</p>
                    <p className="page_info"><span>Жанр:</span> {this.props.item.type}</p>
                    {this.props.item.seria ? <p className="page_info"><span>Серия:</span> {this.props.item.seria}</p> : null}
                    <div className="star_container">

                    {this.star(this.props.item.rating)}
                    
                    </div>
                    <div className="price_container">
                    <p id="page_price">{this.props.item.price} грн.</p>
                    <div id="page_buy" onClick={this.bought}>Купить</div>
                    </div>

                    <div className="clear"></div>

                    <h3>Описание книги:</h3>
                    <div>
                    <p className="page_description">{this.props.item.description}</p>
                    <h3>Другие книги автора: </h3>
                    <div className="similar">

                        {this.props.books.map((itm, index) => {
                            
                            if(this.props.item.author == itm.author && counter <=2 ){
                                counter++
                                // console.log(index)
                                return  <Link to={`page${itm.code}`} key={index}><div  className="small_book">
                                        <img id="imeg" src={itm.img}/>
                                        <p>{itm.name}</p>
                                        </div></Link>
                            }
                        })}
                    </div>
                    </div>

                    <div className="clear"></div>
                    
                    <h3>Отзывы & Обзоры</h3>
                    <div className="review">
                    <p className="page_info"><span>Написать отзыв</span></p>
                    <input ref="title" type="text"/>
                    <textarea ref="desc" rows="10" type="text"/>
                    <button onClick={this.handleClick}>Отправить</button>
                    </div>
                    
                    { this.props.item.comments.length != 0 ? this.props.item.comments.map((item, index) => 
                    <div className="comment" key={index}> 
                        <BookPageComment book={this.props.item} id={index} item={item}/>
                    </div>) : null} 


            </div>
        )
    }
}