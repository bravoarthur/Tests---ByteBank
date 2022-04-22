import React from 'react';
import api from './api';
import {render, screen} from '@testing-library/react'
import App from './App';

jest.mock('./api')


describe('Requisocoes para API', () => {
    it('Exibir lista de Transacoes atraves da API', () => {
        api.listaTransacoes.mockResolvedValue( [
        {
            "transacao": "deposito",
            "valor": 20,
            "data": "26/09/2020",
            "id": 2
          },
          {
            
            "valor": 10,
            "transacao": "Saque",
            "data": "15/04/2022",
            "id": 3
          }
        ])

        render(<App/>)
       
        expect(screen.getByTestId('transacoes').children.lenght).toBe(2)
    })
})