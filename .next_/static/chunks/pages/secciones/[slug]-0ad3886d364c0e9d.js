(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[542],{3667:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/secciones/[slug]",function(){return s(7208)}])},3833:function(e,t,s){"use strict";var i=s(5893),n=s(7294);t.Z=function(e){let{cuerpo:t}=e,[s,r]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=t.split(/\s+/).length;r(Math.ceil(e/200))},[t]),(0,i.jsxs)("div",{className:"border-t border-dark-green pt-2 text-lg text-gray-800",children:[(0,i.jsx)("i",{className:"inline w-3 h-3",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 35 35",fill:"none",className:"inline",children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_35_273)",children:[(0,i.jsx)("path",{opacity:"0.3",d:"M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z",fill:"#00695C"}),(0,i.jsx)("path",{opacity:"0.3",d:"M10.918 8.02214L16.7513 13.8555L22.5846 8.02214V2.91797H10.918V8.02214Z",fill:"#00695C"}),(0,i.jsx)("path",{d:"M25.5 0H8V8.75L13.8333 14.5833L8.01458 20.4312L8 29.1667H25.5L25.4854 20.4312L19.6667 14.5833L25.5 8.76458V0ZM22.5833 21.1458V26.25H10.9167V21.1458L16.75 15.3125L22.5833 21.1458ZM22.5833 8.02083L16.75 13.8542L10.9167 8.02083V2.91667H22.5833V8.02083Z",fill:"#00695C"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_35_273",children:(0,i.jsx)("rect",{width:"35",height:"35",fill:"white"})})})]})}),s," min de lectura"]})}},1618:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var i=s(5893),n=s(5675),r=s.n(n),l=s(1664),a=s.n(l),c=s(3833);function d(e){let{titulo:t,slug:s,categoria:n,descripcionCorta:l,cuerpo:d,imagenDestacada:o,backendUrl:h}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("article",{className:"col-span-full bg-white rounded-lg p-12 flex drop-shadow-md",children:[(0,i.jsx)("div",{className:"flex basis-1/2",children:(0,i.jsxs)("div",{className:"flex flex-col justify-between me-3",children:[(0,i.jsxs)("div",{children:[void 0!==n&&(0,i.jsx)(a(),{href:"secciones/"+n.slug,children:(0,i.jsx)("h3",{className:"uppercase text-light-green font-medium mb-2 font-work",children:n.Titulo})}),(0,i.jsx)(a(),{href:"notas/"+s,children:(0,i.jsx)("h2",{className:"font-oldStandard text-4xl mb-3",children:t})}),(0,i.jsx)("div",{className:"my-3 text-lg",children:(0,i.jsx)(a(),{href:"notas/"+s,children:l})})]}),(0,i.jsx)(c.Z,{cuerpo:d})]})}),(0,i.jsx)("div",{className:"basis-1/2",children:(0,i.jsx)(a(),{href:"notas/"+s,children:(0,i.jsx)(r(),{src:h+o,alt:t,width:700,height:500,priority:!0})})})]})})}s(3454).env.STRAPIBASEURL},7208:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return l},default:function(){return a}});var i=s(5893);s(9008),s(5675),s(1664);var n=s(8016),r=s(1618),l=!0;function a(e){let{titulo:t,notas:s,backendUrl:l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(n.Z,{children:[(0,i.jsx)("h2",{className:"text-4xl font-medium mb-4",children:t}),(0,i.jsx)("section",{id:"home-notas",className:"grid gap-8 font-martel",children:s.map((e,t)=>(0,i.jsx)(r.Z,{nota:e,titulo:e.attributes.Titulo,slug:e.attributes.slug,categoria:e.attributes.categoria_nota,descripcionCorta:e.attributes.DescripcionCorta,cuerpo:e.attributes.Cuerpo,imagenDestacada:e.attributes.ImagenDestacada.data.attributes.url,backendUrl:l},t))})]})})}}},function(e){e.O(0,[103,16,774,888,179],function(){return e(e.s=3667)}),_N_E=e.O()}]);