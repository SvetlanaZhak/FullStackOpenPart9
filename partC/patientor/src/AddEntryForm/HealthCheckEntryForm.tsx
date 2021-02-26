import React from 'react';
import { Modal, Segment,Grid, Button } from 'semantic-ui-react';
import { useStateValue } from "../state";
import { Field, Formik, Form } from "formik";
import { Entry } from '../types';
import {BaseEntry, HealthCheckRating, } from "../types";
import {TextField, DiagnosisSelection, NumberField} from "../AddPatientModal/FormField"


export interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
  }

  export type HealthCheckEntries = Omit<HealthCheckEntry, 'id'>;
  interface Props {
    onSubmit: (values: HealthCheckEntries) => void;
    onCancel: () => void;
  }

export const HealthCheckEntryForm: React.FC<Props> = ({  onSubmit,
    onCancel,
  }) => {
    const [{ diagnoses }] = useStateValue();
    return (
        <Formik
          initialValues={{
            type: 'HealthCheck',
            // id: '',
            date: "",
            description: "",
            specialist: "",
            diagnosisCodes: [],
            healthCheckRating: HealthCheckRating.Healthy,
            
          }}
          onSubmit={onSubmit}
          validate={values => {
            const requiredError = "Field is required";
            const errors: { [field: string]: string } = {};
            if (!values.description) {
              errors.description = requiredError;
            }
            if (!values.date) {
              errors.date = requiredError;
            }
            if (!values.specialist) {
              errors.specialist = requiredError;
            }
          
            return errors;
          }}
        >
          {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
            return (
              <Form className="form ui">
                <Field
                  label="Date"
                  placeholder="Date"
                  name="date"
                  component={TextField}
                />
                <Field
                  label="Description"
                  placeholder="Description"
                  name="description"
                  component={TextField}
                />
                <Field
                  label="Specialist"
                  placeholder="Specialist"
                  name="specialist"
                  component={TextField}
                />
               <DiagnosisSelection
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            diagnoses={Object.values(diagnoses)}
          /> 
                  <Field
              label='HealthCheckRating'
              name='healthCheckRating'
              min={0}
              max={3}
              component={NumberField}
            />
                <Grid>
                  <Grid.Column floated="left" width={5}>
                    <Button type="button" onClick={onCancel} color="red">
                      Cancel
                    </Button>
                  </Grid.Column>
                  <Grid.Column floated="right" width={5}>
                    <Button
                      type="submit"
                      floated="right"
                      color="green"
                      disabled={!dirty || !isValid}>
                      Add
                    </Button>
                  </Grid.Column>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      );
        }