// src/api.js
export async function fetchTickets() {
  try {
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }
    const data = await response.json();
    return data.tickets || []; // Ensure it returns an empty array if no tickets
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return [];
  }
}
