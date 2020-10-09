import React, { Component } from 'react';
import MyHeader from './MyHeaderComponent';
import Footer from './FooterComponent';
import FormPrenotazione from './FormPrenotzioneComponent';
import MyModalVideo from './ModalVideoComponent';
import { Loading } from './LoadingComponent';
import ModalImage from 'react-modal-image'

class DettagliAttivita extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess.message}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.attivita != null) {
            return (
                <body>
                    <MyHeader />
                    <div class="destination_banner_wrap overlay">
                        <div class="destination_text text-center">
                            <h3>Torrentsimo Palena</h3>
                            <FormPrenotazione attivita={this.props.attivita}
                                prenotazioni={this.props.prenotazioni.filter((prenotazione) => prenotazione.attivitaPrenotata.id === this.props.attivita.id)}
                                postPrenotazione={this.props.postPrenotazione}/>
                        </div>
                    </div>

                    <div class="destination_details_info">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8 col-md-9">
                                    <div class="destination_info">
                                        <h3>Description</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                                        <p>Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                                        <div class="single_destination">
                                            <h4>Day-01</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                                        </div>
                                        <div class="single_destination">
                                            <h4>Day-02</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                                        </div>
                                        <div class="single_destination">
                                            <h4>Day-03</h4>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                                        </div>
                                    </div>
                                    <FormPrenotazione attivita={this.props.attivita}
                                        prenotazioni={this.props.prenotazioni.filter((prenotazione) => prenotazione.attivitaPrenotata.id === this.props.attivita.id)}
                                        postPrenotazione={this.props.postPrenotazione}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="galleria">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8 col-md-9">
                                    <div class="section-top-border">
                                        <h3>Image Gallery</h3>
                                        <div class="row gallery-item">
                                            <div class="col-md-4">
                                                <a href="/assets/img/torrentismo/galleria1.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria1.jpg)" }}></div>
                                                </a>
                                            </div>
                                            <div class="col-md-4">
                                                <a href="/assets/img/torrentismo/galleria2.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria2.jpg)" }}></div>
                                                </a>
                                            </div>
                                            <div class="col-md-4">
                                                <a href="/assets/img/torrentismo/galleria3.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria3.jpg)" }}></div>
                                                </a>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="/assets/img/torrentismo/galleria4.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria4.jpg)" }}></div>
                                                </a>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="/assets/img/torrentismo/galleria5.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria5.jpg)" }}></div>
                                                </a>
                                            </div>
                                            <div class="col-md-4">
                                                <a href="/assets/img/torrentismo/galleria6.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria6.jpg)" }}></div>
                                                </a>
                                            </div>
                                            <div class="col-md-4">
                                                <a href="/assets/img/torrentismo/galleria7.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria7.jpg)" }}></div>
                                                </a>
                                            </div>
                                            <div class="col-md-4">
                                                <a href="/assets/img/torrentismo/galleria8.jpg" class="img-pop-up">
                                                    <div class="single-gallery-image" style={{ background: "url(/assets/img/torrentismo/galleria8.jpg)" }}></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>







                        <div class="container video">
                            <div class="video_area video_bg overlay">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="video_wrap text-center">
                                            <h3>Enjoy Video</h3>
                                            <div class="video_icon">
                                                <MyModalVideo />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </body >
            )
        }
    }
}

export default DettagliAttivita;