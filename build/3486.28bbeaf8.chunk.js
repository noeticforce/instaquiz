(self.webpackChunkserver=self.webpackChunkserver||[]).push([[3486],{7654:(y,f,n)=>{var t=n(81763);function h(s){return t(s)&&s!=+s}y.exports=h},81763:(y,f,n)=>{var t=n(44239),h=n(37005),s="[object Number]";function _(E){return typeof E=="number"||h(E)&&t(E)==s}y.exports=_},7334:(y,f,n)=>{var t=n(79833);function h(s){return t(s).toLowerCase()}y.exports=h},20573:(y,f,n)=>{"use strict";n.d(f,{P1:()=>M});var t="NOT_FOUND";function h(l){var a;return{get:function(r){return a&&l(a.key,r)?a.value:t},put:function(r,o){a={key:r,value:o}},getEntries:function(){return a?[a]:[]},clear:function(){a=void 0}}}function s(l,a){var e=[];function r(u){var p=e.findIndex(function(m){return a(u,m.key)});if(p>-1){var v=e[p];return p>0&&(e.splice(p,1),e.unshift(v)),v.value}return t}function o(u,p){r(u)===t&&(e.unshift({key:u,value:p}),e.length>l&&e.pop())}function i(){return e}function d(){e=[]}return{get:r,put:o,getEntries:i,clear:d}}var _=function(a,e){return a===e};function E(l){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var o=e.length,i=0;i<o;i++)if(!l(e[i],r[i]))return!1;return!0}}function b(l,a){var e=typeof a=="object"?a:{equalityCheck:a},r=e.equalityCheck,o=r===void 0?_:r,i=e.maxSize,d=i===void 0?1:i,u=e.resultEqualityCheck,p=E(o),v=d===1?h(p):s(d,p);function m(){var c=v.get(arguments);if(c===t){if(c=l.apply(null,arguments),u){var g=v.getEntries(),x=g.find(function(O){return u(O.value,c)});x&&(c=x.value)}v.put(arguments,c)}return c}return m.clearCache=function(){return v.clear()},m}function P(l){var a=Array.isArray(l[0])?l[0]:l;if(!a.every(function(r){return typeof r=="function"})){var e=a.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return a}function j(l){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var o=function(){for(var d=arguments.length,u=new Array(d),p=0;p<d;p++)u[p]=arguments[p];var v=0,m,c={memoizeOptions:void 0},g=u.pop();if(typeof g=="object"&&(c=g,g=u.pop()),typeof g!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof g+"]");var x=c,O=x.memoizeOptions,C=O===void 0?e:O,Z=Array.isArray(C)?C:[C],D=P(u),R=l.apply(void 0,[function(){return v++,g.apply(null,arguments)}].concat(Z)),A=l(function(){for(var B=[],S=D.length,T=0;T<S;T++)B.push(D[T].apply(null,arguments));return m=R.apply(null,B),m});return Object.assign(A,{resultFunc:g,memoizedResultFunc:R,dependencies:D,lastResult:function(){return m},recomputations:function(){return v},resetRecomputations:function(){return v=0}}),A};return o}var M=j(b),w=function(a,e){if(e===void 0&&(e=M),typeof a!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof a));var r=Object.keys(a),o=e(r.map(function(i){return a[i]}),function(){for(var i=arguments.length,d=new Array(i),u=0;u<i;u++)d[u]=arguments[u];return d.reduce(function(p,v,m){return p[r[m]]=v,p},{})});return o}},48734:(y,f,n)=>{"use strict";n.d(f,{U:()=>a,y:()=>w});var t=n(85893),h=n(67294),s=n(88972),_=n(13819),E=n(2504),b=n(75515),P=n(11047),j=n(41580);const M=({theme:e,expanded:r,variant:o,disabled:i,error:d})=>d?`1px solid ${e.colors.danger600} !important`:i?`1px solid ${e.colors.neutral150}`:r?`1px solid ${e.colors.primary600}`:o==="primary"?`1px solid ${e.colors.neutral0}`:`1px solid ${e.colors.neutral100}`,w=(0,s.ZP)(b.Z)``,l=(0,s.ZP)(j.x)`
  border: ${M};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    ${w} {
      color: ${({theme:e,expanded:r})=>r?void 0:e.colors.primary700};
    }

    ${b.Z} {
      color: ${({theme:e,expanded:r})=>r?void 0:e.colors.primary600};
    }

    & > ${P.k} {
      background: ${({theme:e})=>e.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:e})=>e.colors.primary200};
    }
  }
`,a=({children:e,disabled:r=!1,error:o,expanded:i=!1,hasErrorMessage:d=!0,id:u,onToggle:p,toggle:v,size:m="M",variant:c="primary",shadow:g})=>{const x=(0,E.M)(u),O=h.useMemo(()=>({expanded:i,onToggle:p,toggle:v,id:x,size:m,variant:c,disabled:r}),[r,i,x,p,m,v,c]);return(0,t.jsxs)(_.S.Provider,{value:O,children:[(0,t.jsx)(l,{"data-strapi-expanded":i,disabled:r,"aria-disabled":r,expanded:i,hasRadius:!0,variant:c,error:o,shadow:g,children:e}),o&&d&&(0,t.jsx)(j.x,{paddingTop:1,children:(0,t.jsx)(b.Z,{variant:"pi",textColor:"danger600",children:o})})]})}},63081:(y,f,n)=>{"use strict";n.d(f,{v:()=>_});var t=n(85893),h=n(13819),s=n(41580);const _=({children:E,...b})=>{const{expanded:P,id:j}=(0,h.A)();if(!P)return null;const M=`accordion-content-${j}`,w=`accordion-label-${j}`,l=`accordion-desc-${j}`;return(0,t.jsx)(s.x,{role:"region",id:M,"aria-labelledby":w,"aria-describedby":l,...b,children:E})}},13819:(y,f,n)=>{"use strict";n.d(f,{A:()=>s,S:()=>h});var t=n(67294);const h=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),s=()=>(0,t.useContext)(h)},74756:(y,f,n)=>{"use strict";n.d(f,{B:()=>e});var t=n(85893),h=n(12645),s=n(88972),_=n(48734),E=n(13819);const b=({expanded:r,disabled:o,variant:i})=>{let d="neutral100";return r?d="primary100":o?d="neutral150":i==="primary"&&(d="neutral0"),d};var P=n(39785),j=n(52624),M=n(11047),w=n(75515);const l=(0,s.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:r,expanded:o})=>o?r.colors.primary600:r.colors.neutral500};
    }
  }
