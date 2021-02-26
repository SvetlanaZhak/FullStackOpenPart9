import patientEntries from "../../data/patients";
import {
  Patient,
  NewPatientEntry,
  NonSensitivePatientEntry,
  Entry,
} from "../types";

import { toNewEntries } from "../utils";
import { v4 as uuidv4 } from "uuid";

const getPatient = (): Patient[] => {
  return patientEntries;
};
const getPatientById = (id: string): Patient | undefined => {
  return patientEntries.find(e => e.id === id);
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

const addPatientEntryById = (id: string, entry: Entry): Entry[] | undefined => {
  const patientById = patientEntries.find(p => p.id === id);
  if (patientById) {
    if (!patientById.entries) {
      patientById.entries = [];
    }
    if (!entry.id) {
      entry.id = String(uuidv4());
    }

    patientById.entries.push(toNewEntries(entry));
    return patientById.entries;
  }
  return undefined;
};
export default {
  getPatient,
  getNonSensitiveEntries,
  addPatientEntry,
  getPatientById,
  addPatientEntryById,
};
