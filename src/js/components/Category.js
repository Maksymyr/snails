import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {sideBarHide, setStick} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sideBarHide, setStick}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {books: state.books,
        visible: state.sidebar,
        category: state.category,
        stick: state.stick,

    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Category extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            toggleId: true,
            top_coord: 1,
            animate: 0,
        }
        this.handleTest = this.handleTest.bind(this);
    }
    // getCoord = (elem) => {
    //     var box = elem.getBoundingClientRect();
        
    //       return {
    //         top: box.top + pageYOffset,
    //         left: box.left + pageXOffset
    //       };
    // }
    windowHeightDetect =() =>{}

    scrolling = () => {
        window.scrollTo(0,0);
    }
    componentDidMount() {
        this.handleTest();
        window.addEventListener("resize", () => this.forceUpdate());
    }
    componentWillUnmount(){
        window.onscroll = null; 
        window.removeEventListener("resize", () => this.forceUpdate())
    }
    handleTest(e) {
        
        // var wrap = this.getCoord(this.refs.wrapp)
        window.onscroll = (e) =>{
            //console.log(this.refs.wrapp.clientHeight + ':::::::::' + this.refs.wrapp.offsetHeight + "::::::" + this.refs.wrapp.scrollHeight )
            //console.log(this.refs.wrapp.getBoundingClientRect().height)
            // console.log(this.refs.check_postion.getBoundingClientRect().top + this.refs.wrapp.getBoundingClientRect().height )
            if(this.refs.check_postion.getBoundingClientRect().top<0){

                if(window.scrollY + this.refs.wrapp.clientHeight>this.props.stick){
                    this.refs.wrapp.style.position = "relative";
                   this.refs.wrapp.style.top = `${this.props.stick - this.refs.check_postion.offsetTop - this.refs.wrapp.getBoundingClientRect().height}px`;

                }else if(this.refs.check_postion.getBoundingClientRect().top <0){
                  
                    this.refs.wrapp.style.position = "fixed"
                    this.refs.wrapp.style.top = "0"
                }
            }else{
                this.refs.wrapp.style.position = "relative"
                

            }
        }  
    }
    
    handleShow = () => {


        if(this.props.visible){
            this.refs.hide_show.style.backgroundColor ="rgba(26, 188, 156, 0.90)";  
            this.props.sideBarHide(false);

        } else {
            this.refs.hide_show.style.backgroundColor ="1ABC9C";           
            this.props.sideBarHide(true);
        }
    }

    render(){
        return(
            <div ref="check_postion">
                <div style={document.documentElement.clientWidth > 852 ? {width: "20%"} : {width: "95%", height: "70vh"}} id={this.props.visible? document.documentElement.clientWidth > 852 ? "w20" : "w100" : "w0"} 
                className={this.state.toggleId ? document.documentElement.clientWidth > 852 ? "category_wrap relative_cat" : "category_wrap fixed_cat" : "category_wrap fixed_cat"} ref="wrapp"> 
                        <div className="category_hide" ref="hide_show" onClick={this.handleShow}>Category</div>
                        <div className="category_body" ref="category_body">
                        <h3 onClick={this.handleTest} ref="title">Категории:</h3>
                            {this.props.category.map((item, index) =>
                                <Link onClick={this.scrolling} key={index} className="category__link" to={"/category" + index}>{item}</Link>)}
                        </div>
                    </div>
            </div>
        )
    }   
}