import React from "react";
import ReactDOM from "react-dom";
import {Header} from './components/Header'
import {Content} from './components/Content'
import {Total} from './components/Total'
import {CoursePart} from "./types";

export const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "Hooks",
      exerciseCount: 8,
      description: "React features without writing a class",
      examples: "https://reactjs.org/docs/hooks-intro.html"
    }

  ];

  return (
    <div>
     <Header name={courseName} />
     <Content courseParts={courseParts} />
     <Total courseParts={courseParts} />
      {/* <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p> */}
   
      {/* <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));