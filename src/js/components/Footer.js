import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStick} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setStick}, dispatch)
}
const mapStateToProps = (state, ownProps) => {
   return {stick: state.stick}
}

@connect (mapStateToProps, mapDispatchToProps)
export default class Footer extends React.Component{

    componentDidMount () {
        //this.handleScrollStick()
        setTimeout(() => {
            // console.log(this.refs.footer.offsetTop)
            this.props.setStick(this.refs.footer.offsetTop)
        }, 1000);
        
        
    }

    // handleScrollStick = () => {
    //     window.onscroll = () => {

    //         this.props.setStick()
    //     }
    // }

    render(){

        // handleOnSubscribe = (event) => {
            
        //     console.log(this.refs)
        //     for(let key in this.refs){
        //         if(this.refs[key].value == ""){
        //             event.preventDefault();
        //             alert("fill in the form");
        //             this.refs[key].focus();
        //             break;
        //         }
        //         else{
        //             if(this.refs.passwordInput.value != this.refs.passwordInput2.value){
        //                 event.preventDefault();
        //                 alert("Wrong Password");
        //                 this.refs.passwordInput.focus()
        //             }
        //         }
        //     }
            
    
        // }
        return(
            <footer ref="footer">
                <div className='footer-wrapper'>
                    
                    <div className='footer-block address-wrapper'>
                        <h2>Наш адрес:</h2>
                        <p>ул. Евгения Коновальца, 26</p>
                        <p>Украина, Киев</p>
                    </div>
                    <div className='footer-block contacts-wrapper'>
                        <h2>Контакты</h2>
                        <div className='phone contacts-block'>
                            <h3>Телефон:</h3>
                            <span className='contacts-text'>(91) 8547 632521</span>
                        </div>
                        <div className='fax contacts-block'>
                            <h3>Факс:</h3>
                            <span className='contacts-text'>(91) 8547 632521</span>
                        </div>
                        <div className='email contacts-block'>
                            <h3>Email:</h3>
                            <span className='contacts-text'> we_are_cool@snails.com</span>
                        </div>
                        
                    </div>
                    <div className='footer-block socials-wrapper'>
                        <h2>Мы в соцсетях</h2>
                        <ul>
                            <li><a className='contacts-item fb' href='https://www.facebook.com/'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a className='contacts-item tw' href='https://twitter.com/'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a className='contacts-item goog' href='https://google.com/'><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className='footer-block subscribe-wrapper'>
                        <p><span className='bold-text'>Подпишись</span> на нашу рассылку, чтобы получать последние новости, приятные предложения и скидки:</p>
                       <form  className="enter-form">
                            <input type='email' className='inpSubscribe' ref="emailInput" placeholder='Enter your E-mail' />
                            <button onClick={this.handleOnSubscribe} className='subscribeBtn'>Подписаться</button>
                       </form>
                    </div>

                    
                    
                </div>
                <div className="footer-bottom">
                    <div className='copyrights'> Copyrights &copy; 2017 All Rights Reserved by Snails Team.</div>
               </div>  
            </footer>
        )
    }
}