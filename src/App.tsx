import * as React from 'react';
import { Button, ChakraProvider, useColorMode, ColorModeScript } from '@chakra-ui/react'
import { Text, VStack, extendTheme, ThemeConfig } from "@chakra-ui/react"

// const config: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// }

// const theme = extendTheme({config: config})

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
        <VStack paddingTop={'10vh'}>
          <Text fontSize='6xl'>Yet Another ToDo App</Text>
          <Button onClick={toggleColorMode}>
        Toggle 
      </Button>
         
        </VStack>
  )
}