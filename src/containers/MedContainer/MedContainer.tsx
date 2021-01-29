import React from 'react';

import Box from '../../components/Box/Box';
import Header from '../../components/Header/Header';
import MedForm from '../MedForm/MedForm';
import MedSearch from '../MedSearch/MedSearch';

import MedicationService from '../../services/medication_service';

import { MedSelection } from '../../global';
import Divider from "../../components/Divider/Divider";

const MedContainer: React.FunctionComponent<{ medServiceApiUrl?: string }> = (props) => {
  const [isLoading, setLoading] = React.useState(false);
  const [activeMedication, setActiveMedication] = React.useState(null);

  const medicationService = new MedicationService(props.medServiceApiUrl);

  async function handleMedicationChange(medication: MedSelection): Promise<void> {
    setLoading(true);

    try {
      const result = medication && await medicationService.getMedicationDetails(medication.ndc);
      setActiveMedication(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleFormSubmit(form): Promise<void> {
    try {
      await medicationService.saveMedicationRecord(form, 'patientId-1');
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    if (activeMedication) console.log('Collected medication data: ', activeMedication);
  }, [activeMedication]);

  // Clean-up state
  React.useEffect(() => () => setActiveMedication(null), []);

  return (
    <Box data-testid="medication-container">
      <Header title="Medication Form" />
      <MedSearch onMedicationChange={handleMedicationChange} isLoading={isLoading} />
      <Divider />
      <MedForm activeMedication={activeMedication} onSubmit={handleFormSubmit} />
    </Box>
  );
};

export default MedContainer;
