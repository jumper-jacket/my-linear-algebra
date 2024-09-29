import React, { ReactElement } from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import NaturalNumPad from '@/app/components/NaturalNumPad'; 

describe('NaturalNumPad', () => {
    const mockOnValueChange = jest.fn();
  
    beforeEach(() => {
      render(<NaturalNumPad onValueChange={mockOnValueChange} />);
    });
  
    test('初期表示が "0" であること', () => {
      expect(screen.getByRole('status')).toHaveTextContent('0');
    });
  
    test('数字ボタンをクリックすると表示が更新されること', () => {
      fireEvent.click(screen.getByRole('button', { name: '1' }));
      fireEvent.click(screen.getByRole('button', { name: '2' }));
      fireEvent.click(screen.getByRole('button', { name: '3' }));
      expect(screen.getByRole('status')).toHaveTextContent('123');
    });
  
    test('最初の入力が "0" の場合、続けて入力できないこと', () => {
      fireEvent.click(screen.getByRole('button', { name: '0' }));
      fireEvent.click(screen.getByRole('button', { name: '1' }));
      expect(screen.getByRole('status')).toHaveTextContent('0');
    });
  
    test('Del ボタンで一文字削除できること', () => {
      fireEvent.click(screen.getByRole('button', { name: '1' }));
      fireEvent.click(screen.getByRole('button', { name: '2' }));
      fireEvent.click(screen.getByRole('button', { name: 'Del' }));
      expect(screen.getByRole('status')).toHaveTextContent('1');
    });
  
    test('C ボタンで入力をクリアできること', () => {
      fireEvent.click(screen.getByRole('button', { name: '1' }));
      fireEvent.click(screen.getByRole('button', { name: '2' }));
      fireEvent.click(screen.getByRole('button', { name: 'C' }));
      expect(screen.getByRole('status')).toHaveTextContent('0');
    });
  
    test('submit ボタンで onValueChange が呼ばれること', () => {
      fireEvent.click(screen.getByRole('button', { name: '1' }));
      fireEvent.click(screen.getByRole('button', { name: '2' }));
      fireEvent.click(screen.getByRole('button', { name: '3' }));
      fireEvent.click(screen.getByRole('button', { name: 'submit' }));
      expect(mockOnValueChange).toHaveBeenCalledWith(123);
    });
});