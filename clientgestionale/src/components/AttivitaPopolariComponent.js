import React from 'react';
import { Loading } from './LoadingComponent';
import { baseUrlReact } from '../shared/baseUrl';

function AttivitaPopolari(props) {
    if (props.isLoading){
        return (
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
      }
      else if (props.errMess) {
        return (
          <div className="container">
            <div className="row">
                <h4>{props.errMess.message}</h4>
            </div>
          </div>
        );
      }
      else if (props.attivita != null) {
        return (
            <div className="popular_places_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb_70">
                                <h3>Popular Places</h3>
                                <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single_place">
                                <div className="thumb">
                                    <img src={props.attivita[0].image} alt="" />
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id} className="prise">€{props.attivita[0].costo}</a>
                                </div>
                                <div className="place_info">
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id}><h3>{props.attivita[0].nome}</h3></a>
                                    <p>{props.attivita[0].luogo}</p>
                                    <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            <i className="fa fa-clock-o"></i>
                                            <a href="#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_place">
                                <div className="thumb">
                                    <img src={props.attivita[0].image} alt="" />
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id} className="prise">€{props.attivita[0].costo}</a>
                                </div>
                                <div className="place_info">
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id}><h3>{props.attivita[0].nome}</h3></a>
                                    <p>United State of America</p>
                                    <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            <i className="fa fa-clock-o"></i>
                                            <a href="#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_place">
                                <div className="thumb">
                                    <img src={props.attivita[0].image} alt="" />
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id} className="prise">€{props.attivita[0].costo}</a>
                                </div>
                                <div className="place_info">
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id}><h3>{props.attivita[0].nome}</h3></a>
                                    <p>United State of America</p>
                                    <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            <i className="fa fa-clock-o"></i>
                                            <a href="#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_place">
                                <div className="thumb">
                                    <img src={props.attivita[0].image} alt="" />
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id} className="prise">€{props.attivita[0].costo}</a>
                                </div>
                                <div className="place_info">
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id}><h3>{props.attivita[0].nome}</h3></a>
                                    <p>United State of America</p>
                                    <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            <i className="fa fa-clock-o"></i>
                                            <a href="#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_place">
                                <div className="thumb">
                                    <img src={props.attivita[0].image} alt="" />
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id} className="prise">€{props.attivita[0].costo}</a>
                                </div>
                                <div className="place_info">
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id}><h3>{props.attivita[0].nome}</h3></a>
                                    <p>United State of America</p>
                                    <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            <i className="fa fa-clock-o"></i>
                                            <a href="#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_place">
                                <div className="thumb">
                                    <img src={props.attivita[0].image} alt="" />
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id} className="prise">€{props.attivita[0].costo}</a>
                                </div>
                                <div className="place_info">
                                    <a href={baseUrlReact+"attivita/"+props.attivita[0].id}><h3>{props.attivita[0].nome}</h3></a>
                                    <p>United State of America</p>
                                    <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            <i className="fa fa-clock-o"></i>
                                            <a href="#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="more_place_btn text-center">
                                <a className="boxed-btn4" href="#">More Places</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AttivitaPopolari;