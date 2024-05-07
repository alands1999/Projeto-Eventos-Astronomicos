function desformataData (data) {
    let dataFormatada = data.split("-")
  
    let dia = dataFormatada[2];
    let mes = dataFormatada[1];
  
  let dataFormatadaAtt =  dia + "/" + mes;
  return dataFormatadaAtt;
  };
  
  function formataData (hoje, data) {
    let ano = hoje.getFullYear();
    let partes = data.split("/");
    let dia = partes[1];
    let mes = partes[0];
  
  let dataFormatada = ano + "-" + mes + "-" + dia;
  return dataFormatada;
  };

  function verificacaoFimMenosQueInicio (fim, inicio){
 
    if (fim < inicio ){
      let diaFim = fim.getDate() +1;
      let mesFim = fim.getMonth() +1;
      let anoFim =  fim.getFullYear() + 1;
      let fimFormatado = "";
      return fimFormatado = anoFim + "-" + (mesFim.toString().padStart(2,"0")) + "-" + diaFim;
    } else {
      let diaFim = fim.getDate() +1;
      let mesFim = fim.getMonth() +1;
      let anoFim =  fim.getFullYear();
      let fimFormatado = "";
      return fimFormatado = anoFim + "-" + (mesFim.toString().padStart(2,"0")) + "-" + diaFim;
    };
  
  }

  export {desformataData, formataData, verificacaoFimMenosQueInicio};