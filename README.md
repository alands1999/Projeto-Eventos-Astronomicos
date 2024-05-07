# Eventos Astronômicos

## Descrição
O projeto "Eventos Astronômicos" é uma aplicação de linha de comando desenvolvida em JavaScript utilizando Node.js. Ele oferece uma lista das chuvas de meteoros que estão ocorrendo na data atual e também mostra as chuvas de meteoros dos próximos 2 meses

##Módulos

###Módulo Principal
O módulo principal executa a aplicação. Ele importa dados sobre chuvas de meteoros, formata a coleção de dados, aplica filtros para selecionar as chuvas de meteoros de hoje e dos próximos 2 meses, e exibe as informações no terminal.

####Métodos utilizados:
- map: para mapear e formatar a coleção de dados.
- filter: para filtrar as chuvas de meteoros com base na data.
- console.log: para exibir as informações no terminal.

###Módulo de Formatação de Datas
Este módulo contém funções para formatar e desformatar datas. Ele realiza a conversão entre diferentes formatos de datas e realiza verificações para garantir a consistência das datas.

####Métodos utilizados:
- split: para dividir strings em partes.
- getDate, getFullYear, getMonth: para obter componentes de data específicos.
- padStart: para adicionar zeros à esquerda em strings.

###Módulo de Exibição
O módulo de exibição é responsável por exibir as informações das chuvas de meteoros em formato de tabela no terminal. Ele utiliza métodos para formatar a exibição das informações, como padEnd e padStart, garantindo uma apresentação visualmente agradável.

####Métodos utilizados:
- padEnd: para preencher strings com espaços à direita.
- padStart: para preencher strings com espaços à esquerda.
- console.log: para exibir as informações no terminal.

###Módulo de Filtros
Este módulo contém funções para filtrar as chuvas de meteoros com base na data. Ele verifica se uma chuva de meteoros está ocorrendo hoje ou nos próximos 2 meses.

####Métodos utilizados:
- getTime: para obter o tempo em milissegundos.
- getFullYear, getMonth, getDate: para obter componentes específicos de datas.

###Módulo de Formatação da Coleção de Dados
Este módulo realiza a formatação da coleção de dados das chuvas de meteoros. Ele aplica diferentes tratamentos aos dados, como atualização da intensidade, determinação do hemisfério, e verificação e ajuste das datas.

####Métodos utilizados:
- toLowerCase: para converter strings em minúsculas.
- includes: para verificar se uma string contém outra.
- padStart: para preencher strings com zeros à esquerda.

###Coleção de Dados
A coleção de dados contém informações detalhadas sobre diversas chuvas de meteoros, incluindo nome, período de ocorrência, intensidade, e outras características relevantes.

##Como Usar
- Clone o repositório do GitHub.
- Execute a aplicação no terminal usando o Node.js.

##Projeto: 
![1](https://github.com/alands1999/Projeto-Eventos-Astronomicos/assets/150439841/60dcfe2b-b6cc-414f-89a4-ff49b21a5faa)








