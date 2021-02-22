import React from 'react';
import { Entry, HospitalEntry} from '../types';
import {DiagnoseInfo} from "./DiagnoseCodeInfo"
import { useStateValue } from "../state";
import { Segment, Header, Icon, List } from 'semantic-ui-react';



const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };


// const HospitalEntry: React.FC<{entry: HospitalEntry}> = ({entry}) => {
//       if (entry !== undefined) {
//         return (
//             <div>
//                     <Segment>
//                     <Header as="h5">Discharge</Header>
//                     <b>Date: {entry?.discharge.date}</b>
//                     <b>Criteria: {entry?.discharge.criteria}</b>
//                 </Segment>
//             </div>
            
            
//         );
//       }
   
// };
export const EntryInfo: React.FC <{entry: Entry}> = ({entry}) =>{
    const [{ diagnoses } ] = useStateValue();
    const diagnose = Object.values(diagnoses);
    console.log(diagnose, "diagnose")
    
    const diagnoseInfo = entry.diagnosisCodes?.map((code) => (
        <ul key={code}>
          
        <li>{diagnose.find(i => i.code === code)?.code}
        {diagnose.find(i => i.code === code)?.name}  
        
        </li>
         
         
        </ul>
        
    ));


 
    // switch(entry.type){
    //     case"Hospital":
    //         return <HospitalEntry entry= {entry}/>;
    //     case "OccupationalHealthcare":
    //         return <OccupationalEntry entry= {entry}/>
    //     case "HealthCheck":
    //         return <HealthCkeckEntry entry= {entry}/>
    //     default: assertNever(entry)
    // }
    return (
        <div>
        <p>{entry.date} {entry.description}</p>
        
        {/* <ul>{  entry.diagnosisCodes?.length !== undefined && entry.diagnosisCodes?.length > 1 ?
        entry.diagnosisCodes?.map((code, key) => <li key={key}>{code}</li>) 


        : <li>{entry.diagnosisCodes}</li>
        
        }
            </ul> */}
            {diagnoseInfo}
      
        </div>
      );
}
    
  
  
 
  