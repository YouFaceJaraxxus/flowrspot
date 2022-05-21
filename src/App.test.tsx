/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';

test('renders app with drawer initially closed', () => {
  render(
  <Provider store={store}>
    <App />
  </Provider>)
  expect(store.getState().common.drawerOpen).toBe(false);
})