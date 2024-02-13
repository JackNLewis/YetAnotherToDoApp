import * as React from "react";
import { createRoot } from 'react-dom/client';
import "./sqaure.css"

export default function MySquare(){
    return (
        <div className="sqaure-container">
            <h1>Inside Square</h1>
            <p>Smaller paragraph</p>
        </div>
    )
}