// Supabase Auth
export interface User {
  id: string;
  email: string;
  name: string;
  accountType: 'renter' | 'landlord';
  isVerified: boolean;
  phoneNumber?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// Property Types
export type PropertyType = 'single-room' | 'studio' | 'apartment' | 'house' | 'hotel' | 'bnb';

export interface Amenity {
  id: string;
  name: string;
  icon?: string;
}

export interface Property {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  type: PropertyType;
  address: string;
  latitude: number;
  longitude: number;
  photos: string[];
  amenities: Amenity[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  pricing: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
    yearly?: number;
    securityDeposit: number;
  };
  availability: {
    startDate: string;
    endDate: string;
    bookedDates: string[];
  };
  rating: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
}

// Booking
export interface Booking {
  id: string;
  propertyId: string;
  renterId: string;
  landlordId: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  deposit: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentMethod: 'stripe' | 'mpesa';
  createdAt: string;
  updatedAt: string;
}

// Reviews
export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Messages
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}