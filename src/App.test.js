import React from 'react';
import {fireEvent, getByTestId, render , screen} from "@testing-library/react";
import App, {calcularNovoSaldo, calculoNovoSaldo} from './App'





describe('Componente principal', () => {
    describe('Quando eu Abro o App do Banco', () => {
        // IT pode ser escrito como test
        it('mostrar o nome do banco', ()=> {
            render(<App/>)


            expect(screen.getByText('ByteBank')).toBeInTheDocument()
        })
        /* o "IT" 'e o unico elemnto necessario para se fazer um Teste. Fazemos o decribe para ter uma descricao de um conjunto de testes que tem a ver com determinado elemento. dentro desse describe podemos ter varios ITs
        ****Esse It estava fora do describe.
        it('Mostrar Saldo' , () => {
            render(<App/>)
            expect(screen.getByText('Saldo:')).toBeInTheDocument()
        })
        */

        it('O saldo e exibido', () => {
            render(<App/>)

            expect(screen.getByText('Saldo:')).toBeInTheDocument()
        }) 

        it('O botao de realizar transacoes e exibido', () =>{
            render(<App/>)
            expect(screen.getByText('Realizar operação')).toBeInTheDocument()

        })

    })

    describe("Quando efetuo a transacao", () => {
        
        it('Saque, o valor vai diminuir', () => {
            

            const valores = {
                transacao: 'saque',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100)

        })

        it('Deposito, o valor vai Aumentar', () => {
            

            const valores = {
                transacao: 'deposito',
                valor: 100
            }

            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(250)

        })

        it("Saque, o a transacao deve ser realizada", () => {

            const {getByText, getByTestId, getByLabelText} = render(<App/>)

            // e mais facil apenas renderizar o APP e para ter acesso a essas funcoes, fazer abaixo - const saldo = screen.getByText('R$ 1000) porque o "screen" possui tudo que o app renderizou

            const saldo = getByText('R$ 1000')
            const transacao = getByLabelText('Saque')
            const valor = getByTestId('valor')
            const botaoTransacao = getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            fireEvent.click(transacao, {target: {value: 'saque'}})
            fireEvent.change(valor, {target: {value:  10}})
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe('R$ 990')            

        })
        
    })

})
