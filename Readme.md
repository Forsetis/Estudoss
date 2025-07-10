Como usar o router:
npm install react-router-dom
importo pra meu header ou onde eu for usar os links:
import { Link } from 'react-router-dom';
e uso a tag <Link> pra fazer os links necessarios.

no app.js:
import { BrowserRouter } from 'react-router-dom';
e dou wrap em todo o conteudo abaixo do return (incluindo div ou section) com a tag 
<BrowserRouter></BrowserRouter>. Posso inclusive apagar a div ou section e deixar o conteudo encapsulado apenas no <BrowserRouter></BrowserRouter> que vai renderizar normal.



Como dar deploy em react:

dentro da pasta do app react no bash, dar um:

npm run build
cp -r build/* ../meu-react-app-master/

e no package.json:

adicionar uma propriedade:
"homepage": "https://forsetis.github.io/Estudoss/patursofilm/"

e na parte de scripts adicionar o seguinte:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
