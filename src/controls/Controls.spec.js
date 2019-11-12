import React from 'react';
import Controls from './Controls';
import { render } from '@testing-library/react';

test('Controls renders correctly', () => {
  render(<Controls />);
});

test('Buttons toggle `Closed` and `Locked` states',()=>{
  const {getByText} = render(
      <Controls/>
  );
  getByText (/lock gate/i)
  getByText (/close gate/i)
});

test('Displays `Lock Gate` and `Close Gate` when gate is unlocked + open', () => {
  const props = {
    locked: false,
    closed: false,
  };
  const controls = render(
    <Controls locked={props.locked} closed={props.closed} />,
  );

  expect(controls.getByText(/lock gate/i).textContent).toBe('Lock Gate');
  expect(controls.getByText(/close gate/i).textContent).toBe('Close Gate');
});

test('Displays `Unlock Gate` and `Open Gate` when gate is locked + closed', () => {
  const props = {
    locked: true,
    closed: true,
  };
  const controls = render(
    <Controls locked={props.locked} closed={props.closed} />,
  );

  expect(controls.getByText(/unlock gate/i).textContent).toBe('Unlock Gate');
  expect(controls.getByText(/open gate/i).textContent).toBe('Open Gate');
});

test('`Closed` button is disabled if the gate is locked', ()=>{
  const {getByText} = render(
      <Controls closed={true} locked={true}/>
  );
  const openButton = getByText(/open gate/i);
  expect(openButton.disabled).toBeTruthy();
});

test('`Locked` toggle button is disabled if the gate is open', ()=>{
  const {getByText} = render(
      <Controls closed={false} locked={false}/>
  );
  const lockButton = getByText(/lock gate/i);
  expect(lockButton.disabled).toBeTruthy();
});