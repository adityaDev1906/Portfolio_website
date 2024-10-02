import React from 'react'
import Header from './Header'
import TabComponent from './TabComponent';

function About() {
    return (
        <>
            <Header />
            <div id="about">
                <div className="About-content">
                    <div className="row">
                        <div className="about-col-1">
                            <img src="images/background3.jpg" />
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About</h1>
                            <p>Aditya is a skilled software developer with two years of experience, specializing in frontend technologies like HTML, CSS, JavaScript, and React. He combines creativity and functionality to create innovative, visually stunning, and user-friendly applications.
                                <br />
                                <br />
                                Aditya's academic achievements reflect his commitment to excellence, with a 10 CGPA in 10th grade and 80.20% in 12th grade. He earned a Bachelor's in Computer Science from SPPU with an 8.89 CGPA, equipping him with a strong foundation to tackle complex coding challenges and approach problem-solving critically.
                                <br />
                                <br />
                                Aditya's dedication, attention to detail, and adaptability make him an asset to any software development team. His frontend expertise and strong academic record position him as an exceptional developer. Driven to learn continuously, he remains at the forefront of technology, proving to be a formidable force in software development.
                                <br />
                            </p>
                            <TabComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;