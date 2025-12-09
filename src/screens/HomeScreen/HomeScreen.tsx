import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');

// Icon Components
const LocationIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="white">
    <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
  </Svg>
);

const NotificationIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="white">
    <Path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="white" />
  </Svg>
);

const SearchIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="#6f9a8d">
    <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#6f9a8d" />
  </Svg>
);

const FilterIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="#1f6650">
    <Path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" fill="#1f6650" />
  </Svg>
);

const StarIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="#ea5e5e">
    <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ea5e5e" />
  </Svg>
);

const HeartIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#ea5e5e" strokeWidth={2} fill="none" />
  </Svg>
);

const ClockIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="#6f9a8d">
    <Path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#6f9a8d" />
  </Svg>
);

const HomeNavIcon = ({ active }: { active?: boolean }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill={active ? 'white' : '#6f9a8d'}>
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={active ? 'white' : '#6f9a8d'} />
  </Svg>
);

const MapNavIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#6f9a8d">
    <Path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" fill="#6f9a8d" />
  </Svg>
);

const CalendarNavIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#6f9a8d">
    <Path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" fill="#6f9a8d" />
  </Svg>
);

const MessageNavIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#6f9a8d">
    <Path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="#6f9a8d" />
  </Svg>
);

const ProfileNavIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#6f9a8d">
    <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#6f9a8d" />
  </Svg>
);

// Category data
const categories = [
  { id: 'all', label: 'Tất cả', count: 36, active: true },
  { id: 'san5', label: 'Sân 5', count: 12, active: false },
  { id: 'san7', label: 'Sân 7', count: 12, active: false },
  { id: 'san11', label: 'Sân 11', count: 12, active: false },
];

