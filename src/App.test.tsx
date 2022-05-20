/**
 * @jest-environment jsdom
 */

import React from 'react'

test('use jsdom in this test file', () => {
  expect(<div></div>).not.toBeNull();
});
