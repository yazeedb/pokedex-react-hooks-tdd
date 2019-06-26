import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('renders a given title', () => {
    const title = 'All Pokemon';
    const testUtils = render(<Header title={title} />);

    const allTitleElements = testUtils.getAllByText(title);
    const [firstTitle] = allTitleElements;

    expect(allTitleElements.length).toBe(1);
    expect(firstTitle.innerHTML).toBe(title);
  });
});
