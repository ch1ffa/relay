(self.webpackChunk=self.webpackChunk||[]).push([[50727],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(44256),a=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var l=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},p=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return a.createElement(o,null,a.createElement(p,null),a.createElement(l,null))},c=function(){return a.createElement(o,null,a.createElement(l,null))};const d=function(){return(0,r.fbContent)({internal:a.createElement(s,null),external:a.createElement(c,null)})}},74023:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>d,toc:()=>m,default:()=>k});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(68629),l=n(44256),p=["components"],s={id:"compiler",title:"Relay Compiler",slug:"/guides/compiler/",description:"Relay guide to the compiler",keywords:["compiler"]},c=void 0,d={unversionedId:"guides/compiler",id:"guides/compiler",isDocsHomePage:!1,title:"Relay Compiler",description:"Relay guide to the compiler",source:"@site/docs/guides/compiler.md",sourceDirName:"guides",slug:"/guides/compiler/",permalink:"/docs/next/guides/compiler/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/compiler.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1641487734,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"compiler",title:"Relay Compiler",slug:"/guides/compiler/",description:"Relay guide to the compiler",keywords:["compiler"]},sidebar:"docs",previous:{title:"GraphQL Server Specification",permalink:"/docs/next/guides/graphql-server-specification/"},next:{title:"Type Emission",permalink:"/docs/next/guides/type-emission/"}},m=[{value:"<code>graphql</code>",id:"graphql",children:[]},{value:"Compiler",id:"compiler",children:[{value:"GraphQL Schema",id:"graphql-schema",children:[]},{value:"Running the Compiler",id:"running-the-compiler",children:[]},{value:"Importing generated definitions",id:"importing-generated-definitions",children:[]}]}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=u("FbGraphQLSchema"),g=u("FbRunningCompiler"),y=u("FbImportingGeneratedDefinitions"),f={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"graphql"},(0,i.kt)("inlineCode",{parentName:"h2"},"graphql")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," template tag provided by Relay serves as the mechanism to write queries, fragments, mutations and subscriptions in the ",(0,i.kt)("a",{parentName:"p",href:"http://graphql.org/learn/"},"GraphQL")," language. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {graphql} from 'react-relay';\n\ngraphql`\n  query MyQuery {\n    viewer {\n      id\n    }\n  }\n`;\n")),(0,i.kt)("p",null,"The result of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," template tag is a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLTaggedNode"),"; a runtime representation of the GraphQL document."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," template tags are ",(0,i.kt)("strong",{parentName:"p"},"never executed at runtime"),". Instead, they are compiled ahead of time by the Relay compiler into generated artifacts that live alongside your source code, and which Relay requires to operate at runtime."),(0,i.kt)("h2",{id:"compiler"},"Compiler"),(0,i.kt)("p",null,"Relay uses the Relay Compiler to convert ",(0,i.kt)("a",{parentName:"p",href:"#graphql"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql"))," literals into generated files that live alongside your source files."),(0,i.kt)("p",null,"A fragment like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  fragment MyComponent on Type {\n    field\n  }\n`\n")),(0,i.kt)("p",null,"Will cause a generated file to appear in ",(0,i.kt)("inlineCode",{parentName:"p"},"./__generated__/MyComponent.graphql.js"),",\nwith both runtime artifacts (which help to read and write from the Relay Store)\nand ",(0,i.kt)("a",{parentName:"p",href:"https://flow.org/"},"Flow types")," to help you write type-safe code."),(0,i.kt)("p",null,"The Relay Compiler is responsible for generating code as part of a build step which can then be referenced at runtime. By building the query ahead of time, the Relay's runtime is not responsible for generating a query string, and various optimizations can be performed on the query that could be too expensive at runtime (for example, fields that are duplicated in the query can be merged during the build step, to improve efficiency of processing the GraphQL response)."),(0,i.kt)("h3",{id:"graphql-schema"},"GraphQL Schema"),(0,i.kt)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.kt)(h,{mdxType:"FbGraphQLSchema"})),(0,i.kt)(l.OssOnly,{mdxType:"OssOnly"},(0,i.kt)("p",null,"To use the Relay Compiler, you need a ",(0,i.kt)("inlineCode",{parentName:"p"},".graphql")," ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"GraphQL Schema")," file, describing your GraphQL server's API. Typically these files are local representations of a server source of truth and are not edited directly. For example, we might have a ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.graphql")," like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Root\n}\n\ntype Root {\n  dictionary: [Word]\n}\n\ntype Word {\n  id: String!\n  definition: WordDefinition\n}\n\ntype WordDefinition {\n  text: String\n  image: String\n}\n"))),(0,i.kt)("h3",{id:"running-the-compiler"},"Running the Compiler"),(0,i.kt)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.kt)(g,{mdxType:"FbRunningCompiler"})),(0,i.kt)(l.OssOnly,{mdxType:"OssOnly"},(0,i.kt)("p",null,"Additionally, you need a directory containing ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," files that use the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," tag to describe GraphQL queries and fragments. Let's call this ",(0,i.kt)("inlineCode",{parentName:"p"},"./src"),"."),(0,i.kt)("p",null,"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn run relay")," as set up before."),(0,i.kt)("p",null,"This will create a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"__generated__")," directories that are co-located with the corresponding files containing ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," tags."),(0,i.kt)("p",null,"For example, given the two files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Components/DictionaryComponent.js"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryWordFragment = graphql`\n  fragment DictionaryComponent_word on Word {\n    id\n    definition {\n      ...DictionaryComponent_definition\n    }\n  }\n`\n\nconst DictionaryDefinitionFragment = graphql`\n  fragment DictionaryComponent_definition on WordDefinition {\n    text\n    image\n  }\n`\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Queries/DictionaryQuery.js"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryQuery = graphql`\n  query DictionaryQuery {\n    dictionary {\n      ...DictionaryComponent_word\n    }\n  }\n`\n")),(0,i.kt)("p",null,"This would produce three generated files, and two ",(0,i.kt)("inlineCode",{parentName:"p"},"__generated__")," directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_word.graphql.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_definition.graphql.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Queries/__generated__/DictionaryQuery.graphql.js")))),(0,i.kt)("h3",{id:"importing-generated-definitions"},"Importing generated definitions"),(0,i.kt)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.kt)(y,{mdxType:"FbImportingGeneratedDefinitions"})),(0,i.kt)(l.OssOnly,{mdxType:"OssOnly"},(0,i.kt)("p",null,"Typically you will not need to import your generated definitions. The ",(0,i.kt)("a",{parentName:"p",href:"../../getting-started/installation-and-setup#setup-babel-plugin-relay"},"Relay Babel plugin")," will then convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",(0,i.kt)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),(0,i.kt)("p",null,"However the Relay Compiler also automatically generates ",(0,i.kt)("a",{parentName:"p",href:"https://flow.org"},"Flow")," types as ",(0,i.kt)("a",{parentName:"p",href:"https://flow.org/en/docs/types/comments/"},"type comments"),". For example, you can import the generated Flow types like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type {DictionaryComponent_word} from './__generated__/DictionaryComponent_word.graphql';\n")),(0,i.kt)("p",null,"More rarely, you may need to access a query, mutation, fragment or subscription from multiple files. In these cases, you can also import it directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import DictionaryComponent_word from './__generated__/DictionaryComponent_word.graphql';\n"))),(0,i.kt)(o.Z,{mdxType:"DocsRating"}))}k.isMDXComponent=!0}}]);