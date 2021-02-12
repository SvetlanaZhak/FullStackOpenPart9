/* eslint-disable @typescript-eslint/no-explicit-any */

import { NewPatientEntry } from "./types";

const toNewDiaryEntry = (object: any): NewPatientEntry => {
  return {
    name: parseString(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    gender: parseString(object.gender),
    occupation: parseString(object.occupation),
    ssn: parseString(object.ssn),
  };
};

const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const parseString = (string: any): string => {
  if (!string || !isString(string)) {
    throw new Error("Incorrect or missing string: " + string);
  }

  return string;
};
export default toNewDiaryEntry;
