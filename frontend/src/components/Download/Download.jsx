import React, { useState } from 'react';
import axios from 'axios';
import down from './download-back.png';

function Download() {
    const [ytLink, setLink] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setLink(event.target.value);
    };

    const handleAnalyzeClick = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/download_video', {
                video_url: ytLink,
            });
            setData(response.data);
            if (response.data && response.data.Link) {
                window.location.href = response.data.Link;
            }
        } catch (error) {
            console.error('Error making POST request:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='home'>
                <div className="heading">
                    <img className="YT" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png" alt="" />
                    <h1>Video Downloader</h1>
                    <p>Download YouTube videos in a snap with our user-friendly website!</p>
                    <div style={{ display: 'flex', marginTop: "50px" }}>
                        <input type="text" placeholder='Paste Your Link here' value={ytLink} onChange={handleInputChange} />
                        <button className='button' onClick={handleAnalyzeClick} disabled={loading}>
                            {loading ? 'Loading...' :
                            <>
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#ffffff" /> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#ffffff" /> </g>
                                        </svg>
                                    </div>
                                
                                </div>
                            <span>Download </span>
                            </>
                              }
                        </button>
                    </div>
                </div>
                <img className="homelogo" src={down} alt="" />
            </div>
        </div>
    );
}

export default Download;
