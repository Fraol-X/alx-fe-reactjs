import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './components/TodoList';

test('renders TodoList component correctly', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  
  fireEvent.click(todoItem);
  
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText('Delete', { selector: 'button' });
  
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
