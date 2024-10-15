import { useToast } from '@chakra-ui/react'

interface IToastDioProps{
    title:string
    description: string
    status: string
}

export const ToastDio = ({title, description, status: string, ...props}: IToastDioProps) => {

    useToast({
        title: title,
        description: description,
        ...props
    })

}
