/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import {
  NewPatientEntry,
  Gender,
  Entry,
  Diagnose,
  HealthCheckRating,
  Discharge,
  SickLeave,
} from "./types";

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
const parseDiagnosis = (diagnosis: any): Array<Diagnose["code"]> => {
  if (
    !Array.isArray(diagnosis) ||
    !diagnosis.every(diagnosis => isString(diagnosis))
  ) {
    throw new Error("Incorrect or missing diagnose code");
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return diagnosis;
};

const parseId = (id: any): string => {
  if (!id || !isString(id)) {
    throw new Error("Incorrect or missing date: " + id);
  }
  return id;
};
const parseString = (string: any): string => {
  if (!string || !isString(string)) {
    throw new Error("Incorrect or missing string: " + string);
  }

  return string;
};
const parseEntries = (entries: any): [] => {
  if (!entries) {
    throw new Error("Incorrect or missing string: " + []);
  }

  return [];
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

const isHealthCheckRating = (params: any): params is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(params);
};
const parseRating = (healthCheckRating: any): HealthCheckRating => {
  if (
    healthCheckRating === undefined ||
    !isHealthCheckRating(healthCheckRating)
  ) {
    console.error();
    throw new Error("Incorrect or missing rating " + healthCheckRating);
  }
  return healthCheckRating;
};

const parseDischarge = (discharge: any): Discharge => {
  if (
    !discharge ||
    !isString(discharge.date) ||
    !isString(discharge.criteria)
  ) {
    throw new Error("Incorrect or missing discharge " + discharge);
  }
  return discharge;
};

const parseSickLeave = (sickLeave: any): SickLeave => {
  if (
    !sickLeave ||
    !isString(sickLeave.startDate) ||
    !isString(sickLeave.endDate)
  ) {
    throw new Error("Incorrect or missing sickleave " + sickLeave);
  }
  return sickLeave;
};

export function toNewPatient(object: any): NewPatientEntry {
  return {
    name: parseString(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    ssn: parseString(object.ssn),
    entries: parseEntries([]),
  };
}

export const toNewEntries = (object: any): Entry => {
  const patientEntries = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    type: object.type,
    id: parseId(object.id),
    description: parseString(object.description),
    date: parseString(object.date),
    specialist: parseString(object.specialist),
    diagnosisCodes: parseDiagnosis(object.diagnosisCodes),
  };
  switch (object.type) {
    case "HealthCheck":
      const healthCheck = {
        ...patientEntries,
        healthCheckRating: parseRating(object.healthCheckRating),
      };
      return healthCheck;

    case "Hospital":
      const hospitalEntry = {
        ...patientEntries,
        discharge: parseDischarge(object.discharge),
      };
      return hospitalEntry;
    case "OccupationalHealthcare":
      const ocupationalEntry = {
        ...patientEntries,
        employerName: parseString(object.employerName),
        sickLeave: parseSickLeave(object.sickLeave),
      };
      return ocupationalEntry;
    default:
      throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(object.type)}`
      );
  }
};
