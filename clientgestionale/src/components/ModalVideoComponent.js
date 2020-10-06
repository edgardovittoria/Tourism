import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';

const MyModalVideo = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ALpXVzD3mxs" onClose={() => setOpen(false)} />
            <a class="popup-video video_play_button" onClick={() => setOpen(true)} >
                <i class="fa fa-play"></i>
            </a>
        </React.Fragment>
    )
}

export default MyModalVideo;
