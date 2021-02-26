import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Button } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import {Icon} from  "semantic-ui-react";
import { Patient, Entry } from "../types";
import { apiBaseUrl } from "../constants";
import {EntryInfo} from "../components/EntryInfo";
import {AddEntryForm} from "../AddEntryForm/index"
// import {HealthCheckEntry} from "../AddEntryForm/HealthCheckEntryForm"
import {EntryValues} from "../AddEntryForm/index"
import { useStateValue, setPatientByID, addEntry } from "../state";

const PatientPage: React.FC = () => {
  const [{ patient }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const [msg, setMsg] = useState("");
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const openModal = (): void => setModalOpen(true);
  const [error, setError] = React.useState<string | undefined>();
  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values: EntryValues) => {
    console.log("new entries", values)
    try {
      const { data: newEntries } = await axios.post<Entry[]>(
        `${apiBaseUrl}/patients/${patient.id}/entries`,
        values, 
      );
      // setPatientByID(newEntries)
      dispatch(addEntry(newEntries));
      console.log(addEntry(newEntries), "add")
      closeModal();
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data.error);
    }
  };
  useEffect(()=>{
      (async () => {
       
        if (!patient || patient?.id !== id) {    
            try {
                const {data: patientInfo} = await axios.get<Patient> (`${apiBaseUrl}/patients/${id}`);
                dispatch(setPatientByID(patientInfo));
            } catch (err) {
                setMsg("Something went wrong")
            }
      }   
  
  })()}, [patient, id, dispatch])
 
if(msg.length) {
    return(
        <div> {msg} </div>
      )
}

  return (
    <div className="App">
   
        <h1>{patient?.name} <Icon name={patient?.gender === "female" ? "venus" : "mars"}/></h1> 

   
     <p>ssn: {patient?.ssn}</p>
  <p>occupation: {patient?.occupation}</p>
  <br/>
  <b>entries</b>
  {patient?.entries?.length === undefined ?
  <p>No entries found</p> 
      
        :
        patient?.entries.map((entry: Entry) => <EntryInfo key={entry.id} entry={entry} />)}
              <AddEntryForm
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
        type="HealthCheck"
      />
      <Button onClick={() => openModal()}>{'Add New Entry'}</Button>
    </div>
  );
};

export default PatientPage;
