import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import OnboardingScreen from './OnboardingScreen';

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
    Svg: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
    Polygon: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
    Path: (props: React.ComponentProps<typeof View>) => React.createElement(View, props),
  };
});

describe('OnboardingScreen', () => {
  it('should render without crashing', () => {
    render(<OnboardingScreen />);
    expect(screen.getByTestId('onboarding-screen')).toBeTruthy();
  });

  it('should display the welcome title and subtitle', () => {
    render(<OnboardingScreen />);
    expect(screen.getByText('Chào mừng đến với BallMate')).toBeTruthy();
    expect(screen.getByText('Nền tảng đặt sân bóng đá thông minh và hiện đại nhất Việt Nam')).toBeTruthy();
  });

  it('should call onComplete when continue button is pressed', () => {
    const onCompleteMock = jest.fn();
    render(<OnboardingScreen onComplete={onCompleteMock} />);

    const continueButton = screen.getByTestId('continue-button');
    fireEvent.press(continueButton);

    expect(onCompleteMock).toHaveBeenCalledTimes(1);
  });
});
