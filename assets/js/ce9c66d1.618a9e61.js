"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1316],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),i=n(2389),o=n(9548),s=n(6010),l="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,m=e.defaultValue,d=e.values,p=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(b),I=N[0],T=N[1],x=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var S=k[p];null!=S&&S!==I&&f.some((function(e){return e.value===S}))&&T(S)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==I&&(O(t),T(a),null!=p&&w(p,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:C,onClick:C},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function c(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},1333:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),s=n(8215),l=["components"],u={},c="`Random` Questions",m={unversionedId:"junit-framework/introduction/implementing-tests/random-questions",id:"junit-framework/introduction/implementing-tests/random-questions",title:"`Random` Questions",description:"These questions involve random values and require the use of the Random class or Math.random() method in Java.",source:"@site/docs/junit-framework/introduction/implementing-tests/random-questions.mdx",sourceDirName:"junit-framework/introduction/implementing-tests",slug:"/junit-framework/introduction/implementing-tests/random-questions",permalink:"/docs/docs/junit-framework/introduction/implementing-tests/random-questions",editUrl:"https://github.com/canvas-gamification/docs/docs/junit-framework/introduction/implementing-tests/random-questions.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Questions with iteration",permalink:"/docs/docs/junit-framework/introduction/implementing-tests/iteration-questions"},next:{title:"Test Classes",permalink:"/docs/docs/junit-framework/writing-tests"}},d=[{value:"Why is it hard to test this?",id:"why-is-it-hard-to-test-this",children:[],level:2},{value:"How do I test this?",id:"how-do-i-test-this",children:[],level:2},{value:"Example",id:"example",children:[{value:"Question",id:"question",children:[],level:3},{value:"Test Class",id:"test-class",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"random-questions"},(0,i.kt)("inlineCode",{parentName:"h1"},"Random")," Questions"),(0,i.kt)("p",null,"These questions involve random values and require the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Random")," class or ",(0,i.kt)("inlineCode",{parentName:"p"},"Math.random()")," method in Java."),(0,i.kt)("h2",{id:"why-is-it-hard-to-test-this"},"Why is it hard to test this?"),(0,i.kt)("p",null,"These types of questions usually have varying output and the output depends on the random values generated. This means that both output format and randomness of the values need to be tested."),(0,i.kt)("h2",{id:"how-do-i-test-this"},"How do I test this?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test Class"),": Create a class that extends the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"BaseRandomTest")," class"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test Sentence"),": Create the ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/writing-tests#testsentence"},(0,i.kt)("inlineCode",{parentName:"a"},"testSentence()"))," method with the output format as an array of ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/clauses/"},(0,i.kt)("inlineCode",{parentName:"a"},"Clause"))," objects, including random clauses where necessary with the appropriate limits and names."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Call Main"),": Call the main method of the test class by implementing the ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/writing-tests#runmain"},(0,i.kt)("inlineCode",{parentName:"a"},"runMain()"))," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retrieve Values"),": Retrieve output values based on the format. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/docs/junit-framework/retrieving-values"},"Retrieving Values")," for more information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Additional Tests"),": Depending on the question, you may need to create additional tests to ensure values are calculated correctly.")),(0,i.kt)("p",null,"Once you extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseRandomTest")," class, the framework automatically looks for Random clauses in the test sentence and checks whether each clause is within the specified range, and whether the clause is randomly generated. It does this by running the program multiple times and evaluating the distribution of random values in the output."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"question"},"Question"),(0,i.kt)("p",null,"Make a program that calculates and prints the body mass index (BMI) of a person given their weight in kilograms and height in metres. The formula for BMI is ",(0,i.kt)("inlineCode",{parentName:"p"},"BMI = weigth/(height * height)"),". In the same program, set the height to a random value between 1.0 and 2.5 and the weight to a random value between 65 and 105."),(0,i.kt)("p",null,"Sample Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Height: 1.75\nWeight: 70.0\nBMI: 24.9\n")),(0,i.kt)("p",null,"Answer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class BMICheck {\n    public static void main(String[] args) {\n        double height = (Math.random() * 2.5) + 1.0;\n        double weight = (Math.random() * (40)) + 65;\n        double bmi = weight / (height * height);\n        System.out.println("Height: " + height);\n        System.out.println("Weight: " + weight);\n        System.out.println("BMI: " + bmi);\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What to test"),": Output follows the correct format. Random Values are generated and used to calculate the BMI properly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Common mistakes"),": Not setting the variables correctly, and having the wrong data types. Not generating random values correctly in the specified range."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How the student could cheat the system"),": The student might cheat the system by simply printing the sample output to the console, thereby bypassing the need for random value generation.")),(0,i.kt)("h3",{id:"test-class"},"Test Class"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Gamification Junit Framework",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class BMICheckTest extends BaseRandomTest {\n    public Clause[] testSentence() {\n        return new Clause[] {\n            new StringLiteral("Height: "),\n            new RandomDouble(1.5, 2.5, "height"),\n            new NewLine(),\n            new StringLiteral("Weight: "),\n            new RandomDouble(65, 105, "weight"),\n            new NewLine(),\n            new StringLiteral("BMI: "),\n            new DoubleLiteral("bmi"),\n        };\n    }\n\n    public void runMain() {\n        BMICheck.main(new String[0]);\n    }\n\n    @Test\n    public void bmiCalculatedCorrectly(){\n        double height = Double.parseDouble(getItemByName("height"));\n        double weight = Double.parseDouble(getItemByName("weight"));\n        double bmi = weight / (height * height);\n        double outputBMI = Double.parseDouble(getItemByName("bmi"))\n        assertEquals(outputBMI, bmi, "Your BMI has not been calculated correctly.");\n    }\n}\n'))),(0,i.kt)(s.Z,{value:"Vanilla Junit 5",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\nimport java.io.*;\n\npublic class BMITest {\n    private final InputStream systemIn = System.in;\n    private final PrintStream systemOut = System.out;\n\n    private ByteArrayInputStream testIn;\n    private ByteArrayOutputStream testOut;\n\n    @BeforeEach\n    public void setUpOutput() {\n        testOut = new ByteArrayOutputStream();\n        System.setOut(new PrintStream(testOut));\n    }\n\n    private void provideInput(String data) {\n        testIn = new ByteArrayInputStream(data.getBytes());\n        System.setIn(testIn);\n    }\n\n    private String getOutput() {\n        return testOut.toString();\n    }\n\n    @AfterEach\n    public void restoreSystemInputOutput() {\n        System.setIn(systemIn);\n        System.setOut(systemOut);\n    }\n\n    @Test\n    public void OutputFollowsFormat() {\n        // This test doesn\'t even allow for retreival of output values easily and only partially tests the output.\n        BMICheck.main(new String[0]);\n        String actual = getOutput();\n        String format = "Your BMI is:";\n\n        assertTrue(actual.contains(format), "Your program does not match the output format. Try to check whether your output matches the sample.");\n    }\n\n    @Test\n    public void bmiCalculatedCorrectly() {\n        // This test needs to manually slice the string to retrieve the values\n        BMICheck.main(new String[0]);\n        String actual = getOutput();\n\n        // The following trimming is very tedious for more complex output cases, so having a defined format keeps things simple and clean\n        int index = actual.indexOf(":");\n        int nextIdx = actual.indexOf("Weight:", index + 1);\n        double height = Double.parseDouble(actual.substring(index + 1, nextIdx).trim());\n        int index = nextIdx;\n        int nextIdx = actual.indexOf("BMI:", index + 1);\n        double weight = Double.parseDouble(actual.substring(index + 1, nextIdx).trim());\n\n\n        double calculated = weight / Math.pow(height, 2);\n        String expected = "Your BMI is: " + calculated;\n\n        assertTrue(actual.contains(expected), "Your BMI method does not calculate the correct BMI.");\n    }\n\n    // To test whether random values are being generated, have to manually check whether the height and weight values\n    // are in the range specified by the question by running the program hundreds of times to see if it works, which becomes extremely tedious.\n}\n')))))}h.isMDXComponent=!0}}]);