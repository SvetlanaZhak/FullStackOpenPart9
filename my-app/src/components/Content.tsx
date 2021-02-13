import { CoursePartsProps } from "../types";
import {Part} from "./Part"

export const Content: React.FC<CoursePartsProps> = (props) => {
  return (
    <div>
      {props.courseParts.map((course)=> (
    <Part key={course.name} part={course} />
      ))}
    </div>
  );
};


