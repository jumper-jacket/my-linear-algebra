import React, { ReactElement } from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/app/page";

test("ベクトルのトグルがレンダリングされているか", () => {
    render(<Home/>);
    const vectorToggle = screen.getByText('vector', { selector: 'span' });
    expect(vectorToggle).toBeInTheDocument();
});

test("トグルを押して行列の入力に切り替わっているか", () => {
    render(<Home/>);
    expect(screen.queryByText('matrix')).not.toBeInTheDocument();
    const toggleSwitch = screen.getAllByRole('button').find(button => 
        button.nextElementSibling?.textContent === 'vector'
      );

    fireEvent.click(toggleSwitch!);
    expect(screen.getByText('matrix')).toBeInTheDocument();
});