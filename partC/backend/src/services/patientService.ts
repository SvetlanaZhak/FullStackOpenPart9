import patientEntries from "../../data/patients";
import { Patient, NonSensitivePatientEntry } from "../types";

const getPatient = (): Patient[] => {
  return patientEntries;
};

const addPatientEntry = () => {
  return null;
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
