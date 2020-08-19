import { medications } from "../data";
import { MedicationData } from '../global';

export default class MedicationService {
  private async sleep(delay: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  public async getMedicationDetails(ndc: number): Promise<MedicationData> {
    await this.sleep(1000);
    const medicationDetails = medications.filter((medication: MedicationData) => {
      if (medication.ndc === ndc) return medication;
    });

    return medicationDetails[0];
  }
}