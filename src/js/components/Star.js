import React from 'react';
import { bindActionCreators} from 'redux';
import {rateBook} from '../actions';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => ( bindActionCreators({rateBook}, dispatch) );

@connect (null, mapDispatchToProps)
export default class Book extends React.Component {
    constructor(props){
        super(props)
    }
    
    handleRate = () => {
        //console.log(this)
        //console.log(this.props.data)
        let rate_obj = {
            book_code: this.props.code,
            rate: this.props.data +1
        }
        // console.log(rate_obj)
        this.props.rateBook(rate_obj)
    }

    render(){
        return(
        <div>
            <div id={this.props.bookPage? "star" : null} className={this.props.empty? "star_empty":"star"} onClick={this.handleRate} style={this.props.empty? {backgroundImage: 'url('+ require("../../icon/bookstar_zero.png")+')'} : {backgroundImage: 'url('+ require("../../icon/bookstar_fill.png")+')'}}></div>
        </div>
        )
    }
}    //style={{backgroundImage: 'url('+ require("../../icon/bookstar_fill.png")+')'}}