import express from "express";
import patientService from "../services/patientService";
import toNewPatient from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});
router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatient(req.body);
    const patientEntries = patientService.addPatientEntry(newPatientEntry);
    res.json(patientEntries);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
