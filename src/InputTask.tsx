import * as React from 'react';
import {VStack, HStack, Input, Button, Icon, useColorMode, Box , Card, CardBody, Text} from '@chakra-ui/react';


export default function InputTask(){
    const [ inputState, updateInputState ] = React.useState('');
    const [ listState, updateListState ] = React.useState([]);

    function handleEnterTask(event: any): void{
        if (event.key ==='Enter'){

            updateListState([...listState, {key:listState.length+1, name : inputState}])
            console.log(listState)
            updateInputState('')
        }      
    } 

    const items = listState.map((card) => {
        return(
        <Card key={card.key}>
            <CardBody>
                <Text> {card.name}</Text>
            </CardBody>
        </Card>)
    })
    
    return (
       	<VStack justifyContent='space-between' height={'100%'} p='10'>
        <VStack>
            {items}
        </VStack>

	    <HStack>
            <Box position='relative'
                transition='top 0.5s linear'>
            <Input
                placeholder='enter task'
                value={inputState}
                variant='flushed'
                size='lg'
                w='100'
                autoFocus={true}
                onChange={ (e) => updateInputState(e.target.value)}
                onKeyPress={handleEnterTask}
                />
            </Box>
            </HStack>
	</VStack>    
	    
    )
}
