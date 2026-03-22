export interface UserHabit {
  id: string;
  name: string;
  streak: number;
}

export const MOCK_USER_HABITS: UserHabit[] = [
  { id: 'h1', name: 'Deep Work Architecture', streak: 24 },
  { id: 'h2', name: 'Morning Hydration', streak: 12 },
  { id: 'h3', name: '10k Steps', streak: 5 },
  { id: 'h4', name: 'Read 10 Pages', streak: 2 },
];
