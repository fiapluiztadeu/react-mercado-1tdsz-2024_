//Importamos o tipo de Item 
import { Item } from '../data/listaData';
//Definimos o formato da interface de props, com o componente listaDeCompras
//lista de intens (array de Item)
type listaDeComprasProps = {
    itens: Item[]; // itens será um array do objeto do tipo 'Item'
}
function listaDeCompras(props: listaDeComprasProps) {
    return (
        <>{/*Aqui, estamos usando props.itens para acessar o array de itens que foi passado
            para o componete. Para cada item, exbimos o nome e quantidade
            'props'- nos permite "injetar" dados no componente.
            Conceito de props: "propriedades" enviadas de um componente pai para o componente filho
            */}
            <h2>Lista de Compras</h2>
            {props.itens.map(function (item) {
                return (
                    <div key={item.id}>
                        <p>Produto: {item.nome}</p>
                        <p>Quantidade:{item.quantidade}</p>
                        <hr />
                    </div>
                );
            })};
        </>
    );
}
export default listaDeCompras;