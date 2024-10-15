import {
    InputGroup,
    Input,
    InputRightElement,
    IconButton
} from "@chakra-ui/react"

import {
    ViewIcon,
    ViewOffIcon
} from '@chakra-ui/icons'
import React from "react"

interface IPasswordInput {
    variant?: string
}

export const PasswordInput = ({ variant = 'filled' }: IPasswordInput) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                variant={variant}
            />
            <InputRightElement width='4.5rem'>
                <IconButton
                    width='1.75rem'
                    size='sm'
                    onClick={handleClick}
                    variant='ghost'
                    aria-label={"View password"}
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                />
            </InputRightElement>
        </InputGroup>
    )
}