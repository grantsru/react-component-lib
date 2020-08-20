export interface HeaderProps {
  title: string;
}

export interface MedFormProps {
  activeMedication: MedicationData;
  onSubmit: (values) => void;
}

export interface MedSelection {
  label: string;
  ndc: number;
}

export interface MedSearchProps {
  onMedicationChange: (selection: MedSelection) => void;
}

export interface MedicationData {
  name: string;
  ndc: number;
  form: string;
  strength: string;
}
