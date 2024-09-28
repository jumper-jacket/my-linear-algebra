import React, { ReactElement } from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
    it("コンポーネントのレンダリングのテスト", async () => {
        render(<Home/>);
    });
});