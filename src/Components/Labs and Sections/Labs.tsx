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
                ["AI Policy", " https://docs.google.com/presentation/d/1JRHSWtVhLIo-6nHNqkmq1Z65rFAhDNWvVc3vyZ1KB9c/edit?usp=sharing"],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["2", "Conceptual", "HW 0 & 1"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 1 & 2", ""],
            ]),
            autoReleaseDate: "Mar 10, 2025 10:30:00 EDT",
        },
        { cellNames: ["3", "SRC", "Data Collection"], 
            cellNametoLinks: new Map<string,string>([
                ["Data Collection", "https://docs.google.com/presentation/d/1J33ZDuNl4Z4_-DYELSSp-QDYDE5PY5kqxeiK9Lz5txk/edit?usp=sharing"],
            ]),
        },
        { cellNames: ["4", "Conceptual", "HW 2 & 3"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 3 & 4", ""],
            ]),

        },
        { cellNames: ["5", "SRC", "Automated Decision Making"], 
            cellNametoLinks: new Map<string,string>([
                ["Automated Decision Making", "https://docs.google.com/presentation/d/1hJb9zPeemaeosQjinOCOEqIWKBa4oNep0iigfa-6Sz4/edit?usp=sharing"],
            ]),
        
        },
        { cellNames: ["6", "Conceptual", "HW 4 & 5"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 5 & 6", ""],
            ]),
   
        },
        { cellNames: ["7", "SRC", "AI Limitation & Detection"], 
            cellNametoLinks: new Map<string,string>([
                ["AI Limitation & Detection", "https://docs.google.com/presentation/d/192C44TIFaZmqf7MUGyUP08oAHR-k5cY0dT9dHZKCuJM/edit?usp=sharing"],
            ]),

        },
        { cellNames: ["8", "Conceptual", "HW 6 & 7"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 7 & 8", ""],
            ]),
        },
        { cellNames: ["9", "SRC", "AI Innovation"], 
            cellNametoLinks: new Map<string,string>([
                ["AI Innovation", "https://docs.google.com/presentation/d/1n0EZ56x_Hk_yg7ZnyF2g2YUsQHjGpbDCxuOPffmlC0g/edit?usp=sharing"],
            ]),
        },
        { cellNames: ["10", "Conceptual", "HW 8 & 9"], 
            cellNametoLinks: new Map<string,string>([
                ["HW 9 & 10", ""],
            ]),
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
