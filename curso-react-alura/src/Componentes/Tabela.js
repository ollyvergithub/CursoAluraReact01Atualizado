import React from 'react';

const TableHead = () =>{
    return (
        <thead>
        <tr>
            <th>Autores</th>
            <th>Livros</th>
            <th>Preços</th>
            <th>Remover</th>
        </tr>
        </thead>
    );
};

const TableBody = () => {
    return (
        <tbody>
        <tr>
            <td>Paulo</td>
            <td>React</td>
            <td>1000</td>
            <td><button>Remover</button></td>
        </tr>
        <tr>
            <td>Nico</td>
            <td>Python</td>
            <td>1500</td>
            <td><button>Remover</button></td>
        </tr>
        <tr>
            <td>Daniel</td>
            <td>Django</td>
            <td>2500</td>
            <td><button>Remover</button></td>
        </tr>
        </tbody>
    );
};

class Tabela extends React.Component{
    render() {
        return (
            <table>
                <TableHead/>
                <TableBody/>
            </table>
        );
    }
}
export default Tabela