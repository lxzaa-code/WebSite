import hljs from "highlight.js";

import c from "highlight.js/lib/languages/c";

import 'highlight.js/styles/atom-one-light.css'

hljs.registerLanguage('c', c);

export default hljs;