/* eslint-disable @typescript-eslint/no-explicit-any */

import { NewPatientEntry, Gender } from "./types";

const toNewDiaryEntry = (object: any): NewPatientEntry => {
  return {
    name: parseString(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    gender: parseGender(object.gender),
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

const isGender = (params: any): params is Gender => {
  return Object.values(Gender).includes(params);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender " + gender);
  }
  return gender;
};
export default toNewDiaryEntry;
