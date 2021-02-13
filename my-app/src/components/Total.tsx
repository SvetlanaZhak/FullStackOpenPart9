import { CoursePartsProps } from "../types";

export const Total: React.FC<CoursePartsProps> = ({ courseParts }) => {
  return (
    <p>
      Number of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

