import {desformataData, formataData, verificacaoFimMenosQueInicio} from '../funções/formataData.js';

function exibirEmTabela (colecao) {
    let titulo1 = "NOME DA CHUVA";
    let titulo2 = "- INTENSIDADE";
    let titulo3 = "- HEMISFÉRIO";
    let titulo4 = "- PERÍODO";
    
    console.log(`\n${titulo1.padEnd(24," ")} ${titulo2.padEnd(25," ")} ${titulo3.padEnd(25," ")} ${titulo4.padEnd(25," ")}`); 
    
    for ( let i = 0; i < colecao.length; i++) {
      let inicioFormatado = desformataData(colecao[i].inicio);
      let fimFormatado = desformataData(colecao[i].fim);
    
      let nome = " " + colecao[i].nome;
      let intensidade = "- " + colecao[i].intensidade;
      let hemisferio = "- " + colecao[i].hemisferio;
      let periodo = "- " + inicioFormatado + " a " + fimFormatado ;
    
    
    console.log(`${nome.padEnd(25," ").padStart(2, " ")} ${ intensidade.padEnd(25," ").padStart(2, " ")} ${ hemisferio.padEnd(25," ")} ${ periodo.padEnd(25," ")}\n`)
    };
    
    };

export default exibirEmTabela;