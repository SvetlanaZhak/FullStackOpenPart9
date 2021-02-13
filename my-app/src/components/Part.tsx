import { CourseParts } from "../types";

const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

export const Part: React.FC<CourseParts> = (props) => {
   
switch (props.part.name) {
    case "Fundamentals":  
    return (
        <div>
            
                <h2>{props.part.name} </h2>
            <p>Exercises count:{props.part.exerciseCount} </p> 
            <p>Description: {props.part.description}</p>
        </div>
    ) 
     
    case "Using props to pass data":
        return(
            <div>
         <h2>{props.part.name} </h2>
            <p>Exercises count:{props.part.exerciseCount} </p> 
             <p>Group project count:{props.part.groupProjectCount}</p>
            </div>
        )
case "Deeper type usage":
    return(
        <div>

<h2>{props.part.name} </h2>
            <p>Exercises count:{props.part.exerciseCount} </p> 
            <p>Description: {props.part.description}</p>
            <p>Execise Submission link: {props.part.exerciseSubmissionLink}</p>
        </div>
    )

    case "Hooks":
        return(
            <div>
         <h2>{props.part.name} </h2>
            <p>Exercises count:{props.part.exerciseCount} </p> 
            <p>Description: {props.part.description}</p>
            <p>Example link: {props.part.examples}</p>
            </div>
        )
    default:
        return assertNever(props.part);
}
    

};

