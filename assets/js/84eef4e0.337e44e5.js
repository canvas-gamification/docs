"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4703],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},s="Retrieving Values",u={unversionedId:"junit-framework/clauses/retrieving-values",id:"junit-framework/clauses/retrieving-values",title:"Retrieving Values",description:"While writing any additional test functions, you may find the need to retrieve the values of clauses in your test sentence. Our framework provides 2 ways to do this.",source:"@site/docs/junit-framework/clauses/retrieving-values.md",sourceDirName:"junit-framework/clauses",slug:"/junit-framework/clauses/retrieving-values",permalink:"/docs/docs/junit-framework/clauses/retrieving-values",editUrl:"https://github.com/canvas-gamification/docs/docs/junit-framework/clauses/retrieving-values.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Clause Documentation",permalink:"/docs/docs/junit-framework/clauses/clause-documentation"},next:{title:"Retrieving Values",permalink:"/docs/docs/junit-framework/retrieving-values"}},c=[{value:"Retrieve clause value by index",id:"retrieve-clause-value-by-index",children:[],level:2},{value:"Retrieve clause value by name",id:"retrieve-clause-value-by-name",children:[],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"retrieving-values"},"Retrieving Values"),(0,i.kt)("p",null,"While writing any additional test functions, you may find the need to retrieve the values of clauses in your test sentence. Our framework provides 2 ways to do this."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Whenever you retrieve a value from a clause, you will get the value as a string, so you will need to convert it to the type you want manually if you want to use it."))),(0,i.kt)("h2",{id:"retrieve-clause-value-by-index"},"Retrieve clause value by index"),(0,i.kt)("p",null,"Within your test class, you may call ",(0,i.kt)("inlineCode",{parentName:"p"},"getItemAtIndex(int index)"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," is a 1-indexed value representing the clause's position in the test sentence. ",(0,i.kt)("inlineCode",{parentName:"p"},"getItemAtIndex()")," returns the value of that clause in the test sentence as a string. You'll need to cast it the data type you require."),(0,i.kt)("p",null,"Example test sentence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public Clause[] testSentence() {\n    return new Clause[]{\n        new StringLiteral("This is a random test with retrieval."),\n        new NewLine(),\n        new RandomInteger(5, 10, "important number"),\n    };\n}\n')),(0,i.kt)("p",null,"Retrieve by index example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int randomIntegerValue = Integer.parseInt(getItemAtIndex(3));\n")),(0,i.kt)("h2",{id:"retrieve-clause-value-by-name"},"Retrieve clause value by name"),(0,i.kt)("p",null,"You may also call ",(0,i.kt)("inlineCode",{parentName:"p"},"getItemByName(String name)"),". This will search the test sentence and return the first clause with the name specified."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Recall that clauses can be given names to make retrieval easier.")),(0,i.kt)("p",null,"Retrieve by name example: ",(0,i.kt)("em",{parentName:"p"},"(using the same example test sentence from above)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'int randomIntegerValue = Integer.parseInt(getItemByName("important number"));\n')))}p.isMDXComponent=!0}}]);