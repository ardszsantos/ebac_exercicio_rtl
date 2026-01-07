import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários corretamente', () => {
        render(<PostComment/>);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-button');

        // Inserir primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        // Inserir segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        // Verificar se os dois comentários foram inseridos
        const commentItems = screen.getAllByTestId('comment-item');
        expect(commentItems).toHaveLength(2);

        // Verificar o conteúdo dos comentários
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
