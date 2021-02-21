export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}
export interface Entry {}
export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  ssn?: string;
  occupation: string;
  entries: Entry[];
}
// export type PublicPatient = Omit<Patient, "ssn" | "entries">;
export type NonSensitivePatientEntry = Omit<Patient, "ssn" | "entries">;

export type NewPatientEntry = Omit<Patient, "id">;

export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other",
}
