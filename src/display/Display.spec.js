import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';

test('Display renders correctly', () => {
  render(<Display />);
});

test('Gate defaults to unlocked', () => {
  expect(Display.defaultProps.locked).toBeFalsy();
});

test('Gate defaults to open', () => {
  expect(Display.defaultProps.closed).toBeFalsy();
});