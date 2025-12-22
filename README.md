# 🗺️ MapTrack — Automated Daily Inspection & PDF Reporting Platform

## About MapTrack

MapTrack was created to automate and modernize inspection reporting for construction professionals.

Instead of manually collecting images, marking areas, writing notes, and assembling reports, MapTrack centralizes everything and produces a unified PDF report, ready to be shared with stakeholders, teams, or clients.

**MapTrack** is a modern React + TypeScript + Vite application designed to help construction professionals streamline daily inspection workflows.

The platform allows users to:

- Mark areas of operation on maps or project images
- Attach inspection photos
- View daily tabulation based on location
- Generate structured PDF reports automatically

MapTrack eliminates repetitive manual work and centralizes daily construction inspection tasks into one efficient system.

---

## Tech Stack

- **React 18**
- **Vite**
- **TypeScript**
- **styled-components**
- **ESLint (Flat Config – v9+)**
- **Prettier**
- **React Router**
- **GitHub Actions (CI)**

---

## Getting Started:

```json
{
    "git clone <repo-url>"
    "cd map-track"
    "yarn"
    "yarn dev"
}
```

---

## Requirements:

```json
"Node.js ≥ 20"
"Yarn 1.x"
```

---

## Documentation:

Full documentation available in the [`/docs`](./docs) directory.

| Topic        | Description                          |
| ------------ | ------------------------------------ |
| Clean Code   | Code quality principles, SOLID, KISS |
| Conventions  | Naming, ESLint, formatting           |
| Architecture | Project structure & decisions        |
| Contributing | How to contribute                    |

**_See > [`/docs`](./docs)_**

---

## License:

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

### **Nomenclatura de variaveis**

1. Evitar diminutivos
2. Descreva exatamente o que a variavel faz mesmo que o a nomenclatura dela fique grande
3. Evitar nomes genericos (ex: data, response, list, args, params) pois eles falam sobre a estrutura de dados mas nao fala sobre o dado que eu tenho ali dentro.

### **Nomenclatura de Variaveis com Booleanos**

1. Escrever-las sempre como se fosse uma pergunta pois eles sao comulmente utilizados como condicionais no codigo e dessa forma conseguimos ter uma legibilidade diferente.

   Usando _Flags_ como:

   **. is**

   **. does**

   **. has**

2. Booleans sempre como perguntas / semantico
3. Evitar variaveis genericas (ex: loading, disabled, ferching…)
4. Para verificar se a nomenclatura do booleano esta certa podemos ler ele sempre com um if na frente. Se a leitura continuar semantica (seguindo as regras da gramatica) esta correto.

### **Causa X Efeito**

Evite nomear variáveis pelo seu *efeito* (ex: `isButtonDisabled`) e priorize a *causa* (ex: `isFormSubmitting`) para um código mais claro e legível.

1. Nao devo criar a minha variavel com base na consequencia que ela vai ter na minha aplicacao/interface ou seja com base no efeito.
2. Nos devemos sempre criar as variaveis com base no motivo/causa e nao no efeito.
3. Devemos nomear as variaveis sempre com base no motivo/causa que ela vai causar no codigo ou interface e nunca com base na consequencia/efeito

### **Codigo em ingles**

Todo código (variáveis, funções, tabelas) deve ser em inglês. Misturar idiomas torna o código inacessível para leitores de tela e menos limpo. A importância de escrever em inglês devido a carreira podendo usar tradutor se necessário.

Codigo que nao esta em ingles podem gerar problemas na Acessibilidade (ex: leitores de telas para pessoas com problemas visuais)

### **Regras em condicionais (if’s)**

Evite negações, prefira early return ao invés de else na maioria dos casos, e fuja de condicionais aninhadas para um código mais legível e fácil de manter.

Negacao de ifs

1. Evitar sempre que possivel negacoes pois ela ‘e ruim na leitura do codigo.
2. Sempre que pudermos dar a nomenclatura a essa variavel de forma que ela possa ser lida do contrario ‘e mais indicado.
3. A negagacao torna o codigo menos legivel
4. Escrever as condicionais sempre que possivel sem a negacao
5. Dar preferencia a escrita de variaveis auxiliares que facam com que a nossa variavel nao precise de negacao.

### **Early return vs Else**

Devemos dar preferencia a utilizacao do early return sempre que possivel a nao ser que a semantica diante desse uso se perca (ilegibilidade). O else faz bem seu papel quando vemos a necessidade de explicitar semanticamente aquela funcionalidade no codigo.

### **Evitar condicionais anihadas**

1. Evitar uma condicional dentro de outra.
2. ternarios e ifs tradiocionais.
3. Fica muito mais dificil ler o codigo quando temos varios caminhos possiveis dentro de uma condicional pois cada condicional abre uma linha do tempo em nosso codigo.

### **Parâmetros e desestruturação**

Usar desestruturação para passar parâmetros de forma limpa e legível em JavaScript. Evite o repasse de objetos genéricos e prefira receber e retornar objetos nomeados em suas funções para um código mais claro e extensível.

