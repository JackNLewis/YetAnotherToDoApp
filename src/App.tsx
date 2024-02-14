import * as React from 'react';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, Text,ThemeConfig} from "@chakra-ui/react"
import theme from './theme'



export default function App() {

  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <div className='container'>
      <Text fontSize='6xl'>Yet Another ToDo App</Text>
      </div>
    </ChakraProvider>
  )
}