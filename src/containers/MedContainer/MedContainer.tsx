import React from 'react';

import Box from '../../components/Box/Box';
import Header from '../../components/Header/Header';
import MedForm from '../MedForm/MedForm';
import MedSearch from '../MedSearch/MedSearch';

import MedicationService from '../../services/medication_service';

import { MedSelection } from '../../global';

const MedContainer: React.FC<{}> = () => {
  const [activeMedication, setActiveMedication] = React.useState(null);

  const medicationService = new MedicationService();

  async function handleMedicationChange(medication: MedSelection): Promise<void> {
    try {
      const result = medication && await medicationService.getMedicationDetails(medication.ndc);
      setActiveMedication(result);
    } catch (err) {
      console.error(err);
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
      <MedSearch onMedicationChange={handleMedicationChange} />
      <MedForm activeMedication={activeMedication} onSubmit={handleFormSubmit} />
    </Box>
  );
};

export default MedContainer;
