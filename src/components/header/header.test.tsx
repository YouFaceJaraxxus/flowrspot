/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Provider } from 'react-redux';
import store from '../../redux/store/store';
import Header from './header';
import { setIsLogged } from '../../redux/slices/userSlice';

test('drawer opened on MenuItem click', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>);
    
  expect(store.getState().common.drawerOpen).toBe(false);

  const drawerOpener = screen.getByTestId("MenuIcon");
  expect(drawerOpener).toBeInTheDocument();

  drawerOpener.dispatchEvent(new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
    buttons: 1
  }));

  expect(store.getState().common.drawerOpen).toBe(true);
});

test('login button appears depending on login state', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>);

  let loginButton = screen.queryByText("Login");
  expect(loginButton).toBeInTheDocument();
    
  store.dispatch(setIsLogged(true));
  expect(store.getState().user.isLogged).toBe(true);

  loginButton = screen.queryByText("Login");
  
  expect(loginButton).toBeNull();
});