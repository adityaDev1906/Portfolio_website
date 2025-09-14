import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Services() {
    return (
        <>
            <Header />
            <div id="services">
                <div className="Services-content">
                    <h1 className="sub-title">My Recommendation</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code"></i>
                            <h2>Web Development</h2>
                            <p>Web development refers to the process of creating and maintaining websites and web applications. It involves designing, coding, and deploying websites using various technologies, frameworks, and programming languages to deliver interactive and functional online experiences to users.</p>
                            <a href="https://www.w3schools.com/whatis/" target="_blank">Learn more</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-react"></i>
                            <h2>ReactJS- Frontend Framework</h2>
                            <p>ReactJS is a JavaScript frontend development framework that allows developers to build dynamic and interactive user interfaces. It utilizes a component-based architecture, virtual DOM, and declarative syntax to efficiently update and render UI elements based on data changes.
                            </p>
                            <a href="https://github.com/hiteshchoudhary/chai-aur-react" target="_blank">Learn more</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-java"></i>
                            <h2>Backend Programming Languages</h2>
                            <p>Backend programming refers to the development of software components that run on servers or handle data processing and storage. Languages like C++ and Java are commonly used for backend development due to their efficiency, scalability, and ability to handle complex tasks.
                            </p>
                            <a href="https://www.geeksforgeeks.org/backend-development/" target="_blank">Learn more</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-database"></i>
                            <h2>Database</h2>
                            <p>MongoDB is a NoSQL database designed for high scalability and performance. It stores data in flexible, JSON-like documents, allowing for dynamic schemas. Ideal for modern applications, it supports rich queries, indexing, and seamless integration with various programming languages and frameworks.
                            </p>
                            <a href="https://www.w3schools.com/mongodb/" target="_blank">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services