`,a=(0,s.ZP)(M.k)`
  min-height: ${({theme:r,size:o})=>r.sizes.accordions[o]};
  border-radius: ${({theme:r,expanded:o})=>o?`${r.borderRadius} ${r.borderRadius} 0 0`:r.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }
`,e=({title:r,description:o,as:i="span",togglePosition:d="right",action:u,...p})=>{const{onToggle:v,toggle:m,expanded:c,id:g,size:x,variant:O,disabled:C}=(0,E.A)(),Z=`accordion-content-${g}`,D=`accordion-label-${g}`,R=`accordion-desc-${g}`,A=x==="M"?6:4,$=x==="M"?A:A-2,B=b({expanded:c,disabled:C,variant:O}),S={as:i,fontWeight:x==="S"?"bold":void 0,id:D,textColor:c?"primary600":"neutral700",ellipsis:!0,variant:x==="M"?"delta":void 0},T=c?"primary600":"neutral600",W=c?"primary200":"neutral200",L=x==="M"?`${32/16}rem`:`${24/16}rem`,I=()=>{C||(m&&!v?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),m()):v&&v())},U=(0,t.jsx)(M.k,{justifyContent:"center",borderRadius:"50%",height:L,width:L,transform:c?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:W,cursor:C?"not-allowed":"pointer",onClick:I,shrink:0,children:(0,t.jsx)(j.J,{as:h.Z,width:x==="M"?`${11/16}rem`:`${8/16}rem`,color:c?"primary600":"neutral600"})});return(0,t.jsx)(a,{paddingBottom:$,paddingLeft:A,paddingRight:A,paddingTop:$,background:B,expanded:c,size:x,justifyContent:"space-between",cursor:C?"not-allowed":"",children:(0,t.jsxs)(M.k,{gap:3,flex:1,maxWidth:"100%",children:[d==="left"&&U,(0,t.jsx)(l,{onClick:I,"aria-disabled":C,"aria-expanded":c,"aria-controls":Z,"aria-labelledby":D,"data-strapi-accordion-toggle":!0,expanded:c,type:"button",flex:1,minWidth:0,...p,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.y,{...S,children:r}),o&&(0,t.jsx)(w.Z,{as:"p",id:R,textColor:T,children:o})]})}),d==="right"&&(0,t.jsxs)(M.k,{gap:3,children:[U,u]}),d==="left"&&u]})})}},12814:(y,f,n)=>{"use strict";n.d(f,{Z:()=>s});var t=n(85893);const h=_=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",..._,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),s=h},99782:(y,f,n)=>{"use strict";n.d(f,{Z:()=>s});var t=n(85893);const h=_=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",..._,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),s=h}}]);
