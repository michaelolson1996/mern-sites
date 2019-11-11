import React from 'react'
import '../videos.css'
const Videos = () => {
    return (
        <React.Fragment>
            <div className = "search-video-container">
                <input type = 'text' placeholder = 'Search for your video' />
                <button>Submit</button>
            </div>
        <div className = "video-page-wrap">
            <div className = "video-page-1">
                <div className = "video-container">

                </div>
            </div>
        </div>

        </React.Fragment>

    )
}

export default Videos