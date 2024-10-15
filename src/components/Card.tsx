import { Box, Input, VStack, Text } from "@chakra-ui/react"
import { login } from "../services/login"
import { PasswordInput } from "./Header/PasswordInput"
import { LoadingButton } from "./LoadingButton"

export const Card = () => {
  return (

    <Box backgroundColor='#efefef' borderRadius='25px' padding='15px'>
      <VStack spacing={10} align='center'>

        <Text fontSize='3xl' as='b' color='#33A0f1'>
          Faça o login
        </Text>

        <Input type='email' placeholder='Email' variant='flushed' />
        <PasswordInput variant='flushed' />
        <LoadingButton onClick={login} text='Login' loadingText='Logging in...' colorScheme='pink' width='100%' />
      </VStack>
    </Box>

  )
}