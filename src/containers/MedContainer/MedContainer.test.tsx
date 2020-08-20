import * as React from 'react';
import { render } from '@testing-library/react';

import MedContainer from './MedContainer';

describe('Button', () => {
  const renderComponent = () => render(<MedContainer />);

  it('should successfully render a element', () => {
    const { getByTestId } = renderComponent();
    const medicationComponent = getByTestId('medication-container');

    expect(medicationComponent).toBeVisible();
  });
});
