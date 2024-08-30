import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('deletes a todo item', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText('Learn React');
  expect(todoItem).toBeInTheDocument();

  const deleteButtons = screen.getAllByText('Delete', { selector: 'button' });

  fireEvent.click(deleteButtons[0]);

  expect(todoItem).not.toBeInTheDocument();
});
