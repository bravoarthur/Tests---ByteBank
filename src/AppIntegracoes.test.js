import React from 'react';
import api from './api';
import {render, screen} from '@testing-library/react'
import App from './App';

jest.mock('./api')


describe('Requisocoes para API', () => {
    it('Exibir lista de Transacoes atraves da API', async () => {
        api.listaTransacoes.mockResolvedValue( [
        {
            "transacao": "deposito",
            "valor": '20',
            "data": "26/09/2020",
            "id": 2
          },
          {
            
            "valor": '10',
            "transacao": "saque",
            "data": "15/04/2022",
            "id": 1
          }
        ])

        render(<App/>)

        expect(await screen.findByText('saque')).toBeInTheDocument()
       
        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })
})