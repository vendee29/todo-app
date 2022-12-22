import * as React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import TodoActionButtons from "../TodoActionButtons";

describe('TodoActionButtons component', () => {
    const mockDelete = jest.fn(() => console.log('deleted'));
    const mockCheck = jest.fn(() => console.log('checked'));

    test('renders the checkbox input', () => {
        render(<TodoActionButtons onDelete={mockDelete} isChecked={mockCheck}/>);
        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });

    test('renders the delete button', () => {
        render(<TodoActionButtons onDelete={mockDelete} isChecked={mockCheck}/>)
        expect(screen.getByTestId('delete-btn')).toBeInTheDocument();
    });

    test('fires onDelete function upon clicking on the delete button', () => {
        render(<TodoActionButtons onDelete={mockDelete} isChecked={mockCheck}/>);
        const deleteButton: HTMLElement = screen.getByTestId('delete-btn');
        fireEvent.click(deleteButton);
        expect(mockDelete).toHaveBeenCalled();
    });

    test('fires onChange function upon clicking on the checkbox', () => {
        render(<TodoActionButtons onDelete={mockDelete} isChecked={mockCheck}/>);
        const checkbox: HTMLElement = screen.getByTestId('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(mockCheck).toHaveBeenCalled();
    });
})