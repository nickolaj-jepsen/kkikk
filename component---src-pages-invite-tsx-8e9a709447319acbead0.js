"use strict";(self.webpackChunkmedusa_admin=self.webpackChunkmedusa_admin||[]).push([[42],{68631:function(e,t,r){r.d(t,{TD:function(){return a}});r(67294);function a(e){try{if(3!==e.split(".").length||"string"!=typeof e)return null;var t=e.split(".")[1],r="=".repeat((4-t.length%4)%4),a=t.replace("-","+").replace("_","/")+r;return JSON.parse(atob(a))}catch(n){return null}}},46537:function(e,t,r){var a=r(63366),n=r(85505),s=r(67294),l=r(74134),o=r(29603),i=r(85950),c=["placeholder","name","key","required","onChange","onFocus","className","type"],m=s.forwardRef((function(e,t){var r=e.placeholder,m=e.name,u=e.key,d=(e.required,e.onChange),p=e.onFocus,g=e.className,f=e.type,h=(0,a.Z)(e,c),w=(0,s.useRef)(null),v=(0,s.useState)(!1),y=v[0],x=v[1],E=(0,s.useState)(f),b=E[0],k=E[1];return(0,s.useEffect)((function(){"password"===f&&y&&k("text"),"password"!==f||y||k("password")}),[f,y]),(0,s.useImperativeHandle)(t,(function(){return w.current})),s.createElement("div",{className:(0,n.Z)("w-[320px] h-[48px] mb-xsmall last:mb-0 border rounded-rounded overflow-hidden","bg-grey-5 inter-base-regular placeholder:text-grey-40","focus-within:shadow-input focus-within:border-violet-60","flex items-center",{"pointer-events-none focus-within:shadow-none focus-within:border-none text-grey-40":h.readOnly},g)},h.readOnly&&s.createElement(i.Z,{size:16,className:"text-grey-40 ml-base"}),s.createElement("input",Object.assign({className:(0,n.Z)("outline-none outline-0 remove-number-spinner leading-base bg-transparent w-full py-3 px-4",{"pl-xsmall":h.readOnly}),ref:w,name:m,key:u||m,placeholder:r||"Placeholder",onChange:d,onFocus:p,type:b},h)),"password"===f&&s.createElement("button",{type:"button",onClick:function(){return x(!y)},className:"text-grey-40 px-4 focus:outline-none focus:text-violet-60"},y?s.createElement(l.Z,null):s.createElement(o.Z,null)))}));t.Z=m},52208:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children;return a.createElement("div",{className:"min-h-screen flex flex-col"},a.createElement("div",{className:"grid grid-cols-1 grid-rows-1 min-h-screen"},a.createElement("div",{className:"flex flex-col items-center",style:{background:"linear-gradient(73.29deg, #7C53FF 0%, #F796FF 100%)"}},t,a.createElement("div",{className:"text-grey-0 inter-base-regular pb-12"},"© Medusa Commerce ",a.createElement("span",null,"·")," ",a.createElement("a",{style:{color:"inherit",textDecoration:"none"},href:"mailto:hello@medusajs.com"},"Contact")))))}},96506:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var a=function(e){var t={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(e&&(e.target&&(t.target=e.target),e.max&&(t.max=e.max),e.size&&(t.size=e.size),void 0!==e.animate&&null!==e.animate&&(t.animate=e.animate),void 0!==e.respawn&&null!==e.respawn&&(t.respawn=e.respawn),e.props&&(t.props=e.props),e.colors&&(t.colors=e.colors),e.clock&&(t.clock=e.clock),void 0!==e.start_from_edge&&null!==e.start_from_edge&&(t.start_from_edge=e.start_from_edge),e.width&&(t.width=e.width),e.height&&(t.height=e.height),void 0!==e.rotate&&null!==e.rotate&&(t.rotate=e.rotate)),"object"!=typeof t.target&&"string"!=typeof t.target)throw new TypeError("The target parameter should be a node or string");if("object"==typeof t.target&&(null===t.target||!t.target instanceof HTMLCanvasElement)||"string"==typeof t.target&&(null===document.getElementById(t.target)||!document.getElementById(t.target)instanceof HTMLCanvasElement))throw new ReferenceError("The target element does not exist or is not a canvas element");var r="object"==typeof t.target?t.target:document.getElementById(t.target),a=r.getContext("2d"),n=[];function s(e,t){e||(e=1);var r=Math.random()*e;return t?Math.floor(r):r}var l=t.props.reduce((function(e,t){return e+(t.weight||1)}),0);function o(){var e=t.props[function(){for(var e=Math.random()*l,r=0;r<t.props.length;++r){var a=t.props[r].weight||1;if(e<a)return r;e-=a}}()];return{prop:e.type?e.type:e,x:s(t.width),y:t.start_from_edge?t.clock>=0?-10:parseFloat(t.height)+10:s(t.height),src:e.src,radius:s(4)+1,size:e.size,rotate:t.rotate,line:Math.floor(s(65)-30),angles:[s(10,!0)+2,s(10,!0)+2,s(10,!0)+2,s(10,!0)+2],color:t.colors[s(t.colors.length,!0)],rotation:s(360,!0)*Math.PI/180,speed:s(t.clock/7)+t.clock/30}}function i(e){if(e){var r=e.radius<=3?.4:.8;switch(a.fillStyle=a.strokeStyle="rgba("+e.color+", "+r+")",a.beginPath(),e.prop){case"circle":a.moveTo(e.x,e.y),a.arc(e.x,e.y,e.radius*t.size,0,2*Math.PI,!0),a.fill();break;case"triangle":a.moveTo(e.x,e.y),a.lineTo(e.x+e.angles[0]*t.size,e.y+e.angles[1]*t.size),a.lineTo(e.x+e.angles[2]*t.size,e.y+e.angles[3]*t.size),a.closePath(),a.fill();break;case"line":a.moveTo(e.x,e.y),a.lineTo(e.x+e.line*t.size,e.y+5*e.radius),a.lineWidth=2*t.size,a.stroke();break;case"square":a.save(),a.translate(e.x+15,e.y+5),a.rotate(e.rotation),a.fillRect(-15*t.size,-5*t.size,15*t.size,5*t.size),a.restore();break;case"svg":a.save();var n=new window.Image;n.src=e.src;var s=e.size||15;a.translate(e.x+s/2,e.y+s/2),e.rotate&&a.rotate(e.rotation),a.drawImage(n,-s/2*t.size,-s/2*t.size,s*t.size,s*t.size),a.restore()}}}var c=function(){t.animate=!1,clearInterval(t.interval),requestAnimationFrame((function(){a.clearRect(0,0,r.width,r.height);var e=r.width;r.width=1,r.width=e}))};return{render:function(){r.width=t.width,r.height=t.height,n=[];for(var e=0;e<t.max;e++)n.push(o());return requestAnimationFrame((function e(){for(var r in a.clearRect(0,0,t.width,t.height),n)i(n[r]);!function(){for(var e=0;e<t.max;e++){var r=n[e];r&&(t.animate&&(r.y+=r.speed),r.rotate&&(r.rotation+=r.speed/35),(r.speed>=0&&r.y>t.height||r.speed<0&&r.y<0)&&(t.respawn?(n[e]=r,n[e].x=s(t.width,!0),n[e].y=r.speed>=0?-10:parseFloat(t.height)):n[e]=void 0))}n.every((function(e){return void 0===e}))&&c()}(),t.animate&&requestAnimationFrame(e)}))},clear:c}},n=r(1597),s=r(32327),l=r(51419),o=r.n(l),i=r(67294),c=r(13881),m=r(68631),u=r(27381),d=r(63366),p=["size","color"],g=function(e){var t=e.size,r=void 0===t?"24":t,a=e.color,n=void 0===a?"currentColor":a,s=(0,d.Z)(e,p),l=2*+r;return i.createElement("svg",Object.assign({width:l,height:r,viewBox:"0 0 40 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s),i.createElement("path",{d:"M4 9H36",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M31 5L36 9L31 13",stroke:n,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},f=r(71953),h=["size","color"],w=function(e){var t=e.size,r=void 0===t?"96":t,a=(e.color,(0,d.Z)(e,h));return i.createElement("svg",Object.assign({width:r,height:r,viewBox:"0 0 96 96",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),i.createElement("path",{d:"M75.6103 20.9859L57.5892 10.5638C51.6929 7.14539 44.4678 7.14539 38.5715 10.5638L20.4673 20.9859C14.6541 24.4044 11 30.741 11 37.4945V58.4221C11 65.259 14.6541 71.5122 20.4673 74.9307L38.4884 85.4362C44.3848 88.8546 51.6098 88.8546 57.5061 85.4362L75.5273 74.9307C81.4236 71.5122 84.9946 65.259 84.9946 58.4221V37.4945C85.1607 30.741 81.5066 24.4044 75.6103 20.9859ZM48.0388 66.593C37.8241 66.593 29.5194 58.2553 29.5194 48C29.5194 37.7447 37.8241 29.407 48.0388 29.407C58.2535 29.407 66.6413 37.7447 66.6413 48C66.6413 58.2553 58.3366 66.593 48.0388 66.593Z",fill:"url(#paint0_linear_2823_15237)"}),i.createElement("defs",null,i.createElement("linearGradient",{id:"paint0_linear_2823_15237",x1:"11",y1:"88",x2:"100.328",y2:"63.1913",gradientUnits:"userSpaceOnUse"},i.createElement("stop",{stopColor:"#7C53FF"}),i.createElement("stop",{offset:"1",stopColor:"#F796FF"}))))},v=r(46537),y=r(54374),x=r(52208),E=r(79076),b=r(65865),k=function(e){var t=e.location,r=o().parse(t.search.substring(1)),l=(0,i.useState)(!1),d=l[0],p=l[1],h=null;if(null!=r&&r.token)try{h=(0,m.TD)(r.token)}catch(q){h=null}var k=(0,i.useState)(!1),_=k[0],C=k[1],z=(0,i.useState)(!1),N=z[0],F=z[1];(0,i.useEffect)((function(){var e=new a({target:"confetti-canvas",start_from_edge:!0,size:3,clock:25,colors:[[251,146,60],[167,139,250],[251,146,60],[96,165,250],[45,212,191],[250,204,21],[232,121,249]],max:26});return e.render(),function(){return e.clear()}}),[]);var Z=(0,c.cI)({defaultValues:{first_name:"",last_name:"",password:"",repeat_password:""}}),S=Z.register,j=Z.handleSubmit,L=Z.formState,M=(0,s.I8A)(),T=(0,E.Z)();return(0,i.useEffect)((function(){L.dirtyFields.password&&L.dirtyFields.repeat_password&&L.dirtyFields.first_name&&L.dirtyFields.last_name?F(!0):F(!1)}),[L]),i.createElement(i.Fragment,null,d?i.createElement(x.Z,null,i.createElement(y.Z,{title:"Create Account"}),i.createElement("div",{className:"flex h-full w-full items-center justify-center"},i.createElement("div",{className:"flex min-h-[600px] bg-grey-0 rounded-rounded justify-center"},i.createElement("form",{className:"flex flex-col py-12 w-full px-[120px] items-center",onSubmit:j((function(e){C(!1),e.password===e.repeat_password?M.mutate({token:r.token,user:{first_name:e.first_name,last_name:e.last_name,password:e.password}},{onSuccess:function(){(0,n.navigate)("/login")},onError:function(e){T("Error",(0,b.e)(e),"error")}}):C(!0)}))},i.createElement(f.Z,null),h?i.createElement(i.Fragment,null,i.createElement("span",{className:"inter-2xlarge-semibold mt-4 text-grey-90"},"Welcome to the team!"),i.createElement("span",{className:"inter-base-regular text-grey-50 mt-2 mb-large"},"Create your account below👇🏼"),i.createElement(v.Z,{placeholder:"First name",name:"first_name",ref:S({required:!0}),autoComplete:"given-name"}),i.createElement(v.Z,{placeholder:"Last name",name:"last_name",ref:S({required:!0}),autoComplete:"family-name"}),i.createElement(v.Z,{placeholder:"Password",type:"password",name:"password",ref:S({required:!0}),autoComplete:"new-password"}),i.createElement(v.Z,{placeholder:"Repeat password",type:"password",name:"repeat_password",ref:S({required:!0}),autoComplete:"new-password"}),_&&i.createElement("span",{className:"text-rose-50 w-full mt-2 inter-small-regular"},"The two passwords are not the same"),i.createElement(u.Z,{variant:"primary",size:"large",type:"submit",className:"w-full mt-base",loading:L.isSubmitting,disabled:!N},"Create account"),i.createElement(n.Link,{to:"/login",className:"inter-small-regular text-grey-50 mt-large"},"Already signed up? Log in")):i.createElement("div",{className:"h-full flex flex-col gap-y-2 text-center items-center justify-center"},i.createElement("span",{className:"inter-large-semibold text-grey-90"},"You signup link is invalid"),i.createElement("span",{className:"inter-base-regular mt-2 text-grey-50"},"Contact your administrator to obtain a valid signup link")))))):i.createElement("div",{className:"bg-grey-90 h-screen w-full overflow-hidden"},i.createElement("div",{className:"z-10 flex-grow flex flex-col items-center justify-center h-full absolute inset-0 max-w-[1080px] mx-auto"},i.createElement(w,{className:"mb-3xlarge"}),i.createElement("div",{className:"flex flex-col items-center max-w-3xl text-center"},i.createElement("h1",{className:"inter-3xlarge-semibold text-grey-0 mb-base"},"You have been invited to join the team"),i.createElement("p",{className:"inter-xlarge-regular text-grey-50"},"You can now join the Medusa Store team. Sign up below and get started with your Medusa Admin account right away.")),i.createElement("div",{className:"mt-4xlarge"},i.createElement(u.Z,{size:"large",variant:"primary",className:"w-[280px]",onClick:function(){return p(!0)}},"Sign up",i.createElement(g,{size:20,className:"pt-1"})))),i.createElement("canvas",{id:"confetti-canvas"})))}}}]);
//# sourceMappingURL=component---src-pages-invite-tsx-8e9a709447319acbead0.js.map