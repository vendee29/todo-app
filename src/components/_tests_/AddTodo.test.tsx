import * as React from "react";
import { render, screen } from '@testing-library/react';
import AddTodo from "../AddTodo";

describe('AddTodo tests', () => {
    render(<AddTodo/>);

    test('renders the submit button', () => {
        const button: HTMLButtonElement = screen.getByDisplayValue('Add new task');
        expect(button).toBeInTheDocument();
    })
})