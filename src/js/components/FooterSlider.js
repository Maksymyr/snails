import React from 'react'
import {connect} from 'react-redux'
import watchedBooks from '../constants/watchedBooks'
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {watchedBooks: state.watchedBooks}
}


@connect(mapStateToProps)
export default class FooterSlider extends React.Component{
  state = {
    watchedBooks: [],
    left : 0,
    offsetValue: 110

  }

  
  sliderInitialize=(someBooks, width, amount)=>{
    if (someBooks.length-amount<2){
      amount=someBooks.length-2
    }
    let x = width/amount-10;
    let y = width/amount;
    this.handleClickLeft = () =>{
      if(this.state.left <= -y){
      this.setState({left: this.state.left+y})
      }
    }
    this.handleClickRight = () =>{
      if(this.state.left >= -(someBooks.length-1-amount)*y){
        this.setState({left: this.state.left-y})
      }
    }
    return (
    <div className="footer-slider-wrapper">
      <h2>Недавно просмотренные товары</h2>
      <span className='btn btn-left' onClick={this.handleClickLeft}>&#60;</span>
      <div className='slider-block'  style={{width: width +'px', height: 1.5 * x + 'px'}}>
        <div className='slider-inline' style={{left: this.state.left+'px'}}>
        
        {someBooks.map((item, index) => {
        return(
        <Link to='/' key={index}><img src={item.img}  style={{width: x +'px', height: 1.5 * x + 'px'}} /></Link>
        )
        } )}
        </div>
      </div>
    <span className='btn btn-right' onClick={this.handleClickRight}>&#62;</span>
    </div>)
  }
    // componentDidMount(){
    //   this.setState({watchedBooks})

    // }

    render () {
        if(this.props.watchedBooks.length >= 5) {
        return(
           
              this.sliderInitialize(this.props.watchedBooks, 660, 3)

        )
      }
      else
      return null;
    }
}