import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';



describe('componente de transacao do Extrato', () => {
// O snapShot e como se fosse um print do componente e se por algum motivo algo for motificado nele o test dara erro. Se for mudanca esperada pode apertar 'u' para refazer o snap, caso seja inesperada, corrigir o condigo
    it('O SnapShot do component deve permanecer sempre o mesmo',
     () => {
        const { container } = render(<Transacao
            data='08/09/2020'
            tipo='saque'
            valor='50.00'
        
        />)

        expect(container.firstChild).toMatchSnapshot()


    })


})