import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  
  test('renders heading', () => {
    render(<App />);
    const heading: HTMLHeadingElement = screen.getByText(/ToDo App/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the first three tasks', () => {
    render(<App />);
    const todos: HTMLElement[] = screen.getAllByRole('listitem')
    expect(todos.length).toBe(3);
  });

  test('renders text "No tasks to complete" after clicking the Delete all tasks button', () => {
    render(<App />);
    const deleteAllButton: HTMLElement = screen.getByText('Delete all tasks');
    fireEvent.click(deleteAllButton);
    const noTasks: HTMLElement = screen.getByText('No tasks to complete');
    expect(noTasks).toBeInTheDocument();
  })

  test('renders no todos after clicking the Delete all tasks button', () => {
    render(<App />);
    const deleteAllButton: HTMLElement = screen.getByText('Delete all tasks');
    fireEvent.click(deleteAllButton);
    const todos: HTMLElement[] = screen.queryAllByRole('listitem');
    expect(todos).toHaveLength(0);
  })
})

