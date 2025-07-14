Como usar o router:
npm install react-router-dom
importo pra meu header ou onde eu for usar os links:
import { Link } from 'react-router-dom';
e uso a tag <Link> pra fazer os links necessarios.

no app.js:
import { BrowserRouter } from 'react-router-dom';
e dou wrap em todo o conteudo abaixo do return (incluindo div ou section) com a tag 
<BrowserRouter></BrowserRouter>. Posso inclusive apagar a div ou section e deixar o conteudo encapsulado apenas no <BrowserRouter></BrowserRouter> que vai renderizar normal.



Como dar deploy em react no CREATE-REACT-APP:

dentro da pasta do app react no bash, dar um:

npm run build
cp -r build/* ../meu-react-app-master/ (aqui é a pasta raiz do meu app, ex, patursoFilm)

DEPLOY NO VITE:
npm run build
cp -r dist/* ../meu-react-app (aqui é a pasta raiz do meu app, ex:CalcValidade)

e no package.json:

adicionar uma propriedade (CREATE-REACT-APP):
"homepage": "https://forsetis.github.io/Estudoss/patursofilm/"

NO VITE: "homepage": "./"

e na parte de scripts adicionar o seguinte(CREATE-REACT-APP):
"predeploy": "npm run build",
"deploy": "gh-pages -d build"


NO VITE:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "deploy": "npm run build && cp -r dist/* ../CalcValidade/",
  "predeploy": "npm run build"
  },