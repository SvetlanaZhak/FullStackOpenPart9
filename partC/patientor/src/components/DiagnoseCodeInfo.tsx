import React from 'react';
import { Diagnosis} from '../types';
import { useStateValue } from "../state";

export const DiagnoseInfo: React.FC <{diagnoseCode: Array<string | undefined>}> = ({diagnoseCode}) =>{
    const [{ diagnoses }] = useStateValue();
    const diagnose = Object.values(diagnoses);
    return (
        <div>
{/* {diagnoseCode ?  <p>{diagnose?.code}{diagnose?.name}   </p>:

<p>No diagnose info</p>
} */}


    
        </div>
      );
}
    