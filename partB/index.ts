import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!req.query.height || !req.query.weight) {
    res.status(400).send({ error: "malformatted parameters" });
    return;
  }
  if (isNaN(Number(req.query.height)) || isNaN(Number(req.query.weight))) {
    res.status(400).send({ error: "malformatted parameters" });
    return;
  }
  try {
    const result = calculateBmi(height, weight);
    res.json({
      weight: weight,
      height: height,
      bmi: result,
    });
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send({ error: e.message });
  }
});

app.post("exercises", (req, res) => {
  try {
    const givenDailyExerciseHours: Array<number> = req.body.daily_exercises;
    const target: number = req.body.target;

    if (!givenDailyExerciseHours || !target) {
      res.status(400).send({ error: "missing parameters" });
      return;
    }

    res.status(200).send(calculateExercises(givenDailyExerciseHours, target));
  } catch (e) {
    res.status(400).send({ error: "malformated parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
