"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5721],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=i,p=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(p,a(a({ref:t},d),{},{components:n})):r.createElement(p,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s="Method Test",u={unversionedId:"junit-framework/method-tests/method-test",id:"junit-framework/method-tests/method-test",title:"Method Test",description:"This class can be instantiated to allow the test writer to test methods written by students without the need to call",source:"@site/docs/junit-framework/method-tests/method-test.md",sourceDirName:"junit-framework/method-tests",slug:"/junit-framework/method-tests/method-test",permalink:"/docs/docs/junit-framework/method-tests/method-test",editUrl:"https://github.com/canvas-gamification/docs/docs/junit-framework/method-tests/method-test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MethodTest Example",permalink:"/docs/docs/junit-framework/method-tests/method-test-example"},next:{title:"Object Test",permalink:"/docs/docs/junit-framework/object-tests/object-test"}},d=[{value:"Constructor Parameters",id:"constructor-parameters",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>public Object callMethod() throws Throwable</code>",id:"public-object-callmethod-throws-throwable",children:[],level:3},{value:"<code>public void setMethodOutput()</code>",id:"public-void-setmethodoutput",children:[],level:3},{value:"<code>public void setIncorrectMethodStructureErrorMessage(String message)</code>",id:"public-void-setincorrectmethodstructureerrormessagestring-message",children:[],level:3},{value:"<code> public void setMethodNotFoundErrorMessage(String message)</code>",id:"-public-void-setmethodnotfounderrormessagestring-message",children:[],level:3},{value:"<code>public String getMethodOutput()</code>",id:"public-string-getmethodoutput",children:[],level:3},{value:"<code>public void setArguments(Object[][] arguments)</code>",id:"public-void-setargumentsobject-arguments",children:[],level:3},{value:"<code> public String getMethodItemAtIndex(int index)</code>",id:"-public-string-getmethoditematindexint-index",children:[],level:3},{value:"<code>public String getMethodItemByName(String name)</code>",id:"public-string-getmethoditembynamestring-name",children:[],level:3},{value:"<code> public Class&lt;?&gt; getMethodReturnType()</code>",id:"-public-class-getmethodreturntype",children:[],level:3}],level:2}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"method-test"},"Method Test"),(0,o.kt)("p",null,"This class can be instantiated to allow the test writer to test methods written by students without the need to call\nthem\ndirectly, and provides additional utility. Also, it supports a ",(0,o.kt)("inlineCode",{parentName:"p"},"Clause[]")," system, allowing the test writer to specify\nwhat\nthe console output form a method should be."),(0,o.kt)("h2",{id:"constructor-parameters"},"Constructor Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Class<?> methodClass")," is the class which the method is located in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"String methodName")," is the name of the method. It must be exactly how it is declared in the class, otherwise an error\nwill be thrown."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Object[][] arguments")," (optional) is a 2D array which holds the parameters and their class which will be used when\ncalling the method.\nEach parameter should also be of the form ",(0,o.kt)("inlineCode",{parentName:"li"},"{paramater_value, parameter_type}"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: If the method being called is ",(0,o.kt)("inlineCode",{parentName:"li"},"public static int sum(int x, int y)"),", and you wanted to test the numbers 5\nand\n7, the argument array would be ",(0,o.kt)("inlineCode",{parentName:"li"},"Object[][] arguments = { {5, int.class}, {7, int.class} };")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Clause[] methodTestSentence")," (optional) is a statement of clauses which specify what the console output of the method\nshould be. By default, if the ",(0,o.kt)("inlineCode",{parentName:"li"},"Clause[]")," is not specified, the test will assume there should be no console output and\nassert that it is empty. Also, the method clause system does not support any random clauses or the ",(0,o.kt)("inlineCode",{parentName:"li"},"PlaceHolder()"),"\nclause."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"String incorrectMethodStructureErrorMessage")," (optional) can be used to specify the error message which is run if the\nconsole output does not match the specified ",(0,o.kt)("inlineCode",{parentName:"li"},"Clause[]")," structure")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"public-object-callmethod-throws-throwable"},(0,o.kt)("inlineCode",{parentName:"h3"},"public Object callMethod() throws Throwable")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This method calls the method specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"methoClass")," attribute with the name ",(0,o.kt)("inlineCode",{parentName:"li"},"methodname"),", and will\ntry to pass the method the specified parameters (if there are any). If successful, the method will return an object\nwhich\nwraps the returned value from the method, or null of the method return type is void. Otherwise, if the method\nspecified\ndoes not exist, the student will receive an error message telling them that the method could not be found in their\nprogram.\nIf there is a problem in the students' method, and an error is thrown, ",(0,o.kt)("inlineCode",{parentName:"li"},"callMethod()")," will also throw this error to\nthe user.")),(0,o.kt)("h3",{id:"public-void-setmethodoutput"},(0,o.kt)("inlineCode",{parentName:"h3"},"public void setMethodOutput()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sets up the output stream which catches any console output from the method. This should generally not be called by the\ntest writer, but may need to be in some circumstances.")),(0,o.kt)("h3",{id:"public-void-setincorrectmethodstructureerrormessagestring-message"},(0,o.kt)("inlineCode",{parentName:"h3"},"public void setIncorrectMethodStructureErrorMessage(String message)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changes the ",(0,o.kt)("inlineCode",{parentName:"li"},"incorrectMethodStructureErrorMessage")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"message"))),(0,o.kt)("h3",{id:"-public-void-setmethodnotfounderrormessagestring-message"},(0,o.kt)("inlineCode",{parentName:"h3"}," public void setMethodNotFoundErrorMessage(String message)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changes the ",(0,o.kt)("inlineCode",{parentName:"li"},"methodNotFoundErrorMessage")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"message"),". This is usually not necessary as there is a default message\nbased\non the parameters used to initialize ",(0,o.kt)("inlineCode",{parentName:"li"},"MethodTest"),", but may be useful for better messages for some tests.")),(0,o.kt)("h3",{id:"public-string-getmethodoutput"},(0,o.kt)("inlineCode",{parentName:"h3"},"public String getMethodOutput()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Returns the console output of the method as a String")),(0,o.kt)("h3",{id:"public-void-setargumentsobject-arguments"},(0,o.kt)("inlineCode",{parentName:"h3"},"public void setArguments(Object[][] arguments)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sets the arguments which the method will be called with to those specified in the array. See the constructor\nparameters\nsection for details about structuring this array.")),(0,o.kt)("h3",{id:"-public-string-getmethoditematindexint-index"},(0,o.kt)("inlineCode",{parentName:"h3"}," public String getMethodItemAtIndex(int index)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Returns the value captured by the clause at ",(0,o.kt)("inlineCode",{parentName:"li"},"index"),". Note that the ",(0,o.kt)("inlineCode",{parentName:"li"},"Clause[]")," is indexed starting at one.")),(0,o.kt)("h3",{id:"public-string-getmethoditembynamestring-name"},(0,o.kt)("inlineCode",{parentName:"h3"},"public String getMethodItemByName(String name)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Returns the value captured by the clause with the name ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),".")),(0,o.kt)("h3",{id:"-public-class-getmethodreturntype"},(0,o.kt)("inlineCode",{parentName:"h3"}," public Class<?> getMethodReturnType()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Returns the return type of the method. If the method specified in the constructor does not exist, a fail message is\nprinted and null is returned")))}h.isMDXComponent=!0}}]);