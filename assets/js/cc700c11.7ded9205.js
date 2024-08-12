"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87733],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>u});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){return function(n){var a=c(n.components);return t.createElement(e,l({},n,{components:a}))}},c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return a?t.createElement(f,i(i({ref:n},s),{},{components:a})):t.createElement(f,i({ref:n},s))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});var t=a(67294),r=a(34334);const l="tabItem_Ymn6";function o(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},n)}},65488:(e,n,a)=>{a.r(n),a.d(n,{default:()=>p});var t=a(83117),r=a(67294),l=a(34334),o=a(72389),i=a(67392),d=a(7094),s=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var n,a,o=e.lazy,m=e.block,p=e.defaultValue,f=e.values,v=e.groupId,y=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),x=(0,i.l)(h,(function(e,n){return e.value===n.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?n:b[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,d.U)(),k=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,r.useState)(g),R=T[0],D=T[1],F=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=k[v];null!=O&&O!==R&&h.some((function(e){return e.value===O}))&&D(O)}var S=function(e){var n=e.currentTarget,a=F.indexOf(n),t=h[a].value;t!==R&&(C(n),D(t),null!=v&&N(v,String(t)))},I=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,r=F.indexOf(e.currentTarget)+1;a=null!=(t=F[r])?t:F[0];break;case"ArrowLeft":var l,o=F.indexOf(e.currentTarget)-1;a=null!=(l=F[o])?l:F[F.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},h.map((function(e){var n=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:R===n?0:-1,"aria-selected":R===n,key:n,ref:function(e){return F.push(e)},onKeyDown:I,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":R===n})}),null!=a?a:n)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==R})}))))}function p(e){var n=(0,o.default)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},8668:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var t=a(83117),r=a(80102),l=(a(67294),a(3905)),o=a(86341),i=a(65488),d=a(85162),s=["components"],u={id:"docblock-format",title:"Docblock Format",slug:"/api-reference/relay-resolvers/docblock-format/",description:"Docblock format for Relay Resolvers"},c=void 0,m={unversionedId:"api-reference/relay-resolvers/docblock-format",id:"api-reference/relay-resolvers/docblock-format",title:"Docblock Format",description:"Docblock format for Relay Resolvers",source:"@site/docs/api-reference/relay-resolvers/docblock-format.md",sourceDirName:"api-reference/relay-resolvers",slug:"/api-reference/relay-resolvers/docblock-format/",permalink:"/docs/next/api-reference/relay-resolvers/docblock-format/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/relay-resolvers/docblock-format.md",tags:[],version:"current",frontMatter:{id:"docblock-format",title:"Docblock Format",slug:"/api-reference/relay-resolvers/docblock-format/",description:"Docblock format for Relay Resolvers"},sidebar:"docs",previous:{title:"requestSubscription",permalink:"/docs/next/api-reference/request-subscription/"},next:{title:"Runtime Functions",permalink:"/docs/next/api-reference/relay-resolvers/runtime-functions/"}},p={},f=[{value:"<code>@RelayResolver TypeName</code>",id:"relayresolver-typename",level:2},{value:"<code>@RelayResolver TypeName.fieldName: FieldTypeName</code>",id:"relayresolver-typenamefieldname-fieldtypename",level:2},{value:"<code>@rootFragment</code>",id:"rootfragment",level:2},{value:"<code>@live</code>",id:"live",level:2},{value:"<code>@weak</code>",id:"weak",level:2},{value:"<code>@deprecated</code>",id:"deprecated",level:2},{value:"Descriptions",id:"descriptions",level:2}],v={toc:f};function y(e){var n=e.components,a=(0,r.Z)(e,s);return(0,l.mdx)("wrapper",(0,t.Z)({},v,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Relay Resolvers allow you to define additional types and fields in your GraphQL schema that are backed by client-side data. To achieve this, the Relay compiler looks for special ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," docblocks in your code. These docblocks define the types and fields in your schema and also tell Relay where to find the resolver functions that implement them."),(0,l.mdx)("p",null,"For an overview of Relay Resolvers and how to think about them, see the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/introduction"},"Relay Resolvers")," guide. This page documents the different docblock tags that the Relay compiler looks for, and how to use them."),(0,l.mdx)("admonition",{title:"The Relay compiler only looks at docblocks which include the",type:"note"},(0,l.mdx)("p",{parentName:"admonition"},(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," tag. Any other docblocks will be ignored.")),(0,l.mdx)("h2",{id:"relayresolver-typename"},(0,l.mdx)("inlineCode",{parentName:"h2"},"@RelayResolver TypeName")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," tag followed by a single name defines a new GraphQL type in your schema. By default it is expected to be followed by an exported function whose name matches the type name. The function should accept an ID as its sole argument and return the JavaScript model/object which is the backing data for the type. See ",(0,l.mdx)("a",{parentName:"p",href:"#weak"},(0,l.mdx)("inlineCode",{parentName:"a"},"@weak"))," for an alternative way to define the backing data for a type."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(d.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver User\n */\nexport function User(id): UserModel {\n  return UserModel.getById(id);\n}\n"))),(0,l.mdx)(d.default,{value:"Flow",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver\n */\nexport function User(id): UserModel {\n  return UserModel.getById(id);\n}\n")))),(0,l.mdx)("p",null,"See the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/defining-types/"},"Defining Types")," guide for more information."),(0,l.mdx)("h2",{id:"relayresolver-typenamefieldname-fieldtypename"},(0,l.mdx)("inlineCode",{parentName:"h2"},"@RelayResolver TypeName.fieldName: FieldTypeName")),(0,l.mdx)("p",null,"If the typename in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," tag is followed by a dot and then a field definition, it defines a new field on the type. The portion following the ",(0,l.mdx)("inlineCode",{parentName:"p"},".")," is expected to follow GraphQL's\n",(0,l.mdx)("a",{parentName:"p",href:"https://spec.graphql.org/June2018/#FieldDefinition"},"schema definition language"),"."),(0,l.mdx)("p",null,"Field definitions are expected to be followed by an exported function whose name matches the field name. The function should accept the model/object returned by the type resolver as its sole argument and return the value of the field."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(d.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver User.name: String\n */\nexport function name(user: UserModel): string {\n  return user.name;\n}\n"))),(0,l.mdx)(d.default,{value:"Flow",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver\n */\nexport function name(user: UserModel): string {\n  return user.name;\n}\n")))),(0,l.mdx)("p",null,"See the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/defining-fields/"},"Defining Fields")," guide for more information."),(0,l.mdx)("h2",{id:"rootfragment"},(0,l.mdx)("inlineCode",{parentName:"h2"},"@rootFragment")),(0,l.mdx)("p",null,"Relay Resolvers may also be used to model data that is derived from other data in the graph. These fields will be automatically recomputed by Relay when the data they depend on changes."),(0,l.mdx)("p",null,"To define a derived field, use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@rootFragment")," tag on an existing field\ndefinition, and follow it with the name of a fragment that defines the data that the field depends on. The resolver function for the field will be passed a fragment key which can be used to read the fragment data using ",(0,l.mdx)("inlineCode",{parentName:"p"},"readFragment()"),"."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(d.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {readFragment} from 'relay-runtime';\n\n/**\n * @RelayResolver User.fullName: String\n * @rootFragment UserFullNameFragment\n */\nexport function fullName(key: UserFullNameFragment$key): string {\n  const user = readFragment(\n    graphql`\n      fragment UserFullNameFragment on User {\n        firstName\n        lastName\n      }\n    `,\n    key,\n  );\n  return `${user.firstName} ${user.lastName}`;\n}\n"))),(0,l.mdx)(d.default,{value:"Flow",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {readFragment} from 'relay-runtime';\n\n/**\n * @RelayResolver\n */\nexport function fullName(key: UserFullNameFragment$key): string {\n  const user = readFragment(\n    graphql`\n      fragment UserFullNameFragment on User {\n        firstName\n        lastName\n      }\n    `,\n    key,\n  );\n  return `${user.firstName} ${user.lastName}`;\n}\n")))),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/derived-fields/"},"Derived Fields")," for more information."),(0,l.mdx)("h2",{id:"live"},(0,l.mdx)("inlineCode",{parentName:"h2"},"@live")),(0,l.mdx)("p",null,"When modeling client state that can change over time, a resolver function which returns a single value is not sufficient. To accommodate this, Relay Resolvers allow you to define a field that returns a stream of values over time. This is done by adding the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@live")," tag to a ",(0,l.mdx)("em",{parentName:"p"},"field or type definition"),"."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"@live")," resolvers must return an object with the shape of a ",(0,l.mdx)("inlineCode",{parentName:"p"},"LiveStateValue")," to allow Relay to read the current value and subscribe to changes."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(d.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"import type {LiveState} from 'relay-runtime';\n\n/**\n* @RelayResolver Query.counter: Int\n* @live\n*/\nexport function counter(): LiveState<number> {\n  return {\n    read: () => store.getState().counter,\n    subscribe: cb => {\n      return store.subscribe(cb);\n    },\n  };\n}\n"))),(0,l.mdx)(d.default,{value:"Flow",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"import type {LiveState} from 'relay-runtime';\n\n/**\n* @RelayResolver\n*/\nexport function counter(): LiveState<number> {\n  return {\n    read: () => store.getState().counter,\n    subscribe: cb => {\n      return store.subscribe(cb);\n    },\n  };\n}\n")))),(0,l.mdx)("p",null,"See the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/live-fields/"},"Live Fields")," guide for\nmore information."),(0,l.mdx)("h2",{id:"weak"},(0,l.mdx)("inlineCode",{parentName:"h2"},"@weak")),(0,l.mdx)("p",null,"By default, Relay Resolvers expect the backing data for a type to be returned by a resolver function. However, in some cases objects of a given type may not have identifiers. In this case, you can use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver TypeName")," syntax described above followed by the tag ",(0,l.mdx)("inlineCode",{parentName:"p"},"@weak"),' to define a "weak" type.'),(0,l.mdx)("p",null,"Weak type declarations are expected to be followed by an exported type\ndefinition whose name matches the type name."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(d.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n* @RelayResolver ProfilePicture\n* @weak\n*/\nexport type ProfilePicture = {\n  url: string;\n  width: number;\n  height: number;\n};\n"))),(0,l.mdx)(d.default,{value:"Flow",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n* @RelayResolver\n*/\nexport type ProfilePicture = {\n  url: string;\n  width: number;\n  height: number;\n};\n")))),(0,l.mdx)("p",null,"See the ","[Weak Types]","(/docs/next/guides/relay-resolvers/defining-types/#Defining a \u201cweak\u201d type) guide for more information including how to define an edge to a weak type."),(0,l.mdx)("h2",{id:"deprecated"},(0,l.mdx)("inlineCode",{parentName:"h2"},"@deprecated")),(0,l.mdx)("p",null,"Just like the GraphQL schema definition language, Relay Resolvers support the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@deprecated")," tag to mark a field as deprecated. The tag may be followed by a string which will be used as the deprecation reason. Deprecated fields will\nreceive special treatment in the editor if you are using the\n",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/editor-support/"},"Relay VSCode extension"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver User.name: String\n * @deprecated Use `fullName` instead.\n */\nexport function name(user: UserModel): string {\n  return user.name;\n}\n")),(0,l.mdx)("p",null,"See the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/deprecated/"},"Deprecated")," guide for more information."),(0,l.mdx)("h2",{id:"descriptions"},"Descriptions"),(0,l.mdx)("p",null,"Any free text in the docblock (text not following a tag) will be used as the description for the type or field. This description will be surfaced in the editor if you are using the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/editor-support/"},"Relay VSCode extension"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver User.name: String\n *\n * What's in a name? That which we call a rose by any other name would smell\n * just as sweet.\n */\nexport function name(user: UserModel): string {\n  return user.name;\n}\n")),(0,l.mdx)("p",null,"See the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/descriptions/"},"Descriptions")," guide for more information."))}y.isMDXComponent=!0}}]);