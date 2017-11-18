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
            return (this.props.history.push(`/snails/search/${t}`))
        }
    }

    componentDidMount = () =>{

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
 
        return(
            <header  className="header">
                <div className='head-center'>
                <Link to='/snails/' onClick={this.scrollingUp}className='logo-wrapper'> 
                    <div style={{backgroundImage: 'url('+ require("../../image/logo.png")+')'}} className='logo-snail'></div>
                    <h1 className="page-title">Snails</h1>
                </Link>
                <div className='header-nav'>
                <form>
                    <input type='search' onKeyPress={this.search} className='menu search' ref='search' placeholder='Поиск' />
                    <button className='menu search-icon'><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
                
                
                <nav>
                <Link to='/snails/buy' onClick = {this.scrolling}><div className='menu-links menu buy'>Купленные книги</div></Link>
                <Link to={'/snails/basket'+"l_d"} onClick = {this.scrolling}><div className='menu-links menu love'>Понравившиеся книги</div></Link>
                <Link to='/snails/basket' className='menu-links menu' onClick = {this.scrolling}>Корзина<i className="menu-cart fa fa-shopping-cart" aria-hidden="true"></i></Link>
                </nav>
                    
                </div> 
                </div>
                <div className='bottom-line'></div>

            </header>
        );
    }
}