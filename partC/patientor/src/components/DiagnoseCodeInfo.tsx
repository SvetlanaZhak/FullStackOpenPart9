import React from 'react';
import { Diagnosis} from '../types';
import { useStateValue } from "../state";

export const DiagnoseInfo: React.FC <{diagnoseCodes: Array<string | undefined>}> = ({diagnoseCodes}) =>{
    const [{ diagnoses }] = useStateValue();
    const diagnose = Object.values(diagnoses);
    return (
        <div>
      {diagnoseCodes ?  
        diagnoseCodes.map(code => (
            <ul key = {code}>
 
                <li>{diagnose.find(i => i.code === code)?.code}&nbsp;
                 {diagnose.find(i => i.code === code)?.name}
                 </li>
             </ul>
 ))
:
<p>No diagnoses info</p>}

</div>
    )}

{/* const diagnoseInfo = entry.diagnosisCodes?.map((code) => (
  <ul key={code}>
    
  <li>{diagnose.find(i => i.code === code)?.code}
  {diagnose.find(i => i.code === code)?.name}  
  
  </li>
   
   
  </ul>
  
)); */}