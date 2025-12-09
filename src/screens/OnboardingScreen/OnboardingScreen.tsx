import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import Svg, { Polygon, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

interface OnboardingScreenProps {
  onComplete?: () => void;
}

// Star Icon Component
const StarIcon = () => (
  <Svg width={192} height={192} viewBox="0 0 24 24" fill="white">
    <Polygon
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
      fill="white"
      stroke="none"
    />
  </Svg>
);

// Play Icon Component
const PlayIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 24 24" fill="#1f6650">
    <Path d="M8 5v14l11-7z" fill="#1f6650" />
  </Svg>
);

// Arrow Right Icon Component
const ArrowRightIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="#1f6650">
    <Path d="M5 12h14M12 5l7 7-7 7" stroke="#1f6650" strokeWidth={2} fill="none" />
  </Svg>
);

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const handleContinue = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <View style={styles.container} testID="onboarding-screen">
      <StatusBar barStyle="light-content" backgroundColor="#1f6650" />

      {/* Background Bubbles */}
      <View style={styles.bgLayer}>
        <View style={[styles.bubble, styles.bubble1]} />
        <View style={[styles.bubble, styles.bubble2]} />
        <View style={[styles.bubble, styles.bubble3]} />
        <View style={[styles.bubble, styles.bubble4]} />
        <View style={[styles.bubble, styles.bubble5]} />
        <View style={[styles.bubble, styles.bubble6]} />
        <View style={[styles.bubble, styles.bubble7]} />
        <View style={[styles.bubble, styles.bubble8]} />
        <View style={styles.bubble9} />
      </View>

      {/* Content Layer */}
      <View style={styles.contentLayer}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroComposition}>
            {/* Blur Effect */}
            <View style={styles.heroBlur} />
            {/* Main Circle with Star */}
            <View style={styles.heroCircle}>
              <StarIcon />
              {/* Play Button */}
              <TouchableOpacity style={styles.playButton} testID="play-button">
                <PlayIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Text Section */}
        <View style={styles.textSection}>
          <Text style={styles.mainTitle} testID="onboarding-title">
            Chào mừng đến với BallMate
          </Text>
          <Text style={styles.subtitle} testID="onboarding-description">
            Nền tảng đặt sân bóng đá thông minh và hiện đại nhất Việt Nam
          </Text>

          {/* Feature Tags (Pyramid Layout) */}
          <View style={styles.featuresTags}>
            <View style={styles.tagsRow1}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>1000+ sân bóng</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Đặt lịch 24/7</Text>
              </View>
            </View>
            <View style={styles.tagsRow2}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Hỗ trợ tận tình</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Section */}
        <View style={styles.actionSection}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={handleContinue}
            testID="continue-button"
            activeOpacity={0.9}
          >
            <Text style={styles.btnText}>Tiếp tục</Text>
            <ArrowRightIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#1f6650',
  },
  bgLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  bubble: {
    position: 'absolute',
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  bubble1: {
    width: 60,
    height: 60,
    left: 107,
    top: height * 0.33,
  },
  bubble2: {
    width: 82,
    height: 82,
    left: 46,
    top: 65,
    opacity: 0.06,
  },
  bubble3: {
    width: 110,
    height: 110,
    left: width - 80,
    top: height * 0.56,
    opacity: 0.14,
  },
  bubble4: {
    width: 120,
    height: 120,
    left: width - 40,
    top: 78,
  },
  bubble5: {
    width: 154,
    height: 154,
    left: width - 120,
    top: height * 0.84,
    opacity: 0.14,
  },
  bubble6: {
    width: 163,
    height: 163,
    left: width - 60,
    top: height * 0.39,
    opacity: 0.06,
  },
  bubble7: {
    width: 184,
    height: 184,
    left: width - 60,
    top: height * 0.32,
    opacity: 0.06,
  },
  bubble8: {
    width: 220,
    height: 220,
    left: width / 2 - 10,
    top: height - 50,
    opacity: 0.13,
  },
  bubble9: {
    position: 'absolute',
    width: width,
    height: height * 1.1,
    left: 0,
    top: 0,
    opacity: 0.03,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
  },
  contentLayer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  heroSection: {
    marginTop: height * 0.18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroComposition: {
    width: 256,
    height: 256,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBlur: {
    position: 'absolute',
    width: 316,
    height: 316,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 158,
    opacity: 0.29,
  },
  heroCircle: {
    width: 256,
    height: 256,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 3.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 128,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 10,
  },
  playButton: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 64,
    height: 64,
    backgroundColor: '#ffffff',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  textSection: {
    width: '100%',
    paddingHorizontal: 33,
    alignItems: 'center',
  },
  mainTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 24,
    textAlign: 'center',
    maxWidth: 300,
  },
  featuresTags: {
    alignItems: 'center',
    gap: 10,
  },
  tagsRow1: {
    flexDirection: 'row',
    gap: 12,
  },
  tagsRow2: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  tagText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  actionSection: {
    width: '100%',
    paddingHorizontal: 33,
  },
  btnPrimary: {
    width: '100%',
    height: 56,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  btnText: {
    color: '#1f6650',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
  },
});
