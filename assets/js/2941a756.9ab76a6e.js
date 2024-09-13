"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1850],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,m=c["".concat(o,".").concat(p)]||c[p]||v[p]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"live-fields",title:"Live Fields",slug:"/guides/relay-resolvers/live-fields/",description:"Modeling data that changes over time in Relay Resolvers"},s=void 0,d={unversionedId:"guides/relay-resolvers/live-fields",id:"version-v17.0.0/guides/relay-resolvers/live-fields",title:"Live Fields",description:"Modeling data that changes over time in Relay Resolvers",source:"@site/versioned_docs/version-v17.0.0/guides/relay-resolvers/live-fields.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/live-fields/",permalink:"/docs/v17.0.0/guides/relay-resolvers/live-fields/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v17.0.0/guides/relay-resolvers/live-fields.md",tags:[],version:"v17.0.0",frontMatter:{id:"live-fields",title:"Live Fields",slug:"/guides/relay-resolvers/live-fields/",description:"Modeling data that changes over time in Relay Resolvers"},sidebar:"docs",previous:{title:"Derived Fields",permalink:"/docs/v17.0.0/guides/relay-resolvers/derived-fields/"},next:{title:"Suspense",permalink:"/docs/v17.0.0/guides/relay-resolvers/suspense/"}},c={},u=[{value:"@live",id:"live",level:2},{value:"The LiveState Type",id:"the-livestate-type",level:2},{value:"Creating a LiveState Object",id:"creating-a-livestate-object",level:2},{value:"Batching",id:"batching",level:2}],p={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"One critical difference between client state and server state is that as client state changes over time, those changes will need to be reflected in your UI. To address this, Relay Resolvers support the ability to be marked as ",(0,i.mdx)("inlineCode",{parentName:"p"},"@live"),". Live resolvers are expected to return a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LiveState")," shaped object which includes methods which allow Relay to both ",(0,i.mdx)("inlineCode",{parentName:"p"},"read()")," the current value and also to ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()")," to changes to the value."),(0,i.mdx)("p",null,"As this value changes over time, Relay will automatically recompute any ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v17.0.0/guides/relay-resolvers/derived-fields/"},"derived fields")," that depend on this field (including transitive dependencies if the changes cascade), and also efficiently trigger the update of any components/subscribers which have read fields that updated as a result of this change."),(0,i.mdx)("h2",{id:"live"},"@live"),(0,i.mdx)("p",null,"To mark a resolver as live, add the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@live")," docblock tag to the resolver definition. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import type { LiveState } from 'relay-runtime';\n\n/**\n * @RelayResolver Query.counter: Int\n * @live\n */\nexport function counter(): LiveState<number> {\n  return {\n    read: () => store.getState().counter,\n    subscribe: (callback) => {\n      return store.subscribe(callback);\n    },\n  };\n\n}\n")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Both field resolvers and strong model resolvers, which map an ID to a model, may be annotated as ",(0,i.mdx)("inlineCode",{parentName:"p"},"@live"),".")),(0,i.mdx)("h2",{id:"the-livestate-type"},"The LiveState Type"),(0,i.mdx)("p",null,"The return type of a Live Resolver is known as a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LiveState"),". It is conceptually similar to an observable or a signal, if you are familiar with those concepts. Unlike an observable, when a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LiveState")," notifies its subscriber of an update, it does not include the new value. Instead, the subscriber (Relay) is expected to call ",(0,i.mdx)("inlineCode",{parentName:"p"},"read()")," to get the new value."),(0,i.mdx)("p",null,"While over-notification (subscription notifications when the read value has not actually changed) is supported, for performance reasons, it is recommended that the provider of the LiveState value confirms that the value has indeed change before notifying Relay of the change."),(0,i.mdx)("p",null,"The type of a LiveState is defined as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"export type LiveState<T> = {\n  /**\n   * Returns the current value of the live state.\n   */\n  read(): T,\n  /**\n   * Subscribes to changes in the live state. The state provider should\n   * call the callback when the value of the live state changes.\n   */\n  subscribe(cb: () => void): () => void,\n};\n")),(0,i.mdx)("h2",{id:"creating-a-livestate-object"},"Creating a LiveState Object"),(0,i.mdx)("p",null,"In most cases, you will want to define a helper function that reads your reactive data store and returns a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LiveState")," object. For example, you for a Redux store you might write a wrapper that exposes a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LiveState")," for a given selector:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"type Selector<T> = (state: State) => T;\n\nfunction selectorAsLiveState<T>(selector: Selector<T>): LiveState<T> {\n  let currentValue = selector(store.getState());\n  return {\n    read: () => currentValue,\n    subscribe: (cb) => {\n      return store.subscribe(() => {\n        const newValue = selector(store.getState());\n        if (newValue === currentValue) {\n          return;\n        }\n        currentValue = newValue;\n        cb();\n      });\n      return unsubscribe;\n    },\n  };\n}\n")),(0,i.mdx)("p",null,"A Live Resolver that uses this helper might look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver Query.counter: Int\n * @live\n */\nexport function counter(): LiveState<number> {\n  return selectorAsLiveState(getCounter);\n}\n\nfunction getCounter(state) {\n  return state.counter;\n}\n")),(0,i.mdx)("h2",{id:"batching"},"Batching"),(0,i.mdx)("p",null,"When state changes in your data layer, it's possible that one change could result in notifying many ",(0,i.mdx)("inlineCode",{parentName:"p"},"@live")," resolver subscriptions about updates. By default each of these updates will require Relay to do work to determine which components need to be updated. This can lead to significant duplicate work being performed."),(0,i.mdx)("p",null,"When possible, it is recommended that you batch updates to ",(0,i.mdx)("inlineCode",{parentName:"p"},"@live")," resolvers. This can be done by wrapping your state updates in a ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchLiveStateUpdates()")," call on your ",(0,i.mdx)("inlineCode",{parentName:"p"},"RelayStore")," instance."),(0,i.mdx)("p",null,"A typical use with a Redux store might look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts"},"const store = createStore(reducer);\nconst originalDispatch = store.dispatch;\n\nfunction wrapped(action) {\n  relayStore.batchLiveStateUpdates(() => {\n    originalDispatch(action);\n  })\n}\n\nstore.dispatch = wrapped;\n")))}v.isMDXComponent=!0}}]);