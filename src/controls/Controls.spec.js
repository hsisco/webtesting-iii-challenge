import React from 'react';
import Controls from './Controls';
import { render } from '@testing-library/react';

test('Controls renders correctly', () => {
  render(<Controls />);
});

test('Gate cannot be closed if locked', () => {
    const {getByText} = render(
        <Controls closed={false} locked={false}/>
    );
    const lockButton = getByText(/lock gate/i);
    expect(lockButton.disabled).toBeTruthy();
})