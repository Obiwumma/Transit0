// lib/analytics.ts
import { mockBookings, mockRoutes } from './mockData';

// 1. Calculate Active Total Bookings
export function getTotalBookings() {
  return mockBookings.filter(b => b.status === 'confirmed').length;
}

// 2. Calculate Total Estimated Revenue
export function getTotalRevenue() {
  let revenue = 0;
  mockBookings.forEach(booking => {
    if (booking.status === 'confirmed') {
      const route = mockRoutes.find(r => r.id === booking.route_id);
      if (route) revenue += route.price;
    }
  });
  return revenue;
}

// 3. Find the Most Popular Route
export function getMostPopularRoute() {
  const routeCounts: Record<string, number> = {};

  mockBookings.forEach(booking => {
    if (booking.status === 'confirmed') {
      routeCounts[booking.route_id] = (routeCounts[booking.route_id] || 0) + 1;
    }
  });

  let topRouteId = '';
  let maxCount = 0;

  for (const [routeId, count] of Object.entries(routeCounts)) {
    if (count > maxCount) {
      maxCount = count;
      topRouteId = routeId;
    }
  }

  const topRoute = mockRoutes.find(r => r.id === topRouteId);
  return { route: topRoute, count: maxCount };
}

// 4. The Hackathon Winner: The "Smart" AI Insight Generator
export function generateAIInsight() {
  const popular = getMostPopularRoute();

  if (!popular.route) return "Not enough data to generate insights.";

  // This string simulates what an AI/Insights API would return to the business owner
  return `Trend Alert: The ${popular.route.origin} to ${popular.route.destination} route is experiencing unusual high demand (${popular.count} recent bookings). Recommendation: Consider increasing the fare by 15% for the remaining ${popular.route.available_seats} seats to maximize profit, or schedule an overflow bus.`;
}
