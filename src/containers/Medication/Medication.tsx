import React from 'react';

import MedSearch from "../MedSearch/MedSearch";

import MedicationService from "../../services/medication.service";

import { MedSelection } from "../../global";
import './Medication.scss';

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
    <div className='medication-container'>
      <MedSearch onMedicationChange={handleMedicationChange} />
    </div>
  );
};

export default Medication;
