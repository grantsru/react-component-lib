import { MedicationData } from '../global';
export default class MedicationService {
    private sleep;
    getMedicationDetails(ndc: number): Promise<MedicationData>;
    saveMedicationRecord(medication: MedicationData, patientId: string): Promise<void>;
}
