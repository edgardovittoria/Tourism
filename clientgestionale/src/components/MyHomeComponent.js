import React, { Component } from 'react';
import MyHeader from './MyHeaderComponent';
import MyCarousel from './MyCarouselComponent';
import AttivitaNeiPaesi from './AttivitaNeiPaesiComponent';
import FormRicerca from './FormRicercaComponent';
import AttivitaPopolari from './AttivitaPopolariComponent';
import Footer from './FooterComponent';

class MyHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MyHeader />
                <MyCarousel />
                <FormRicerca />
                <AttivitaNeiPaesi/>
                <AttivitaPopolari/>
                <Footer/>
            </div>

        );
    }
}

export default MyHome;