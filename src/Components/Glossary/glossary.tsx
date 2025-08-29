import React from "react";
import definitions from "./definitions.json";

interface GlossaryProps {}

export class Glossary extends React.Component<GlossaryProps> {
    render () {
        return (
            <section id='glossary' className="anchor">
                <div className="content-container">
                    <h2>Glossary</h2>
                    <div className="table-container">
                        <table className="glossary-table">
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>
                            </thead>
                            <tbody className="scrollable-table">
                                {definitions.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.term}</td>
                                        <td>{item.definition}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}
