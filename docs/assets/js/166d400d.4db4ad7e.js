"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[12043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var s=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,l=function(e,t){if(null==e)return{};var n,s,l={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?s.createElement(h,o(o({ref:t},p),{},{components:n})):s.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var u=2;u<a;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=n(87462),l=(n(67294),n(3905));const a={title:"Clues",slug:"clues.html"},o=void 0,r={unversionedId:"assertions/clues",id:"version-5.9/assertions/clues",title:"Clues",description:"Clues only work if you are using the Kotest assertions library",source:"@site/versioned_docs/version-5.9/assertions/clues.md",sourceDirName:"assertions",slug:"/assertions/clues.html",permalink:"/docs/assertions/clues.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.9/assertions/clues.md",tags:[],version:"5.9",frontMatter:{title:"Clues",slug:"clues.html"},sidebar:"assertions",previous:{title:"Exceptions",permalink:"/docs/assertions/exceptions.html"},next:{title:"Soft Assertions",permalink:"/docs/assertions/soft-assertions.html"}},i={},u=[{value:"Nested clues",id:"nested-clues",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Clues only work if you are using the Kotest assertions library")),(0,l.kt)("p",null,"A rule of thumb is that a failing test should look like a good bug report.\nIn other words, it should tell you what went wrong, and ideally why it went wrong."),(0,l.kt)("p",null,"Sometimes a failed assertion contains enough information in the error message to know what went wrong."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'username shouldBe "sksamuel"\n')),(0,l.kt)("p",null,"Might give an error like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'expected: "sksamuel" but was: "sam@myemailaddress.com"\n')),(0,l.kt)("p",null,"In this case, it looks like the system populates the username field with an email address."),(0,l.kt)("p",null,"But let's say you had a test like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"user.name shouldNotBe null\n")),(0,l.kt)("p",null,"If this failed, you would simply get:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<null> should not equal <null>\n")),(0,l.kt)("p",null,"Which isn't particularly helpful. This is where ",(0,l.kt)("inlineCode",{parentName:"p"},"withClue")," comes into play."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"withClue")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"asClue")," helpers can add extra context to assertions so failures are self explanatory:"),(0,l.kt)("p",null,"For example, we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"withClue")," with a string message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'withClue("Name should be present") {\n  user.name shouldNotBe null\n}\n')),(0,l.kt)("p",null,"Would give an error like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Name should be present\n<null> should not equal <null>\n")),(0,l.kt)("p",null,"The error message became much better, however, it is still not as good as it could be.\nFor instance, it might be helpful to know the user's id to check the database."),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"asClue")," to add the user's id to the error message:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'withClue({ "Name should be present (user_id=${user.id})" }) {\n  user.name shouldNotBe null\n}\n')),(0,l.kt)("p",null,"We can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"asClue")," extension function to turn any object into the clue message."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'{ "Name should be present (user_id=${user.id})" }.asClue {\nuser.name shouldNotBe null\n}\n')),(0,l.kt)("p",null,"The message will be computed only in case the test fails, so it is safe to use it with expensive operations."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Test failures include a failed assertion, test name, clues, and stacktrace.\nConsider using them in such a way, so they answer both what has failed, and why it failed.\nIt will make the tests easier to maintain, especially when it comes to reverse-engineering the intention of the test author.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Every time you see a code comment above an assertion, consider using ",(0,l.kt)("inlineCode",{parentName:"p"},"asClue"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"withClue")," instead.\nThe comments are not visible in the test failures, especially on CI, while clues will be visible.")),(0,l.kt)("p",null,"You can use domain objects as clues as well:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class HttpResponse(val status: Int, val body: String)\n\nval response = HttpResponse(404, "the content")\n\nresponse.asClue {\n    it.status shouldBe 200\n    it.body shouldBe "the content"\n}\n')),(0,l.kt)("p",null,"Would output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HttpResponse(status=404, body=the content)\nExpected :200\nActual   :404\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Kotest considers all ",(0,l.kt)("inlineCode",{parentName:"p"},"() -> Any?")," clues as lazy clues, and would compute them and use ",(0,l.kt)("inlineCode",{parentName:"p"},".toString()")," on the resulting value\ninstead of calling ",(0,l.kt)("inlineCode",{parentName:"p"},".toString()")," on the function itself.\nIn most cases, it should do exactly what you need, however, if clue object implements ",(0,l.kt)("inlineCode",{parentName:"p"},"() -> Any?"),", and you want\nusing ",(0,l.kt)("inlineCode",{parentName:"p"},"clue.toString()"),", then consider wrapping the clue manually as ",(0,l.kt)("inlineCode",{parentName:"p"},"{ clue.toString() }.asClue { ... }"),".")),(0,l.kt)("h2",{id:"nested-clues"},"Nested clues"),(0,l.kt)("p",null,"Clues can be nested, and they all will be visible in the failed assertion messages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'{ "Verifying user_id=${user.name}" }.asClue {\n  "email_confirmed should be false since we\'ve just created the user".asClue {\n    user.emailConfirmed shouldBe false\n  }\n  "login".asClue {\n    user.login shouldBe "sksamuel"\n  }\n}\n')),(0,l.kt)("p",null,"The failure might look like"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Verifying user_id=42\nemail_confirmed should be false since we've just created the user\n<true> should equal <false>\n")))}c.isMDXComponent=!0}}]);