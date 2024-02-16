import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { ColorModeScript, ThemeConfig, extendTheme, ChakraProvider} from '@chakra-ui/react'



const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
  
const theme = extendTheme({config: config})


const root = createRoot(document.getElementById('root'));
root.render(
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </>
);

