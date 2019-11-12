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

test('Displays `Locked` when locked, `Closed` when closed and the red-led class', () => {
  let props = {
    closed: true,
    locked: true,
  };
  const { container } = render(
    <Display closed={props.closed} locked={props.locked} />,
  );
  const buttons = container.querySelectorAll('.led.red-led');
  const locked = buttons[0];
  const closed = buttons[1];

  expect(locked.textContent).toBe('Locked');
  expect(closed.textContent).toBe('Closed');
});

test('Displays `Unlocked` when unlocked, `Open` when open and the green-led class', () => {
  let props = {
    closed: false,
    locked: false,
  };
  const { container } = render(
    <Display closed={props.closed} locked={props.locked} />,
  );
  const buttons = container.querySelectorAll('.led.green-led');
  const locked = buttons[0];
  const closed = buttons[1];

  expect(locked.textContent).toBe('Unlocked');
  expect(closed.textContent).toBe('Open');
});