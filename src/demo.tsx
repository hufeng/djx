import Atom from "./index";

function Hello() {
  return <foo>Hello World</foo>;
}

console.log(Atom.renderToString(<Hello />));
