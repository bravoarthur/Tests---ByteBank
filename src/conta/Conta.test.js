import React from 'react';
import { render, screen } from '@testing-library/react';
import Conta from './Conta';


describe('Componente de conta' , () => {
    it('Exibir o saldo da conta com Formatacao R$', () => {

        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta')
        //const saldo = screen.getByText('R$ 1000') alternativa

        expect(saldo.textContent).toBe('R$ 1000')

    })

    it('Realizar a transacao quando o Botao e Clicado', () => {
        render(<Conta saldo={1000} />)
    })
})