function filtroHoje(hoje, inicio, fim) {
    let hojeFormatado = hoje.getTime();
    let inicioFormatado = new Date(inicio).getTime();
    let fimFormatado = new Date(fim).getTime();
  
    return hojeFormatado > inicioFormatado && hojeFormatado < fimFormatado;
  }
  
  function filtroProximosDoisMeses(hoje, inicio, fim) {
    let hojeFormatado = hoje.getTime();
    let inicioFormatado = new Date(inicio).getTime();
    let fimFormatado = new Date(fim).getTime();
  
    let dataDaqui2Meses = new Date(hoje.getFullYear(), hoje.getMonth() + 2, hoje.getDate());
    let dataDaqui2MesesTimeStamp = dataDaqui2Meses.getTime();
  
    return inicioFormatado >= hojeFormatado && fimFormatado <= dataDaqui2MesesTimeStamp;
  }

  export {filtroHoje, filtroProximosDoisMeses};