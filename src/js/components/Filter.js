import React from 'react';
import {Link} from 'react-router-dom';
import {filterBooks} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({filterBooks}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {filter: state.filter, books: state.books}
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Filter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        let count = 0;
        // this.refs.selected.value = "raiting";
        this.props.books.map(item => { count++ })
        this.setState({count: count})
    }
    filtring = () => {
        // console.log(this.refs.selected.value);
        this.props.filterBooks(this.refs.selected.value);
    }
    render() {
        
        return (         
            <div className="filter-style">
                <form onChange= {this.filtring}>
                    <div>
                        <label>Сортировка: </label>

                        <select ref="selected">
                            <option value='raiting'>По рейтингу</option>
                            <option value='name_a'>По названию (А-Я)</option>
                            <option value='name_z'>По названию (Я-А)</option>
                            <option value='author_a'>По автору (А-Я)</option>
                            <option value='author_z'>По автору (Я-А)</option>
                            <option value='price_a'>Цена по возрастанию</option>
                            <option value='price_z'>Цена по убыванию</option>
                        </select>
                    </div>
                </form>
                <p>В наличии {this.state.count} книг</p>
                
            </div>
        )
    }
}