// lib/mockData.ts

// 1. Define what our data looks like
export type Route = {
  id: string;
  origin: string;
  destination: string;
  price: number;
  available_seats: number;
};

export type Booking = {
  id: string;
  passenger_phone: string;
  route_id: string;
  status: 'confirmed' | 'cancelled';
  created_at: string; // ISO Date string
};

// 2. Fake Routes (The buses we have)
export const mockRoutes: Route[] = [
  { id: 'r1', origin: 'Lagos', destination: 'Abuja', price: 15000, available_seats: 20 },
  { id: 'r2', origin: 'Lagos', destination: 'Ibadan', price: 5000, available_seats: 12 },
  { id: 'r3', origin: 'Port Harcourt', destination: 'Owerri', price: 4000, available_seats: 18 },
];

// 3. Fake Bookings (Spread across the last few days to make our charts look good)
export const mockBookings: Booking[] = [
  // Lagos to Abuja (Very Popular)
  { id: 'b1', passenger_phone: '08012345678', route_id: 'r1', status: 'confirmed', created_at: '2023-10-24T08:00:00Z' },
  { id: 'b2', passenger_phone: '08023456789', route_id: 'r1', status: 'confirmed', created_at: '2023-10-24T08:15:00Z' },
  { id: 'b3', passenger_phone: '08034567890', route_id: 'r1', status: 'confirmed', created_at: '2023-10-25T09:00:00Z' },
  { id: 'b4', passenger_phone: '08045678901', route_id: 'r1', status: 'confirmed', created_at: '2023-10-25T09:30:00Z' },
  { id: 'b5', passenger_phone: '08056789012', route_id: 'r1', status: 'confirmed', created_at: '2023-10-26T10:00:00Z' },

  // Lagos to Ibadan (Moderate)
  { id: 'b6', passenger_phone: '08067890123', route_id: 'r2', status: 'confirmed', created_at: '2023-10-24T14:00:00Z' },
  { id: 'b7', passenger_phone: '08078901234', route_id: 'r2', status: 'confirmed', created_at: '2023-10-25T15:00:00Z' },
  { id: 'b8', passenger_phone: '08089012345', route_id: 'r2', status: 'confirmed', created_at: '2023-10-26T16:00:00Z' },

  // PH to Owerri (Slow)
  { id: 'b9', passenger_phone: '08090123456', route_id: 'r3', status: 'confirmed', created_at: '2023-10-24T07:00:00Z' },
  { id: 'b10', passenger_phone: '08101234567', route_id: 'r3', status: 'cancelled', created_at: '2023-10-25T07:00:00Z' },
];
