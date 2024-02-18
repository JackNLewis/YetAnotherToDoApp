import * as React from 'react';
import { HStack, Input, Button, Icon, useColorMode } from '@chakra-ui/react';


export default function InputTask(){
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack>
            <Input placeholder='enter task'  variant='unstyled' size='lg' autoFocus={true} 
            sx={{'caret-color': colorMode == 'light' ? 'darkgrey' : 'darkgrey' }}/>
        </HStack>
    )
}