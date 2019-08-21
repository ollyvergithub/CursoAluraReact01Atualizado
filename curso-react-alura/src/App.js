import React from 'react';
import Tabela from './Componentes/Tabela'

class App extends React.Component{

    state = {
        autores:[
            {
                nome: 'Paulo',
                livro: 'React',
                preco: '1000'
            },
            {
                nome: 'Daniel',
                livro: 'Java',
                preco: '99'
            },
            {
                nome: 'Marcos',
                livro: 'Design',
                preco: '150'
            },
            {
                nome: 'Bruno',
                livro: 'DevOps',
                preco: '100'
            },
            {
                nome: 'Bruno',
                livro: 'DevOps',
                preco: '100'
            }
        ],
    }

    render() {
        return (
            <div>
                <Tabela autores={this.state.autores}/>
            </div>
        );
    }


}

export default App;
