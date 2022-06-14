"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5278],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),i=n(2389),o=n(9548),s=n(6010),u="tabItem_LplD";function l(e){var t,n,i,l=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,a.useState)(y),O=N[0],T=N[1],j=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=k[d];null!=x&&x!==O&&v.some((function(e){return e.value===x}))&&T(x)}var C=function(e){var t=e.currentTarget,n=j.indexOf(t),r=v[n].value;r!==O&&(S(t),T(r),null!=d&&w(d,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,i.Z)();return a.createElement(l,(0,r.Z)({key:String(t)},e))}},4522:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(9877),s=n(8215),u=["components"],l={},c="Questions with iteration",p={unversionedId:"junit-framework/introduction/implementing-tests/iteration-questions",id:"junit-framework/introduction/implementing-tests/iteration-questions",title:"Questions with iteration",description:"These are questions that require the user to print some text to the console in an iterative fashion. These types of tests are not too different from Basic Output Questions.",source:"@site/docs/junit-framework/introduction/implementing-tests/iteration-questions.mdx",sourceDirName:"junit-framework/introduction/implementing-tests",slug:"/junit-framework/introduction/implementing-tests/iteration-questions",permalink:"/docs/docs/junit-framework/introduction/implementing-tests/iteration-questions",editUrl:"https://github.com/canvas-gamification/docs/docs/junit-framework/introduction/implementing-tests/iteration-questions.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Questions requiring input from the user",permalink:"/docs/docs/junit-framework/introduction/implementing-tests/input-questions"},next:{title:"`Random` Questions",permalink:"/docs/docs/junit-framework/introduction/implementing-tests/random-questions"}},m=[{value:"Why is it hard to test this?",id:"why-is-it-hard-to-test-this",children:[],level:2},{value:"How do I test this?",id:"how-do-i-test-this",children:[],level:2},{value:"Example",id:"example",children:[{value:"Question",id:"question",children:[],level:3},{value:"Test Class",id:"test-class",children:[],level:3}],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"questions-with-iteration"},"Questions with iteration"),(0,i.kt)("p",null,"These are questions that require the user to print some text to the console in an iterative fashion. These types of tests are not too different from ",(0,i.kt)("a",{parentName:"p",href:"./basic-output"},"Basic Output Questions"),".\nThe only major difference is the method by which the the output structure is defined."),(0,i.kt)("h2",{id:"why-is-it-hard-to-test-this"},"Why is it hard to test this?"),(0,i.kt)("p",null,"Usually these types of questions have specified output patterns, and without the framework, maintaining these patterns and retrieving values from the output stream is difficult."),(0,i.kt)("h2",{id:"how-do-i-test-this"},"How do I test this?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test Class"),": Create a class that extends the ",(0,i.kt)("inlineCode",{parentName:"li"},"BaseTest")," class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test Sentence"),": Create the ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/writing-tests#testsentence"},(0,i.kt)("inlineCode",{parentName:"a"},"testSentence()"))," method with the output format as an array of ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/clauses/"},(0,i.kt)("inlineCode",{parentName:"a"},"Clause"))," objects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Call Main"),": Call the main method of the test class by implementing the ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/writing-tests#runmain"},(0,i.kt)("inlineCode",{parentName:"a"},"runMain()"))," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retrieve Values"),": Retrieve output values based on the format. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/retrieving-values"},"Retrieving Values")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Additional Tests"),": Depending on the question, you may need to create additional tests to ensure values are calculated correctly.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"question"},"Question"),(0,i.kt)("p",null,"Write a program that prints out the first 10 numbers in the Fibonacci sequence  (each on a different line)."),(0,i.kt)("p",null,"Sample Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1\n1\n2\n3\n...so on\n")),(0,i.kt)("p",null,"Answer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class FiboPrint {\n    public static void main(String[] args) {\n        int a = 1;\n        int b = 1;\n        int c = 0;\n        for (int i = 0; i < 10; i++) {\n            System.out.println(a);\n            c = a + b;\n            a = b;\n            b = c;\n        }\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What to test"),": Output follows the correct format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Common mistakes"),": Not printing all 10, errors with the calculation of Fibonacci numbers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How the student could cheat the system"),": The student might cheat the system by simply printing the sample output to the console. Questions like these are usually Parsons questions, which ensure that the student cannot manually print the solution.")),(0,i.kt)("h3",{id:"test-class"},"Test Class"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Gamification Junit Framework",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import global.BaseTest;\nimport global.variables.Clause;\nimport global.variables.clauses.IntegerLiteral;\nimport global.variables.clauses.NewLine;\n\nimport java.util.ArrayList;\n\npublic class FiboPrintTest extends BaseTest {\n    public Clause[] testSentence() {\n        ArrayList<Clause> sentence = new ArrayList<>();\n        int a = 1;\n        int b = 1;\n        int c = 0;\n        for (int i = 0; i < 10; i++) {\n            sentence.add(new IntegerLiteral(a));\n            sentence.add(new NewLine());\n            c = a + b;\n            a = b;\n            b = c;\n        }\n        return sentence.toArray(new Clause[sentence.size()]);\n    }\n\n    public void runMain() {\n        FiboPrint.main(new String[0]);\n    }\n}\n"))),(0,i.kt)(s.Z,{value:"Vanilla Junit 5",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nimport java.io.*;\n\npublic class FiboPrintTest {\n    private final InputStream systemIn = System.in;\n    private final PrintStream systemOut = System.out;\n\n    private ByteArrayInputStream testIn;\n    private ByteArrayOutputStream testOut;\n\n    @BeforeEach\n    public void setUpOutput() {\n        testOut = new ByteArrayOutputStream();\n        System.setOut(new PrintStream(testOut));\n    }\n\n    private void provideInput(String data) {\n        testIn = new ByteArrayInputStream(data.getBytes());\n        System.setIn(testIn);\n    }\n\n    private String getOutput() {\n        return testOut.toString();\n    }\n\n    @AfterEach\n    public void restoreSystemInputOutput() {\n        System.setIn(systemIn);\n        System.setOut(systemOut);\n    }\n\n    public String getFiboPrint(){\n        StringBuilder format = new StringBuilder();\n        int a = 1;\n        int b = 1;\n        int c = 0;\n        for (int i = 0; i < 10; i++) {\n            format.append(a).append(System.lineSeparator());\n            c = a + b;\n            a = b;\n            b = c;\n        }\n        return format.toString();\n    }\n\n    @Test\n    public void OutputFollowsFormat() {\n        // This test doesn\'t even allow for retreival of output values easily and only partially tests the output.\n        FiboPrint.main(new String[0]);\n        String actual = getOutput();\n        String format = getFiboPrint();\n\n        assertTrue(actual.contains(format), "Your program does not match the output format. Try to check whether your output matches the sample.");\n    }\n}\n')))))}f.isMDXComponent=!0}}]);