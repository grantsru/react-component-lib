import React from 'react';
import styled from 'styled-components';

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import MedSearch from "../MedSearch/MedSearch";

import MedicationService from "../../services/medication.service";

import { MedSelection } from "../../global";

const Medication: React.FC<{}> = () => {
  const [activeMedication, setActiveMedication] = React.useState(null);
  const medicationService = new MedicationService;

  async function handleMedicationChange(medication: MedSelection): Promise<void> {
    const result = await medicationService.getMedicationDetails(medication.ndc);
    setActiveMedication(result);
  }

  React.useEffect(() => {
    if (activeMedication) console.log('Collected medication data: ', activeMedication);
  }, [activeMedication]);

  return (
    <Container>
      <Header title='Medication Form' />
      <MedSearch onMedicationChange={handleMedicationChange} />
    </Container>
  );
};

export default Medication;
