/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from "express";
import patientService from "../services/patientService";
import { toNewPatient } from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  try {
    res.send(patientService.getPatientById(req.params.id));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
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

router.post("/:id/entries", (req, res) => {
  try {
    const updatedEntries = patientService.addPatientEntryById(
      req.params.id,
      req.body
    );
    res.json(updatedEntries);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default router;
