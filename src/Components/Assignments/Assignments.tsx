import React from "react";
import { RowOptions, TableSection } from "../TableSection/TableSection";

interface AssignmentProps {}

/**
 * Returns whether or not <assignment> should appear as released yet
 * @param assignment the assignment that should or should not be released
 * @return true if "now" is after/on the release date, false otherwise
 */
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

export class Assignments extends React.Component<AssignmentProps> {
	myHeader: string[] = ["Assignment", "Out", "Due"];

	myRows: RowOptions[] = [
		{
			cellNames: ["Homework 1: Uninformed Search", "9/3", "9/16"],
			cellNametoLinks: new Map<string, string>([
				[
					"Homework 1: Uninformed Search",
					"https://hackmd.io/@cs410/Hy-lF1a_ee",
				],
			]),
			// autoReleaseDate: "Jan 22, 2025 02:00:00 EDT",
		},

		{
			cellNames: ["Homework 2: A*", "9/10", "9/16"],
			cellNametoLinks: new Map<string, string>([
				["Homework 2: A*", "https://hackmd.io/@cs410/Hy13SHJ5el"],
			]),
			// autoReleaseDate: "Jan 29, 2025 02:00:00 EDT",
		},
		{
			cellNames: ["Homework 3: Adversarial Search", "9/17", "9/23"],
			cellNametoLinks: new Map<string, string>([
				[
					"Homework 3: Adversarial Search",
					"https://hackmd.io/@cs410/B1CIgVy5xe",
				],
			]),
			// autoReleaseDate: "Feb 05, 2025 02:00:00 EDT",
		},
		{
			cellNames: ["Homework 4: SAT", "9/24", "9/30"],
			cellNametoLinks: new Map<string, string>([
				["Homework 4: SAT", "https://hackmd.io/@cs410/BJtL8rJ5gg"],
			]),
			// autoReleaseDate: "Sep 24, 2025 02:00:00 EDT",
		},
		{
			cellNames: ["Homework 5: KRR", "10/1", "10/7"],
			cellNametoLinks: new Map<string, string>([
				["Homework 5: KRR", "https://hackmd.io/@cs410/HyM6Nt5uel"],
			]),
		},
		{
			cellNames: ["Homework 6: Constrained Optimization", "10/8", "10/21"],
			cellNametoLinks: new Map<string, string>([
				[
					"Homework 6: Constrained Optimization",
					"https://hackmd.io/@cs410/r1HHRUk9ex",
				],
			]),
			autoReleaseDate: "Feb 26, 2025 14:00:00 EDT",
		},
		{
			cellNames: ["Homework 7: Linear Regression and Bias-Variance Tradeoff", "10/22", "10/28"],
			cellNametoLinks: new Map<string, string>([
				[
					"Homework 7: Linear Regression and Bias-Variance Tradeoff",
					"https://hackmd.io/@cs410/HJl7evk9gg",
				],
			]),
			autoReleaseDate: "Mar 05, 2025 14:00:00 EDT",
		},
		{
			cellNames: ["Homework 8: Neural Networks", "10/29", "11/4"],
			cellNametoLinks: new Map<string, string>([
				[
					"Homework 8: Neural Networks", 
					"https://hackmd.io/@cs410/SJel7vkqle"
				],
			]),
			autoReleaseDate: "Mar 12, 2025 14:00:00 EDT",
		},
		{
			cellNames: ["Homework 9: MDPs and Reinforcement Learning", "11/5", "11/11"],
			cellNametoLinks: new Map<string, string>([
				[
					"Homework 9: MDPs and Reinforcement Learning",
					"https://hackmd.io/@cs410/S1rWBPkcgg",
				],
			]),
			autoReleaseDate: "Mar 19, 2025 14:00:00 EDT",
		},
		{
			cellNames: [
				"Homework 10: LLMs + PDDL",
				"11/12",
				"12/5",
			],
			cellNametoLinks: new Map<string, string>([
				[
					"Homework 10: LLMs + PDDL",
					"https://hackmd.io/@cs410/HkknTYGgZl",
				],
			]),
			autoReleaseDate: "Apr 02, 2025 14:00:00 EDT",
		},
		{
			cellNames: ["Final Project Part 1", "11/19", "12/5"],
			cellNametoLinks: new Map<string, string>([
				["Final Project Part 1", require("./handouts/csci410_fp_part1.pdf")],
			]),
		},
		{
			cellNames: ["Final Project Part 2", "11/24", "12/5"],
			cellNametoLinks: new Map<string, string>([
				["Final Project Part 2", require("./handouts/part_2.pdf")],
			]),
		},
		{
			cellNames: ["Final Project Part 3", "12/5", "12/14"],
			cellNametoLinks: new Map<string, string>([
				// ["Final Project Part 3", require("./handouts/part3.pdf")],
			]),
		},
	];

	render() {
		// Modify the cellNametoLinks map based on the release status
		const modifiedRows: RowOptions[] = this.myRows.map((row) => {
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
			<section id="assignments" className="anchor">
				<div className="content-container">
					<h2>Assignments</h2>
					<p className="mb-5">
						Assignments will typically be released at 2:00 PM EST on Wednesdays
						and due at 11:59 PM EST on Tuesdays
					</p>
					<TableSection header={this.myHeader} rows={modifiedRows} />
				</div>
			</section>
		);
	}
}
