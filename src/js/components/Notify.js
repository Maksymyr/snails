import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNotify} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return { notify: state.notify }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addNotify}, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Notify extends Component {
    render() {
        {
            if (this.props.notify == "") 
                return null 
            else { 
                setTimeout(() => {this.props.addNotify("")}, 1500)
                return (
                    <div className="notify-font">
                        <div className="notify">
                            <p>{this.props.notify}</p>
                        </div>
                    </div>
                )
            }
        }
    }
}