import chuvaDeMeteoros from '../data/chuva-de-metoros.js';
import formataColecao from '../funções/funcoesFormataColecao.js';
import {filtroHoje, filtroProximosDoisMeses} from '../funções/funcoesFiltro.js';
import exibirEmTabela from '../funções/funcoesExibicao.js';

let hoje = new Date();
let colecaoFormatada = chuvaDeMeteoros.map(formataColecao);
let listaFiltrada = colecaoFormatada.filter(item => filtroHoje(hoje, item.inicio, item.fim));
let listaFiltradaMeses = colecaoFormatada.filter(item => filtroProximosDoisMeses(hoje, item.inicio, item.fim));

console.log("\nCHUVAS DE METORO ACONTECENDO HOJE: ");
exibirEmTabela(listaFiltrada);
console.log("\nCHUVAS DE METORO ACONTECENDO NOS PRÓXIMOS 2 MESES: ");
exibirEmTabela(listaFiltradaMeses);



