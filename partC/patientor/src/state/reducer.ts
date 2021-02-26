import { State } from "./state";
import { Patient, Diagnosis, Entry } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "SET_PATIENT_BY_ID";
      payload: Patient;
    }
  | {
      type: "SET_DIAGNOSIS";
      payload: Diagnosis[];
    }
  | {
      type: "ADD_ENTRIES";
      payload: Entry[];
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case "ADD_ENTRIES":
      return {
        ...state,
        patient: {
          ...state.patient,
          entries: action.payload,
        },
      };
    case "SET_PATIENT_BY_ID":
      return {
        ...state,
        patient: {
          ...action.payload,
        },
      };
    case "SET_DIAGNOSIS":
      return {
        ...state,
        diagnoses: {
          ...action.payload.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            {}
          ),
          ...state.diagnoses,
        },
      };
    default:
      return state;
  }
};

export const setPatientList = (patients: Patient[]): Action => {
  return {
    type: "SET_PATIENT_LIST",
    payload: patients,
  };
};

export const setPatientByID = (patient: Patient): Action => {
  return {
    type: "SET_PATIENT_BY_ID",
    payload: patient,
  };
};

export const addPatient = (patient: Patient): Action => {
  return {
    type: "ADD_PATIENT",
    payload: patient,
  };
};
export const setDiagnose = (diagnoses: Diagnosis[]): Action => {
  return {
    type: "SET_DIAGNOSIS",
    payload: diagnoses,
  };
};

export const addEntry = (entries: Entry[]): Action => {
  return {
    type: "ADD_ENTRIES",
    payload: entries,
  };
};
