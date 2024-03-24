import React from 'react';
import "./CardModal.css"
import { useSelector, useDispatch } from 'react-redux'
import {toggle} from '../../modalReducer';

import telpIcon from "../../static/icon/telp-icon.png"
import mailIcon from "../../static/icon/mail-icon.png"
import mapPinIcon from "../../static/icon/map-pin.png" 


const CardModal = () => {

  const toggleModal = useSelector((state) => state.toggle.value)

  const dispatch = useDispatch()

  const modalStyle = {
    display: toggleModal ? 'block' : 'none'
  };

  return (
    <>
    <div className='background_modal' style={modalStyle} onClick={ () => dispatch(toggle()) }></div>
    <div id="card_modal" className="modal" tabindex="-1" role="dialog" style={modalStyle}>
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Contact Us</h5>
                <button type="button" className="btn-close bg-light" data-dismiss="modal" aria-label="Close" onClick={() => dispatch(toggle())}>
                
                </button>
            </div>
            <div className="modal-body">
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. At ultrices elementum ultrices velit a id. Nibh enim diam euismod hendrerit ac enim.</p>
                <div className="d-flex flex-column">
                    <p class="text-start fw-bolder">info@kawankerja.co</p>
                    <p class="text-start fw-bolder">+62 123 45678 90</p>
                    <p class="text-start fw-bolder">Bandung, Jawa Barat</p>
                </div>
            </div>
            </div>
        </div>
     </div>
    </>
  );
};

export default CardModal;
