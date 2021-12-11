(self.webpackChunk=self.webpackChunk||[]).push([[52458],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94205:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"migration-setup",title:"Migration Setup",original_id:"migration-setup"},p=void 0,s={unversionedId:"migration-setup",id:"version-v1.6.0/migration-setup",isDocsHomePage:!1,title:"Migration Setup",description:"Installation",source:"@site/versioned_docs/version-v1.6.0/Modern-MigrationSetup.md",sourceDirName:".",slug:"/migration-setup",permalink:"/docs/v1.6.0/migration-setup",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.0/Modern-MigrationSetup.md",version:"v1.6.0",lastUpdatedBy:"CodemodService FBSourceRustfmtLinterBot",lastUpdatedAt:1639235057,formattedLastUpdatedAt:"12/11/2021",frontMatter:{id:"migration-setup",title:"Migration Setup",original_id:"migration-setup"},sidebar:"version-v1.6.0/docs",previous:{title:"Compatibility Mode",permalink:"/docs/v1.6.0/relay-compat"},next:{title:"Conversion Playbook",permalink:"/docs/v1.6.0/conversion-playbook"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Set up babel-plugin-relay for Relay Classic",id:"set-up-babel-plugin-relay-for-relay-classic",children:[]},{value:"Set up babel-plugin-relay for &quot;compatibility mode&quot;",id:"set-up-babel-plugin-relay-for-compatibility-mode",children:[]},{value:"Additional Options",id:"additional-options",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Follow the installation instructions from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1.6.0/installation-and-setup"},"Installation and Setup")," guide."),(0,i.kt)("h2",{id:"set-up-babel-plugin-relay-for-relay-classic"},"Set up babel-plugin-relay for Relay Classic"),(0,i.kt)("p",null,"With some additional configuration, the ",(0,i.kt)("inlineCode",{parentName:"p"},'"relay"')," babel plugin can also translate\nRelay Classic ",(0,i.kt)("inlineCode",{parentName:"p"},"Relay.QL")," literals. Most importantly, include a reference to your GraphQL Schema as either a json file or graphql schema file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {"schema": "path/schema.graphql"}]\n  ]\n}\n')),(0,i.kt)("h2",{id:"set-up-babel-plugin-relay-for-compatibility-mode"},'Set up babel-plugin-relay for "',(0,i.kt)("a",{parentName:"h2",href:"/docs/v1.6.0/relay-compat"},"compatibility mode"),'"'),(0,i.kt)("p",null,"When incrementally converting a Relay Classic app to Relay Modern, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql"),"\nliterals can be translated to be usable by ",(0,i.kt)("em",{parentName:"p"},"both")," runtimes if configured to use\ncompatibility mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {"compat": true, "schema": "path/schema.graphql"}]\n  ]\n}\n')),(0,i.kt)("h2",{id:"additional-options"},"Additional Options"),(0,i.kt)("p",null,"The Relay Classic and Relay Compat modes produce generated content inline and may\ncatch and log any detected GraphQL validation errors, leaving those errors to be\nthrown at runtime."),(0,i.kt)("p",null,"When compiling code for production deployment, the plugin can be configured to immediately throw upon encountering a validation problem. The plugin can be further customized for different environments with the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {\n      "compat": true,\n      "schema": "path/schema.graphql",\n    }]\n  ]\n}\n')))}d.isMDXComponent=!0}}]);