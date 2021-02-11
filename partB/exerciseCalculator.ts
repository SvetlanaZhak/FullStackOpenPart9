interface Result extends RatingInfo {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  target: number;
  average: number;
}

interface RatingInfo {
  rating: number;
  ratingDescription: string;
}

interface ExerciseSchedule {
  exercises: Array<number>;
  target: number;
}
const parsecExercisesArguments = (args: Array<string>): ExerciseSchedule => {
  if (args.length < 4) throw new Error("Not enough arguments");
  args.splice(0, 2);
  args.map(n => {
    if (isNaN(Number(n))) {
      throw new Error("Provided values were not numbers!");
    }
  });

  const target = Number(args[0]);
  args.splice(0, 1);
  const exercises: Array<number> = [];
  args.map(n => exercises.push(Number(n)));

  return {
    target: target,
    exercises: exercises,
  };
};
export const calculateExercises = (
  givenDailyExerciseHours: Array<number>,
  target: number
): Result => {
  const periodLength = givenDailyExerciseHours.length;
  const trainingDays = givenDailyExerciseHours.filter(d => d != 0).length;
  const average = givenDailyExerciseHours.reduce((acc, hours) => {
    return acc + hours;
  });

  const calculateRating = (target: number, average: number): RatingInfo => {
    if (average < target) {
      return { rating: 1, ratingDescription: "Bad" };
    } else if ((average = target)) {
      return { rating: 3, ratingDescription: "Good" };
    } else {
      return { rating: 5, ratingDescription: "Excellent" };
    }
  };

  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: average >= target,
    ...calculateRating(target, average),
    target: target,
    average: average,
  };
};

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
try {
  const { exercises, target } = parsecExercisesArguments(process.argv);
  console.log(calculateExercises(exercises, target));
} catch (e) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log("Error, something bad happened, message: ", e.message);
}
