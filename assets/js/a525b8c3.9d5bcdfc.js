"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27603],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(34334);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(83117),a=n(67294),o=n(34334),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,f=e.values,y=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),k=x.tabGroupChoices,D=x.setTabGroupChoices,T=(0,a.useState)(w),O=T[0],N=T[1],E=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var R=k[y];null!=R&&R!==O&&b.some((function(e){return e.value===R}))&&N(R)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==O&&(j(t),N(r),null!=y&&D(y,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;n=null!=(o=E[l])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.default)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},32858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>p,toc:()=>f});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=n(86341),i=n(65488),s=n(85162),u=["components"],d={id:"defining-types",title:"Defining Types",slug:"/guides/relay-resolvers/defining-types/",description:"How to define types for your client state schema"},c=void 0,p={unversionedId:"guides/relay-resolvers/defining-types",id:"version-v18.0.0/guides/relay-resolvers/defining-types",title:"Defining Types",description:"How to define types for your client state schema",source:"@site/versioned_docs/version-v18.0.0/guides/relay-resolvers/defining-types.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/defining-types/",permalink:"/docs/guides/relay-resolvers/defining-types/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v18.0.0/guides/relay-resolvers/defining-types.md",tags:[],version:"v18.0.0",frontMatter:{id:"defining-types",title:"Defining Types",slug:"/guides/relay-resolvers/defining-types/",description:"How to define types for your client state schema"},sidebar:"docs",previous:{title:"Enabling Relay Resolvers",permalink:"/docs/guides/relay-resolvers/enabling-resolvers"},next:{title:"Defining Fields",permalink:"/docs/guides/relay-resolvers/defining-fields/"}},m={},f=[{value:"Defining a \u201cstrong\u201d type",id:"defining-a-strong-type",level:3},{value:"Defining a \u201cweak\u201d type",id:"defining-a-weak-type",level:3}],y={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.mdx)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"You can think of client state resolvers as defining a GraphQL server that runs in the client. Just like with a server-defined GraphQL server you will need to define the ",(0,o.mdx)("em",{parentName:"p"},"types")," that exist in your schema as well as the ",(0,o.mdx)("em",{parentName:"p"},"fields"),' on those types. Just like a GraphQL server, fields are defined as functions that compute the GraphQL value from the parent object. In Relay Resolvers we call this parent JavaScript object the "model" of the type.'),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},'Each client state GraphQL type is backed by a JavaScript object type which these docs will refer to as its "model type". Resolvers "on" this type will be passed an instance of this type as their first argument.')),(0,o.mdx)("p",null,"Resolver types are defined using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," tag followed by the name of the type you are defining. By default Relay assumes your client types are \u201cstrong\u201d, meaning each instance has an ID which is unique within the type. This property allows Relay to apply a number of optimizations, such as memoizing resolver computation."),(0,o.mdx)("h3",{id:"defining-a-strong-type"},"Defining a \u201cstrong\u201d type"),(0,o.mdx)("p",null,"Strong types are defined by a docblock followed by an exported function whose name matches the type's name, and which accepts an ID as its only argument and returns an instance of the type\u2019s model. Resolvers that define edges to this type will simply need to return the ID of the object, rather than deriving the model themselves."),(0,o.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,l.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"Docblock",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver User\n */\nexport function User(id: DataID): UserModel {\n  return UserService.getById(id);\n}\n"))),(0,o.mdx)(s.default,{value:"Flow",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver\n */\nexport function User(id: DataID): UserModel {\n  return UserService.getById(id);\n}\n")))),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"Elsewhere in the docs this function is referred to as the \u201cmodel resolver\u201d for the type.")),(0,o.mdx)("p",null,"Generally objects in your client data store will be able to change over time. To support this Relay Resolvers support resolvers that subscribe to the underlying data source. To learn about this, see the page on ",(0,o.mdx)("a",{parentName:"p",href:"/docs/guides/relay-resolvers/live-fields/"},"Live Fields"),"."),(0,o.mdx)("h3",{id:"defining-a-weak-type"},"Defining a \u201cweak\u201d type"),(0,o.mdx)("p",null,"If your type does not have a unique identifier, you can define it as \u201cweak\u201d by adding the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@weak")," docblock tag. Weak types are defined by a docblock followed by an exported type definition matching the types name. Resolvers that define edges to weak types will need to return a fully populated model object matching this type."),(0,o.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,l.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"Docblock",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver ProfilePicture\n * @weak\n */\nexport type ProfilePicture = { url: string, height: number, width: number };\n"))),(0,o.mdx)(s.default,{value:"Flow",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver\n */\nexport type ProfilePicture = { url: string, height: number, width: number };\n")))),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},'Generally weak types are used for creating a namespace for a set of fields that ultimately "belong" to a parent object.')))}v.isMDXComponent=!0}}]);