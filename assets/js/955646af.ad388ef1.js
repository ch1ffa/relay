(self.webpackChunk=self.webpackChunk||[]).push([[73086],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10541:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>m});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=["components"],l={id:"graphql-in-relay",title:"GraphQL in Relay",original_id:"graphql-in-relay"},p=void 0,s={unversionedId:"graphql-in-relay",id:"version-v5.0.0/graphql-in-relay",isDocsHomePage:!1,title:"GraphQL in Relay",description:"Table of Contents:",source:"@site/versioned_docs/version-v5.0.0/Modern-GraphQLInRelay.md",sourceDirName:".",slug:"/graphql-in-relay",permalink:"/docs/v5.0.0/graphql-in-relay",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v5.0.0/Modern-GraphQLInRelay.md",version:"v5.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1641487734,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"graphql-in-relay",title:"GraphQL in Relay",original_id:"graphql-in-relay"},sidebar:"version-v5.0.0/docs",previous:{title:"Quick Start Guide",permalink:"/docs/v5.0.0/quick-start-guide"},next:{title:"Relay Environment",permalink:"/docs/v5.0.0/relay-environment"}},d=[{value:"<code>graphql</code>",id:"graphql",children:[]},{value:"Directives",id:"directives",children:[{value:"<code>@arguments</code>",id:"arguments",children:[]},{value:"<code>@argumentDefinitions</code>",id:"argumentdefinitions",children:[]},{value:"<code>@connection(key: String!, filters: [String])</code>",id:"connectionkey-string-filters-string",children:[]},{value:"<code>@relay(plural: Boolean)</code>",id:"relayplural-boolean",children:[]},{value:"<code>@relay(mask: Boolean)</code>",id:"relaymask-boolean",children:[]}]},{value:"Relay Compiler",id:"relay-compiler",children:[{value:"Persisting queries",id:"persisting-queries",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"GraphQL Schema",id:"graphql-schema",children:[]},{value:"Source files",id:"source-files",children:[]},{value:"Importing generated definitions",id:"importing-generated-definitions",children:[]},{value:"Client schema extensions",id:"client-schema-extensions",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Table of Contents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#graphql"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#directives"},"Directives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#relay-compiler"},"Relay Compiler"))),(0,i.kt)("h2",{id:"graphql"},(0,i.kt)("inlineCode",{parentName:"h2"},"graphql")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," template tag provided by Relay serves as the mechanism to write queries, fragments, mutations or subscriptions in the ",(0,i.kt)("a",{parentName:"p",href:"http://graphql.org/learn/"},"GraphQL")," language. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {graphql} from 'react-relay';\n\ngraphql`\n  query MyQuery {\n    viewer {\n      id\n    }\n  }\n`;\n")),(0,i.kt)("p",null,"The result of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," template tag is a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLTaggedNode"),"; a runtime representation of the GraphQL document which can be used to define ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/query-renderer"},"Query Renderers"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/fragment-container"},"Fragment Containers"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/refetch-container"},"Refetch Containers"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/pagination-container"},"Pagination Containers"),", etc."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," template tags are ",(0,i.kt)("strong",{parentName:"p"},"never executed at runtime"),". Instead, they are compiled ahead of time by the ",(0,i.kt)("a",{parentName:"p",href:"#relay-compiler"},"Relay Compiler")," into generated artifacts that live alongside your source code, and which Relay requires to operate at runtime. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/installation-and-setup#setup-babel-plugin-relay"},"Relay Babel plugin")," will then convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",(0,i.kt)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),(0,i.kt)("h2",{id:"directives"},"Directives"),(0,i.kt)("p",null,"Relay uses directives to add additional information to GraphQL documents, which are used by the ",(0,i.kt)("a",{parentName:"p",href:"#relay-compiler"},"Relay Compiler")," to generate the appropriate runtime artifacts. These directives only appear in your application code and are removed from requests sent to your GraphQL server."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The relay-compiler will maintain any directives supported by your server (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@include")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@skip"),") so they remain part of the request to the GraphQL server and won't alter generated runtime artifacts."),(0,i.kt)("h3",{id:"arguments"},(0,i.kt)("inlineCode",{parentName:"h3"},"@arguments")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@arguments")," is a directive used to pass arguments to a fragment that was defined using ",(0,i.kt)("a",{parentName:"p",href:"#argumentdefinitions"},(0,i.kt)("inlineCode",{parentName:"a"},"@argumentDefinitions")),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query TodoListQuery($userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/fragment-container#passing-arguments-to-a-fragment"},"Fragment Container docs")," for more details."),(0,i.kt)("h3",{id:"argumentdefinitions"},(0,i.kt)("inlineCode",{parentName:"h3"},"@argumentDefinitions")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@argumentDefinitions")," is a directive used to specify arguments taken by a fragment. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'fragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n')),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/fragment-container#passing-arguments-to-a-fragment"},"Fragment Container docs")," for more details."),(0,i.kt)("h3",{id:"connectionkey-string-filters-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"@connection(key: String!, filters: [String])")),(0,i.kt)("p",null,"When using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/pagination-container"},"Pagination Container"),", Relay expects connection fields to be annotated with a ",(0,i.kt)("inlineCode",{parentName:"p"},"@connection")," directive. For more detailed information and an example, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/pagination-container#connection"},"docs on using ",(0,i.kt)("inlineCode",{parentName:"a"},"@connection")," inside a Pagination Container"),"."),(0,i.kt)("h3",{id:"relayplural-boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"@relay(plural: Boolean)")),(0,i.kt)("p",null,"When defining a fragment for use with a Fragment container, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@relay(plural: true)")," directive to indicate that container expects the prop for that fragment to be a list of items instead of a single item. A query or parent that spreads a ",(0,i.kt)("inlineCode",{parentName:"p"},"@relay(plural: true)")," fragment should do so within a plural field (ie a field backed by a ",(0,i.kt)("a",{parentName:"p",href:"http://graphql.org/learn/schema/#lists-and-non-null"},"GraphQL list"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Plural fragment definition\ngraphql`\nfragment TodoItems_items on TodoItem @relay(plural: true) {\n  id\n  text\n}`;\n\n// Plural fragment usage: note the parent type is a list of items (`[TodoItem}]`)\nfragment TodoApp_app on App {\n  items {\n    // parent type is a list here\n    ...TodoItem_items\n  }\n}\n")),(0,i.kt)("h3",{id:"relaymask-boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"@relay(mask: Boolean)")),(0,i.kt)("p",null,"By default Relay will only expose the data for fields explicitly requested by a ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/fragment-container#createfragmentcontainer"},"component's fragment"),", which is known as ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/thinking-in-relay#data-masking"},"data masking"),"."),(0,i.kt)("p",null,"However, ",(0,i.kt)("inlineCode",{parentName:"p"},"@relay(mask: false)")," can be used to prevent data masking; when including a fragment and annotating it with ",(0,i.kt)("inlineCode",{parentName:"p"},"@relay(mask: false)"),", its data will be available directly to the parent instead of being masked for a different container."),(0,i.kt)("p",null,"Applied to a fragment definition, ",(0,i.kt)("inlineCode",{parentName:"p"},"@relay(mask: false)")," changes the generated Flow types to be better usable when the fragment is included with the same directive. The Flow types will no longer be exact objects and no longer contain internal marker fields."),(0,i.kt)("p",null,"This may be helpful to reduce redundant fragments when dealing with nested or recursive data within a single Component."),(0,i.kt)("p",null,"Keep in mind that it is typically considered an ",(0,i.kt)("strong",{parentName:"p"},"anti-pattern")," to create a single fragment shared across many containers. Abusing this directive could result in over-fetching in your application."),(0,i.kt)("p",null,"In the example below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," prop will include the data for ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," fields wherever ",(0,i.kt)("inlineCode",{parentName:"p"},"...Component_internUser")," is included, instead of Relay's normal behavior to mask those fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  fragment Component_internUser on InternUser @relay(mask: false) {\n    id\n    name\n  }\n`;\n\nexport default createFragmentContainer(\n  ({ user }) => /* ... */,\n  graphql`\n    fragment Component_user on User {\n      internUser {\n        manager {\n          ...Component_internUser @relay(mask: false)\n        }\n        ... on Employee {\n          admins {\n            ...Component_internUser @relay(mask: false)\n          }\n          reports {\n            ...Component_internUser @relay(mask: false)\n          }\n        }\n      }\n    }\n  `,\n);\n")),(0,i.kt)("h2",{id:"relay-compiler"},"Relay Compiler"),(0,i.kt)("p",null,"Relay uses the Relay Compiler to convert ",(0,i.kt)("a",{parentName:"p",href:"#graphql"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql"))," literals into generated files that live alongside your source files."),(0,i.kt)("p",null,"A query like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  fragment MyComponent on Type {\n    field\n  }\n`\n\n")),(0,i.kt)("p",null,"Will cause a generated file to appear in ",(0,i.kt)("inlineCode",{parentName:"p"},"./__generated__/MyComponent.graphql"),",\nwith both runtime artifacts (which help to read and write from the Relay Store)\nand ",(0,i.kt)("a",{parentName:"p",href:"https://flow.org/"},"Flow types")," to help you write type-safe code."),(0,i.kt)("p",null,"The Relay Compiler is responsible for generating code as part of a build step which can then be referenced at runtime. By building the query ahead of time, the Relay's runtime is not responsible for generating a query string, and various optimizations can be performed on the query that could be too expensive at runtime (for example, fields that are duplicated in the query can be merged during the build step, to improve efficiency of processing the GraphQL response)."),(0,i.kt)("h3",{id:"persisting-queries"},"Persisting queries"),(0,i.kt)("p",null,"Relay Compiler supports the use of ",(0,i.kt)("strong",{parentName:"p"},"persisted queries"),", in which each version of a query is associated to a unique ID on the server and the runtime uploads only the persisted ID instead of the full query text. This has several benefits: it can significantly reduce the time to send a query (and the upload bytes) and enables ",(0,i.kt)("em",{parentName:"p"},"whitelisting")," of queries. For example, you may choose to disallow queries in text form and only allow queries that have been persisted (and that presumably have passed your internal code review process)."),(0,i.kt)("p",null,"Persisted queries can be enabled by instructing Relay Compiler to emit metadata about each query, mutation, and subscription into a JSON file. The generated file will contain a mapping of query identifiers to query text, which you can then save to your server. To enable persisted queries, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--persist-output")," flag to the compiler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./path/to/persisted-queries.json"\n}\n')),(0,i.kt)("p",null,"Relay Compiler will then create the id =",">"," query text mapping in the path you specify. You can then use this complete\njson file in your server side to map query ids to operation text."),(0,i.kt)("p",null,"For more details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/persisted-queries"},"Persisted Queries section"),"."),(0,i.kt)("h3",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,i.kt)("p",null,"See our relay-compiler section in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/installation-and-setup#set-up-relay-compiler"},"Installation and Setup guide"),"."),(0,i.kt)("h3",{id:"graphql-schema"},"GraphQL Schema"),(0,i.kt)("p",null,"To use the Relay Compiler, you need either a .graphql or .json GraphQL schema file, describing your GraphQL server's API. Typically these files are local representations of a server source of truth and are not edited directly. For example, we might have a ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.graphql")," like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Root\n}\n\ntype Root {\n  dictionary: [Word]\n}\n\ntype Word {\n  id: String!\n  definition: WordDefinition\n}\n\ntype WordDefinition {\n  text: String\n  image: String\n}\n")),(0,i.kt)("h3",{id:"source-files"},"Source files"),(0,i.kt)("p",null,"Additionally, you need a directory containing ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," files that use the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," tag to describe GraphQL queries and fragments. Let's call this ",(0,i.kt)("inlineCode",{parentName:"p"},"./src"),"."),(0,i.kt)("p",null,"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn run relay")," as set up before."),(0,i.kt)("p",null,"This will create a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"__generated__")," directories that are co-located with the corresponding files containing ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," tags."),(0,i.kt)("p",null,"For example, given the two files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"src/Components/DictionaryComponent.js")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryWordFragment = graphql`\n  fragment DictionaryComponent_word on Word {\n    id\n    definition {\n      ...DictionaryComponent_definition\n    }\n  }\n`\n\nconst DictionaryDefinitionFragment = graphql`\n  fragment DictionaryComponent_definition on WordDefinition {\n    text\n    image\n  }\n`\n\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"src/Queries/DictionaryQuery.js")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const DictionaryQuery = graphql`\n  query DictionaryQuery {\n    dictionary {\n      ...DictionaryComponent_word\n    }\n  }\n`\n\n")))),(0,i.kt)("p",null,"This would produce three generated files, and two ",(0,i.kt)("inlineCode",{parentName:"p"},"__generated__")," directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_word.graphql.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Components/__generated__/DictionaryComponent_definition.graphql.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/Queries/__generated__/DictionaryQuery.graphql.js"))),(0,i.kt)("h3",{id:"importing-generated-definitions"},"Importing generated definitions"),(0,i.kt)("p",null,"Typically you will not need to import your generated definitions. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/installation-and-setup#setup-babel-plugin-relay"},"Relay Babel plugin")," will then convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," literals in your code into ",(0,i.kt)("inlineCode",{parentName:"p"},"require()")," calls for the generated files."),(0,i.kt)("p",null,"However the Relay Compiler also automatically generates ",(0,i.kt)("a",{parentName:"p",href:"https://flow.org"},"Flow")," types as ",(0,i.kt)("a",{parentName:"p",href:"https://flow.org/en/docs/types/comments/"},"type comments"),". For example, you can import the generated Flow types like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type {DictionaryComponent_word} from './__generated__/DictionaryComponent_word.graphql';\n")),(0,i.kt)("h3",{id:"client-schema-extensions"},"Client schema extensions"),(0,i.kt)("p",null,"The Relay Compiler fully supports client-side schema extensions, which allows you to extend the server schema by defining additional GraphQL types and fields on the client. Relay expects the client schema to be located in your ",(0,i.kt)("inlineCode",{parentName:"p"},"--src")," directory."),(0,i.kt)("p",null,"For example, let's create ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql")," and define a new type called ",(0,i.kt)("inlineCode",{parentName:"p"},"Setting"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Setting {\n  name: String!\n  active: Boolean!\n}\n")),(0,i.kt)("p",null,"Assuming the server schema ",(0,i.kt)("inlineCode",{parentName:"p"},"./schema.graphql"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Root\n}\n\ntype Root {\n  title: String!\n}\n")),(0,i.kt)("p",null,"We can then extend existing server types in the client schema ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql")," with our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Setting")," type, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"extend type Root {\n  settings: [Setting]\n}\n")),(0,i.kt)("p",null,"Any fields specified in the client schema, can be fetched from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/relay-store"},"Relay Store"),", by requesting it in a query."),(0,i.kt)("p",null,"For more details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v5.0.0/local-state-management"},"Local state management section"),"."),(0,i.kt)("h3",{id:"advanced-usage"},"Advanced usage"),(0,i.kt)("p",null,"In addition to the bin script, the ",(0,i.kt)("inlineCode",{parentName:"p"},"relay-compiler")," package also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/relay/blob/main/packages/relay-compiler/index.js"},"exports library code")," which you may use to create more complex configurations for the compiler, or to extend the compiler with your own custom output."),(0,i.kt)("p",null,"If you find you need to do something unique (like generate types that conform to an older version of Flow, or to parse non-javascript source files), you can build your own version of the Compiler by swapping in your own ",(0,i.kt)("inlineCode",{parentName:"p"},"FileWriter")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ASTCache"),", or by adding on an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"IRTransform"),". Note, the internal APIs of the ",(0,i.kt)("inlineCode",{parentName:"p"},"RelayCompiler")," are under constant iteration, so rolling your own version may lead to incompatibilities with future releases."))}m.isMDXComponent=!0}}]);