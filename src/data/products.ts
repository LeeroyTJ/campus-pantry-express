export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  unit?: string;
}

export const categories = [
  { id: 'all', name: 'All Items', icon: '🛍️' },
  { id: 'fruits', name: 'Fruits', icon: '🍎' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
  { id: 'toiletries', name: 'Toiletries', icon: '🧴' },
  { id: 'dairy', name: 'Dairy', icon: '🥛' },
];

export const products: Product[] = [
  // Fruits
  {
    id: '1',
    name: 'Fresh Bananas',
    description: 'Ripe and sweet bananas perfect for snacking',
    price: 2.99,
    image: '/api/placeholder/300/300',
    category: 'fruits',
    inStock: true,
    unit: 'per bunch'
  },
  {
    id: '2',
    name: 'Red Apples',
    description: 'Crisp and juicy red apples',
    price: 4.50,
    image: '/api/placeholder/300/300',
    category: 'fruits',
    inStock: true,
    unit: 'per lb'
  },
  {
    id: '3',
    name: 'Strawberries',
    description: 'Fresh strawberries perfect for smoothies',
    price: 5.99,
    image: '/api/placeholder/300/300',
    category: 'fruits',
    inStock: true,
    unit: 'per container'
  },
  
  // Vegetables
  {
    id: '4',
    name: 'Baby Carrots',
    description: 'Pre-washed baby carrots ready to eat',
    price: 3.25,
    image: '/api/placeholder/300/300',
    category: 'vegetables',
    inStock: true,
    unit: 'per bag'
  },
  {
    id: '5',
    name: 'Fresh Spinach',
    description: 'Organic baby spinach leaves',
    price: 4.75,
    image: '/api/placeholder/300/300',
    category: 'vegetables',
    inStock: true,
    unit: 'per bag'
  },
  {
    id: '6',
    name: 'Bell Peppers',
    description: 'Colorful mix of bell peppers',
    price: 6.20,
    image: '/api/placeholder/300/300',
    category: 'vegetables',
    inStock: true,
    unit: 'per 3-pack'
  },

  // Snacks
  {
    id: '7',
    name: 'Trail Mix',
    description: 'Mixed nuts and dried fruits',
    price: 7.99,
    image: '/api/placeholder/300/300',
    category: 'snacks',
    inStock: true,
    unit: 'per container'
  },
  {
    id: '8',
    name: 'Granola Bars',
    description: 'Healthy oat and honey granola bars',
    price: 5.49,
    image: '/api/placeholder/300/300',
    category: 'snacks',
    inStock: true,
    unit: 'per box'
  },
  {
    id: '9',
    name: 'Popcorn',
    description: 'Sea salt flavored popcorn',
    price: 3.99,
    image: '/api/placeholder/300/300',
    category: 'snacks',
    inStock: true,
    unit: 'per bag'
  },

  // Drinks
  {
    id: '10',
    name: 'Orange Juice',
    description: 'Fresh squeezed orange juice',
    price: 4.99,
    image: '/api/placeholder/300/300',
    category: 'drinks',
    inStock: true,
    unit: 'per bottle'
  },
  {
    id: '11',
    name: 'Energy Drinks',
    description: 'Popular energy drink for studying',
    price: 8.99,
    image: '/api/placeholder/300/300',
    category: 'drinks',
    inStock: true,
    unit: 'per 4-pack'
  },
  {
    id: '12',
    name: 'Sparkling Water',
    description: 'Refreshing sparkling water',
    price: 6.25,
    image: '/api/placeholder/300/300',
    category: 'drinks',
    inStock: true,
    unit: 'per 6-pack'
  },

  // Toiletries
  {
    id: '13',
    name: 'Toothpaste',
    description: 'Fluoride toothpaste for daily care',
    price: 3.49,
    image: '/api/placeholder/300/300',
    category: 'toiletries',
    inStock: true,
    unit: 'per tube'
  },
  {
    id: '14',
    name: 'Shampoo',
    description: 'Gentle daily shampoo',
    price: 8.99,
    image: '/api/placeholder/300/300',
    category: 'toiletries',
    inStock: true,
    unit: 'per bottle'
  },
  {
    id: '15',
    name: 'Hand Sanitizer',
    description: 'Antibacterial hand sanitizer',
    price: 2.99,
    image: '/api/placeholder/300/300',
    category: 'toiletries',
    inStock: true,
    unit: 'per bottle'
  },

  // Dairy
  {
    id: '16',
    name: 'Greek Yogurt',
    description: 'High protein Greek yogurt',
    price: 5.99,
    image: '/api/placeholder/300/300',
    category: 'dairy',
    inStock: true,
    unit: 'per container'
  },
  {
    id: '17',
    name: 'Milk',
    description: 'Fresh whole milk',
    price: 3.79,
    image: '/api/placeholder/300/300',
    category: 'dairy',
    inStock: true,
    unit: 'per gallon'
  },
  {
    id: '18',
    name: 'Cheese Slices',
    description: 'American cheese slices',
    price: 4.49,
    image: '/api/placeholder/300/300',
    category: 'dairy',
    inStock: true,
    unit: 'per package'
  },
];