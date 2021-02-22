import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import {Icon} from  "semantic-ui-react";
import { Patient, Entry } from "../types";
import { apiBaseUrl } from "../constants";
import {EntryInfo} from "../components/EntryInfo";

import { useStateValue, setPatientByID } from "../state";

const PatientPage: React.FC = () => {
  const [{ patient }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const [msg, setMsg] = useState("");

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
    </div>
  );
};

export default PatientPage;
