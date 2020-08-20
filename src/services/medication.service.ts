import { medications } from "../data";
import { MedicationData } from '../global';

// Perform your AJAX calls inside of this service.
export default class MedicationService {
  private async sleep(delay: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  public async getMedicationDetails(ndc: number): Promise<MedicationData> {
    await this.sleep(1000);
    const medicationDetails = medications.filter((medication: MedicationData) => medication.ndc === ndc);
    return medicationDetails[0];
  }

  public async saveMedicationRecord(medication: MedicationData, patientId: string): Promise<void> {
    await this.sleep(1000);
    window.alert(`Medication submission received for ${patientId}: ${JSON.stringify(medication)}`);
  }
}
