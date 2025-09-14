import React from 'react'
import Header from './Header'
import Footer from './Footer'

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
                                <p>Shop your favorite brands, discover deals, and enjoy fast delivery—all in one app.
                                </p>
                                <a href="https://github.com/adityaDev1906/NextCart" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/work-1.png" />
                            <div className="layer">
                                <h3>Social Media App</h3>
                                <p>The app connects you to the talented people around the world. Share your thoughts, ideas, and creations with a global audience.
                                </p>
                                <a href="https://github.com/adityaDev1906/TweetSocial" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/work-2.png" />
                            <div className="layer">
                                <h3>Learning App</h3>
                                <p>
                                    Techpedia is an online learning platform that offers a wide range of courses and tutorials on various tech topics.
                                </p>
                                <a href="https://github.com/adityaDev1906/Techpedia" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn">See more</a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio