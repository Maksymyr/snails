import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FooterSlider from '../components/FooterSlider'
import Basket from '../components/Basket'
import BookPage from '../components/BookPage'
import { Route, Switch, Link } from 'react-router-dom';
import BookList from '../components/BookList';
import AdminPanel from '../components/AdminPanel';
import Notify from '../components/Notify';

export default class MainLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {types: [],
        }
        this.arrayTypes = this.arrayTypes.bind(this);
    }
    arrayTypes(type) {
        this.setState({types: type});
    }
    
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route exact path="/snails/" component={BookList}/>
                    <Route path="/snails/category:id" component= {BookList}/>
                    <Route path="/snails/buy" component= {BookList}/>
                    <Route path="/snails/search:sear" component= {BookList}/>
                    <Route path="/snails/basket:id" component= {BookList}/>
                    <Route path="/snails/pages:id" component= {BookList}/>
                    <Route path="/snails/admin" component= {AdminPanel}/>
                    <Route path="/snails/buy" component={BookList}/>
                    <Route path="/snails/author/:idauthor" component={BookList}/>
                    <Route path="/snails/page:id" component = {BookPage} />
                    <Route path="/snails/basket" component={Basket}/>
                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>
                <div className="clear"></div>
                <FooterSlider />
                <Footer />
                <Notify />

            </div>
        ); 
    }
}

