(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4428],{39620:function(e,a,t){"use strict";var l,r=t(67294);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}a.Z=function(e){return r.createElement("svg",_extends({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793Z"})))}},80407:function(e,a,t){"use strict";t.r(a);let l={argumentDefinitions:[],kind:"Fragment",name:"SignupWallModalContextWrapper_viewer",selections:[{kind:"ScalarField",name:"uid"}],type:"Viewer"};l.hash="e8beb913adc30551104fc70707d899ce",a.default=l},50241:function(e,a,t){"use strict";t.d(a,{dh:function(){return r},zl:function(){return useSignupWall}});var l,r,_=t(85893),o=t(11163),i=t(67294),s=t(22578),n=t(38062),c=t(446),u=t(22641);let importSignupWallModal=()=>Promise.all([t.e(1523),t.e(3986),t.e(3420)]).then(t.bind(t,17574));(l=r||(r={}))[l.navBarSignupButton=1]="navBarSignupButton",l[l.leftSidebarExploreButton=2]="leftSidebarExploreButton",l[l.leftSidebarCreateBotButton=3]="leftSidebarCreateBotButton",l[l.sendMessage=4]="sendMessage",l[l.poeLogo=5]="poeLogo",l[l.headerBarCreateChatButton=6]="headerBarCreateChatButton",l[l.voteAction=7]="voteAction",l[l.loggedOutUserExpiredModal=8]="loggedOutUserExpiredModal",l[l.retryMessage=9]="retryMessage",l[l.previewTriggeredMessage=10]="previewTriggeredMessage";let useSignupWall=()=>{let{setSignupWallVisible:e,shouldShowSignupWall:a,signupWallVisible:t,setTriggerSource:l,signupWallTriggerSource:r,setIsLoadingAfterSignupOrLogin:_}=i.useContext(d),o=(0,i.useCallback)(a=>{e(!0),a&&l(a)},[e,l]),s=(0,i.useCallback)(a=>{e(!1),a&&_(!0)},[e,_]);return{shouldShowSignupWall:a,signupWallVisible:t,openSignupWall:o,closeSignupWall:s,signupWallTriggerSource:r,setIsLoadingAfterSignupOrLogin:_}},d=i.createContext({setSignupWallVisible:()=>{},shouldShowSignupWall:!1,signupWallVisible:!1,setTriggerSource:()=>{},isLoadingAfterSignupOrLogin:!1,setIsLoadingAfterSignupOrLogin:()=>{}});a.ZP=e=>{let{viewer:a,children:l}=e,[r,m]=(0,i.useState)(!1),[p,h]=(0,i.useState)(!1),[g,b]=(0,i.useState)(),v=(0,o.useRouter)(),y=(0,i.useCallback)(()=>{(0,n.dh)(v),m(!1)},[m,v]),f=(0,s.useFragment)(t(80407),a),k=(0,i.useMemo)(()=>({viewer:f}),[f]),x=(0,i.useMemo)(()=>({shouldShowSignupWall:!f.uid,setSignupWallVisible:m,signupWallVisible:r,setTriggerSource:b,signupWallTriggerSource:g,isLoadingAfterSignupOrLogin:p,setIsLoadingAfterSignupOrLogin:h}),[f.uid,m,r,g,b,p,h]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(d.Provider,{value:x,children:p?(0,_.jsx)(c.Sz,{}):(0,_.jsxs)(_.Fragment,{children:[l,r&&(0,_.jsx)(u.Z,{isOpen:r,onRequestClose:y,body:importSignupWallModal,bodyProps:k})]})})})}},22641:function(e,a,t){"use strict";var l=t(85893),r=t(67294),_=t(22120),o=t(83253),i=t.n(o),s=t(39620),n=t(12251),c=t(4694),u=t(27916),d=t.n(u),m=t(4909),p=t(41578),h=t(446),g=t(13525);let parentSelector=()=>document.body;i().setAppElement("#__next");let b={height:200},ModalLoadingState=e=>{let{modalStyles:a}=e,[t,_]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=window.setTimeout(()=>{_(!0)},200);return()=>{window.clearTimeout(e)}},[]),(0,l.jsx)("article",{style:a||b,children:t&&(0,l.jsx)(h.Sz,{})})},modalErrorFallback=e=>{let{error:a}=e;return(0,l.jsx)(ModalErrorState,{error:a})},ModalErrorState=e=>{var a;let{error:t}=e,r=null!==(a=t.statusCode)&&void 0!==a?a:(0,c.getStatusCodeForError)(t),_=!(0,c.isSupportedStatusCode)(r),o=(0,c.useStatusCodeText)(r);return(0,l.jsxs)("article",{className:d().errorState,children:[r&&(0,l.jsx)("h1",{children:_?0:(0,c.statusCodeToDisplay)(r)}),(0,l.jsx)("p",{children:o})]})};a.Z=e=>{let{isOpen:a,onRequestClose:t,body:o,bodyProps:c,modalHeight:u,modalMaxHeight:h,useMinHeight:b=!1,useIncreasedHeightInCompactScreen:v=!1,actions:y,headerActions:f,customHeaderStyle:k,customButtonStyle:x,shouldCloseOnOverlayClick:S=!0,variant:C="regular",showCloseButton:M=!0}=e,j=(0,r.useMemo)(()=>void 0===u?void 0:b?{minHeight:u,maxHeight:h}:{height:u,maxHeight:h},[u,b,h]),w=(0,r.useMemo)(()=>(0,r.lazy)(o),[o]),B=(0,g.GO)(),{t:P}=(0,_.$G)();return(0,l.jsxs)(i(),{isOpen:a,onRequestClose:t,parentSelector:parentSelector,shouldCloseOnOverlayClick:S,shouldReturnFocusAfterClose:!0,overlayClassName:d().overlay,className:(0,n.$)(d().modal,"compact"===C&&d().modalCompact,v&&d().modalIncreasedHeight),children:[(0,l.jsxs)("div",{className:(0,n.$)(d().header,k),children:[M&&(0,l.jsx)(m.t9,{className:(0,n.$)(d().closeButton,d().closeFlatButton,x),onClick:t,"aria-label":P("Close modal"),children:(0,l.jsx)(s.Z,{})}),y&&(0,l.jsx)("div",{className:d().actionsWrapper,children:y}),f&&(0,l.jsx)("div",{className:d().headerActionsWrapper,children:f})]}),(0,l.jsx)("article",{style:j,className:d().modalBody,...B.elementProps,children:(0,l.jsx)(g.yp,{...B.providerProps,children:(0,l.jsx)(p.Z,{fallback:modalErrorFallback,children:(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)(ModalLoadingState,{modalStyles:j}),children:(0,l.jsx)(w,{...c})})})})}),y&&(0,l.jsx)("div",{className:d().footer,children:(0,l.jsx)("div",{className:d().actionsWrapper,children:y})})]})}},13525:function(e,a,t){"use strict";t.d(a,{GO:function(){return useScrollRootProviderProps},Oi:function(){return useScrollRootRef},Zw:function(){return useGetHasScrolled},yp:function(){return ScrollRootProvider}});var l=t(85893),r=t(67294);function useScrollRootRef(){return(0,r.useContext)(_)}let useGetHasScrolled=()=>(0,r.useContext)(i);function useScrollRootProviderProps(){let e=(0,r.useRef)(null),{onScroll:a,getHasScrolled:t}=function(){let e=(0,r.useRef)(!1),a=(0,r.useRef)(!1),t=(0,r.useCallback)(()=>({has_scrolled_horizontally:e.current,has_scrolled_vertically:a.current}),[]),l=(0,r.useCallback)(t=>{let l=t.target;e.current=e.current||l.scrollLeft>1,a.current=a.current||l.scrollTop>1},[]);return{getHasScrolled:t,onScroll:l}}();return{elementProps:{ref:e,onScroll:a},providerProps:{elementRef:e,getHasScrolled:t}}}let ScrollRootProvider=e=>{let{getHasScrolled:a,elementRef:t,children:o}=e,s=useGetHasScrolled(),n=(0,r.useCallback)(()=>{let e=s(),t=a();return{has_scrolled_horizontally:e.has_scrolled_horizontally||t.has_scrolled_horizontally,has_scrolled_vertically:e.has_scrolled_vertically||t.has_scrolled_vertically}},[s,a]);return(0,l.jsx)(_.Provider,{value:t,children:(0,l.jsx)(i.Provider,{value:n,children:o})})},_=(0,r.createContext)(null),o={has_scrolled_horizontally:!1,has_scrolled_vertically:!1},i=(0,r.createContext)(()=>o);window.document.addEventListener("scrollstart",()=>{o.has_scrolled_horizontally=o.has_scrolled_horizontally||document.body.scrollLeft>0,o.has_scrolled_vertically=o.has_scrolled_vertically||document.body.scrollTop>0})},35715:function(e,a){"use strict";var t,l;(l=t||(t={})).human="human",l.dummy="dummy",l.chat_break="chat_break",l.rat="rat",l.command="command",l.poe_system_bot="poe_system_bot",l.echo_bot="echo_bot",l.a1="a1",l.a1_honest="a1_honest",l.a1_professor="a1_professor",l.a1_t0="a1_t0",l.a1_honest2="a1_honest2",l.a1_honest3="a1_honest3",l.a2="a2",l.a2_test="a2_test",l.a2_2="a2_2",l.a2_100k="a2_100k",l.a2_2_100k="a2_2_100k",l.claude_2_1_bamboo="claude_2_1_bamboo",l.claude_2_1_cedar="claude_2_1_cedar",l.claude_3_sonnet_200k="claude_3_sonnet_200k",l.claude_3_opus_200k="claude_3_opus_200k",l.claude_2_short="claude_2_short",l.claude_2_1_200k="claude_2_1_200k",l.claude_3_haiku="claude_3_haiku",l.claude_3_haiku_200k="claude_3_haiku_200k",l.claude_3_igloo="claude_3_igloo",l.claude_3_igloo_200k="claude_3_igloo_200k",l.claude_3_5_firefly="claude_3_5_firefly",l.claude_3_5_firefly_200k="claude_3_5_firefly_200k",l.mnm="mnm",l.mnm_safety="mnm_safety",l.mnm_t0="mnm_t0",l.davinci2="davinci2",l.davinci3="davinci3",l.capybara="capybara",l.nutria="nutria",l.chinchilla="chinchilla",l.beaver="beaver",l.capybara_test="capybara_test",l.nutria_test="nutria_test",l.capybara_search="capybara_search",l.agouti="agouti",l.vizcacha="vizcacha",l.chinchilla_instruct="chinchilla_instruct",l.gpt3_5="gpt3_5",l.gpt4_vision="gpt4_vision",l.gpt4_classic="gpt4_classic",l.gpt4_classic_0314="gpt4_classic_0314",l.gpt4_o="gpt4_o",l.gpt4_o_128k="gpt4_o_128k",l.gpt4_o_mini="gpt4_o_mini",l.gpt4_o_mini_128k="gpt4_o_mini_128k",l.gpt4_o_latest="gpt4_o_latest",l.gpt4_o_latest_128k="gpt4_o_latest_128k",l.gpt_o1_preview="gpt_o1_preview",l.gpt_o1_preview_128k="gpt_o1_preview_128k",l.gpt_o1_mini="gpt_o1_mini",l.gpt_o1_mini_128k="gpt_o1_mini_128k",l.hutia="hutia",l.pacarana="pacarana",l.bot_query_api="bot_query_api",l.acouchy="acouchy",l.acouchy_code="acouchy_code",l.acouchy_search_grounded="acouchy_search_grounded",l.unicorn="unicorn",l.gemini_pro="gemini_pro",l.gemini_pro_vision="gemini_pro_vision",l.gemini_ultra="gemini_ultra",l.gemini_pro_search="gemini_pro_search",l.gemini_1_5_pro_search="gemini_1_5_pro_search",l.gemini_1_5_pro="gemini_1_5_pro",l.gemini_1_5_pro_128k="gemini_1_5_pro_128k",l.gemini_1_5_pro_1m="gemini_1_5_pro_1m",l.gemini_1_5_flash="gemini_1_5_flash",l.gemini_1_5_flash_128k="gemini_1_5_flash_128k",l.gemini_1_5_flash_1m="gemini_1_5_flash_1m",l.llama_2_70b_chat="llama_2_70b_chat",l.llama_2_13b_chat="llama_2_13b_chat",l.llama_2_7b_chat="llama_2_7b_chat",l.code_llama_7b_instruct="code_llama_7b_instruct",l.code_llama_13b_instruct="code_llama_13b_instruct",l.code_llama_34b_instruct="code_llama_34b_instruct",l.upstage_solar_0_70b_16bit="upstage_solar_0_70b_16bit",l.qwen_7b_chat="qwen_7b_chat",l.mistral_7b_instruct="mistral_7b_instruct",l.mistral_medium="mistral_medium",l.mistral_large="mistral_large",l.mistral_large_128k="mistral_large_128k",l.groq_mixtral_8x_7b="groq_mixtral_8x_7b",l.groq_llama_3_8b="groq_llama_3_8b",l.groq_llama_3_70b="groq_llama_3_70b",a.Z=t},27916:function(e){e.exports={medium:"only screen and (min-width : 685px)","compact-only":"only screen and (max-width : 684px)",overlay:"Modal_overlay___PrHh",modal:"Modal_modal__I_dBM",modalIncreasedHeight:"Modal_modalIncreasedHeight__TbIpS",modalCompact:"Modal_modalCompact__BQhmu",modalBody:"Modal_modalBody__BX0qa",header:"Modal_header__9MUIZ",actionsWrapper:"Modal_actionsWrapper__FyX5h",headerActionsWrapper:"Modal_headerActionsWrapper__3JP4U",closeButton:"Modal_closeButton__GycnR",footer:"Modal_footer__R7iNP",errorState:"Modal_errorState__7CZ5n"}},9008:function(e,a,t){e.exports=t(79201)}}]);