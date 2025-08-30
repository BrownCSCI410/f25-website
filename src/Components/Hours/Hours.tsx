import React from "react";

interface HoursProps {}

export class Hours extends React.Component<HoursProps> {
    render() {
        return (
            <section id="hours">

                <div className="content-container">

                <h2>Calendar</h2>

                <div className = 'iframe-container'>
                    <iframe src="https://calendar.google.com/calendar/embed?src=c_34d3962102eacb3a819c4ebc28a1e21b1f73fff47fce496b898e408f0e4d6a13%40group.calendar.google.com&ctz=America%2FNew_York"
                    title = "Calendar"
                    width="100%" 
                    height="700" 
                    scrolling="no">
                    </iframe>

                </div>
                

                
                </div>

            </section>
        );
    }
}
