import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Bienvenue from './Bienvenue';

describe('Bienvenue', () => {
  it('affiche le titre', () => {
    const { getAllByText } = render(<Bienvenue navigation={{ navigate: jest.fn() }} />);
    expect(getAllByText("Bienvenue sur l'App EXAMALI").length).toBeGreaterThan(0);
  });

  it('bouton fonctionne', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<Bienvenue navigation={{ navigate }} />);
    fireEvent.press(getByTestId("commencer-btn"));
    expect(navigate).toHaveBeenCalled();
  });
});