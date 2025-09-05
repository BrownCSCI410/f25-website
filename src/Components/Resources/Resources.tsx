import React from "react";

interface ResourcesProps {}

export class Resources extends React.Component<ResourcesProps> {
    render () {
        return (
            <section id= 'resources' className = 'anchor'>
            <div className = "content-container">
                <h2>Resources</h2>

                <div className="book-container container">
                    <div className="book-page">
                        <h2>Course Policies</h2>
                        <ul>
                            <li><a href="https://hackmd.io/@cs410/HJR6uRbR0">Course Missive</a></li>
                        </ul>
                        
                        <h2>General Resources</h2>
                        <ul>
                            <li><a href="https://edstem.org/us/courses/85591/discussion">Ed Discussion</a></li>
                            <li><a href="https://hackmd.io/@cs410/ry3PhMEtC">Github Overview</a></li>
                            <li><a href="https://hackmd.io/@cs410/SyDy2CVnA">Testing/Debugging Guide</a></li>
                        </ul>
                        
                        <h2>Python Guides</h2>
                        <ul>
                            <li><a href="https://hackmd.io/@cs410/BJvhqHXuR">Python Installation and Setup</a></li>
                            <li><a href="https://csci1410-2023.vercel.app/static/media/python_numpy_guide.f0074ca121c542ff1c29.pdf">Python, NumPy, & Linear Algebra Guide</a></li>
                            <li><a href="https://drive.google.com/file/d/1ROnkNuHgthapJIXYJBtx1W_WYHfHBKfQ/view?usp=sharing">NumPy Cheatsheet</a></li>
                            <li><a href="https://hackmd.io/@cs410/BJDNYaUKA">Python Style Guide</a></li>
                        </ul>

                        <h2>Forms</h2>
                        <ul>
                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScqQXnacmybevFm8xqYYkVLGea2vwwYupPEcKEiFhMK44Ui8A/viewform">Course Onboarding Form</a></li>
                            
                        </ul>
                    </div>
                </div>
           
            </div>
            </section>
            
        );
    }
}
