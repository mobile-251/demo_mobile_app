import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
    Svg: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
    Path: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
    Circle: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
  };
});

describe('HomeScreen', () => {
  it('should render without crashing', () => {
    render(<HomeScreen />);
    expect(screen.getByTestId('home-screen')).toBeTruthy();
  });

  it('should display main UI elements', () => {
    render(<HomeScreen />);
    expect(screen.getByText('BallMate')).toBeTruthy();
    expect(screen.getByText('Sân thể thao gần bạn')).toBeTruthy();
    expect(screen.getByTestId('search-input')).toBeTruthy();
  });

  it('should handle book button press without crashing', () => {
    render(<HomeScreen />);
    const bookButton = screen.getByTestId('book-button');
    expect(() => fireEvent.press(bookButton)).not.toThrow();
  });
});
