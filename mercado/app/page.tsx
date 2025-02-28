import ListaDeCompras from '@/components/listaDeCompras';
import { listaData, listaFrutas } from '../data/listaData';
function page() {
    return (
        <><h1>MERCADO</h1>
            <p>Lista de itens Gerais</p>
            <ListaDeCompras itens={listaData} />
            <p>Lista de Frutas</p>
            <ListaDeCompras itens={listaFrutas} />

        </>
    )
};
export default page;