export interface HeaderProps {
  name: string;
}

export interface CoursePartsProps {
  courseParts: CoursePart[];
}

export interface CoursPartWithDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursPartWithDescription {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursPartWithDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursPartWithDescription {
  name: "Hooks";
  examples: string;
}

export interface CourseParts {
  part: CoursePart;
}

export type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour;