### **Números mágicos**

Aprenda a identificar e eliminar 'números mágicos' no seu código JavaScript. Entenda como cálculos obscuros afetam a legibilidade e manutenção. Veja exemplos práticos com datas, timeouts e preços, e descubra técnicas para usar constantes e nomes descritivos, tornando seu código mais claro e profissional.

### **Comentários vs Documentação**

Diego Fernandes discute a diferença entre comentários e documentação em código limpo. Ele enfatiza que comentários não devem explicar 'o que' o código faz, mas sim 'por que' algo foi implementado de uma certa maneira (ex: limitações, workarounds). Alerta contra o uso de comentários como documentação, pois se tornam desatualizados e difíceis de manter.

### **Evite Syntatic Sugars**

Syntatic Sugars sao especificas de cada linguagem. Em alguns casos ajudam muito mas em outros pode acabar atrapalhando no entendimento e legibilidade do codigo. Pode causar confusoes e prejudicar a curva de aprendizado.

Aprenda a identificar e evitar Syntatic Sugars no JavaScript que prejudicam a legibilidade do código. Entenda por que usar construtores explícitos (**Number(), Boolean(), String()**) é melhor que atalhos como `+` para conversão numérica ou `!!` para booleanos, garantindo código mais claro e acessível para todos os desenvolvedores.

### **Desacoplando componentes**

Aprenda a desacoplar componentes React para um código mais limpo. Entenda os momentos ideais para dividir componentes, focando em isolar lógica (variáveis, funções, hooks) que serve apenas a uma parte específica da interface. Evite componentes inchados e melhore a manutenibilidade.

Existem 2 momentos em que eu realizo o desaclopamento de componentes no React:

1. Quando tenho algo repetitivo (tomar cuidado com componentizacao excessiva). Obs: quanto mais componentes temos maior ‘e o fluxo de renderizacao realizado pelo react.
2. Quando consigo isolar algo do seu contexto (sem prejudicar o comportamento original)

WARN: Sempre que pensarmos em dividir componentes devemos olhar primeiro a camada Javascript (’e o que tende a deixar o componente grande e confuso) dentro dos componentes.

## **Componentes puros**

A nivel de entendimento funcoes puras sao aquelas funcoes que nao dependem do meio/contexto de informacoes externas, side effects, chamadas a api’s entre outros. Sao funcoes que dependem somente dos parametros enviados para ela e com esses parametros ela consegue fazer tudo que ela precisa fazer e devolver uma resposta. Assim, nao interessa quantas vezes eu chame essa funcao com os mesmos parametros ela vai sempre vai retornar a mesma resposta, ou seja, ela nao depende de nenhum meio externo que possa mudar o valor dessa funcao.

COMPONENTES PUROS SAO DIFERENTES DE COMPONENTES PARA SEPARACAO DE HTML OU SEPARACAO DE LOGICA.

### **Funções e eventos no React**

**_ON/HANDLE_**

Aprenda um **_padrão_** de nomes para funções e eventos no React. Isso para poder identificar/diferenciar funcoes que sao disparadas atraves de eventos do usuario de funcoes que sao apenas auxiliares

- Use **`handle`** para funções internas (criadas dentro do componente) disparadas por eventos do usuário (ex: **`handleClick`, `handleSubmit, etc...`**).
- Use **`on`** para funções recebidas via props que representam callbacks de eventos (ex: **`onCreateItem`**) ou tambem as que realizar algum tipo de calculo, operacao, chamadas a api, etc….

### **Composição vs Customização**

Aprenda a diferença entre configuração (customização via props) e composição em componentes React. Entenda como o _excesso de props pode gerar complexidade e inflexibilidade_. Descubra como a composição, dividindo componentes maiores em sub-componentes, melhora a legibilidade, manutenção e flexibilidade do seu código, com um exemplo prático de `Input`.

PADRAO DE CONFIGURACAO: Consiste em algo que muda visualmente o nosso componente. Quando estou criando possiveis combinacoes/configuracoes de um mesmo componente.

warn: Esse padrao de configuracao citado acima e iluistrado abaixo nao ‘e muito legal.

PATERN DE COMPOSICAO (mais indicado): Ele se torna uma melhor pratica em comparacao ao patern de configuracao pois torna o codigo mais legivel de de facil manutencao.

Nesse patern ao invez de utilizarmos props para configurar/simbolizar nosso componente (determinar o que deve aparecer no componente ou nao) a gente cria outros componentes.

### **Condicionais no render**

Nesta aula de Clean Code, Diego Fernandes mostra como otimizar condicionais no render do React. Aprenda a mover lógicas JavaScript complexas para fora do JSX, mantendo o código limpo e o HTML menos dependente de operações diretas.
Devemos sempre tentar mover as condicionais do codigo JSX sempre para a parte da camada JavaScript (acima do retrun).

O HTML da nossa aplicacao deve ficar o quanto menos dependente de operacoes JS possivel. Ou seja, colocar a menor quantidade possivel de operacoes JS dentro do render do codigo.
