import React from 'react';
import { Entry } from '../types';

export const EntryInfo: React.FC <{entry: Entry}> = ({entry}) =>{
    return (
        <div>
        <p>{entry.date} {entry.description}</p>
        
        <ul>{  entry.diagnosisCodes?.length !== undefined && entry.diagnosisCodes?.length > 1 ?
        entry.diagnosisCodes?.map((code, key) => <li key={key}>{code}</li>)
        : <li>{entry.diagnosisCodes}</li>
        
        }
            </ul>
      
        </div>
      );
}
    
  
  
 
  