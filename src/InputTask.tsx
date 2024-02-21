import * as React from 'react';
import { HStack, Input, Button, Icon, useColorMode, Box } from '@chakra-ui/react';


export default function InputTask(){
    const { colorMode, toggleColorMode } = useColorMode()
    const [yOffset, setYoffset] = React.useState('0vh');

    let customCSS = {
        'caretColor': colorMode == 'light' ? 'darkgrey' : 'darkgrey',
    }
    
    let transitionCss = {
        'transition' : 'transform 2s'
    }

    return (
        <HStack height={'100vh'}>
            <Box position='relative'
                top={yOffset}
                transition='top 0.5s linear'>
            <Input
                placeholder='enter task'
                variant='flushed'
                size='lg'
                onInput={() => setYoffset('40vh')}
                autoFocus={true}
                sx={customCSS}
                />
            </Box>
        </HStack>
    )
}
