import { CoursePartsProps } from "../types";

export const Total: React.FC<CoursePartsProps> = ({ courseParts }) => {
  return (
    <b>
      Total amount of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
  </b>
  );
};

