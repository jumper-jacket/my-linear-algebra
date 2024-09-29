import React, { ReactElement } from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import DimensionInputDisplay from '@/app/components/DimensionInputDisplay'; 

test("文字列を渡したらその文字列が表示されれる", () => {
    const str = "test";
    const mockFn = jest.fn();
    render(<DimensionInputDisplay inputDescription={str} onValueChange={mockFn}/>)
    expect(screen.getByText(str)).toBeInTheDocument();
});