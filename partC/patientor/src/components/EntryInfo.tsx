import React from 'react';
import { Entry, HospitalEntry, OccupationalHealthcareEntry, HealthCheckEntry  } from '../types';
import {DiagnoseInfo} from "./DiagnoseCodeInfo"
import { useStateValue } from "../state";
import { Segment, Header, Icon, List } from 'semantic-ui-react';



const HospitalEntries: React.FC<{entry: HospitalEntry}> = ({entry}) => {
     
        return (
            <div>
                    <Segment>
                    <Header as="h1">{entry.date} <Icon name ="user md"/></Header>
                    <p><b>Description:</b> {entry.description}</p> <br/>
                    <p><b>Specialist: </b>{entry.specialist}</p> <br/>
                    <DiagnoseInfo diagnoseCodes ={entry.diagnosisCodes || []} />
                
                </Segment>
            </div>
            
            
        );
      
   
};


const OccupationalEntry: React.FC<{entry: OccupationalHealthcareEntry}> = ({entry}) => {
   
      return (
          <div>
                  <Segment>
                  <Header as="h1">{entry.date} <Icon name ="stethoscope"/></Header> 
                  <p><b>Description:</b> {entry.description}</p> <br/>
                    <p><b>Specialist: </b>{entry.specialist}</p> <br/>
                    <p><b>Employer: </b>{entry.employerName}</p>
                  <DiagnoseInfo diagnoseCodes ={entry.diagnosisCodes || []} />
            
              </Segment>
          </div>
          
          
      );
    
};



const HealthCkeckEntry: React.FC<{entry: HealthCheckEntry}> = ({entry}) => {

      return (
          <div>
                  <Segment>
                  <Header as="h1">{entry.date} <Icon name ="user md"/></Header>
                  <p><b>Description:</b> {entry.description}</p> <br/>
                    <p><b>Specialist: </b>{entry.specialist}</p> <br/>
                  
                  <DiagnoseInfo diagnoseCodes ={entry.diagnosisCodes || []} />
                  <Icon name ="heart"/>
              </Segment>
          </div>
          
          
      );
    
};
export const EntryInfo: React.FC<{entry: Entry}> = ({entry}) =>{
    const [{ diagnoses } ] = useStateValue();
    const diagnose = Object.values(diagnoses);
    console.log(diagnose, "diagnose")
    
 
    switch(entry.type){
        case"Hospital":
            return <HospitalEntries entry={entry}/>;
        case "OccupationalHealthcare":
            return <OccupationalEntry entry= {entry}/>
        case "HealthCheck":
            return <HealthCkeckEntry entry= {entry}/>
        default:
            throw new Error(`Unhandled discriminated union member: ${JSON.stringify(entry)}`);
    }
}
    
  
  
 
  