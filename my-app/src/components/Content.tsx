import { CoursePartsProps } from "../types";

export const Content: React.FC<CoursePartsProps> = (props) => {
  return (
    <div>
      {props.courseParts.map((part, index)=> (
        <p key={index} >
          {part.name}
          {part.exerciseCount}
          </p>
      ))}
    </div>
  );
};


