import React from "react";
import { TableSection } from "../TableSection/TableSection";
import {RowOptions } from "../TableSection/TableSection";

interface LabProps {}

function shouldRelease(assignment: RowOptions): boolean {
    if (assignment.autoReleaseDate === undefined) {
      return true; // If no defined release date, treat it as released if it has an href
    }
  
    const now = new Date();
  
    // Convert now into EST, if it isn't already
    const nowEST = new Date(
      now.toLocaleString("en-US", {
        timeZone: "America/New_York",
      })
    );
  
    return nowEST > new Date(assignment.autoReleaseDate);
}

export class Labs extends React.Component<LabProps> {
    
    myHeader: string[] = [
        "Number",
        "Type",
        "Topic",
    ];

    myRows: RowOptions[] = [
        { cellNames: ["1", "SRC", "AI Policy"], 
            cellNametoLinks: new Map<string,string>([
                ["AI Policy", "https://docs.google.com/presentation/d/1JRHSWtVhLIo-6nHNqkmq1Z65rFAhDNWvVc3vyZ1KB9c/edit?usp=sharing
"],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["2", "Conceptual", "HW 0 & 1"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 0 & 1", ""],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["3", "SRC", "AI Energy Consumption"], 
            cellNametoLinks: new Map<string,string>([
                ["AI Energy Consumption", ""],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["4", "Conceptual", "HW 2 & 3"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 2 & 3", ""],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["5", "SRC", "Algorithmic & Data Bias"], 
            cellNametoLinks: new Map<string,string>([
                ["Algorithmic & Data Bias", ""],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["6", "Conceptual", "HW 4 & 5"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 4 & 5", ""],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["7", "SRC", "Automation & Job Displacement"], 
            cellNametoLinks: new Map<string,string>([
                ["Automation & Job Displacement", ""],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["8", "Conceptual", "HW 6 & 7"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 6 & 7", ""],
            ]),
            autoReleaseDate: "April 4, 2025 16:00:00 EDT",
        },
        { cellNames: ["9", "SRC", "Explainable AI & Imitation"], 
            cellNametoLinks: new Map<string,string>([
                ["Explainable AI & Imitation", ""],
            ]),
            autoReleaseDate: "April 11, 2025 16:00:00 EDT",
        },
        { cellNames: ["10", "Conceptual", "HW 8 & 9"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 8 & 9", ""],
            ]),
            autoReleaseDate: "April 18, 2025 16:00:00 EDT",
        },
        { cellNames: ["11", "SRC", "AI Warfare"], 
            cellNametoLinks: new Map<string,string>([
                ["AI & Warfare", ""],
            ]),
            autoReleaseDate: "April 25, 2025 16:00:00 EDT",
        },
        
        
        
    ];

    render() {
        const modifiedRows: RowOptions[] = this.myRows.map(row => {
            if (!shouldRelease(row)) {
                const updatedLinks = new Map<string, string>();

                // Iterate over the original links and replace or remove them if necessary
                row.cellNametoLinks.forEach((value, key) => {
                    updatedLinks.set(key, "");
                });

                return {
                    ...row,
                    cellNametoLinks: updatedLinks,
                };
            }
            return row;
        });

        return (
            <section id = 'sections' className="anchor">
                <div className="content-container">
                    
                    <h2>Discussion Schedule</h2>
                    <TableSection header={this.myHeader} rows={modifiedRows} />
                        
                    
                </div>
            </section>

        );
    }
}
