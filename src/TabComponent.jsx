import React, { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="tab-titles">
                <p
                    className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                    onClick={() => opentab('skills')}
                >
                    Skills
                </p>
                <p
                    className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                    onClick={() => opentab('experience')}
                >
                    Experience
                </p>
                <p
                    className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                    onClick={() => opentab('education')}
                >
                    Education
                </p>
            </div>

            <div className="tab-contents">
                {activeTab === 'skills' && (
                    <div id="skills" className="active-tab">
                        <ul>
                            <li><span>Web Designing and Development</span><br />HTML,CSS & Javascript</li>
                            <li><span>Frontend Development Framework</span><br />ReactJS</li>
                            <li><span>Backend Programming Language</span><br />C++,Java</li>
                            <li><span>Adobe Experience Manager</span><br />Adobe Target,Adobe Analytics</li>
                            <li><span>Database</span><br />SQL</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'experience' && (
                    <div id="experience" className="active-tab">
                        <ul>
                            <li><span>Aug 2021 - Current</span><br />System Engineer at TCS<br /><br /><p>Dynamic React.js Frontend Developer with 3+ years of experience creating responsive web applications. Proficient in Redux for state management, and skilled in HTML, CSS, and JavaScript to deliver user-friendly interfaces.  <br /> Successfully collaborated in agile teams, optimizing performance and enhancing user experience through clean, maintainable code. Committed to continuous learning and adapting to new technologies.
                            </p></li>
                        </ul>
                    </div>
                )}
                {activeTab === 'education' && (
                    <div id="education" className="active-tab">
                        <ul>
                            <li><span>2021</span><br />B.E. in Computer Science from SPPU with 8.89 CGPA</li>
                            <li><span>2016</span><br />12th from CBSE with 80.20% </li>
                            <li><span>2014</span><br />10th from CBSE with 95%</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabComponent;
