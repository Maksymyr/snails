import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {likePost} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({likePost}, dispatch)
}
const mapStateToProps = (state, ownProps) => {
    return {books: state.books}
 }

@connect(mapStateToProps, mapDispatchToProps)
export default  class BookPage extends React.Component{
    constructor(props){
        super(props)
    }

    handleLike = () =>{
        let obj = {
            book: this.props.book.code,
            comment: this.props.id,
            data: 1
        }
        this.props.likePost(obj)

    }
    handleDiss = () => {
        let obj = {
            book: this.props.book.code,
            comment: this.props.id,
            data: 2
        }
        this.props.likePost(obj)
    }

    render(){
        
        return(
            <div>
            <p className="comment_name inline">Andrey</p>
            <p className="comment_data inline">Nov 4, 2017</p>
            <p className="comment_title">{this.props.item.title}</p>
            <div className="comment_desc">
                {this.props.item.desc}
                 <div className="likes">
                    <div onClick={this.handleDiss} className="disslike" style={this.props.book.comments[this.props.id].like == 2? {backgroundImage: 'url('+ require("../../icon/disslike_fill.png")+')'} : {backgroundImage: 'url('+ require("../../icon/disslike_zero.png")+')'}}></div> 
                    <div onClick={this.handleLike} className="like" style={this.props.book.comments[this.props.id].like == 1? {backgroundImage: 'url('+ require("../../icon/like_fill.png")+')'} : {backgroundImage: 'url('+ require("../../icon/like_zero.png")+')'}}></div>
                </div> 
            </div>
            </div>
        )
    }

}    