# Spotify

Aplicação para consumir a API do Spotify fazendo buscas por artistas, álbuns e faixas.

# Sobre a aplicação

A aplicação foi desenvolvida com ReactJS, utilizando o bundler Webpack, e o framework do frontend o Material-ui.
Para poder fazer as pesquisas na API do spotify é necessário ter uma conta Spotify e fazer o acesso.
Não foi possível implementar uma dropdown (select) no campo do filtro, por esta razão será necessário digitar no campo o filtro correto, que no caso, os únicos valores funcionais são 'artist', 'album' e 'track'.

# Demo

Aplicação disponível em:
https://search-spotify-front.herokuapp.com

### Instalaçao Backend

Instalar as dependências.

```sh
$ cd spotify-backend
$ npm install 
$ set SPOTIFY_CLIENT_ID=d562570ce5064a339a7391aea38b08e4
$ set SPOTIFY_CLIENT_SECRET=f6197f9a10a94297af1419eda05f2871
$ npm start
```

### Instalaçao Frontend

Instalar as dependências.

```sh
$ cd spotify
$ npm install 
$ npm start
Acessar: http:localhost:8080
```

### Items de avaliação

| Plugin | README |
| ------ | ------ |
| Filtro Artistas | Ok |
| Filtro Álbums | Ok |
| Filtro Faixas | Ok |
| Imagem Artista | Ok |
| Popularidade | Ok |
| Álbum com vários artistas | Ok |
|Faixa com vários artistas| Ok|
|Artistas clicáveis| Ok |
|Álbuns clicáveis | Ok |
|Responsivo| Ok|
|CVS| Ok|
|ES6|Ok|
|Webpack|Ok|
|ReactJs|Ok|
|Redux| Ok|
|Testes automatizados| Não|
|Autenticação Spotify| Ok|
|PWA|Não|
|Persistência de dados|Não|
|Micro animações|Não|
|Backend on live|Ok|
|Frontend on live|Ok|
