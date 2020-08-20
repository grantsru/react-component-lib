import * as React from 'react';
import { render } from '@testing-library/react';

import Medication from './Medication';

describe('Button', () => {
  const renderComponent = () => render(<Medication />);

  it('should successfully render a element', () => {
    const { getByTestId } = renderComponent();
    const medicationComponent = getByTestId('medication-container');

    expect(medicationComponent).toBeVisible();
  });
});
