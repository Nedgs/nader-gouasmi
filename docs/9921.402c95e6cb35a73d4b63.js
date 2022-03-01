"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9921],{9921:(U,v,a)=>{a.r(v),a.d(v,{ion_refresher:()=>E,ion_refresher_content:()=>H});var g=a(8239),s=a(1035),c=a(5466),R=a(6269),h=a(4486),P=a(1240),p=a(3580),x=a(613),k=a(5990),C=a(2841);const w=e=>{const t=e.querySelector("ion-spinner"),r=t.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),f=i?i.querySelector("ion-icon"):null,l=(0,p.c)().duration(1e3).easing("ease-out"),o=(0,p.c)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),m=(0,p.c)().addElement(r).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),d=(0,p.c)().addElement(t).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&f){const y=(0,p.c)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),b=(0,p.c)().addElement(f).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);l.addAnimation([y,b])}return l.addAnimation([o,m,d])},u=(e,t,r=200)=>{if(!e)return Promise.resolve();const n=(0,h.t)(e,r);return(0,s.c)(()=>{e.style.setProperty("transition",`${r}ms all ease-out`),void 0===t?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${t}, 0px)`)}),n},S=function(){var e=(0,g.Z)(function*(t,r){const n=t.querySelector("ion-refresher-content");if(!n)return Promise.resolve(!1);yield new Promise(l=>(0,h.c)(n,l));const i=t.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),f=t.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==i&&null!==f&&("ios"===r&&(0,c.a)("mobile")&&void 0!==t.style.webkitOverflowScrolling||"md"===r)});return function(r,n){return e.apply(this,arguments)}}();let E=class{constructor(e){(0,s.r)(this,e),this.ionRefresh=(0,s.e)(this,"ionRefresh",7),this.ionPull=(0,s.e)(this,"ionPull",7),this.ionStart=(0,s.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){var e=this;return(0,g.Z)(function*(){const t=yield S(e.el,(0,c.b)(e));if(t&&!e.nativeRefresher){const r=e.el.closest("ion-content");e.setupNativeRefresher(r)}else t||e.destroyNativeRefresher()})()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}resetNativeRefresher(e,t){var r=this;return(0,g.Z)(function*(){r.state=t,"ios"===(0,c.b)(r)?yield u(e,void 0,300):yield(0,h.t)(r.el.querySelector(".refresher-refreshing-icon"),200),r.didRefresh=!1,r.needsCompletion=!1,r.pointerDown=!1,r.animations.forEach(n=>n.destroy()),r.animations=[],r.progress=0,r.state=1})()}setupiOSNativeRefresher(e,t){var r=this;return(0,g.Z)(function*(){r.elementToTransform=r.scrollEl;const n=e.shadowRoot.querySelectorAll("svg");let i=.16*r.scrollEl.clientHeight;const f=n.length;(0,s.c)(()=>n.forEach(l=>l.style.setProperty("animation","none"))),r.scrollListenerCallback=()=>{!r.pointerDown&&1===r.state||(0,s.f)(()=>{const l=r.scrollEl.scrollTop,o=r.el.clientHeight;if(l>0){if(8===r.state){const b=(0,h.k)(0,l/(.5*o),1);return void(0,s.c)(()=>((e,t)=>{e.style.setProperty("opacity",t.toString())})(t,1-b))}return}r.pointerDown&&(r.didStart||(r.didStart=!0,r.ionStart.emit()),r.pointerDown&&r.ionPull.emit());const m=r.didStart?30:0,d=r.progress=(0,h.k)(0,(Math.abs(l)-m)/i,1);8===r.state||1===d?(r.pointerDown&&((e,t)=>{(0,s.c)(()=>{e.style.setProperty("--refreshing-rotation-duration",t>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")})})(t,r.lastVelocityY),r.didRefresh||(r.beginRefresh(),r.didRefresh=!0,(0,P.d)({style:"light"}),r.pointerDown||u(r.elementToTransform,`${o}px`))):(r.state=2,((e,t,r)=>{(0,s.c)(()=>{e.forEach((i,f)=>{const l=f*(1/t),d=(0,h.k)(0,(r-l)/(1-l),1);i.style.setProperty("opacity",d.toString())})})})(n,f,d))})},r.scrollEl.addEventListener("scroll",r.scrollListenerCallback),r.gesture=(yield Promise.resolve().then(a.bind(a,4751))).createGesture({el:r.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{r.pointerDown=!0,r.didRefresh||u(r.elementToTransform,"0px"),0===i&&(i=.16*r.scrollEl.clientHeight)},onMove:l=>{r.lastVelocityY=l.velocityY},onEnd:()=>{r.pointerDown=!1,r.didStart=!1,r.needsCompletion?(r.resetNativeRefresher(r.elementToTransform,32),r.needsCompletion=!1):r.didRefresh&&(0,s.f)(()=>u(r.elementToTransform,`${r.el.clientHeight}px`))}}),r.disabledChanged()})()}setupMDNativeRefresher(e,t,r){var n=this;return(0,g.Z)(function*(){const i=(0,h.g)(t).querySelector("circle"),f=n.el.querySelector("ion-refresher-content .refresher-pulling-icon"),l=(0,h.g)(r).querySelector("circle");null!==i&&null!==l&&(0,s.c)(()=>{i.style.setProperty("animation","none"),r.style.setProperty("animation-delay","-655ms"),l.style.setProperty("animation-delay","-655ms")}),n.gesture=(yield Promise.resolve().then(a.bind(a,4751))).createGesture({el:n.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==n.state&&32!==n.state&&0===n.scrollEl.scrollTop,onStart:o=>{o.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:o=>{if(o.velocityY<0&&0===n.progress&&!o.data.didStart||o.data.cancelled)o.data.cancelled=!0;else{if(!o.data.didStart){o.data.didStart=!0,n.state=2,(0,s.c)(()=>n.scrollEl.style.setProperty("--overflow","hidden"));const d=((e,t,r)=>"scale"===e?((e,t)=>{const r=t.clientHeight,n=(0,p.c)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${r}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return w(e).addAnimation([n])})(t,r):((e,t)=>{const r=t.clientHeight,n=(0,p.c)().addElement(e).keyframes([{offset:0,transform:`translateY(-${r}px)`},{offset:1,transform:"translateY(100px)"}]);return w(e).addAnimation([n])})(t,r))((e=>{const t=e.previousElementSibling;return null!==t&&"ION-HEADER"===t.tagName?"translate":"scale"})(e),f,n.el);return o.data.animation=d,d.progressStart(!1,0),n.ionStart.emit(),void n.animations.push(d)}n.progress=(0,h.k)(0,o.deltaY/180*.5,1),o.data.animation.progressStep(n.progress),n.ionPull.emit()}},onEnd:o=>{if(!o.data.didStart)return;if((0,s.c)(()=>n.scrollEl.style.removeProperty("--overflow")),n.progress<=.4)return n.gesture.enable(!1),void o.data.animation.progressEnd(0,n.progress,500).onFinish(()=>{n.animations.forEach(y=>y.destroy()),n.animations=[],n.gesture.enable(!0),n.state=1});const m=(0,R.g)([0,0],[0,0],[1,1],[1,1],n.progress)[0],d=(e=>(0,p.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(f);n.animations.push(d),(0,s.c)((0,g.Z)(function*(){f.style.setProperty("--ion-pulling-refresher-translate",100*m+"px"),o.data.animation.progressEnd(),yield d.play(),n.beginRefresh(),o.data.animation.destroy()}))}}),n.disabledChanged()})()}setupNativeRefresher(e){var t=this;return(0,g.Z)(function*(){if(t.scrollListenerCallback||!e||t.nativeRefresher||!t.scrollEl)return;t.setCss(0,"",!1,""),t.nativeRefresher=!0;const r=t.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=t.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===(0,c.b)(t)?t.setupiOSNativeRefresher(r,n):t.setupMDNativeRefresher(e,r,n)})()}componentDidUpdate(){this.checkNativeRefresher()}connectedCallback(){var e=this;return(0,g.Z)(function*(){if("fixed"!==e.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const t=e.el.closest("ion-content");t?(yield new Promise(r=>(0,h.c)(t,r)),e.scrollEl=yield t.getScrollElement(),e.backgroundContentEl=(0,h.g)(t).querySelector("#background-content"),(yield S(e.el,(0,c.b)(e)))?e.setupNativeRefresher(t):(e.gesture=(yield Promise.resolve().then(a.bind(a,4751))).createGesture({el:t,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>e.canStart(),onStart:()=>e.onStart(),onMove:r=>e.onMove(r),onEnd:()=>e.onEnd()}),e.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")})()}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(){var e=this;return(0,g.Z)(function*(){e.nativeRefresher?(e.needsCompletion=!0,e.pointerDown||(0,h.r)(()=>(0,h.r)(()=>e.resetNativeRefresher(e.elementToTransform,32)))):e.close(32,"120ms")})()}cancel(){var e=this;return(0,g.Z)(function*(){e.nativeRefresher?e.pointerDown||(0,h.r)(()=>(0,h.r)(()=>e.resetNativeRefresher(e.elementToTransform,16))):e.close(16,"")})()}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const t=e.event;if(t.touches&&t.touches.length>1||0!=(56&this.state))return;const r=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*r;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(t.cancelable&&t.preventDefault(),this.setCss(n,"0ms",!0,""),0===n)return void(this.progress=0);const i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,t){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,t)}setCss(e,t,r,n){this.nativeRefresher||(this.appliedStyles=e>0,(0,s.c)(()=>{if(this.scrollEl&&this.backgroundContentEl){const i=this.scrollEl.style,f=this.backgroundContentEl.style;i.transform=f.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",i.transitionDuration=f.transitionDuration=t,i.transitionDelay=f.transitionDelay=n,i.overflow=r?"hidden":""}}))}render(){const e=(0,c.b)(this);return(0,s.h)(s.H,{slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return(0,s.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};E.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};let H=class{constructor(e){(0,s.r)(this,e)}componentWillLoad(){if(void 0===this.pullingIcon){const e=(0,c.b)(this),t=void 0!==this.el.style.webkitOverflowScrolling?"lines":x.g;this.pullingIcon=c.c.get("refreshingIcon","ios"===e&&(0,c.a)("mobile")?c.c.get("spinner",t):"circular")}if(void 0===this.refreshingSpinner){const e=(0,c.b)(this);this.refreshingSpinner=c.c.get("refreshingSpinner",c.c.get("spinner","ios"===e?"lines":"circular"))}}render(){const e=this.pullingIcon,t=null!=e&&void 0!==C.S[e],r=(0,c.b)(this);return(0,s.h)(s.H,{class:r},(0,s.h)("div",{class:"refresher-pulling"},this.pullingIcon&&t&&(0,s.h)("div",{class:"refresher-pulling-icon"},(0,s.h)("div",{class:"spinner-arrow-container"},(0,s.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===r&&"circular"===this.pullingIcon&&(0,s.h)("div",{class:"arrow-container"},(0,s.h)("ion-icon",{icon:x.f})))),this.pullingIcon&&!t&&(0,s.h)("div",{class:"refresher-pulling-icon"},(0,s.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,s.h)("div",{class:"refresher-pulling-text",innerHTML:(0,k.s)(this.pullingText)})),(0,s.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,s.h)("div",{class:"refresher-refreshing-icon"},(0,s.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,s.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,k.s)(this.refreshingText)})))}get el(){return(0,s.i)(this)}}}}]);