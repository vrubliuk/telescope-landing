(this["webpackJsonpgraviz-telescope"]=this["webpackJsonpgraviz-telescope"]||[]).push([[7],{603:function(e,t,i){"use strict";t.a={ids:["data robustness score","competitiveness","share of search","share of earned media","attitude","sentiment drivers","business drivers","general attributes","position vs competition","key areas","awareness","reputation index","reputation sentiment","reputation distribution","esg index","esg sentiment","esg distribution","funnel"],entities:{competitiveness:{id:"competitiveness",name:"Competitiveness",description:"Your Competitiveness score shows you if you are creating demand from the market. This curve shows your search volume weighted with sentiment of the search. Baseline 0 shows your industry average and in order to gain market share you are recommended to stay above 0.",icon:"Competitiveness",image:"lineChartWidget",relatedWidgetIds:["share of search","share of earned media"]},"share of search":{id:"share of search",name:"Share of search",description:"Your Share of Search shows how much interest you are generating in comparison to your competitors. Marketing academia together with Google have correlated share of search with market share.",icon:"ShareOfSearch",image:"timeLineWidget",relatedWidgetIds:["competitiveness","share of earned media"]},"share of earned media":{id:"share of earned media",name:"Share of earned media",description:"Your share of Earned Media shows you how much talk you are generating in comparison to your competitors. This indicates the creativity of your marketing communications and the ability to create an emotional response from the market. Creating emotion is key to long term brand building, however if the sentiment is negative it could indicate a crisis (look at your sentiment in the \u201cEmotions\u201d section).",icon:"ShareOfEarnedMedia",image:"shareOfEarnedMediaPieChart",relatedWidgetIds:["share of search","share of earned media"]},attitude:{id:"attitude",name:"Attitude",description:"In what tone is the market talking about your brand? Is your marketing having an impact on the market's sentiment towards you? Look at how your score differs from your competitors.",icon:"Attitude",image:"competitorsPieWidget",relatedWidgetIds:["sentiment drivers","business drivers"]},"sentiment drivers":{id:"sentiment drivers",name:"Top sentiment drivers",description:"The top sentiment drivers show what topics are most frequently being discussed when talking about you in a negative or positive way. Look into what these topics are to get insights into customer pain points and what they are happy with.",icon:"SentimentDrivers",image:"sentimentDriversPositive",relatedWidgetIds:["attitude","business drivers"]},"business drivers":{id:"business drivers",name:"Business drivers",description:"The business drivers are built on the 7 P\u2019s of marketing which breaks down a brand into its key components. Here we show you a holistic view of why customers are choosing your brand over your competitors.",icon:"BusinessDrivers",image:"reputationDestributionBar",relatedWidgetIds:["attitude","sentiment drivers"]},"general attributes":{id:"general attributes",name:"Associated words",description:"Associated words show the words most associated with you and your competitors, and how strong you are compared to competitors in regards to those attributes.",icon:"AssociatedWords",image:"associatedWordsWidget",relatedWidgetIds:["position vs competition","key areas"]},"position vs competition":{id:"position vs competition",name:"Business driver positioning",description:"Position vs Competition shows what your strongest area is compared to your competitors based on the 7 P\u2019s of marketing.",icon:"BusinessDriverPositioning",image:"positionVScompetitionWidget",relatedWidgetIds:["general attributes","key areas"]},"key areas":{id:"key areas",name:"Key business drivers",description:"Key Areas shows a recommendation on what business drivers are most active in driving your market share today and what has the biggest impact to impact it positively in the future. This is a predictive analysis based on a regression analysis of what P\u2019s have affected your brand most historically in order to forecast the future.",icon:"KeyBusinessDrivers",image:"newKeyAreas",relatedWidgetIds:["general attributes","position vs competition"]},awareness:{id:"awareness",name:"Awareness",description:"This overview shows the awareness of your brand taking into consideration the biggest competitors in your segment.",icon:"Awareness",image:"awarenessPieCharts",relatedWidgetIds:[]},"reputation index":{id:"reputation index",name:"Reputation index",description:"Using Harvard Business School\u2019s parameters defining reputation this indicator identifies whether a company and therefore it\u2019s management, is considered to have a good or bad reputation. This is a compound indicator index where the weight of the parameters is automatically set by monitoring the regional and social importance of multiple topics. The values range between +100 and -100 where a positive score means an overall good reputation and negative means a downward trend in your reputation.",icon:"Competitiveness",image:"reputationIndexLinechart",relatedWidgetIds:["reputation sentiment","reputation distribution"]},"reputation sentiment":{id:"reputation sentiment",name:"Reputation sentiment",description:"The Reputation sentiment metric is an analysis of whether people have a positive, neutral or negative attitude towards your company divided in 6 parameters.",icon:"Reputation",image:"reputationSentimentLinechart",relatedWidgetIds:["reputation index","reputation distribution"]},"reputation distribution":{id:"reputation distribution",name:"Reputation distribution",description:"This framework looks at six parameters that drive the reputation for your company. The Graph shows what parameters that are the most talked-about online for your company\u2019 in regards to your reputation.",icon:"BusinessDrivers",image:"reputationDestributionBar",relatedWidgetIds:["reputation sentiment","reputation sentiment"]},"esg index":{id:"esg index",name:"Esg index",description:"The ESG this indicator identifies whether a company is considered to have a good or bad ESG. This is a compound indicator index where the weight of the parameters is automatically set by monitoring the regional and social importance of multiple topics. The values range between +100 and -100 where a positive score means an overall good ESG and negative means a downward trend in your ESG.",icon:"Competitiveness",image:"esgIndexLinechart",relatedWidgetIds:["esg sentiment","esg distribution"]},"esg sentiment":{id:"esg sentiment",name:"Esg sentiment",description:"The ESG sentiment metric is an analysis of whether people have a positive, neutral or negative attitude towards your company divided in the ESG parameters.",icon:"Reputation",image:"esgSentimentLinechart",relatedWidgetIds:["esg index","esg distribution"]},"esg distribution":{id:"esg distribution",name:"Esg distribution",description:"This framework looks at the esg parameters that drive the ESG for your company. The Graph shows what parameters that are the most talked-about online for your company\u2019 in regards to your ESG.",icon:"BusinessDrivers",image:"esgDestributionWidget",relatedWidgetIds:["esg sentiment","esg sentiment"]},funnel:{id:"funnel",name:"Funnel",description:"A marketing funnel describes your customer's journey with you. From the initial stages when someone learns about your business, to the purchasing stage, marketing funnels map routes to conversion.",icon:"FunnelOverview",image:"funnelHorizontal",relatedWidgetIds:[]}}}},610:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i(1),n=i(2),a=i(611),r=i.n(a),o=i(13),d=i(603),c=function(e){var t=e.className,i=void 0===t?"":t,a=e.style,c=e.name,u=e.prices,l=e.pricesBilledAnually,m=e.searchesLimit,p=e.dashboardsLimit,h=e.marketsLimit,b=e.company,g=e.availableWidgets,v=e.status,y=e.clickHandler,f=[{label:"Monthly searches",value:m},{label:"Brand dashboards",value:p},{label:"Markets",value:h},{label:"Company members/admins",value:"".concat(b.membersLimit,"/").concat(b.adminsLimit)}],w=Object(n.useMemo)((function(){return g.reduce((function(e,t){var i,s=null===(i=d.a.entities[t])||void 0===i?void 0:i.name;return s&&e.push(s),e}),[])}),[g]);return Object(s.jsxs)("div",{className:"".concat(r.a.subscriptionPlanTile," ").concat(i),style:a,children:[Object(s.jsx)("div",{className:r.a.name,title:c,children:c}),Object(s.jsxs)("div",{className:r.a.price,title:"".concat(Object(o.d)(u.gbp,"gbp")," (").concat(Object(o.d)(u.sek,"sek"),") / per month"),children:[Object(s.jsxs)("span",{children:[Object(o.d)(u.gbp,"gbp"),Object(s.jsx)("span",{children:Object(o.d)(u.sek,"sek")})]})," ",Object(s.jsx)("sub",{children:"/per month"})]}),Object(s.jsxs)("div",{className:r.a.priceBilledAnually,title:"".concat(Object(o.d)(l.gbp,"gbp")," (").concat(Object(o.d)(l.sek,"sek"),") / per month billed annually"),children:[Object(s.jsxs)("span",{children:[Object(o.d)(l.gbp,"gbp"),Object(s.jsx)("span",{children:Object(o.d)(l.sek,"sek")})]})," ",Object(s.jsx)("sub",{children:"/per month billed annually"})]}),f.map((function(e,t){var i=e.label,n=e.value;return Object(s.jsxs)("div",{className:r.a.feature,children:[Object(s.jsx)("div",{children:i}),Object(s.jsx)("div",{children:n})]},t)})),Object(s.jsx)("div",{className:r.a.feature,children:Object(s.jsx)("div",{children:"Included widgets"})}),Object(s.jsx)("div",{className:r.a.widgets,children:w.map((function(e){return Object(s.jsxs)("div",{className:r.a.widget,title:e,children:["- ",e]},e)}))}),Object(s.jsx)("div",{className:r.a.bottom,children:v?Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("span",{style:{textTransform:"capitalize"},children:v})," plan"]}):y&&Object(s.jsx)("button",{className:r.a.button,onClick:y,children:"Choose this plan"})})]})}},611:function(e,t,i){e.exports={subscriptionPlanTile:"SubscriptionPlanTile_subscriptionPlanTile__2WL8t",name:"SubscriptionPlanTile_name__1efq_",price:"SubscriptionPlanTile_price__3SpPq",priceBilledAnually:"SubscriptionPlanTile_priceBilledAnually__3YUYX",feature:"SubscriptionPlanTile_feature__3iwE7",widgets:"SubscriptionPlanTile_widgets__3kSK4",widget:"SubscriptionPlanTile_widget__3DGZV",bottom:"SubscriptionPlanTile_bottom__3F4Qk",button:"SubscriptionPlanTile_button__3Ntp1"}},665:function(e,t,i){e.exports={subscriptionPlansPage:"SubscriptionPlansPage_subscriptionPlansPage__1hW9x",title:"SubscriptionPlansPage_title__3XAZ7",tiles:"SubscriptionPlansPage_tiles__3fVLc",tile:"SubscriptionPlansPage_tile__1YyAh",enterpriseTile:"SubscriptionPlansPage_enterpriseTile__3Hhwk"}},678:function(e,t,i){"use strict";i.r(t);var s=i(5),n=i.n(s),a=i(6),r=i(8),o=i(2),d=i(1),c=i(665),u=i.n(c),l=i(610),m=i(31),p=i(30),h=i(127),b=i(43),g=i(34),v=i(46);t.default=Object(p.b)((function(e){var t,i=e.user,s=e.company;return{isUserAdmin:Boolean(null===(t=s.members.find((function(e){return e.id===i.id})))||void 0===t?void 0:t.isAdmin),userSubscriptionPlanIds:s.subscriptionPlanIds}}),{requestCompanySubscriptionPlanUpgrade:g.requestCompanySubscriptionPlanUpgrade})((function(e){var t=e.isUserAdmin,i=e.userSubscriptionPlanIds,s=e.requestCompanySubscriptionPlanUpgrade,c=Object(o.useContext)(b.a).setIsGlobalPreloaderShown,g=Object(p.d)((function(e){return e.subscriptionPlans.status})),y=Object(p.d)(h.d),f=Object(p.c)(),w=Object(o.useRef)(!0);function j(e){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(n.a.mark((function e(i){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return v.notify.show("Please contact your company administrator in order to upgrade the current plan","warning",5e3),e.abrupt("return");case 3:return c(!0),e.prev=4,e.next=7,s(i);case 7:v.notify.show("Your contact person at My Telescope will soon be in touch with you","success",5e3),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.dir(e.t0),v.notify.show("Oops, something went wrong","error");case 14:c(!1);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){!w.current||"idle"!==g&&"failed"!==g||(w.current=!1,f(Object(h.b)()))}),[g,f]),"idle"===g||"loading"===g?Object(d.jsx)(m.h,{modifier:"inner"}):Object(d.jsxs)("div",{className:u.a.subscriptionPlansPage,children:[Object(d.jsx)("div",{className:u.a.title,children:"Plans and pricing"}),Object(d.jsx)("div",{className:u.a.tiles,children:y.map((function(e,t){return Object(o.createElement)(l.a,Object(a.a)(Object(a.a)({className:u.a.tile},e),{},{status:e.id===i.current?"current":e.id===i.requested?"requested":void 0,clickHandler:function(){return j(e.id)},key:t}))}))}),Object(d.jsxs)("div",{className:u.a.enterpriseTile,onClick:function(){return j("enterprise")},children:[Object(d.jsx)("b",{children:"Enterprise:"})," A custom solution to fit the marketing needs of your business (Contact us)"]})]})}))}}]);
//# sourceMappingURL=7.1d1a7fa3.chunk.js.map