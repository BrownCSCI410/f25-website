import React from "react";
import { RowOptions, TableSection } from "../TableSection/TableSection";

interface LectureProps {}

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

export class Lectures extends React.Component<LectureProps> {
	myHeader: string[] = [
		"Date",
		"Topic",
		"Readings",
		"Notes",
		"Additional Resources",
	];

	myRows: RowOptions[] = [
		{
			cellNames: ["9/3", "Introduction to AI", "R&N Chapter 1", "Slides", " "],
			cellNametoLinks: new Map<string, string>([
				[
					"Slides",
					require("./slides/lecture1.pdf"),
				],
			]),
			autoReleaseDate: "Sep 3, 2025 02:00:00 EDT",
		},
		{
			cellNames: [
				"9/5",
				"Uninformed Search",
				"R&N 3.0-3.4",
				"Notes",
				"Blind Search Algorithms",
			],
			cellNametoLinks: new Map<string, string>([
				["Notes", require("./lecture_notes/uninformed_search.pdf")],
				[
					"Blind Search Algorithms",
					"https://cs.stanford.edu/people/eroberts/courses/soco/projects/2003-04/intelligent-search/blind.html",
				],
				["Slides", require("./slides/lecture2.pdf")],
			]),
			autoReleaseDate: "Sep 5, 2025 02:00:00 EDT",
		},
		{
			cellNames: [
				"9/8",
				"Imformed Search (Best-G Search)",
				"R&N 3.4-3.5.1",
				"Notes",
				// "Slides",
			],
			cellNametoLinks: new Map<string, string>([
				["Notes", require("./lecture_notes/informed_search.pdf")],
				// ["Slides", require("./slides/A-star Search.pdf")],
			]),
			// autoReleaseDate: "Sep 8, 2025 02:00:00 EDT",
		},
		{
			cellNames: [
				"9/10",
				"Heuristics and The A* Algorithm",
				"R&N 3.5.2-3.7",
				"Slides",
				"Pathfinding Visualizations",
			],
			cellNametoLinks: new Map<string, string>([
				["Slides", require("./slides/lecture3.pdf")],
				[
					"Pathfinding Visualizations",
					"https://qiao.github.io/PathFinding.js/visual/",
				],
			]),
			autoReleaseDate: "Sep 10, 2025 02:00:00 EDT",
		},
		{
			cellNames: ["9/12", "Adversarial search (minimax + alpha-beta pruning)", "R&N 5.0-5.3", "Notes", " "],
			cellNametoLinks: new Map<string, string>([
				["Notes", require("./lecture_notes/adversarial_search.pdf")],
			]),
			autoReleaseDate: "Sep 12, 2025 02:00:00 EDT",
		},
		{
			cellNames: ["9/15", "Discrete Optimization", "R&N 4.0-4.1", "Notes", " "],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/local_search.pdf")],
			]),
			autoReleaseDate: "Sep 15, 2025 02:00:00 EDT",
		},
		{
			cellNames: [
				"9/17",
				"Propositional Logic, SAT and NP-Completeness, CNFs",
				"R&N 6.1, 6.4",
				"Notes",
				" ",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/cnfs.pdf")],
			]),
			autoReleaseDate: "Sep 17, 2025 04:00:00 EDT",
		},
		{
			cellNames: ["9/19", "Constraint Satisfaction Problems", "R&N 13", "Notes", " "],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/constraint_satisfaction.pdf")],
			]),
			autoReleaseDate: "Sep 19, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"9/22",
				"Knowledge Representation and Reasoning",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/theorem_proving.pdf")],
			]),
			autoReleaseDate: "Sep 22, 2025 04:00:00 EDT",
		},
		{
			cellNames: ["9/24", "Classical Planning: PDDL", "", "Notes", " "],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/pddl.pdf")],
			]),
			autoReleaseDate: "Sep 24, 2025 04:00:00 EDT",
		},
		{
			cellNames: ["9/26", "Reasoning Under Uncertainty", "R&N 12", "Notes", ""],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/probability.pdf")],
			]),
			autoReleaseDate: "Sep 26, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"9/29",
				"Bayesian Networks",
				"",
				"Notes",
				" ",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/bayesian_networks.pdf")],
			]),
			autoReleaseDate: "Sep 29, 2025 04:00:00 EDT",
		},
		{
			cellNames: ["10/1", "Linear Algebra for Continuous Optimization", "", "Notes", ""],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/linear_algebra.pdf")],
			]),
			autoReleaseDate: "Oct 1, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/3",
				"Gradient Descent",
				"R&N 14-14.5",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/convex_optimization.pdf")],
			]),
			autoReleaseDate: "Oct 3, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/6",
				"Convex Optimization",
				"",
				"Notes",
				" ",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/convexity_linear_algebra.pdf")],
			]),
			autoReleaseDate: "Oct 6, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/8",
				"Constrained Optimization",
				"",
				"Notes",
				" ",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/constrained_optimization.pdf")],
			]),
			autoReleaseDate: "Oct 8, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/10",
				"Mathematical Programmming",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/lagrangians.pdf")],
			]),
			autoReleaseDate: "Oct 10, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/13",
				"No Class",
				"",
				"",
				"",
			],
			cellNametoLinks: new Map<string, string>(),
			autoReleaseDate: "Oct 13, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/15",
				"Intro to Supervised Learning",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/knn.pdf")],
			]),
			autoReleaseDate: "Oct 15, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/17",
				"Linear Regression",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/linear_regression.pdf")],
			]),
			autoReleaseDate: "Oct 17, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/20",
				"The Bias-Variance Tradeoff",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/bias_variance.pdf")],
			]),
			autoReleaseDate: "Oct 20, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/22",
				"Logistic Regression and Entropy",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/logistic_regression.pdf")],
			]),
			autoReleaseDate: "Oct 22, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/24",
				"Perceptrons",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/perceptrons.pdf")],
			]),
			autoReleaseDate: "Oct 24, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/27",
				"Neural Networks",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/neural_nets.pdf")],
			]),
			autoReleaseDate: "Oct 27, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/29",
				"Deep Learning",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/deep_learning.pdf")],
			]),
			autoReleaseDate: "Oct 29, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"10/31",
				"Markov Reward Processes",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/markov_reward_processes.pdf")],
			]),
			autoReleaseDate: "Oct 31, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/3",
				"Markov Decision Processes",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/mdp.pdf")],
			]),
			autoReleaseDate: "Nov 3, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/5",
				"Value Iteration",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/value_iteration.pdf")],
			]),
			autoReleaseDate: "Nov 5, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/7",
				"Q-Learning (Reinforcement Learning)",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/rl.pdf")],
			]),
			autoReleaseDate: "Nov 7, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/10",
				"Generative Models",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/naive_bayes.pdf")],
			]),
			autoReleaseDate: "Nov 10, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/12",
				"Principal Component Analysis",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./slides/PCA + K-means.pptx")],
			]),
			autoReleaseDate: "Nov 12, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/14",
				"K-Means + Facility Location",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./slides/PCA + K-means.pptx")],
			]),
			autoReleaseDate: "Nov 14, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/17",
				"Gaussian Mixture Models",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./slides/GaussianMixtureModels.pptx")],
			]),
			autoReleaseDate: "Nov 17, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/19",
				"Introduction to the Final Project (Go and MCTS)",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./slides/MCTS.pdf")],
			]),
			autoReleaseDate: "Nov 19, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/21",
				"AlphaGo: MCTS + Learning",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./slides/AlphaGo.pdf")],
			]),
			autoReleaseDate: "Nov 21, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"11/24",
				"Anytime Algorithms and Adversarial Search",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/iterative_deepening_review.pdf")],
			]),
			autoReleaseDate: "Nov 24, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"12/1",
				"Guest Lecture",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/special_topics_1.pdf")],
			]),
			autoReleaseDate: "Dec 1, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"12/3",
				"Guest Lecture",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/special_topics_2.pdf")],
			]),
			autoReleaseDate: "Dec 3, 2025 04:00:00 EDT",
		},
		{
			cellNames: [
				"12/5",
				"Guest Lecture",
				"",
				"Notes",
				"",
			],
			cellNametoLinks: new Map<string, string>([
				// ["Notes", require("./lecture_notes/special_topics_3.pdf")],
			]),
			autoReleaseDate: "Dec 5, 2025 04:00:00 EDT",
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
			<section id="lectures" className="anchor">
				<div className="content-container">
					<h2>Lectures</h2>
					<p className="mb-5">
						See also the <a href="#hours">course calendar</a>.
					</p>
					<TableSection header={this.myHeader} rows={modifiedRows} />
				</div>
			</section>
		);
	}
}
