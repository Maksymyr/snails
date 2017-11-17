import React from 'react'
import {connect} from 'react-redux'
import saleBooks from '../constants/SaleBooks'
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {saleBooks: state.saleBooks}
}


@connect(mapStateToProps)

export default class HeaderSlider extends React.Component{
  state = {
    saleBooks: [],
    left : 0,
    offsetValue: 110,
    timer: 0,
    slideWidth: 660,
    slideAmount: 1,
    indexImg: 0,
    timeOut: 4000

  }
  
  sliderInitialize=(someBooks, width, amount)=>{

    if (someBooks.length-amount<2){
      amount=someBooks.length-2
    }
    let x = width/amount-10;
    let y = width/amount;
    this.handleClickLeft = () =>{
      if(this.state.left <= -y){
      this.setState({indexImg : this.state.indexImg-1, left: this.state.left+y})
      }
    }
    this.handleClickRight = () =>{
      if(this.state.left >= -(someBooks.length-1-amount)*y){
        this.setState({indexImg : this.state.indexImg+1, left: this.state.left-y})
      }
    }
    return (
    <div className="header-slider-wrapper">
      <span className='btn btn-left' onClick={this.handleClickLeft}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></span>
      <div className='slider-block'  style={{width: width +'px', height: 0.5 * x + 'px'}}>
        <div className='slider-inline' style={{left: this.state.left+'px'}}>
     
        
        {someBooks.map((item, index) => {
        return(
        <Link to='/' key={index}><img src={item.img}  style={{width: x +'px', height: 0.5 * x + 'px'}} /></Link>
        )
        } )}
        </div>
      </div>
    <span className='btn btn-right' onClick={this.handleClickRight}><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
    </div>)
  }
  componentDidMount(){
    
    this.state.timer = setTimeout(() => {
      let x = this.state.slideWidth/this.state.slideAmount-10;
      let y = this.state.slideWidth/this.state.slideAmount;
      if(this.state.left >= -(this.props.saleBooks.length-1-this.state.slideAmount)*y){
        this.setState({indexImg : this.state.indexImg+1, left: this.state.left-y})
      }
  }, this.state.timeOut)
  }
  componentDidUpdate(){
    let x = this.state.slideWidth/this.state.slideAmount-10;
    let y = this.state.slideWidth/this.state.slideAmount;
    clearTimeout(this.state.timer);
    
    if(this.state.indexImg == this.props.saleBooks.length-1){
      this.state.timer = setTimeout(() => {
        this.setState({indexImg : 0, left: 0})
      }, this.state.timeOut)
    }
    else{
    this.state.timer = setTimeout(() => {
        this.setState({indexImg : this.state.indexImg+1, left: this.state.left-y})
    }, this.state.timeOut)
  }
}

    render () {
        if(this.props.saleBooks.length >= 1) {
        return(
            this.sliderInitialize(this.props.saleBooks, this.state.slideWidth, this.state.slideAmount)
        )
      }
      else
      return null;
    }
}