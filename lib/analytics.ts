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
// Replace the old generateAIInsight function with this real AI connection
export async function generateAIInsight() {
  const popular = getMostPopularRoute();

  if (!popular.route) return "Not enough data to generate insights.";

  // 1. The Prompt Injection (giving the AI context)
  const prompt = `You are an expert transport and logistics analyst.
  Our data shows the ${popular.route.origin} to ${popular.route.destination} route is experiencing high demand with ${popular.count} recent bookings. We have ${popular.route.available_seats} seats remaining.
  Write a maximum 2-sentence business recommendation for the transport owner on how to maximize profit right now. Keep it professional, actionable, and do not use formatting like bolding or asterisks.`;

  try {
    // 2. Call the real Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();

    // 3. Extract and return the AI's smart text
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("AI Error:", error);
    return "System Offline: Unable to reach intelligence server. Please rely on manual surge protocol.";
  }
}
