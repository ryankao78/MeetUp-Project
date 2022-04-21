import { render, screen, cleanup } from '@testing-library/react';
import Form from './components/Form/Form.js';

test('should render Form component', () => {
    render(<Form/>);
    // const todoElement = screen.getByTestId('todo-1');
    // expect(todoElement).toBeInTheDocument();
    // expect(todoElement).toHaveTextContent('Hello World!');
})

