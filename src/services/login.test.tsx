import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })

    it('Deve conter a frase Saudações, internauta! Seja bem-vindo(a) ao Dio Bank', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Saudações, internauta! Seja bem-vindo(a) ao Dio Bank')
    })
})