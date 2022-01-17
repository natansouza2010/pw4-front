
Para startar a aplicação : 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## 📫 Tecnologias e Libs Utilizadas

1. React
2. Typescript
3. JWT Decode
4. SASS
5. Bootstrap
6. React-Router-Dom
7. Axios


## Components

A aplicação possui 2 Componentes que serão utilizados e reutilizados na aplicação:

Header: possui apenas a navBar da página juntamente de uma estilização 

VehicleCards: Será responsável por criar um novo Card de um veículo, para sua criação é necessário obter os dados atráves da propriedades `props`


## Pages

Existem 3 Páginas em nossa aplicação, home, login e form

Login: é um formulário que coletará as credenciais, aos clicar no botão submit os dados serão validados na API e caso obtenha sucesso o Login será realizado, 
um token será gerado, e o usuário irá para Home Page

Home Page : Possui o Header e também os Cards dos Veículos, os dados são obtidos pelo requisição à API e renderizados e transmitidos nos Cards.

Form Page : Será coletados os dados para a criação de um novo Card Veículos

Observações: 
  Home page e Form Page, possui componentes que serão visiveis apenas para o admin e interações que apenas um usuário autenticado possa fazer


## Services

api.ts : O axios é responsável por fazer as requisições. todas as requisições será passado um header, contendo a informação `'Authorization'` no qual será armazenado o TOKEN,
e durante a integração com a API o Token será validado a partir dessa informação. 

auth.ts : O Token será armazenado no LocalStorage, juntamente da Role do Usuário, com essas informação conseguimos verificar se o usuário está autenticado e qual é a role pertencente. 


## Render

Index.tsx : Responsavel pela a criação das rotas do sistema, existem rotas que apenas usúarios autenticado consegue acessar. 




