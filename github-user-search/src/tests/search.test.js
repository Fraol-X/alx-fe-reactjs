import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Search from './components/Search';

jest.mock('axios');

describe('Search Component', () => {
  test('renders input and button', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/Search GitHub user/i);
    const buttonElement = screen.getByText(/Search/i);
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('displays loading message on form submit', async () => {
    axios.get.mockResolvedValue({ data: { login: 'testuser', avatar_url: '', html_url: '' } });
    
    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/Search GitHub user/i), { target: { value: 'testuser' } });
    fireEvent.click(screen.getByText(/Search/i));

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });
  });

  test('displays error message if user not found', async () => {
    axios.get.mockRejectedValue(new Error('User not found'));
    
    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/Search GitHub user/i), { target: { value: 'nonexistentuser' } });
    fireEvent.click(screen.getByText(/Search/i));

    await waitFor(() => {
      expect(screen.getByText(/Looks like we can’t find the user./i)).toBeInTheDocument();
    });
  });

  test('displays user information on successful API call', async () => {
    axios.get.mockResolvedValue({ data: { login: 'testuser', avatar_url: 'testavatar.jpg', html_url: 'https://github.com/testuser' } });

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/Search GitHub user/i), { target: { value: 'testuser' } });
    fireEvent.click(screen.getByText(/Search/i));

    await waitFor(() => {
      expect(screen.getByText(/testuser/i)).toBeInTheDocument();
      expect(screen.getByAltText(/testuser/i)).toBeInTheDocument();
      expect(screen.getByText(/View Profile/i)).toBeInTheDocument();
    });
  });
});
