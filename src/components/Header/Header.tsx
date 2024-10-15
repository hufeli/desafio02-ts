import { Box, Heading, Center } from '@chakra-ui/react'
import './Header.css'

export const Header = () => {
  return (
    <Box backgroundColor='#efefef' borderRadius='25px' padding='15px' marginBottom='15px'>
      <Heading fontSize='4xl' as='b' color='#33a'>
        <Center>Dio Bank</Center>
      </Heading>
    </Box>
  )
}
