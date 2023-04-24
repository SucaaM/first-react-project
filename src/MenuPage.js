import React from 'react';
import MenuItem from './MenuItem';
import './MenuPage.css';

function MenuPage() {
  // Assuming you have an array of menu items
  const menuItems = [
    { name: 'Pizza', description: 'A classic pizza with tomato sauce and mozzarella cheese', price: '$12.99' },
    { name: 'Pasta', description: 'Penne pasta with a tomato and basil sauce', price: '$9.99' },
    { name: 'Burger', description: 'A juicy beef burger with cheddar cheese and pickles', price: '$11.99' },
    { name: 'Salad', description: 'Mixed greens with cherry tomatoes, cucumber, and balsamic dressing', price: '$8.99' },
  ];

  return (
    <div>
      <h1>Our Menu</h1>
      <div className="menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} name={item.name} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
