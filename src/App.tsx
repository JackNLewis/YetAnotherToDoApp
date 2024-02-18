import * as React from 'react';
import { Button, ChakraProvider, useColorMode, ColorModeScript, Center } from '@chakra-ui/react'
import { Text, VStack, extendTheme, ThemeConfig , Input} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import InputTask from './InputTask';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
    <Button onClick={toggleColorMode} position={'fixed'} right={0} margin={3}>
                {colorMode === 'light' ? 
                    <MoonIcon boxSize={3} />:
                    <SunIcon boxSize={3}/> 
                }
            </Button> 
        <VStack paddingTop={'5vh'} justifyContent={'center'} alignItems={'center'} h='100vh'>
          <InputTask />
        </VStack>
    </>
  )
}
