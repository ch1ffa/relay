"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[64013],{39058:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(80102),r=a(67294),n=a(86010),s=a(21147),i=a(87524),c=a(39960),m=a(95999);const o="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",b="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function E(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.default)(o,"thin-scrollbar"),"aria-label":(0,m.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.default)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,n.default)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:g},r.createElement(c.default,{isNavLink:!0,to:e.permalink,className:b,activeClassName:f},e.title))})))))}var p=a(13102);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return r.createElement(p.Zo,{component:v,props:e})}function k(e){var t=e.sidebar,a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(h,{sidebar:t}):r.createElement(E,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,l.Z)(e,N),m=t&&t.items.length>0;return r.createElement(s.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(k,{sidebar:t}),r.createElement("main",{className:(0,n.default)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},20472:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),r=a(86010),n=a(35155),s=a(10833),i=a(35281),c=a(39058),m=a(13008);const o="tag_Nnez";function u(e){var t=e.letterEntry;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return l.createElement("li",{key:e.permalink,className:o},l.createElement(m.Z,e))}))),l.createElement("hr",null))}function d(e){var t=e.tags,a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return l.createElement(u,{key:e.letter,letterEntry:e})})))}var g=a(90197);function b(e){var t=e.tags,a=e.sidebar,m=(0,n.M)();return l.createElement(s.FG,{className:(0,r.default)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},l.createElement(s.d,{title:m}),l.createElement(g.Z,{tag:"blog_tags_list"}),l.createElement(c.Z,{sidebar:a},l.createElement("h1",null,m),l.createElement(d,{tags:t})))}},13008:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),r=a(86010),n=a(39960);const s="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){var t=e.permalink,a=e.label,m=e.count;return l.createElement(n.default,{href:t,className:(0,r.default)(s,m?c:i)},a,m&&l.createElement("span",null,m))}},35155:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(95999),r=function(){return(0,l.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function n(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],l=t[0];return a.localeCompare(l)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);