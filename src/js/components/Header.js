import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {searchBook} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchBook}, dispatch)
}

@withRouter
@connect(null, mapDispatchToProps)
export default class Header extends React.Component {

    state = {
        left: 0,
        firstChild: {}
    }

    search=(event)=>{
        if (event.key === "Enter") {
            let t= this.refs.search.value
            this.refs.search.value='';
            this.props.searchBook(t);
            return (this.props.history.push(`/search/${t}`))
        }
    }


    
    // headerSlider(width){
        
    //     this.setState({firstChild: document.getElementById('headerSlider').firstChild})
    //     setInterval(() => {

    //         let width = this.refs.headerSlideImg.getBoundingClientRect().width
        
    //             if(this.state.firstChild.getBoundingClientRect().left  == -width) {
    //                 document.getElementById('headerSlider').appendChild(document.getElementById('headerSlider').firstChild)

    //                 this.setState({left: "-1px", firstChild: document.getElementById('headerSlider').firstChild});
    //             }
    //          else{this.setState({left: parseInt(this.state.left)-1+'px'});
    //         }}, 50)
        
    // }
    componentDidMount = () =>{
        // if (document.documentElement.clientWidth > 852) {
        //     this.headerSlider()}
        //     else null
        window.addEventListener("resize", () => this.forceUpdate())
    }
    componentWillUnmount () {
        window.removeEventListener("resize", () => this.forceUpdate())
    }

    scrolling = () => {
        window.scrollTo(0,0);
    }
    scrollingUp = () => {
        window.scrollTo(0,0);
    }
    render(){
        // style={document.documentElement.clientWidth > 852 ? {height: 400+"px"} : {height: 300+"px"}}
        return(
            <header  className="header">
                <div className='head-center'>
                <Link to='/' onClick={this.scrollingUp}className='logo-wrapper'> 
                    <div style={{backgroundImage: 'url('+ require("../../image/logo.png")+')'}} className='logo-snail'></div>
                    <h1 className="page-title">Snails</h1>
                </Link>
                <div className='header-nav'>
                <form>
                    <input type='search' onKeyPress={this.search} className='menu search' ref='search' placeholder='Поиск' />
                    <button className='menu search-icon'><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
                
                
                <nav>
                <Link to='/buy' onClick = {this.scrolling}><div className='menu-links menu buy'>Купленные книги</div></Link>
                <Link to={'/basket'+"l_d"} onClick = {this.scrolling}><div className='menu-links menu love'>Понравившиеся книги</div></Link>
                <Link to='/basket' className='menu-links menu' onClick = {this.scrolling}>Корзина<i className="menu-cart fa fa-shopping-cart" aria-hidden="true"></i></Link>
                </nav>
                    
                </div> 
                </div>
                <div className='bottom-line'></div>
                {/* {document.documentElement.clientWidth > 852 ?
                    <div className='header-slider-wrapper'>
                        <div id='headerSlider' className='header-slider'   style={{left: this.state.left}}>
                            <div ref='headerSlideImg' style={{backgroundImage: 'url('+ require("../../image/snails_team.png")+')'}} className='header-img'></div>
                            {/* <div ref='headerSlideImg2' style={{backgroundImage: 'url('+ require("../../image/snails_team.png")+')'}} className='header-img'></div> */}
                            {/* <div ref='headerSlideImg3' style={{backgroundImage: 'url('+ require("../../image/fill _books.png")+')'}} className='header-img'></div> */}
                        {/* </div> */}
                    {/* </div>
                :  <div ref='headerSlideImg'></div> } */}
            </header>
        );
    }
}