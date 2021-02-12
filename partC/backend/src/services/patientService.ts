import patientEntries from "../../data/patients";
import { Patient, NewPatientEntry, NonSensitivePatientEntry } from "../types";
import { v4 as uuidv4 } from "uuid";

const getPatient = (): Patient[] => {
  return patientEntries;
};

const addPatientEntry = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    id: uuidv4(),
    ...entry,
  };
  patientEntries.push(newPatientEntry);
  return newPatientEntry;
};
const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientEntries.map(
    ({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    })
  );
};
export default {
  getPatient,
  getNonSensitiveEntries,
  addPatientEntry,
};
