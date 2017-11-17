
import React from 'react';
import { addBook , addCategory, fetchData, apiData} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {withRouter} from 'react-router-dom';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addBook, addCategory, fetchData, apiData}, dispatch)
}

const mapStateToProps = (state) => {
    return {state: state, api: state.api}
}



@connect(mapStateToProps, mapDispatchToProps)
export default class AdminPanel extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this); 
        this.handleGoogle = this.handleGoogle.bind(this)
    }

    handleGoogle() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.refs.api.value}&maxResults=1&startIndex=1`)
        .then(res => res.json())
        .then(res => {
            
                this.refs.title.value = res.items[0].volumeInfo.title;
                this.refs.author.value = res.items[0].volumeInfo.authors[0];
                this.refs.type.value = res.items[0].volumeInfo.categories[0];
                this.refs.description.value = res.items[0].volumeInfo.description;
                this.refs.image.value = res.items[0].volumeInfo.imageLinks.thumbnail;
            
            this.props.addBook(api_book)
            this.props.fetchData(res.items);
        })
        .catch(err => {
            console.log("Ошибка запроса")
        
        })
        this.refs.api.value = '';
        
        
        //console.log(this.props.api)
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_book = {

                comments: [],
                name: this.refs.title.value,
                author: this.refs.author.value,
                price: this.refs.price.value,
                type: this.refs.type.value,
                seria: "",
                img: this.refs.image.value,
                description: this.refs.description.value,
                futured: false,
                code: this.props.state.books.length,
                rating: 0,
                inStock:true,

            };
            this.props.addBook(new_book);
            this.props.addCategory(new_book.type);
            this.refs.title.value = '';
            this.refs.author.value = '';
            this.refs.price.value = '';
            this.refs.type.value = '';
            this.refs.series.value = '';
            this.refs.image.value = '';
            this.refs.description.value = '';
        }
    };

    render() {
        return (
            <div className="add-book clearfix">
                <h3 className='clearfix'>Добавить новую книгу</h3>
                
                <form className='admin-form clearfix' onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Имя книги"/>
                    <input type="text" ref="author" placeholder="Автор книги"/>
                    <input type="text" ref="price" placeholder="Цена книги"/>
                    <input type="text" ref="type" placeholder="Тип книги"/>
                    <input type="text" ref="series" placeholder="Серия книги"/>
                    <input type="text" ref="image" placeholder="Картинка книги"/>


                    <textarea ref="description" placeholder="Описание книги"/>
                    <button type="submit">Добавить новую книгу</button>
                </form>

                <input id="api_search" ref="api" type="text"/>
                <button id="api_btn" onClick={this.handleGoogle}>Google API</button>
            </div>
        );
    }
}