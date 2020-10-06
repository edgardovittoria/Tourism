import React from 'react'

import { Button } from 'reactstrap';
import Select from 'react-select';

const options = [
    { value: 'sport', label: 'Sport' },
    { value: 'natura', label: 'Natura' },
    { value: 'cultura', label: 'Cultura' }
]

function FormRicerca(props) {
    return (
        <div className="where_togo_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="form_area">
                            <h3>Cerca le attività</h3>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="search_wrap">
                            <form className="search_form" action="#">
                                <div className="input_field">
                                    <input type="text" name="localita" id="localita" placeholder="Località" />
                                </div>
                                <div className="input_field">
                                    <Select options={options} className="selectTipologia"/>
                                </div>
                                <div className="search_btn">
                                    <Button type="submit" size="lg" className="btnRicerca" style={{ backgroundColor: "linear-gradient(#68e0cf, #209cff)" }}>Cerca</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRicerca;