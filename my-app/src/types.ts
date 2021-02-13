export interface HeaderProps {
  name: string;
}

export interface CoursePartsProps {
  courseParts: CoursePart[];
}

export interface CoursePart {
  name: string;
  exerciseCount: number;
}
