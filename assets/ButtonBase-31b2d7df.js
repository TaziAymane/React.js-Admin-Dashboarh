import{r as i,h as A,_ as X,b as oe,j as $,F as ie,u as Ee}from"./index-92a18254.js";import{c as x,g as Te,s as se,a as ze,b as Ae}from"./Box-8c659a3d.js";function Xe(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Ye=typeof window<"u"?i.useLayoutEffect:i.useEffect,We=Ye;function H(e){const t=i.useRef(e);return We(()=>{t.current=e}),i.useCallback((...r)=>(0,t.current)(...r),[])}function de(...e){return i.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Xe(r,t)})},e)}let G=!0,te=!1,he;const He={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ge(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&He[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function qe(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Je(){this.visibilityState==="hidden"&&te&&(G=!0)}function Qe(e){e.addEventListener("keydown",qe,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Je,!0)}function Ze(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||Ge(t)}function et(){const e=i.useCallback(n=>{n!=null&&Qe(n.ownerDocument)},[]),t=i.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return Ze(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:r,ref:e}}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,n){return u.__proto__=n,u},ne(e,t)}function tt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ne(e,t)}const me=A.createContext(null);function nt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){var r=function(o){return t&&i.isValidElement(o)?t(o):o},u=Object.create(null);return e&&i.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=r(n)}),u}function rt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var o in e)o in t?n.length&&(u[o]=n,n=[]):n.push(o);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=r(p)}c[l]=r(l)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function ot(e,t){return ae(e.children,function(r){return i.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function it(e,t,r){var u=ae(e.children),n=rt(t,u);return Object.keys(n).forEach(function(o){var s=n[o];if(i.isValidElement(s)){var c=o in t,l=o in u,p=t[o],d=i.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[o]=i.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:S(s,"exit",e),enter:S(s,"enter",e)}):!l&&c&&!d?n[o]=i.cloneElement(s,{in:!1}):l&&c&&i.isValidElement(p)&&(n[o]=i.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:S(s,"exit",e),enter:S(s,"enter",e)}))}}),n}var st=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},at={component:"div",childFactory:function(t){return t}},ue=function(e){tt(t,e);function t(u,n){var o;o=e.call(this,u,n)||this;var s=o.handleExited.bind(nt(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var s=o.children,c=o.handleExited,l=o.firstRender;return{children:l?ot(n,c):it(n,s,c),firstRender:!1}},r.handleExited=function(n,o){var s=ae(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[n.key],{children:l}}))},r.render=function(){var n=this.props,o=n.component,s=n.childFactory,c=oe(n,["component","childFactory"]),l=this.state.contextValue,p=st(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,o===null?A.createElement(me.Provider,{value:l},p):A.createElement(me.Provider,{value:l},A.createElement(o,c,p))},t}(A.Component);ue.propTypes={};ue.defaultProps=at;const ut=ue;function lt(e){const{className:t,classes:r,pulsate:u=!1,rippleX:n,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=i.useState(!1),b=x(t,r.ripple,r.rippleVisible,u&&r.ripplePulsate),V={width:s,height:s,top:-(s/2)+o,left:-(s/2)+n},h=x(r.child,d&&r.childLeaving,u&&r.childPulsate);return!c&&!d&&g(!0),i.useEffect(()=>{if(!c&&l!=null){const y=setTimeout(l,p);return()=>{clearTimeout(y)}}},[l,c,p]),$.jsx("span",{className:b,style:V,children:$.jsx("span",{className:h})})}const ct=Te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=ct,pt=["center","classes","className"];let q=e=>e,be,ge,ye,Re;const re=550,ft=80,dt=ie(be||(be=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ht=ie(ge||(ge=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),mt=ie(ye||(ye=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),bt=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),gt=se(lt,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,dt,re,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ht,re,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,mt,({theme:e})=>e.transitions.easing.easeInOut),yt=i.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:s}=u,c=oe(u,pt),[l,p]=i.useState([]),d=i.useRef(0),g=i.useRef(null);i.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=i.useRef(!1),V=i.useRef(null),h=i.useRef(null),y=i.useRef(null);i.useEffect(()=>()=>{clearTimeout(V.current)},[]);const O=i.useCallback(f=>{const{pulsate:R,rippleX:E,rippleY:D,rippleSize:j,cb:U}=f;p(T=>[...T,$.jsx(gt,{classes:{ripple:x(o.ripple,m.ripple),rippleVisible:x(o.rippleVisible,m.rippleVisible),ripplePulsate:x(o.ripplePulsate,m.ripplePulsate),child:x(o.child,m.child),childLeaving:x(o.childLeaving,m.childLeaving),childPulsate:x(o.childPulsate,m.childPulsate)},timeout:re,pulsate:R,rippleX:E,rippleY:D,rippleSize:j},d.current)]),d.current+=1,g.current=U},[o]),N=i.useCallback((f={},R={},E=()=>{})=>{const{pulsate:D=!1,center:j=n||R.pulsate,fakeElement:U=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=U?null:y.current,P=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,B,L;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)C=Math.round(P.width/2),B=Math.round(P.height/2);else{const{clientX:F,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;C=Math.round(F-P.left),B=Math.round(v-P.top)}if(j)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const F=Math.max(Math.abs((T?T.clientWidth:0)-C),C)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-B),B)*2+2;L=Math.sqrt(F**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{O({pulsate:D,rippleX:C,rippleY:B,rippleSize:L,cb:E})},V.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ft)):O({pulsate:D,rippleX:C,rippleY:B,rippleSize:L,cb:E})},[n,O]),I=i.useCallback(()=>{N({},{pulsate:!0})},[N]),_=i.useCallback((f,R)=>{if(clearTimeout(V.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,V.current=setTimeout(()=>{_(f,R)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=R},[]);return i.useImperativeHandle(r,()=>({pulsate:I,start:N,stop:_}),[I,N,_]),$.jsx(bt,X({className:x(m.root,o.root,s),ref:y},c,{children:$.jsx(ut,{component:null,exit:!0,children:l})}))}),Rt=yt;function Et(e){return ze("MuiButtonBase",e)}const Tt=Te("MuiButtonBase",["root","disabled","focusVisible"]),Mt=Tt,xt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Ct=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:u,classes:n}=e,s=Ae({root:["root",t&&"disabled",r&&"focusVisible"]},Et,n);return r&&u&&(s.root+=` ${u}`),s},vt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Mt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wt=i.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:V="a",onBlur:h,onClick:y,onContextMenu:O,onDragLeave:N,onFocus:I,onFocusVisible:_,onKeyDown:f,onKeyUp:R,onMouseDown:E,onMouseLeave:D,onMouseUp:j,onTouchEnd:U,onTouchMove:T,onTouchStart:P,tabIndex:C=0,TouchRippleProps:B,touchRippleRef:L,type:F}=u,v=oe(u,xt),K=i.useRef(null),M=i.useRef(null),Me=de(M,L),{isFocusVisibleRef:le,onFocus:xe,onBlur:Ce,ref:ve}=et(),[k,Y]=i.useState(!1);p&&k&&Y(!1),i.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),K.current.focus()}}),[]);const[J,we]=i.useState(!1);i.useEffect(()=>{we(!0)},[]);const Ve=J&&!d&&!p;i.useEffect(()=>{k&&b&&!d&&J&&M.current.pulsate()},[d,b,k,J]);function w(a,pe,Ke=g){return H(fe=>(pe&&pe(fe),!Ke&&M.current&&M.current[a](fe),!0))}const Pe=w("start",E),Be=w("stop",O),Le=w("stop",N),De=w("stop",j),Fe=w("stop",a=>{k&&a.preventDefault(),D&&D(a)}),ke=w("start",P),Se=w("stop",U),$e=w("stop",T),Ne=w("stop",a=>{Ce(a),le.current===!1&&Y(!1),h&&h(a)},!1),_e=H(a=>{K.current||(K.current=a.currentTarget),xe(a),le.current===!0&&(Y(!0),_&&_(a)),I&&I(a)}),Q=()=>{const a=K.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Z=i.useRef(!1),je=H(a=>{b&&!Z.current&&k&&M.current&&a.key===" "&&(Z.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),y&&y(a))}),Oe=H(a=>{b&&a.key===" "&&M.current&&k&&!a.defaultPrevented&&(Z.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),R&&R(a),y&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&y(a)});let W=l;W==="button"&&(v.href||v.to)&&(W=V);const z={};W==="button"?(z.type=F===void 0?"button":F,z.disabled=p):(!v.href&&!v.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ie=de(r,ve,K),ce=X({},u,{centerRipple:o,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:C,focusVisible:k}),Ue=Ct(ce);return $.jsxs(vt,X({as:W,className:x(Ue.root,c),ownerState:ce,onBlur:Ne,onClick:y,onContextMenu:Be,onFocus:_e,onKeyDown:je,onKeyUp:Oe,onMouseDown:Pe,onMouseLeave:Fe,onMouseUp:De,onDragLeave:Le,onTouchEnd:Se,onTouchMove:$e,onTouchStart:ke,ref:Ie,tabIndex:p?-1:C,type:F},z,v,{children:[s,Ve?$.jsx(Rt,X({ref:Me,center:o},B)):null]}))}),Lt=wt;export{Lt as B,me as T,tt as _,We as a,et as b,H as c,Xe as s,de as u};
