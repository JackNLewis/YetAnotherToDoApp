import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const root = createRoot(document.getElementById("root"));

console.log(theme.config)

root.render(
<>
    <ColorModeScript initialColorMode={'dark'} />
    <App />
</>
);