// Quick filters data
const quickFilters = [
  { id: 'near', label: 'Gần tôi nhất', active: false },
  { id: 'available', label: 'Còn trống', active: true },
  { id: 'rated', label: 'Đánh giá cao', active: false },
  { id: 'popular', label: 'Phổ biến', active: false },
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilters, setActiveFilters] = useState(['available']);

  const toggleFilter = (filterId: string) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  return (
    <View style={styles.container} testID="home-screen">
      <StatusBar barStyle="light-content" backgroundColor="#1f6650" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.locationWrapper}>
              <View style={styles.iconCircle}>
                <LocationIcon />
              </View>
              <View style={styles.locationText}>
                <Text style={styles.locationLabel}>Vị trí hiện tại</Text>
                <Text style={styles.locationValue}>Thủ Đức, TP.HCM</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationBtn} testID="notification-button">
              <NotificationIcon />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Brand */}
          <View style={styles.brandSection}>
            <View style={styles.brandLogo}>
              <Text style={styles.brandIcon}>⚽</Text>
              <Text style={styles.brandTitle}>BallMate</Text>
            </View>
            <Text style={styles.brandSlogan}>Đặt sân nhanh chóng, chơi bóng hết mình</Text>
          </View>

          {/* Search */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <SearchIcon />
              <TextInput
                style={styles.searchInput}
                placeholder="Tìm sân theo tên hoặc địa điểm..."
                placeholderTextColor="#6f9a8d"
                value={searchText}
                onChangeText={setSearchText}
                testID="search-input"
              />
              <TouchableOpacity style={styles.searchBtn} testID="search-button">
                <Text style={styles.searchBtnText}>Tìm kiếm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Middle Content */}
        <View style={styles.middleContent}>
          {/* Categories */}
          <View style={styles.categoriesSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Danh mục</Text>
              <TouchableOpacity style={styles.filterIconBtn}>
                <FilterIcon />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  style={[styles.catBtn, activeCategory === cat.id && styles.catBtnActive]}
                  onPress={() => setActiveCategory(cat.id)}
                  testID={`category-${cat.id}`}
                >
                  <Text style={[styles.catText, activeCategory === cat.id && styles.catTextActive]}>{cat.label}</Text>
                  <View style={styles.catBadge}>
                    <Text style={[styles.catBadgeText, activeCategory === cat.id && styles.catBadgeTextActive]}>{cat.count}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Quick Filters */}
          <View style={styles.quickFiltersSection}>
            <Text style={styles.sectionTitle}>Bộ lọc nhanh</Text>
            <View style={styles.filtersGrid}>
              {quickFilters.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  style={[styles.filterCard, activeFilters.includes(filter.id) && styles.filterCardActive]}
                  onPress={() => toggleFilter(filter.id)}
                  testID={`filter-${filter.id}`}
                >
                  <View style={[styles.filterIconBox, activeFilters.includes(filter.id) && styles.filterIconBoxActive]}>
                    <Text style={styles.filterEmoji}>
                      {filter.id === 'near' ? '📍' : filter.id === 'available' ? '✅' : filter.id === 'rated' ? '⭐' : '🔥'}
                    </Text>
                  </View>
                  <Text style={[styles.filterLabel, activeFilters.includes(filter.id) && styles.filterLabelActive]}>{filter.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Stats Banner */}
          <View style={styles.statsBanner}>
            <View style={styles.statItem}>
              <Text style={styles.statTitle}>36 sân bóng đá</Text>
              <Text style={styles.statDesc}>Trong bán kính 5km</Text>
            </View>
            <View style={styles.statItemRight}>
              <Text style={styles.statHighlight}>Từ 120.000đ/giờ</Text>
              <Text style={styles.statDesc}>Giá trung bình</Text>
            </View>
          </View>
        </View>

        {/* Featured Section */}
        <View style={styles.featuredContainer}>
          <View style={styles.featuredHeader}>
            <Text style={styles.featuredTitle}>Sân thể thao gần bạn</Text>
            <TouchableOpacity testID="view-all-button">
              <Text style={styles.viewAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          {/* Field Card */}
          <View style={styles.fieldCard}>
            <View style={styles.cardImageWrapper}>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.placeholderEmoji}>⚽🌿</Text>
              </View>
              <View style={styles.imageOverlay} />

              {/* Badges */}
              <View style={styles.badgeContainer}>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusBadgeText}>✓ Còn trống</Text>
                </View>
                <View style={[styles.statusBadge, styles.statusBadgePurple]}>
                  <Text style={styles.statusBadgeText}>📍 Gần tôi</Text>
                </View>
              </View>

              <View style={styles.ratingBadge}>
                <StarIcon />
                <Text style={styles.ratingText}>4.8</Text>
              </View>

              <TouchableOpacity style={styles.favoriteBtn} testID="favorite-button">
                <HeartIcon />
              </TouchableOpacity>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.fieldName}>Sân bóng mini Bắc Rạch Chiếc</Text>

              <View style={styles.infoRow}>
                <LocationIcon />
                <Text style={styles.infoText}>Đường 410, Phước Long A, Quận 9, TP.HCM</Text>
              </View>

              <View style={styles.infoRow}>
                <ClockIcon />
                <Text style={styles.infoText}>00:00 - 24:00</Text>
              </View>

              <View style={styles.priceDistanceRow}>
                <Text style={styles.priceLabel}>Chỉ từ 200.000đ/giờ</Text>
                <Text style={styles.distanceText}>6.7km</Text>
              </View>

              <TouchableOpacity style={styles.bookBtn} testID="book-button">
                <Text style={styles.bookBtnText}>Đặt lịch ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bottom padding for nav */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} testID="nav-home">
          <View style={[styles.navIconContainer, styles.navIconContainerActive]}>
            <HomeNavIcon active />
          </View>
          <Text style={[styles.navLabel, styles.navLabelActive]}>Trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} testID="nav-map">
          <View style={styles.navIconContainer}>
            <MapNavIcon />
          </View>
          <Text style={styles.navLabel}>Bản đồ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} testID="nav-calendar">
          <View style={styles.navIconContainer}>
            <CalendarNavIcon />
            <View style={styles.navBadge}>
              <Text style={styles.navBadgeText}>2</Text>
            </View>
          </View>
          <Text style={styles.navLabel}>Lịch đặt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} testID="nav-messages">
          <View style={styles.navIconContainer}>
            <MessageNavIcon />
            <View style={styles.navBadge}>
              <Text style={styles.navBadgeText}>5</Text>
            </View>
          </View>
          <Text style={styles.navLabel}>Tin nhắn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} testID="nav-profile">
          <View style={styles.navIconContainer}>
            <ProfileNavIcon />
          </View>
          <Text style={styles.navLabel}>Tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf0',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1f6650',
    paddingTop: 45,
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconCircle: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    gap: 2,
  },
  locationLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  locationValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  notificationBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ea5e5e',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#1f6650',
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
    fontWeight: '700',
  },
  brandSection: {
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
  },
  brandLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandIcon: {
    fontSize: 24,
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  brandSlogan: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  searchContainer: {
    marginTop: 16,
  },
  searchBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 16,
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#6f9a8d',
  },
  searchBtn: {
    backgroundColor: '#1f6650',
    borderRadius: 20,
    paddingHorizontal: 24,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  middleContent: {
    padding: 24,
    gap: 24,
  },
  categoriesSection: {
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f261c',
  },
  filterIconBtn: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1f6650',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 4,
  },
  categoriesList: {
    flexDirection: 'row',
  },
  catBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginRight: 12,
    shadowColor: '#1f6650',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 3,
  },
  catBtnActive: {
    backgroundColor: '#1f6650',
  },
  catText: {
    fontSize: 14,
    color: '#6f9a8d',
    fontWeight: '500',
  },
  catTextActive: {
    color: '#ffffff',
  },
  catBadge: {
    backgroundColor: 'rgba(111, 154, 141, 0.2)',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  catBadgeText: {
    fontSize: 12,
    color: '#6f9a8d',
  },
  catBadgeTextActive: {
    color: '#ffffff',
  },
  quickFiltersSection: {
    gap: 12,
  },
  filtersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  filterCard: {
    width: (width - 48 - 12) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 68,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 3,
  },
  filterCardActive: {
    backgroundColor: '#ea5e5e',
  },
  filterIconBox: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(111, 154, 141, 0.1)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIconBoxActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  filterEmoji: {
    fontSize: 16,
  },
  filterLabel: {
    fontSize: 14,
    color: '#6f9a8d',
    fontWeight: '500',
    flex: 1,
  },
  filterLabelActive: {
    color: '#ffffff',
  },
  statsBanner: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 20,
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#1f6650',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 3,
  },
  statItem: {
    gap: 4,
  },
  statItemRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f261c',
  },
  statDesc: {
    fontSize: 12,
    color: '#6f9a8d',
  },
  statHighlight: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ea5e5e',
  },
  featuredContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f261c',
  },
  viewAll: {
    fontSize: 14,
    color: '#1f6650',
    fontWeight: '500',
  },
  fieldCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardImageWrapper: {
    height: 196,
    backgroundColor: '#2d7a5c',
    position: 'relative',
  },
  cardImagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3d8a6c',
  },
  placeholderEmoji: {
    fontSize: 48,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  badgeContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    gap: 8,
  },
  statusBadge: {
    backgroundColor: '#10b981',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusBadgePurple: {
    backgroundColor: '#8b5cf6',
  },
  statusBadgeText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 34,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#ea5e5e',
    fontWeight: '700',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 20,
    gap: 12,
  },
  fieldName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f261c',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6f9a8d',
    lineHeight: 20,
    flex: 1,
  },
  priceDistanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f261c',
  },
  distanceText: {
    fontSize: 14,
    color: '#1f6650',
    fontWeight: '600',
  },
  bookBtn: {
    backgroundColor: '#1f6650',
    borderRadius: 20,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: '#1f6650',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  bookBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
    width: 60,
  },
  navIconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  navIconContainerActive: {
    backgroundColor: '#1f6650',
    width: 45,
    height: 45,
    borderRadius: 20,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  navLabel: {
    fontSize: 10,
    color: '#6f9a8d',
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#1f6650',
    fontWeight: '600',
  },
  navBadge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: '#ea5e5e',
    borderRadius: 10,
    paddingHorizontal: 4,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  navBadgeText: {
    color: 'white',
    fontSize: 9,
    fontWeight: '700',
  },
});
