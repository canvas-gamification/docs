"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7076],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=o(r),h=a,m=s["".concat(u,".").concat(h)]||s[h]||p[h]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5531:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],c={},u="ArrayUtil",o={unversionedId:"junit-framework/utility/array-util",id:"junit-framework/utility/array-util",title:"ArrayUtil",description:"This class contains methods for manipulating and creating arrays used in testing array questions.",source:"@site/docs/junit-framework/utility/array-util.md",sourceDirName:"junit-framework/utility",slug:"/junit-framework/utility/array-util",permalink:"/docs/docs/junit-framework/utility/array-util",editUrl:"https://github.com/canvas-gamification/docs/docs/junit-framework/utility/array-util.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Full Examples",permalink:"/docs/docs/junit-framework/input-tests/full-example"},next:{title:"ClassUtil",permalink:"/docs/docs/junit-framework/utility/class-util"}},d=[{value:"Methods Available",id:"methods-available",children:[{value:"<code>public static int[] generateRandomArray(int lower, int upper, int length)</code>",id:"public-static-int-generaterandomarrayint-lower-int-upper-int-length",children:[],level:3},{value:"<code>public static double[] generateRandomArray(double lower, double upper, int length)</code>",id:"public-static-double-generaterandomarraydouble-lower-double-upper-int-length",children:[],level:3},{value:"<code>public static char[] generateRandomArray(char lower, char upper, int length)</code>",id:"public-static-char-generaterandomarraychar-lower-char-upper-int-length",children:[],level:3},{value:"<code>public static String[] generateRandomWordArray(int length)</code>",id:"public-static-string-generaterandomwordarrayint-length",children:[],level:3},{value:"<code>public static int sum(int[] arr)</code>",id:"public-static-int-sumint-arr",children:[],level:3},{value:"<code>public static double sum(double[] arr)</code>",id:"public-static-double-sumdouble-arr",children:[],level:3},{value:"<code>public static int sum(char[] arr)</code>",id:"public-static-int-sumchar-arr",children:[],level:3},{value:"<code>public static String arrayToInput(int[] arr)</code>",id:"public-static-string-arraytoinputint-arr",children:[],level:3},{value:"<code>public static String arrayToInput(double[] arr)</code>",id:"public-static-string-arraytoinputdouble-arr",children:[],level:3},{value:"<code>public static String arrayToInput(char[] arr)</code>",id:"public-static-string-arraytoinputchar-arr",children:[],level:3},{value:"<code>public static String arrayToInput(String[] arr)</code>",id:"public-static-string-arraytoinputstring-arr",children:[],level:3},{value:"<code>public static int[] increment(int[] arr, int increment)</code>",id:"public-static-int-incrementint-arr-int-increment",children:[],level:3},{value:"<code>public static double[] increment(double[] arr, double increment)</code>",id:"public-static-double-incrementdouble-arr-double-increment",children:[],level:3},{value:"<code>public static char[] increment(char[] arr, int increment)</code>",id:"public-static-char-incrementchar-arr-int-increment",children:[],level:3},{value:"<code> public static int[] generateAscendingArray(int start, int length)</code>",id:"-public-static-int-generateascendingarrayint-start-int-length",children:[],level:3},{value:"<code>public static int[] generateAscendingArray(int start, int length, int step)</code>",id:"public-static-int-generateascendingarrayint-start-int-length-int-step",children:[],level:3},{value:"<code>public static double[] generateAscendingArray(double start, int length)</code>",id:"public-static-double-generateascendingarraydouble-start-int-length",children:[],level:3},{value:"<code>generateAscendingArray(double start, int length, double step)</code>",id:"generateascendingarraydouble-start-int-length-double-step",children:[],level:3},{value:"<code>public static char[] generateAscendingArray(char start, int length)</code>",id:"public-static-char-generateascendingarraychar-start-int-length",children:[],level:3},{value:"<code>char[] generateAscendingArray(char start, int length, int step)</code>",id:"char-generateascendingarraychar-start-int-length-int-step",children:[],level:3},{value:"<code>public static int[] multiply(int[] arr, int multiply)</code>",id:"public-static-int-multiplyint-arr-int-multiply",children:[],level:3},{value:"<code>public static double[] multiply(double[] arr, double multiply</code>",id:"public-static-double-multiplydouble-arr-double-multiply",children:[],level:3},{value:"<code>public static int[] replicateArray(int number, int length)</code>",id:"public-static-int-replicatearrayint-number-int-length",children:[],level:3},{value:"<code>public static double[] replicateArray(double number, int length)</code>",id:"public-static-double-replicatearraydouble-number-int-length",children:[],level:3},{value:"<code>public static char[] replicateArray(char character, int length)</code>",id:"public-static-char-replicatearraychar-character-int-length",children:[],level:3},{value:"<code>public static int[] merge(int[] firstArray, int[] secondArray)</code>",id:"public-static-int-mergeint-firstarray-int-secondarray",children:[],level:3},{value:"<code>public static double[] merge(double[] firstArray, double[] secondArray)</code>",id:"public-static-double-mergedouble-firstarray-double-secondarray",children:[],level:3},{value:"<code>public static char[] merge(char[] firstArray, char[] secondArray)</code>",id:"public-static-char-mergechar-firstarray-char-secondarray",children:[],level:3}],level:2}],p={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arrayutil"},"ArrayUtil"),(0,i.kt)("p",null,"This class contains methods for manipulating and creating arrays used in testing array questions."),(0,i.kt)("h2",{id:"methods-available"},"Methods Available"),(0,i.kt)("h3",{id:"public-static-int-generaterandomarrayint-lower-int-upper-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int[] generateRandomArray(int lower, int upper, int length)")),(0,i.kt)("p",null,"This method returns an array of random integers with values from ",(0,i.kt)("inlineCode",{parentName:"p"},"lower")," (inclusive) to ",(0,i.kt)("inlineCode",{parentName:"p"},"upper")," (exclusive), with the\narray length equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," parameter."),(0,i.kt)("h3",{id:"public-static-double-generaterandomarraydouble-lower-double-upper-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static double[] generateRandomArray(double lower, double upper, int length)")),(0,i.kt)("p",null,"This method returns an array of random doubles with values from ",(0,i.kt)("inlineCode",{parentName:"p"},"lower")," (inclusive) to ",(0,i.kt)("inlineCode",{parentName:"p"},"upper")," (exclusive), with the\narray length equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," parameter."),(0,i.kt)("h3",{id:"public-static-char-generaterandomarraychar-lower-char-upper-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static char[] generateRandomArray(char lower, char upper, int length)")),(0,i.kt)("p",null,"This method returns an array of random characters with values from ",(0,i.kt)("inlineCode",{parentName:"p"},"lower")," (inclusive) to ",(0,i.kt)("inlineCode",{parentName:"p"},"upper")," (exclusive), with the\narray length equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," parameter."),(0,i.kt)("h3",{id:"public-static-string-generaterandomwordarrayint-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static String[] generateRandomWordArray(int length)")),(0,i.kt)("p",null,"This method returns an array of Strings consisting of individual words pulled randomly from a word bank, with the array\nlength equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," parameter."),(0,i.kt)("h3",{id:"public-static-int-sumint-arr"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int sum(int[] arr)")),(0,i.kt)("p",null,"This method returns the sum of the integers in the array."),(0,i.kt)("h3",{id:"public-static-double-sumdouble-arr"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static double sum(double[] arr)")),(0,i.kt)("p",null,"This method returns the sum of the doubles in the array."),(0,i.kt)("h3",{id:"public-static-int-sumchar-arr"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int sum(char[] arr)")),(0,i.kt)("p",null,"This method returns the integer sum of the ASCII values of the characters in the array."),(0,i.kt)("h3",{id:"public-static-string-arraytoinputint-arr"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static String arrayToInput(int[] arr)")),(0,i.kt)("p",null,"This method converts the input integer array to the String format required for use as scanner input with\n",(0,i.kt)("inlineCode",{parentName:"p"},"runWithInput()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TestOption.defaultInput"),"."),(0,i.kt)("p",null,"Example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"int[] arr = new int[]{1, 2, 3, 4, 5}")," becomes the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"1 2 3 4 5 "'),"."),(0,i.kt)("h3",{id:"public-static-string-arraytoinputdouble-arr"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static String arrayToInput(double[] arr)")),(0,i.kt)("p",null,"This method converts the input double array to the String format required for use as scanner input with\n",(0,i.kt)("inlineCode",{parentName:"p"},"runWithInput()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TestOption.defaultInput"),"."),(0,i.kt)("p",null,"Example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"double[] arr = new double[]{12.5, -2.987, 3.0, 4.3, 5.44}")," becomes the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"12.5 -2.987 3.0 4.3 5.44 "'),"."),(0,i.kt)("h3",{id:"public-static-string-arraytoinputchar-arr"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static String arrayToInput(char[] arr)")),(0,i.kt)("p",null,"This method converts the input character array to the String format required for use as scanner input with\n",(0,i.kt)("inlineCode",{parentName:"p"},"runWithInput()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TestOption.defaultInput"),"."),(0,i.kt)("p",null,"Example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"char[] arr = new chat[]{'A', 'B', 'C'}")," becomes the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"A B C "'),"."),(0,i.kt)("h3",{id:"public-static-string-arraytoinputstring-arr"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static String arrayToInput(String[] arr)")),(0,i.kt)("p",null,"This method converts the input String array to the String format required for use as scanner input with\n",(0,i.kt)("inlineCode",{parentName:"p"},"runWithInput()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TestOption.defaultInput"),"."),(0,i.kt)("p",null,"Example:\n",(0,i.kt)("inlineCode",{parentName:"p"},'String[] arr = new String[]{"Hello", "World"}')," becomes the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello World "'),"."),(0,i.kt)("h3",{id:"public-static-int-incrementint-arr-int-increment"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int[] increment(int[] arr, int increment)")),(0,i.kt)("p",null,"This method increments all the values in the integer array by the increment value passed to the method."),(0,i.kt)("h3",{id:"public-static-double-incrementdouble-arr-double-increment"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static double[] increment(double[] arr, double increment)")),(0,i.kt)("p",null,"This method increments all the values in the double array by the increment value passed to the method."),(0,i.kt)("h3",{id:"public-static-char-incrementchar-arr-int-increment"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static char[] increment(char[] arr, int increment)")),(0,i.kt)("p",null,"This method increments all the values in the character array by the increment value passed to the method."),(0,i.kt)("h3",{id:"-public-static-int-generateascendingarrayint-start-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"}," public static int[] generateAscendingArray(int start, int length)")),(0,i.kt)("p",null,"This method returns an integer array of the specified length where the value at index zero is the start parameter, and\neach subsequent index is the value in the previous index plus one."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"generateAscendingArray(10, 5)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{10, 11, 12, 13, 14}")),(0,i.kt)("h3",{id:"public-static-int-generateascendingarrayint-start-int-length-int-step"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int[] generateAscendingArray(int start, int length, int step)")),(0,i.kt)("p",null,"This method returns an integer array of the specified length where the value at index zero is the start parameter, and\neach subsequent index is the value in the previous index plus the step parameter."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"generateAscendingArray(10, 5, 3)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{10, 13, 16, 19, 22}")),(0,i.kt)("h3",{id:"public-static-double-generateascendingarraydouble-start-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static double[] generateAscendingArray(double start, int length)")),(0,i.kt)("p",null,"This method returns a double array of the specified length where the value at index zero is the start parameter, and\neach subsequent index is the value in the previous index plus one."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"generateAscendingArray(6.7, 5)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{6.7, 7.7, 8.7, 9.7, 10.7}")),(0,i.kt)("h3",{id:"generateascendingarraydouble-start-int-length-double-step"},(0,i.kt)("inlineCode",{parentName:"h3"},"generateAscendingArray(double start, int length, double step)")),(0,i.kt)("p",null,"This method returns a double array of the specified length where the value at index zero is the start parameter, and\neach subsequent index is the value in the previous index plus the step parameter."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"generateAscendingArray(6.7, 0.3)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{6.7, 7.0, 7.3, 7.6, 7.9}")),(0,i.kt)("h3",{id:"public-static-char-generateascendingarraychar-start-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static char[] generateAscendingArray(char start, int length)")),(0,i.kt)("p",null,"This method returns a char array of the specified length where the value at index zero is the start parameter, and each\nsubsequent index is the value in the previous index plus one (the next character)."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"generateAscendingArray('A', 5)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{'A', 'B', 'C', 'D', 'E'}")),(0,i.kt)("h3",{id:"char-generateascendingarraychar-start-int-length-int-step"},(0,i.kt)("inlineCode",{parentName:"h3"},"char[] generateAscendingArray(char start, int length, int step)")),(0,i.kt)("p",null,"This method returns a char array of the specified length where the value at index zero is the start parameter, and each\nsubsequent index is the value in the previous index plus the step parameter (x characters after the current one)."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"generateAscendingArray('A', 5, 3)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{'A', 'D', 'G', 'J', 'M'}")),(0,i.kt)("h3",{id:"public-static-int-multiplyint-arr-int-multiply"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int[] multiply(int[] arr, int multiply)")),(0,i.kt)("p",null,"This method takes an integer array, and returns the array with all the variables multiplied by the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiply")," parameter."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"multiply(new int[]{1, 2, 3, 4, 5}, 4)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{4, 8, 12, 16, 20}")),(0,i.kt)("h3",{id:"public-static-double-multiplydouble-arr-double-multiply"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static double[] multiply(double[] arr, double multiply")),(0,i.kt)("p",null,"This method takes a double array, and returns the array with all the variables multiplied by the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiply")," parameter."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"multiply(new double[]{1.2, 2.4, 3.9, 4.3, 5.6}, 2.0)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{2.4, 4.8, 7.8, 8.6, 11.2}")),(0,i.kt)("h3",{id:"public-static-int-replicatearrayint-number-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int[] replicateArray(int number, int length)")),(0,i.kt)("p",null,"This method returns an integer array of the specified length where every item equals the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," parameter."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"replicateArray(4, 3)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{4, 4, 4}")),(0,i.kt)("h3",{id:"public-static-double-replicatearraydouble-number-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static double[] replicateArray(double number, int length)")),(0,i.kt)("p",null,"This method returns a double array of the specified length where every item equals the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," parameter."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"replicateArray(2.91, 5)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{2.91, 2.91, 2.91, 2.91, 2.91}")),(0,i.kt)("h3",{id:"public-static-char-replicatearraychar-character-int-length"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static char[] replicateArray(char character, int length)")),(0,i.kt)("p",null,"This method returns a char array of the specified length where every item equals the ",(0,i.kt)("inlineCode",{parentName:"p"},"character")," parameter."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"replicateArray('S', 7)")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{'S', 'S', 'S', 'S', 'S', 'S', 'S'}")),(0,i.kt)("h3",{id:"public-static-int-mergeint-firstarray-int-secondarray"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static int[] merge(int[] firstArray, int[] secondArray)")),(0,i.kt)("p",null,"This method returns a new integer array equal to the first array merged with the second array. Note that the values of the\nfirst array are placed before the values of the second array. "),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"merge(new int[]{1, 2, 3}, new int[]{4, 5, 6})")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{1, 2, 3, 4, 5, 6}")),(0,i.kt)("h3",{id:"public-static-double-mergedouble-firstarray-double-secondarray"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static double[] merge(double[] firstArray, double[] secondArray)")),(0,i.kt)("p",null,"This method returns a new double array equal to the first array merged with the second array. Note that the values of the\nfirst array are placed before the values of the second array."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"merge(new int[]{1.1, 1.2, 1.3}, new int[]{1.4, 1.5, 1.6})")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{1.1, 1.2, 1.3, 1.4, 1.5, 1.6}")),(0,i.kt)("h3",{id:"public-static-char-mergechar-firstarray-char-secondarray"},(0,i.kt)("inlineCode",{parentName:"h3"},"public static char[] merge(char[] firstArray, char[] secondArray)")),(0,i.kt)("p",null,"This method returns a new char array equal to the first array merged with the second array. Note that the values of the\nfirst array are placed before the values of the second array."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"merge(new int[]{'A', 'B'}, new int[]{'C', 'D', 'E', 'F', 'G'})")," returns the array ",(0,i.kt)("inlineCode",{parentName:"p"},"{'A', 'B', 'C', 'D', 'E', 'F', 'G'}")))}s.isMDXComponent=!0}}]);