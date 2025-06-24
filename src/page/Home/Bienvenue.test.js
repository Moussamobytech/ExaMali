// Bienvenue.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Bienvenue from './Bienvenue';

describe('Bienvenue', () => {
  it('affiche le titre', () => {
    const { getByText } = render(<Bienvenue navigation={{ navigate: jest.fn() }} />);
    expect(getByText("Bienvenue sur l'App EXAMALI")).toBeTruthy();
  });

  it('bouton fonctionne', () => {
    const navigate = jest.fn();
    const { getByText } = render(<Bienvenue navigation={{ navigate }} />);
    fireEvent.press(getByText("Commencer l'expérience"));
    expect(navigate).toHaveBeenCalled();
  });
});