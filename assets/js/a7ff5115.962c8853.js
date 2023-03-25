"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8581],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9984:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:2},u="Basic Clause Documentation",p={unversionedId:"junit-framework/clauses/clause-documentation",id:"junit-framework/clauses/clause-documentation",title:"Basic Clause Documentation",description:"Literal Clauses",source:"@site/docs/junit-framework/clauses/clause-documentation.md",sourceDirName:"junit-framework/clauses",slug:"/junit-framework/clauses/clause-documentation",permalink:"/docs/docs/junit-framework/clauses/clause-documentation",editUrl:"https://github.com/canvas-gamification/docs/docs/junit-framework/clauses/clause-documentation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro to Clauses",permalink:"/docs/docs/junit-framework/clauses/"},next:{title:"Retrieving Values",permalink:"/docs/docs/junit-framework/clauses/retrieving-values"}},s=[{value:"Literal Clauses",id:"literal-clauses",children:[{value:"<code>IntegerLiteral</code>",id:"integerliteral",children:[],level:3},{value:"<code>DoubleLiteral</code>",id:"doubleliteral",children:[],level:3},{value:"<code>StringLiteral</code>",id:"stringliteral",children:[],level:3}],level:2},{value:"Utility Clauses",id:"utility-clauses",children:[{value:"<code>NewLine</code>",id:"newline",children:[],level:3},{value:"<code>PlaceHolder</code>",id:"placeholder",children:[],level:3}],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"basic-clause-documentation"},"Basic Clause Documentation"),(0,l.kt)("h2",{id:"literal-clauses"},"Literal Clauses"),(0,l.kt)("h3",{id:"integerliteral"},(0,l.kt)("inlineCode",{parentName:"h3"},"IntegerLiteral")),(0,l.kt)("p",null,"This clause is intended to be used when there is an integer that is part of the program's output that you want to\nseparate from the rest of the sentence."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constructor:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public IntegerLiteral(int value, [String name]) {\n    ...\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"The integer that needs to be matched in the final sentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Name that can be used to retrieve the value during testing")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public Clause[] testSentence() {\n    return new Clause[]{\n        new IntegerLiteral(42),\n        new IntegerLiteral(365, "second number")  // with name\n    };\n}\n')),(0,l.kt)("h3",{id:"doubleliteral"},(0,l.kt)("inlineCode",{parentName:"h3"},"DoubleLiteral")),(0,l.kt)("p",null,"This clause is intended to be used when there is a double/float that is part of the program's output that you want to\nseparate from the rest of the sentence."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constructor:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public DoubleLiteral(double lower, double upper, [String name]) {\n    ...\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"lower")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"double")),(0,l.kt)("td",{parentName:"tr",align:null},"The lower bound (inclusive) of values that this double value can equal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"upper")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"double")),(0,l.kt)("td",{parentName:"tr",align:null},"The upper bound (exclusive) of values that this double value can equal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Name that can be used to retrieve the value during testing")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public Clause[] testSentence() {\n    return new Clause[]{\n        new DoubleLiteral("first double"), // matches any double\n        new DoubleLiteral(1, 10, "second double")  // matches within range [1, 10)\n    };\n}\n')),(0,l.kt)("h3",{id:"stringliteral"},(0,l.kt)("inlineCode",{parentName:"h3"},"StringLiteral")),(0,l.kt)("p",null,"This clause is intended to be used when there is a constant section of text that is part of the program's output that\nyou want to separate from the rest of the sentence."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constructor:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public StringLiteral(String text, [String name]) {\n    ...\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"The case-sensitive regex text that needs to be matched in the final sentence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Name that can be used to retrieve the value during testing")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public Clause[] testSentence() {\n    return new Clause[]{\n        new StringLiteral("This is a simple test."),\n        new StringLiteral("This is a simple test.", "exampleText")  // with name\n    };\n}\n')),(0,l.kt)("h2",{id:"utility-clauses"},"Utility Clauses"),(0,l.kt)("h3",{id:"newline"},(0,l.kt)("inlineCode",{parentName:"h3"},"NewLine")),(0,l.kt)("p",null,"This clause simply allows you to specify new lines in the tested program's expected output."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constructor:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public NewLine([String name]) {\n    ...\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Name that can be used to retrieve the value during testing")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"While the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," parameter is supported, it is largely irrelevant for this utility class.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public Clause[] testSentence() {\n    return new Clause[]{\n        new StringLiteral("Foo"),\n        new NewLine(),\n        new StringLiteral("Bar"),\n    };\n}\n')),(0,l.kt)("h3",{id:"placeholder"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlaceHolder")),(0,l.kt)("p",null,'A special clause that can have clause(s) "injected" in its place. ',(0,l.kt)("inlineCode",{parentName:"p"},"PlaceHolder")," is the primary way to use injections in\nthe tested program."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constructor:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public PlaceHolder() {\n    ...\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage:")),(0,l.kt)("p",null,"For a detailed description of how to use this clause, see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/junit-framework/input-tests/clause-injection"},"injection guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public Clause[] testSentence() {\n    return new Clause[]{\n        new StringLiteral("Foo"),\n        new PlaceHolder(),  //an example of where the placeholder would go\n        new StringLiteral("Bar"),\n    };\n}\n')))}d.isMDXComponent=!0}}]);