import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import { HealthCheckEntryForm} from "./HealthCheckEntryForm"
import { Entry } from '../types';
import {HealthCheckEntries} from "./HealthCheckEntryForm"


export type EntryValues = Omit<Entry, 'id'>;
interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: HealthCheckEntries) => void;
  error?: string;
  type: "HealthCheck"
}

export const AddEntryForm = ({ modalOpen, onClose, onSubmit, error, type }: Props) => (
 
    <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
      <Modal.Header>{`Add a Health Check entry`}</Modal.Header>
      <Modal.Content>
        {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
        <HealthCheckEntryForm onSubmit={onSubmit} onCancel={onClose} /> 
      </Modal.Content>
    </Modal>
  );
  
