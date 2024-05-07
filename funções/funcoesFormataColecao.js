import {desformataData, formataData, verificacaoFimMenosQueInicio} from './formataData.js';


function atualizarIntensidade(intensidade) {
    // Palavras-chave desejadas
    const palavrasChave = ["forte", "fraca", "média", "irregular"];
  
    // Verifica se a intensidade contém alguma das palavras-chave
    for (const palavra of palavrasChave) {
        if (intensidade.toLowerCase().includes(palavra)) {
            return palavra;
        }
    }
  
    // Se nenhuma palavra-chave for encontrada, retorna a intensidade original
    return intensidade;
  };

  function retornaHemisferio (declinacao) {
    let hemisferio = "";
   // Determina o hemisfério com base na declinação
   if (declinacao > 0) {
    hemisferio = "Norte";
  } else {
    hemisferio = "Sul";
  }
    return declinacao = hemisferio;
  };

  function formataColecao(colecao) {
    let nome = colecao.nome;
    let declinacao = colecao.declinacao;
    let hemisferio = retornaHemisferio(declinacao);
  
    let hoje = new Date();
    let ano = hoje.getFullYear();
  
    let inicio = colecao.inicio;
    let inicioFormatado = formataData(hoje, inicio);
    let attIntensidade = atualizarIntensidade(colecao.intensidade); 
    let intensidade = colecao.thz + " " +  attIntensidade;
  
    let fim = colecao.fim;
    let fimFormatado = formataData(hoje, fim);
   
    //Verifica a Data e acrescenta +1 ao ano caso a regra se aplique
    let inicioVerificacao = new Date(inicioFormatado);
    let fimVerificacao = new Date(fimFormatado);
    let fimTime = fimVerificacao.getTime();
    let hojeVerificacao = hoje.getTime();
  
    fimFormatado = verificacaoFimMenosQueInicio(fimVerificacao, inicioVerificacao);
  
    if ( hojeVerificacao > fimVerificacao && fimVerificacao < inicioVerificacao) {
  
      let diaFim = fimVerificacao.getDate() +1;
      let mesFim = fimVerificacao.getMonth() +1;
      let anoFim =  fimVerificacao.getFullYear() + 1;
  
      let diaInicio = inicioVerificacao.getDate() +1;
      let mesInicio = inicioVerificacao.getMonth() +1;
      let anoInicio = inicioVerificacao.getFullYear();
  
  
  
  
      fimFormatado = anoFim + "-" + (mesFim.toString().padStart(2,"0")) + "-" + diaFim;
      inicioFormatado = (anoInicio + "-" + (mesInicio.toString().padStart(2,"0")) + "-" + diaInicio);
  
    } else if (hojeVerificacao > fimVerificacao && fimVerificacao > inicioVerificacao ) {
      let diaInicio = inicioVerificacao.getDate() +1;
      let mesInicio = inicioVerificacao.getMonth() +1;
      let anoInicio = inicioVerificacao.getFullYear() +1;
      inicioFormatado = (anoInicio + "-" + (mesInicio.toString().padStart(2,"0")) + "-" + diaInicio);
  
      let diaFim = fimVerificacao.getDate() +1;
      let mesFim = fimVerificacao.getMonth() +1;
      let anoFim =  fimVerificacao.getFullYear() + 1;
      fimFormatado = anoFim + "-" + (mesFim.toString().padStart(2,"0")) + "-" + (diaFim);
  
    };
  
    return { nome, inicio: inicioFormatado, fim: fimFormatado, declinacao, intensidade, hemisferio };
  };

  export default formataColecao;

