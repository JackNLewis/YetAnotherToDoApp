import * as React from "react";
import { createRoot } from 'react-dom/client';
import MyButton from "./components/square"

const root = createRoot(document.getElementById("root"));

root.render(<MyButton />);
