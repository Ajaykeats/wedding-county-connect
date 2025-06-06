
export interface BudgetItem {
  name: string;
  cost: number;
}

export interface BudgetData {
  [category: string]: BudgetItem[];
}

export interface BudgetFilters {
  selectedCategory: string | null;
}

export const commonCategories = [
  'Venue', 'Catering', 'Photography', 'Attire', 'Flowers',
  'Entertainment', 'Stationery', 'Transportation', 'Gifts', 'Miscellaneous'
];

export const commonSubcategories: { [key: string]: string[] } = {
  'Venue': ['Deposit', 'Rental Fee', 'Insurance', 'Decorations'],
  'Catering': ['Food', 'Beverages', 'Cake', 'Service Staff'],
  'Photography': ['Photographer Fee', 'Videographer Fee', 'Prints', 'Albums'],
  'Attire': ['Wedding Dress', 'Veil', 'Shoes', 'Jewelry', 'Suit/Tux', 'Alterations'],
  'Flowers': ['Bridal Bouquet', 'Bridesmaids Bouquets', 'Boutonnieres', 'Ceremony Flowers', 'Reception Centerpieces'],
  'Entertainment': ['Ceremony Musicians', 'Reception DJ', 'Reception Band'],
  'Stationery': ['Save-the-Dates', 'Invitations', 'Programs', 'Menus', 'Place Cards'],
  'Transportation': ['Limousine', 'Guest Shuttle', 'Valet Parking'],
  'Gifts': ['Bridesmaid Gifts', 'Groomsmen Gifts', 'Parent Gifts'],
  'Miscellaneous': ['Marriage License', 'Officiant Fee', 'Wedding Planner', 'Insurance']
};
