(this["webpackJsonpgraviz-telescope"]=this["webpackJsonpgraviz-telescope"]||[]).push([[6],{623:function(e,t,n){e.exports={search:"Search_search__EN2bj",title:"Search_title__3DfKv",stage1:"Search_stage1__2xTh5",form:"Search_form__3MibI",inputGroups:"Search_inputGroups__1NVi-",inputGroup:"Search_inputGroup__uOOZY",indicator:"Search_indicator__3gc9b",inputWrapper:"Search_inputWrapper__2qcTc",list:"Search_list__1xuJe",listItems:"Search_listItems__1RThN",listItem:"Search_listItem__brOx0",listItemText:"Search_listItemText__2-5XH",listItemButtonData:"Search_listItemButtonData__-C70C",listItemButtonEdit:"Search_listItemButtonEdit__E5eFa",listItemButtonDelete:"Search_listItemButtonDelete__1KnW8",stage2:"Search_stage2__2fc2U",subtitle:"Search_subtitle__2DS7e",section:"Search_section__2zLVw",aside:"Search_aside__2kuJk",main:"Search_main__a7WZh",subtitleWrapper:"Search_subtitleWrapper__28g8z",warningText:"Search_warningText__1fcit",warningIcon:"Search_warningIcon__3BI7k",toggle:"Search_toggle__27lrU",toggleIcon:"Search_toggleIcon__15F9U",description:"Search_description__2Nwua",brandSelector:"Search_brandSelector__sjwgW",brandButton:"Search_brandButton__vWtbC",brandButtonActive:"Search_brandButtonActive__1e3JQ",wordSelector:"Search_wordSelector__1cpQ3",searchTable:"Search_searchTable__1aYSZ",backButton:"Search_backButton__2RWfP",nextButton:"Search_nextButton__1CVkp"}},624:function(e,t,n){e.exports={searchNameModal:"SearchNameModal_searchNameModal__3BA8S",label:"SearchNameModal_label__3GmJE",greenButton:"SearchNameModal_greenButton__n_r9l",inputWrapper:"SearchNameModal_inputWrapper__24JpS",input:"SearchNameModal_input__5nqiz"}},625:function(e,t,n){e.exports={wordSelector:"WordSelector_wordSelector__2SOI-",wordsArea:"WordSelector_wordsArea__BUuFE",wordsAreaBig:"WordSelector_wordsAreaBig__1iZfV",wordsAreaSmall:"WordSelector_wordsAreaSmall__Ndi90",preloader:"WordSelector_preloader__JIG92",message:"WordSelector_message__1XIlu",wordsWrapper:"WordSelector_wordsWrapper__1chr3",words:"WordSelector_words__2WxvV",word:"WordSelector_word__2moY0",row:"WordSelector_row__1wnAQ",input:"WordSelector_input__fA9O5",plusButton:"WordSelector_plusButton__3EzL7"}},627:function(e,t,n){e.exports={filter:"SearchTable_filter__395qC",filterIcon:"SearchTable_filterIcon__9iPYO",input:"SearchTable_input__hAgYW",main:"SearchTable_main__2MlVJ",preloader:"SearchTable_preloader__13c5A",message:"SearchTable_message__36sQw",tableWrapper:"SearchTable_tableWrapper__1uFPY",expandableCell:"SearchTable_expandableCell__1E80G",sortingIcon:"SearchTable_sortingIcon__3mtGm",sortingIconDown:"SearchTable_sortingIconDown__1tpdj",trashIcon:"SearchTable_trashIcon__2Bgli",checkboxIcon:"SearchTable_checkboxIcon__3et_b",warning:"SearchTable_warning__2JDdh",paginationWrapper:"SearchTable_paginationWrapper__14RYh",pagination:"SearchTable_pagination__q6fQF",activeLink:"SearchTable_activeLink__2Df6f"}},685:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n(37),s=n(35),i=n(5),o=n.n(i),l=n(8),d=n(622),u=n(6),j=n(9),b=n(7),h=n(2),m=n(623),O=n.n(m),p=n(31),f=n(624),v=n.n(f),x=n(38),g=n(67),_=Object(g.c)(p.f),w=function(e){var t,n=Object(h.useState)(null!==(t=e.initialSearchName)&&void 0!==t?t:""),a=Object(b.a)(n,2),c=a[0],s=a[1],i=Object(x.c)(3e3),o=i.errors,l=i.setErrors;return Object(r.jsxs)("div",{className:v.a.searchNameModal,children:[Object(r.jsx)("div",{className:v.a.label,children:"Save this search as:"}),Object(r.jsx)("div",{className:v.a.inputWrapper,children:Object(r.jsx)(_,{className:v.a.input,value:c,changeHandler:function(e){return s(e)},error:o.searchName})}),Object(r.jsx)("button",{className:v.a.greenButton,onClick:function(){var t=c.trim();t?e.onNextClicked(t):l({searchName:"Required"})},children:"Save"})]})},N=n(625),S=n.n(N),y=n(22),k=n(676),C=n(674),I=n(673),T=n(11),B=n.n(T),W=n(13),E=Object(W.i)()?C.a:I.a;!function(e){e.Unused="unused",e.Included="included",e.Excluded="excluded"}(a||(a={}));var D=Object(h.forwardRef)((function(e,t){return Object(r.jsxs)("div",{ref:t,className:S.a.word,style:e.style,title:e.word,children:[Object(r.jsx)("div",{children:e.word}),e.onDeleteClicked&&Object(r.jsx)(y.Trash,{onClick:e.onDeleteClicked})]})})),A=Object(h.forwardRef)((function(e,t){var n=e.className,a=e.style,c=e.children;return Object(r.jsx)("div",{ref:t,className:n,style:a,children:c})})),R=Object(g.a)(D),M=Object(g.b)(A),z=function(e){var t,n,c,i=e.className,o=e.style,l=e.words,d=e.onWordStatusChanged,u=e.status,m="succeeded"===u||"failed"===u,O=null!==(t=null===l||void 0===l?void 0:l.unused)&&void 0!==t?t:[],f=null!==(n=null===l||void 0===l?void 0:l.included)&&void 0!==n?n:[],v=null!==(c=null===l||void 0===l?void 0:l.excluded)&&void 0!==c?c:[],x=Object(h.useState)(""),g=Object(b.a)(x,2),_=g[0],w=g[1],N=Object(h.useState)(""),C=Object(b.a)(N,2),I=C[0],T=C[1],W=function(e,t){var n={included:f,excluded:v};null===d||void 0===d||d.call(null,Object(s.a)({unused:[n[e][t]].concat(Object(j.a)(O))},e,n[e].filter((function(e,n){return n!==t}))))},D=function(e,t){var n,a={unused:O,included:f,excluded:v},r=Number(t.id);null===d||void 0===d||d.call(null,(n={},Object(s.a)(n,e,[a[t.type][r]].concat(Object(j.a)(a[e]))),Object(s.a)(n,t.type,a[t.type].filter((function(e,t){return t!==r}))),n))};return Object(r.jsx)(k.a,{backend:E,children:Object(r.jsxs)("div",{className:B()(S.a.wordSelector,i),style:o,children:[Object(r.jsxs)(M,{className:B()(S.a.wordsArea,S.a.wordsAreaBig),accept:m?[a.Included,a.Excluded]:["",""],onDropped:function(e){return D(a.Unused,e)},children:["loading"===u&&Object(r.jsx)(p.h,{className:S.a.preloader}),"succeeded"===u&&(O.length?Object(r.jsx)("div",{className:S.a.wordsWrapper,children:Object(r.jsx)("div",{className:S.a.words,children:O.map((function(e,t){return Object(r.jsx)(R,{id:String(t),type:a.Unused,word:e},t)}))})}):Object(r.jsx)("div",{className:S.a.message,children:"No suggestions found"})),"failed"===u&&Object(r.jsx)("div",{className:S.a.message,children:"Failed to fetch suggestions :("})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{className:B()(S.a.wordsArea,S.a.wordsAreaSmall),accept:[a.Unused,a.Excluded],onDropped:function(e){return D(a.Included,e)},children:f.length?Object(r.jsx)("div",{className:S.a.wordsWrapper,children:Object(r.jsx)("div",{className:S.a.words,children:f.map((function(e,t){return Object(r.jsx)(R,{style:{borderColor:"#41b167"},id:String(t),type:a.Included,word:e,onDeleteClicked:m?function(){return W(a.Included,t)}:void 0},t)}))})}):Object(r.jsxs)("div",{className:S.a.message,children:["Drag and drop words you",Object(r.jsx)("br",{})," want to limit the search to",Object(r.jsx)("br",{})," into this box"]})}),Object(r.jsxs)("form",{className:S.a.row,onSubmit:function(e){e.preventDefault(),null===d||void 0===d||d.call(null,{included:[_].concat(Object(j.a)(f))}),w("")},children:[Object(r.jsx)(p.f,{className:S.a.input,value:_,changeHandler:function(e){return w(e)},placeholder:"Or write your own words to add",maxLength:60}),Object(r.jsx)("button",{className:S.a.plusButton,type:"submit",disabled:!_,children:Object(r.jsx)(y.AddCircle,{size:20,opacity:_?1:.25})})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{className:B()(S.a.wordsArea,S.a.wordsAreaSmall),accept:[a.Unused,a.Included],onDropped:function(e){return D(a.Excluded,e)},children:v.length?Object(r.jsx)("div",{className:S.a.wordsWrapper,children:Object(r.jsx)("div",{className:S.a.words,children:v.map((function(e,t){return Object(r.jsx)(R,{style:{borderColor:"#ef336a"},id:String(t),type:a.Excluded,word:e,onDeleteClicked:m?function(){return W(a.Excluded,t)}:void 0},t)}))})}):Object(r.jsxs)("div",{className:S.a.message,children:["drag and drop words you",Object(r.jsx)("br",{})," want to remove from your",Object(r.jsx)("br",{})," search into this box"]})}),Object(r.jsxs)("form",{className:S.a.row,onSubmit:function(e){e.preventDefault(),null===d||void 0===d||d.call(null,{excluded:[I].concat(Object(j.a)(v))}),T("")},children:[Object(r.jsx)(p.f,{className:S.a.input,value:I,changeHandler:function(e){return T(e)},placeholder:"Or write your own words to remove",maxLength:60}),Object(r.jsx)("button",{className:S.a.plusButton,type:"submit",disabled:!I,children:Object(r.jsx)(y.AddCircle,{size:20,opacity:I?1:.25})})]})]})]})})},L=n(627),F=n.n(L),G=n(628),H=n.n(G),Y=n(629),q=n.n(Y),P=n(672),U=function(e){var t=e.className,n=e.style,a=e.status,c=e.columns,i=e.rows,o=void 0===i?[]:i,l=e.hasFilter,d=e.filteringFields,m=e.hasRowSelection,O=e.selectedRowIds,f=void 0===O?{}:O,v=e.onSelectedRowIdsChanged,x=e.hasRowDeletion,g=e.onRowDeleted,_=e.noRowsText,w=void 0===_?"No suggestions found":_,N=Object(h.useState)(""),S=Object(b.a)(N,2),k=S[0],C=S[1],I=Object(h.useMemo)((function(){if(!(null===d||void 0===d?void 0:d.length))return o;var e=k.toLowerCase();return o.filter((function(t){return d.reduce((function(e,n){return e+(t[n]?String(t[n]).toLowerCase():"")}),"").includes(e)}))}),[d,k,o]),T=Object(h.useState)(null),W=Object(b.a)(T,2),E=W[0],D=W[1],A=Object(h.useMemo)((function(){if(!E)return I;var e=E.field,t=E.direction;return Object(j.a)(I).sort((function(n,a){var r=n[e],c=a[e];return"string"===typeof r&&"string"===typeof c?(r=r.toLowerCase(),c=c.toLowerCase(),"desc"===t?c.localeCompare(r):r.localeCompare(c)):"number"===typeof r&&"number"===typeof c?(isNaN(r)&&(r=0),isNaN(c)&&(c=0),"desc"===t?c-r:r-c):0}))}),[E,I]);var R=Object(h.useState)(0),M=Object(b.a)(R,2),z=M[0],L=M[1],G=Object(h.useMemo)((function(){return Math.ceil(I.length/10)}),[I]),Y=Object(h.useMemo)((function(){return A.slice(10*z,10*z+10)}),[A,z]);Object(h.useEffect)((function(){z>=G&&L(0)}),[z,G]);var U=Object(h.useMemo)((function(){return!!Y.length&&Y.every((function(e){var t=e.id;return f[t]}))}),[Y,f]);function J(e){switch(typeof e){case"string":return e;case"number":return e.toLocaleString();default:return""}}return Object(r.jsxs)("div",{className:t,style:n,children:[l&&Object(r.jsxs)("div",{className:F.a.filter,children:[Object(r.jsx)(p.f,{className:F.a.input,value:k,changeHandler:function(e){return C(e)},placeholder:"Select the search terms connected to your brand",maxLength:60}),Object(r.jsx)(y.Magnifier,{className:F.a.filterIcon,size:20,opacity:k?1:.25})]}),Object(r.jsxs)("div",{className:F.a.main,children:["loading"===a&&Object(r.jsx)(p.h,{className:F.a.preloader}),"succeeded"===a&&(o.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:F.a.tableWrapper,children:[Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[x&&Object(r.jsx)("th",{style:{width:1}}),m&&Object(r.jsx)("th",{style:{width:1,fontSize:0},children:U?Object(r.jsx)(y.CheckBoxChecked,{className:F.a.checkboxIcon,color:"#41b167",size:16,onClick:function(){null===v||void 0===v||v.call(null,q()(f,Y.map((function(e){return e.id}))))}}):Object(r.jsx)(y.CheckBoxEmpty,{className:F.a.checkboxIcon,size:16,onClick:function(){if(v&&Y.length){var e=Object(u.a)({},f);Y.forEach((function(t){var n=t.id;return e[n]=!0})),v(e)}}})}),c.map((function(e,t){var n=e.label,a=e.field,c=e.isSortable,i=e.isSqueezed;return Object(r.jsxs)("th",{style:{width:i?1:void 0,cursor:c?"pointer":"auto"},onClick:c?function(){return function(e){if(e===(null===E||void 0===E?void 0:E.field)){var t=null===E||void 0===E?void 0:E.direction;D("desc"===t?{field:e,direction:"asc"}:null)}else D({field:e,direction:"desc"})}(a)}:void 0,children:[(null===E||void 0===E?void 0:E.field)===a&&Object(r.jsx)(y.Triangle,{className:B()(F.a.sortingIcon,Object(s.a)({},F.a.sortingIconDown,"desc"===(null===E||void 0===E?void 0:E.direction))),size:8}),n]},t)}))]})}),Object(r.jsx)("tbody",{children:Y.map((function(e,t){return Object(r.jsx)("tr",{children:Object(r.jsxs)(r.Fragment,{children:[x&&Object(r.jsx)("td",{children:Object(r.jsx)(y.Trash,{className:F.a.trashIcon,size:16,onClick:function(){return t=e.id,void(null===g||void 0===g||g.call(null,t));var t}})}),m&&Object(r.jsx)("td",{style:{fontSize:0},children:f[e.id]?Object(r.jsx)(y.CheckBoxChecked,{className:F.a.checkboxIcon,color:"#41b167",size:16,onClick:function(){return t=e.id,void(null===v||void 0===v||v.call(null,q()(f,[t])));var t}}):Object(r.jsx)(y.CheckBoxEmpty,{className:F.a.checkboxIcon,size:16,onClick:function(){return t=e.id,void(null===v||void 0===v||v.call(null,Object(u.a)(Object(u.a)({},f),{},Object(s.a)({},t,!0))));var t}})}),c.map((function(t,n){var a,c=t.field,i=t.isDate,o=t.isExpandable;return Object(r.jsx)("td",{className:B()(Object(s.a)({},F.a.expandableCell,o)),dangerouslySetInnerHTML:{__html:i?(a=e[c],"number"!==typeof a||isNaN(a)?"":Object(P.a)(a,{addSuffix:!0})):J(e[c])}},n)}))]})},t)}))})]}),!I.length&&Object(r.jsx)("div",{className:F.a.warning,children:"No entries are matching your search criteria"})]}),Object(r.jsx)("div",{className:F.a.paginationWrapper,children:!!G&&Object(r.jsx)(H.a,{previousLabel:Object(r.jsx)(y.ChevronLeft,{}),nextLabel:Object(r.jsx)(y.ChevronRight,{}),breakLabel:"...",pageCount:G,marginPagesDisplayed:1,pageRangeDisplayed:2,forcePage:z,onPageChange:function(e){var t=e.selected;return L(t)},containerClassName:F.a.pagination,activeLinkClassName:F.a.activeLink})})]}):Object(r.jsx)("div",{className:F.a.message,children:w})),"failed"===a&&Object(r.jsx)("div",{className:F.a.message,children:"Failed to fetch data :("})]})]})},J=n(43),V=n(30),Q=n(127),Z=n(110),K=n(111),X=n(34),$=n(46),ee=n(25),te=n(605),ne=n(658),ae=n.n(ne),re=n(659),ce=n.n(re),se=Object(g.c)(p.f),ie=Object(g.c)(p.k),oe=Object(V.b)((function(e){var t=e.user,n=e.company,a=e.searches;return{userId:t.id,companyMembers:n.members,searches:a}}),X)((function(e){var t,n,a,i,m,f,v,g=e.userId,_=e.companyMembers,N=e.searches,S=e.createSearch,k=e.editSearch,C=e.removeSearch,I=Object(V.d)(Q.e),T=Object(V.d)((function(e){return e.markets.status})),W=Object(V.d)(Z.c),E=Object(V.d)((function(e){return e.industries.status})),D=Object(V.d)(K.c),A=Object(V.c)(),R=Object(c.g)(),M=Object(h.useContext)(J.a),L=M.setIsGlobalPreloaderShown,F=M.setModalElement,G=Object(x.c)(3e3),H=G.errors,Y=G.setErrors,q=Object(c.i)().id,P=Object(h.useMemo)((function(){if("new"!==q)return N.find((function(e){return e.id===q}))}),[q,N]),X=!P,ne=Object(h.useMemo)((function(){var e,t,n,a,r,c,s,i=R.location.search,o=new URLSearchParams(i),l=Number(o.get("stage"));return{stage:1===l||2===l?l:1,mainBrand:null!==(e=o.get("mainBrand"))&&void 0!==e?e:"",competitor1:null!==(t=o.get("competitor1"))&&void 0!==t?t:"",competitor2:null!==(n=o.get("competitor2"))&&void 0!==n?n:"",competitor3:null!==(a=o.get("competitor3"))&&void 0!==a?a:"",competitor4:null!==(r=o.get("competitor4"))&&void 0!==r?r:"",marketCode:null!==(c=o.get("marketCode"))&&void 0!==c?c:"",industryId:null!==(s=o.get("industryId"))&&void 0!==s?s:""}}),[R.location.search]),re=Object(h.useState)(null!==(t=null===P||void 0===P?void 0:P.brands.main)&&void 0!==t?t:ne.mainBrand),oe=Object(b.a)(re,2),le=oe[0],de=oe[1],ue=Object(h.useState)(null!==(n=null===P||void 0===P?void 0:P.brands.competitors[0])&&void 0!==n?n:ne.competitor1),je=Object(b.a)(ue,2),be=je[0],he=je[1],me=Object(h.useState)(null!==(a=null===P||void 0===P?void 0:P.brands.competitors[1])&&void 0!==a?a:ne.competitor2),Oe=Object(b.a)(me,2),pe=Oe[0],fe=Oe[1],ve=Object(h.useState)(null!==(i=null===P||void 0===P?void 0:P.brands.competitors[2])&&void 0!==i?i:ne.competitor3),xe=Object(b.a)(ve,2),ge=xe[0],_e=xe[1],we=Object(h.useState)(null!==(m=null===P||void 0===P?void 0:P.brands.competitors[3])&&void 0!==m?m:ne.competitor4),Ne=Object(b.a)(we,2),Se=Ne[0],ye=Ne[1],ke=Object(h.useState)(null!==(f=null===P||void 0===P?void 0:P.market.code)&&void 0!==f?f:ne.marketCode),Ce=Object(b.a)(ke,2),Ie=Ce[0],Te=Ce[1],Be=Object(h.useState)(null!==(v=null===P||void 0===P?void 0:P.industry.id)&&void 0!==v?v:ne.industryId),We=Object(b.a)(Be,2),Ee=We[0],De=We[1],Ae=Object(h.useState)((function(){if(2===ne.stage){var e=_t();return Object.keys(e).length?(Y(e),1):2}return 1})),Re=Object(b.a)(Ae,2),Me=Re[0],ze=Re[1],Le=Object(h.useState)(!1),Fe=Object(b.a)(Le,2),Ge=Fe[0],He=Fe[1],Ye=Object(h.useState)(!1),qe=Object(b.a)(Ye,2),Pe=qe[0],Ue=qe[1],Je=Object(h.useRef)(null),Ve=Object(h.useMemo)((function(){return[le].concat(Object(j.a)([be,pe,ge,Se].filter((function(e){return e}))))}),[le,be,pe,ge,Se]),Qe=Object(h.useState)(""),Ze=Object(b.a)(Qe,2),Ke=Ze[0],Xe=Ze[1],$e=Object(h.useState)(""),et=Object(b.a)($e,2),tt=et[0],nt=et[1],at=Object(te.a)((function(){var e={};return Object.entries((null===P||void 0===P?void 0:P.suggestions)||{}).forEach((function(t){var n,a=Object(b.a)(t,2),r=a[0],c=a[1];ae()(e,[r,Ie],Object(u.a)(Object(u.a)({},c),{},{selected:null===c||void 0===c||null===(n=c.selected)||void 0===n?void 0:n.reduce((function(e,t){return e[t]=!0,e}),{})}))})),e})),rt=Object(b.a)(at,2),ct=rt[0],st=rt[1],it=Object(h.useMemo)((function(){var e,t,n=null===(e=ct[Ke])||void 0===e?void 0:e[Ie];if(n)return{words:{unused:n.unused,included:n.included,excluded:n.excluded},status:null===(t=n.loaded)||void 0===t?void 0:t.status}}),[ct,Ke,Ie]),ot=Object(h.useMemo)((function(){var e,t,n,a=null===(e=ct[tt])||void 0===e?void 0:e[Ie];if(a)return{rows:null===(t=a.loaded)||void 0===t?void 0:t.data,selectedRowIds:a.selected,status:null===(n=a.loaded)||void 0===n?void 0:n.status}}),[ct,tt,Ie]),lt=Object(h.useState)(""),dt=Object(b.a)(lt,2),ut=dt[0],jt=dt[1],bt=Object(te.a)({}),ht=Object(b.a)(bt,2),mt=ht[0],Ot=ht[1],pt=Object(h.useMemo)((function(){var e,t,n,a,r=null===(e=mt[ut])||void 0===e?void 0:e[Ie];if(r)return{rows:null===(t=r.loaded)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.filter((function(e){var t,n=e.id;return!(null===r||void 0===r||null===(t=r.removed)||void 0===t?void 0:t[n])})),status:null===(a=r.loaded)||void 0===a?void 0:a.status}}),[mt,ut,Ie]),ft=(null===I||void 0===I?void 0:I.searchesLimit)||1,vt=Object(h.useMemo)((function(){return N.map((function(e){var t,n;e.owner.id!==g&&(t=null===(n=_.find((function(t){return t.id===e.owner.id})))||void 0===n?void 0:n.fullName);return Object(u.a)(Object(u.a)({},e),{},{owner:{id:e.owner.id,fullName:t}})}))}),[N,_,g]),xt=Object(h.useRef)(!0);Object(h.useEffect)((function(){!xt.current||"idle"!==T&&"failed"!==T||(xt.current=!1,A(Object(Z.b)()))}),[T,A]);var gt=Object(h.useRef)(!0);function _t(){var e={},t=[le,be,pe,ge,Se].map((function(e){return e.trim().toLowerCase()})),n=Object(d.a)(t),a=n[0],r=n.slice(1);return a||(e.mainBrand="Required"),r[0]||(e.competitor1="Required"),r.forEach((function(n,a){n&&t.slice(0,a+1).includes(n)&&(e["competitor"+(a+1)]="This brand is already entered")})),Ee||(e.industryId="Required"),Ie||(e.marketCode="Required"),e}function wt(){ze(1),de(""),he(""),fe(""),_e(""),ye(""),De(""),Te("")}function Nt(){return St.apply(this,arguments)}function St(){return(St=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[be,pe,ge,Se].filter((function(e){return e})),n=[le].concat(Object(j.a)(t)),F(Object(r.jsx)(w,{initialSearchName:null===P||void 0===P?void 0:P.name,onNextClicked:function(){var e=Object(l.a)(o.a.mark((function e(a){var r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L(!0),r={name:a,mainBrand:le,competitors:t,industryId:Ee,marketCode:Ie,suggestions:n.reduce((function(e,t){var n,a,r=null===(n=ct[t])||void 0===n?void 0:n[Ie];r&&(e[t]={included:r.included,excluded:r.excluded,selected:Object.keys(null!==(a=r.selected)&&void 0!==a?a:{})});return e}),{})},e.prev=2,!P){e.next=9;break}return e.next=6,k(P.id,r);case 6:c=P.id,e.next=14;break;case 9:return e.next=11,S(Object(u.a)({userId:g},r));case 11:s=e.sent,"string"===typeof(i=null===s||void 0===s?void 0:s.searchId)&&i&&(c=i);case 14:if(!c){e.next=23;break}return e.prev=15,e.next=18,Object(ee.a)(c);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(15),console.dir(e.t0);case 23:F(null),vt.length?(wt(),$.notify.show("Your search has now been saved and can be found under saved searches","success",5e3),R.push("/searches/new")):R.push("/widget-library"),e.next=31;break;case 27:e.prev=27,e.t1=e.catch(2),console.dir(e.t1),$.notify.show("Oops, something went wrong","error");case 31:L(!1);case 32:case"end":return e.stop()}}),e,null,[[2,27],[15,20]])})));return function(t){return e.apply(this,arguments)}}()}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(h.useEffect)((function(){!gt.current||"idle"!==E&&"failed"!==E||(gt.current=!1,A(Object(K.b)()))}),[E,A]);function yt(){return(yt=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.id,a=t.name,F(Object(r.jsxs)(p.a,{redButton:{onClicked:function(){return F(null)}},greenButton:{onClicked:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,C(n);case 4:F(null),$.notify.show("Your search has been deleted","success"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.dir(e.t0),$.notify.show("Oops, something went wrong","error");case 12:L(!1);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},children:['Do you really want to delete "',a,'" search?']}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var kt=Object(h.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("loading"!==(c=null===(n=ct[t])||void 0===n||null===(a=n[Ie])||void 0===a||null===(r=a.loaded)||void 0===r?void 0:r.status)&&"succeeded"!==c&&"failed"!==c){e.next=3;break}return e.abrupt("return");case 3:return st((function(e){ae()(e,[t,Ie,"loaded"],{status:"loading"})})),e.prev=4,e.next=7,Object(ee.d)(t,Ie);case 7:s=e.sent,i=s.reduce((function(e,t){var n=t.withoutBrand;return n&&e.push(n),e}),[]),st((function(e){ce()(e,[t,Ie],(function(e){return Object(u.a)(Object(u.a)({},e),{},{loaded:{status:"succeeded",data:s},unused:i})}))})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.dir(e.t0),st((function(e){ae()(e,[t,Ie,"loaded"],{status:"failed"})}));case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),[ct,Ie,st]);Object(h.useEffect)((function(){if(2===Me){var e=new Set,t=Ve.includes(Ke)?Ke:Ve[0];Xe(t),e.add(t);var n=Ve.includes(tt)?tt:Ve[0];nt(n),e.add(n),e.forEach((function(e){kt(e)}))}}),[Me,Ke,tt,Ve,kt]);var Ct=Object(h.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("loading"!==(c=null===(n=mt[t])||void 0===n||null===(a=n[Ie])||void 0===a||null===(r=a.loaded)||void 0===r?void 0:r.status)&&"succeeded"!==c&&"failed"!==c){e.next=3;break}return e.abrupt("return");case 3:return Ot((function(e){ae()(e,[t,Ie,"loaded"],{status:"loading"})})),e.prev=4,e.next=7,Object(ee.e)(t,Ie);case 7:s=e.sent,Ot((function(e){ae()(e,[t,Ie,"loaded"],{status:"succeeded",data:s})})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.dir(e.t0),Ot((function(e){ae()(e,[t,Ie,"loaded"],{status:"failed"})}));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),[mt,Ie,Ot]);if(Object(h.useEffect)((function(){if(2===Me){var e=Ve.includes(ut)?ut:Ve[0];jt(e),Ct(e)}}),[Me,Ve,ut,Ct]),"idle"===T||"loading"===T||"idle"===E||"loading"===E)return Object(r.jsx)(p.h,{modifier:"inner"});var It=function(e,t){return Object(r.jsx)("div",{className:O.a.brandSelector,children:Ve.map((function(n){return Object(r.jsx)("button",{className:B()(O.a.brandButton,Object(s.a)({},O.a.brandButtonActive,n===e)),onClick:function(){return t(n)},children:n},n)}))})};return Object(r.jsxs)("div",{className:O.a.search,children:[1===Me&&Object(r.jsxs)("div",{className:O.a.stage1,children:[Object(r.jsxs)("form",{className:O.a.form,onSubmit:function(e){e.preventDefault(),function(){if(X&&vt.filter((function(e){return e.owner.id===g})).length>=ft)F(Object(r.jsxs)(p.a,{redButton:{onClicked:function(){return F(null)}},greenButton:{text:"Check plans",onClicked:function(){F(null),R.push("/pricing")}},children:["Your current plan has a limit of ",Object(r.jsx)("b",{children:ft})," saved search",1===ft?"":"es",".",Object(r.jsx)("br",{}),"Either you delete your saved search",1===ft?"":"es"," ","or you can upgrade your plan."]}));else{var e=_t();Object.keys(e).length?Y(e):(de((function(e){return e.trim()})),he((function(e){return e.trim()})),fe((function(e){return e.trim()})),_e((function(e){return e.trim()})),ye((function(e){return e.trim()})),ze(2))}}()},children:[Object(r.jsx)("div",{className:O.a.title,children:P?"EDIT SEARCH - "+P.name:"NEW SEARCH"}),Object(r.jsxs)("div",{className:O.a.inputGroups,children:[Object(r.jsx)("div",{className:O.a.inputGroup,children:Object(r.jsxs)("div",{className:O.a.inputWrapper,children:[Object(r.jsx)(p.g,{leftText:"Main brand or topic to track"}),Object(r.jsx)(se,{className:O.a.input,value:le,changeHandler:function(e){return de(e)},error:H.mainBrand})]})}),Object(r.jsxs)("div",{className:O.a.inputGroup,children:[Object(r.jsxs)("div",{className:O.a.inputWrapper,children:[Object(r.jsx)(p.g,{leftText:"Compare with 1"}),Object(r.jsx)(se,{className:O.a.input,value:be,changeHandler:function(e){return he(e)},error:H.competitor1})]}),Object(r.jsxs)("div",{className:O.a.inputWrapper,children:[Object(r.jsx)(p.g,{leftText:"Compare with 2",rightText:"(Optional)"}),Object(r.jsx)(se,{className:O.a.input,value:pe,changeHandler:function(e){return fe(e)},error:H.competitor2})]}),Object(r.jsxs)("div",{className:O.a.inputWrapper,children:[Object(r.jsx)(p.g,{leftText:"Compare with 3",rightText:"(Optional)"}),Object(r.jsx)(se,{className:O.a.input,value:ge,changeHandler:function(e){return _e(e)},error:H.competitor3})]}),Object(r.jsxs)("div",{className:O.a.inputWrapper,children:[Object(r.jsx)(p.g,{leftText:"Compare with 4",rightText:"(Optional)"}),Object(r.jsx)(se,{className:O.a.input,value:Se,changeHandler:function(e){return ye(e)},error:H.competitor4})]})]}),Object(r.jsxs)("div",{className:O.a.inputGroup,children:[Object(r.jsxs)("div",{className:O.a.inputWrapper,children:[Object(r.jsx)(p.g,{leftText:"Market"}),Object(r.jsx)(ie,{options:W,value:Ie,changeHandler:function(e){return Te(e)},error:H.marketCode})]}),Object(r.jsxs)("div",{className:O.a.inputWrapper,children:[Object(r.jsx)(p.g,{leftText:"Industry"}),Object(r.jsx)(ie,{options:D,value:Ee,changeHandler:function(e){return De(e)},error:H.industryId})]})]})]}),Object(r.jsx)("button",{ref:Je,className:O.a.nextButton,style:{marginTop:32},type:"submit",children:"Next"})]}),Object(r.jsxs)("div",{className:O.a.list,children:[Object(r.jsx)("div",{className:O.a.title,children:"YOUR SAVED SEARCHES"}),Object(r.jsxs)("div",{className:O.a.listItems,children:[vt.map((function(e,t){return Object(r.jsxs)("div",{className:O.a.listItem,children:[Object(r.jsxs)("div",{className:O.a.listItemText,children:[Object(r.jsxs)("div",{title:e.name,children:[e.name,!!e.owner.fullName&&" (by ".concat(e.owner.fullName,")")]}),e.isPending&&Object(r.jsx)("div",{children:"PENDING"})]}),e.owner.id===g&&Object(r.jsxs)(r.Fragment,{children:[e.id!==(null===P||void 0===P?void 0:P.id)&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:O.a.listItemButtonData,onClick:function(){return t=e.id,L(!0),void setTimeout((function(){R.push("/searches/"+t+"?stage=2"),L(!1)}),500);var t},children:Object(r.jsx)("div",{children:"Data"})}),Object(r.jsxs)("div",{className:O.a.listItemButtonEdit,onClick:function(){return t=e.id,L(!0),void setTimeout((function(){R.push("/searches/"+t),L(!1)}),500);var t},children:[Object(r.jsx)("div",{children:"Edit"})," ",Object(r.jsx)(y.Edit,{width:15})]})]}),Object(r.jsxs)("div",{className:O.a.listItemButtonDelete,onClick:function(){return function(e){return yt.apply(this,arguments)}(e)},children:[Object(r.jsx)("div",{children:"Delete"})," ",Object(r.jsx)(y.Trash,{size:18})]})]})]},t)})),vt.length<3&&Object(j.a)(Array(3-vt.length).keys()).map((function(e,t){return Object(r.jsx)("div",{className:O.a.listItem},t)}))]})]})]}),2===Me&&Object(r.jsxs)("div",{className:O.a.stage2,children:[Object(r.jsx)("div",{className:O.a.title,children:P?"EDIT SEARCH - "+P.name:"NEW SEARCH"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:O.a.backButton,onClick:function(){return ze(1)},children:"Go back"}),Object(r.jsxs)("div",{style:{marginTop:16},children:[Object(r.jsx)("span",{className:O.a.subtitle,children:"At this point, you could either start off with the search you just did or you could tweak your data to make sure it suits you"}),Object(r.jsx)("button",{className:O.a.nextButton,style:{margin:"4px 4px 4px 16px"},type:"button",onClick:function(){return Nt()},children:"Next"})]})]}),Object(r.jsxs)("div",{className:O.a.section,children:[Object(r.jsxs)("div",{className:O.a.aside,children:[Object(r.jsxs)("div",{className:O.a.subtitleWrapper,children:[Object(r.jsx)("div",{className:O.a.subtitle,children:"Refine your sentiment data"}),Object(r.jsx)(y.Warning,{className:O.a.warningIcon})]}),Object(r.jsxs)("div",{className:O.a.description,children:[Object(r.jsx)("p",{children:Object(r.jsx)("b",{children:"Your search is now taking in all references of your entered brand name, if needed you can narrow down your search by only looking at certain words or remove words not related to your brand."})}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:O.a.warningText,children:"(Warning)"})," As this can skew your data only do this for generic brand names that are shared with other unrelated topics/brands such as \u201dApple\u201d or if you wish to only include specific topics regarding a brand such as \u201dApple AND headphones\u201d. Otherwise we recommend you to not add words."]}),Object(r.jsxs)("p",{className:O.a.toggle,onClick:function(){return He((function(e){return!e}))},children:[Object(r.jsx)(y.Triangle,{className:O.a.toggleIcon,style:{transform:"rotate(".concat(Ge?180:90,"deg)")}}),Object(r.jsx)("b",{children:"Sentiment data collected from:"})]}),Ge&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Online news (Financial Times, Dagens Nyheter, LeMonde, etc)"}),Object(r.jsx)("p",{children:"Social media (Facebook, Twitter, Instagram, etc)"}),Object(r.jsx)("p",{children:"Blogs (Yanko Design, kitchn, etc)"}),Object(r.jsx)("p",{children:"Forums (Reddit, etc)"}),Object(r.jsx)("p",{children:"Product reviews (Yelp, etc), video* (Youtube, Vimeo, etc.)"})]})]})]}),Object(r.jsxs)("div",{className:O.a.main,children:[It(Ke,Xe),Object(r.jsx)(z,Object(u.a)(Object(u.a)({className:O.a.wordSelector},it),{},{onWordStatusChanged:function(e){st((function(t){ce()(t,[Ke,Ie],(function(t){return Object(u.a)(Object(u.a)({},t),e)}))}))}}))]})]}),Object(r.jsxs)("div",{className:O.a.section,children:[Object(r.jsxs)("div",{className:O.a.aside,children:[Object(r.jsxs)("div",{className:O.a.subtitleWrapper,children:[Object(r.jsx)("div",{className:O.a.subtitle,children:"Refine your search data"}),Object(r.jsx)(y.Warning,{className:O.a.warningIcon})]}),Object(r.jsxs)("div",{className:O.a.description,children:[Object(r.jsx)("p",{children:Object(r.jsx)("b",{children:"Your search is now taking in all data related to your entered brand name, if needed you can narrow down your search by only looking at certain words or remove words completely unrelated to your brand."})}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:O.a.warningText,children:"(Warning)"})," As this can skew your data only do this for generic brand names that are shared with other unrelated topics/brands such as \u201dApple\u201d or if you wish to only include specific search terms of a brand such as \u201dApple iPhone\u201d. Otherwise we recommend you to not add words."]}),Object(r.jsxs)("p",{className:O.a.toggle,onClick:function(){return Ue((function(e){return!e}))},children:[Object(r.jsx)(y.Triangle,{className:O.a.toggleIcon,style:{transform:"rotate(".concat(Pe?180:90,"deg)")}}),Object(r.jsx)("b",{children:"Search data collected from:"})]}),Pe&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Google"}),Object(r.jsx)("p",{children:"Youtube"}),Object(r.jsx)("p",{children:"Bing"}),Object(r.jsx)("p",{children:"Amazon (USA)"}),Object(r.jsx)("p",{children:"eBay"}),Object(r.jsx)("p",{children:"Play Store"}),Object(r.jsx)("p",{children:"Instagram (Global Searches)"}),Object(r.jsx)("p",{children:"Twitter (Global Searches)"})]})]})]}),Object(r.jsxs)("div",{className:O.a.main,children:[It(tt,nt),Object(r.jsx)(U,Object(u.a)(Object(u.a)({className:O.a.searchTable,columns:[{label:"Keywords",field:"id"},{label:"Search volume",field:"volume",isSortable:!0,isSqueezed:!0}]},ot),{},{hasFilter:!0,filteringFields:["id","volume"],hasRowSelection:!0,onSelectedRowIdsChanged:function(e){st((function(t){ae()(t,[tt,Ie,"selected"],e)}))}}))]})]}),Object(r.jsxs)("div",{className:O.a.section,children:[Object(r.jsxs)("div",{className:O.a.aside,children:[Object(r.jsx)("div",{className:O.a.subtitle,children:"Mentions"}),Object(r.jsx)("div",{className:O.a.description,children:Object(r.jsx)("p",{children:"These are your up to 200 latest mentions of your brand. This is for you to get an understanding of your data and remove all topics that are not relevant for your brand analysis. It will take up to 72 hours for your news mentions to show up, so feel free to return to this part after your search is done to see your results."})})]}),Object(r.jsxs)("div",{className:O.a.main,children:[It(ut,jt),Object(r.jsx)(U,Object(u.a)(Object(u.a)({className:O.a.searchTable,columns:[{label:"Article",field:"link",isExpandable:!0},{label:"Source",field:"source",isSortable:!0,isSqueezed:!0},{label:"Category",field:"category",isSortable:!0,isSqueezed:!0},{label:"Date",field:"time",isSortable:!0,isDate:!0,isSqueezed:!0}]},pt),{},{hasRowDeletion:!0,onRowDeleted:function(e){Ot((function(t){ce()(t,[ut,Ie,"removed"],(function(t){return Object(u.a)(Object(u.a)({},t),{},Object(s.a)({},e,!0))}))}))},noRowsText:"No mentions found"})),Object(r.jsx)("button",{className:O.a.nextButton,style:{marginTop:32},onClick:function(){return Nt()},children:"Next"})]})]})]})]})}));t.default=function(){return Object(r.jsxs)(c.d,{children:[Object(r.jsx)(c.b,{exact:!0,path:"/searches/:id",render:function(e){return Object(r.jsx)(oe,{},e.location.pathname+e.location.search)}}),Object(r.jsx)(c.a,{to:"/searches/new"})]})}}}]);
//# sourceMappingURL=6.8b9201bf.chunk.js.map