var I=Object.defineProperty;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&m(e,n,t[n]);if(h)for(var n of h(t))w.call(t,n)&&m(e,n,t[n]);return e};import{c as O,i as S,j as f,s as l,a as b,u as y,r as v,b as T,R as G,d as N}from"./vendor.fafcaa83.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};L();const A=(e,t)=>({dockStyle:{iconsGap:10},setIconsGap:n=>{e(i=>{i.dockStyle.iconsGap=n})}}),d={INFORMATION:"Information",OPTIONS:"Options"},C=(e,t)=>({selectedTab:d.INFORMATION,setSelectedTab:n=>{e(()=>({selectedTab:n}))}}),M=(e,t)=>({githubInfo:{},setGithubInfo:n=>{e(()=>({githubInfo:n}))}}),c=O(S((e,t)=>u(u(u({},A(e)),C(e)),M(e)))),r=f.exports.jsx,s=f.exports.jsxs,g=({onClick:e,imgUrl:t})=>r($,{onClick:e,children:r("img",{src:t})}),$=l.button`
  border-radius: 8px;
  border: none;
  margin: 0;
  padding: 5px;
  width: auto;
  overflow: visible;

  background: transparent;
  line-height: normal;
  color: inherit;
  font: inherit;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  cursor: pointer;

  min-width: 60px;
  min-height: 60px;

  &:hover {
    background-color: rgba(169, 183, 202, 0.3);
  }

  &:active {
    background-color: rgba(169, 183, 202, 0.3);
  }

  img {
    border-radius: 8px;
    width: 32px;
    height: 32px;

    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Konqueror HTML */
    -khtml-user-select: none;
    /* Old versions of Firefox */
    -moz-user-select: none;
    /* Internet Explorer/Edge */
    -ms-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
  }

  @media only screen and (max-width: 768px) {
    &:hover {
      background-color: transparent;
    }
  }
`,j=({selectedTab:e,setSelectedTab:t})=>{const n=c(o=>o.dockStyle),i=y({from:{opacity:0},to:{opacity:1},delay:100});return s(F,{style:i,$iconsGap:n.iconsGap,children:[r(g,{onClick:()=>t(d.INFORMATION),imgUrl:"/assets/png/github-icon.png"}),r(g,{onClick:()=>t(d.OPTIONS),imgUrl:"/assets/png/gear-option.png"})]})},F=l(b.div)`
  border-radius: 8px;
  background-color: rgba(38, 50, 66, 0.8);

  display: flex;
  justify-content: space-between;
  column-gap: ${e=>e.$iconsGap?e.$iconsGap:0}px;
`,H=l(b.div)`
  margin: 5px auto;
  padding: 15px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 1024px;
`,x=e=>{const{children:t}=e,n=y({from:{opacity:0},to:{opacity:1},delay:200});return r(H,{style:n,children:t})},R=l.h1`
  font-size: 1.7em;
  font-family: "Sora";
  font-weight: bold;
  margin-top: ${e=>e.mt?e.mt+"px":0}
`,D=l.h2`
  font-size: 1.5em;
  font-family: "Sora";
  font-weight: bold;
  margin-top: ${e=>e.mt?e.mt+"px":0}
`,E=l.h3`
  font-size: 1.3em;
  font-family: "Sora";
  font-weight: bold;
  margin-top: ${e=>e.mt?e.mt+"px":0}
`,z={H1:R,H2:D,H3:E},P=()=>{const e=c(t=>t.githubInfo);return r(x,{children:s("div",{children:[s(z.H1,{children:["Hi, I'm ",e.login]}),s("p",{children:["Curently, I'm working as a full-stack developer",r("br",{}),"My github page: ",r("a",{href:"https://github.com/Lentanta",target:"_blank",children:"https://github.com/Lentanta"}),r("br",{}),"LinkedIn: ",r("a",{href:"https://www.linkedin.com/in/thanh-t%C3%A2m-l%C3%AA-b95878193/",target:"_blank",children:"Thanh Tam"}),r("br",{}),"and Deviantart: ",r("a",{href:"https://www.deviantart.com/lentanta27",target:"_blank",children:"https://www.deviantart.com/lentanta27"}),r("br",{})]})]})})},B=()=>{const e=c(n=>n.dockStyle),t=c(n=>n.setIconsGap);return r(x,{children:s("form",{children:[s("label",{children:["Dock icons gap: ",e.iconsGap]}),r("br",{}),r("input",{type:"range",id:"volume",name:"volume",min:"0",max:"30",onChange:n=>t(parseInt(n.target.value)),value:e.iconsGap})]})})};function U(){const e=c(o=>o.setGithubInfo),t=c(o=>o.selectedTab),n=c(o=>o.setSelectedTab),i=async()=>{try{const{data:o}=await T.get("https://api.github.com/users/Lentanta");e(o),console.log("Fetch Github info successfully!")}catch(o){console.error(o)}};return v.exports.useEffect(()=>{i(),document.body.style.backgroundImage='url("/assets/png/catwall.jpg")'},[]),s("div",{className:"App",children:[r("div",{className:"dock-container",children:r(j,{selectedTab:t,setSelectedTab:n})}),s("div",{className:"desktop",children:[t===d.INFORMATION&&r(P,{}),t===d.OPTIONS&&r(B,{})]})]})}G.render(r(N.StrictMode,{children:r(U,{})}),document.getElementById("root"));
