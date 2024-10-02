import React from 'react'
import Header from './Header'

function Portfolio() {
    return (
        <>
            <Header />
            <div id="portfolio">
                <div className="Portfolio-content">
                    <h1 className="sub-title">My Work</h1>
                    <div className="work-list">
                            <div className="work">
                                <img src="images/work-3.png" />
                                <div className="layer">
                                <h3>Online Shopping App</h3>
                                <p>Shop your favorite brands, discover deals, and enjoy fast delivery—all in one app. Download it from play store.
                                </p>
                                <a href="https://www.amazon.in/" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                                </div>
                            </div>
                        <div className="work">
                            <img src="images/work-1.png" />
                            <div className="layer">
                                <h3>Social Media App</h3>
                                <p>The app connects you to the talented people around the world. Download it from play store.
                                </p>
                                <a href="https://in.linkedin.com/" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/work-2.png" />
                            <div className="layer">
                                <h3>Music App</h3>
                                <p>
                                Stream your favorite songs, create playlists, and discover new music effortlessly. Download it from play store.
                                </p>
                                <a href="https://open.spotify.com/"  target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn">See more</a>
                </div>
            </div>
        </>
    )
}

export default Portfolio