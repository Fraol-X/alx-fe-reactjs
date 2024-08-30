import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('deletes a todo item', async () => {
  render(<TodoList />);

  const todoItem = screen.getByText('Learn React');
  expect(todoItem).toBeInTheDocument();

  const deleteButtons = screen.getAllByText('Delete', { selector: 'button' });
  
  fireEvent.click(deleteButtons[0]);

  await waitFor(() => {
    expect(todoItem).not.toBeInTheDocument();
  });
});
