import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import DisplayJohn from './DisplayJohn';
import { JohnProfile } from './DisplayJohn';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Button colorScheme='blue' size='xs'>Button</Button>
      <Button colorScheme='red' size='sm'>Button</Button>
      <Button colorScheme='orange' size='md'>Button</Button>
      
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='blue.200'
      color='blue.500'
      size='md'
      />
  
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='orange.200'
      color='blue.500'
      size='xl'
      />

      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='lg'
      />

      <Input placeholder='extra small size' size='xs' />
      <Input placeholder='medium size' size='md' />
      <Input placeholder='large size' size='lg' />

      <DisplayJohn/>
      <JohnProfile/>
    </ChakraProvider>
  )
}





export default App;

