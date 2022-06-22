(function(){"use strict";var e={4028:function(e,t,a){var n=a(9242),r=a(3396);const o={class:"container"};function i(e,t,a,n,i,l){const s=(0,r.up)("Header"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(s),(0,r.Wm)(u)])}const l=["src"];function s(e,t,a,n,o,i){return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("img",{src:o.image,alt:"csgo-logo"},null,8,l)])}var u={name:"Header",data(){return{image:a(6949)}}},c=a(89);const d=(0,c.Z)(u,[["render",s],["__scopeId","data-v-a39d9aee"]]);var f=d,p={name:"app",components:{Header:f}};const m=(0,c.Z)(p,[["render",i]]);var g=m,h=a(678);const v={class:"search"},_=(0,r._)("h1",null,"Track Player Stats",-1),y={class:"form-group"},b=(0,r._)("label",{for:"steamid"},"Steam Profile",-1),w=(0,r._)("div",{class:"form-group"},[(0,r._)("input",{type:"submit",value:"Submit",class:"btn"})],-1);function D(e,t,a,o,i,l){return(0,r.wg)(),(0,r.iD)("section",v,[_,(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)(((...e)=>l.onSubmit&&l.onSubmit(...e)),["prevent"]))},[(0,r._)("div",y,[b,(0,r.wy)((0,r._)("input",{type:"text",name:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.steamid=e),id:"steamid",placeholder:"Steam ID, Steam Community URL, Steam Vanity Username"},null,512),[[n.nr,i.steamid]])]),w],32)])}var k={name:"Search",data(){return{steamid:""}},beforeCreate(){document.body.className="body-bg-image"},methods:{onSubmit(){this.steamid?this.$router.push(`/profile/steam/${this.steamid}`):this.$toast.error("Please enter a steamid",{position:"top",duration:4e3})}}};const O=(0,c.Z)(k,[["render",D]]);var S=O,P=a(7139);const x=e=>((0,r.dD)("data-v-ea04497e"),e=e(),(0,r.Cn)(),e),U={key:0},j=x((()=>(0,r._)("h3",null,"Loading...",-1))),z=[j],C={key:1},V=(0,r.Uk)("Go Back"),I={key:2,class:"container"},Z={class:"gamertag"},$=["src"],H={class:"grid"},W=["src"],q=x((()=>(0,r._)("h4",null,"Kills",-1))),G=x((()=>(0,r._)("h4",null,"Deaths",-1))),T=x((()=>(0,r._)("h4",null,"K/D",-1))),B=x((()=>(0,r._)("h4",null,"Game time",-1))),K=(0,r.Uk)("Go Back");function L(e,t,a,n,o,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",null,[o.loading?((0,r.wg)(),(0,r.iD)("div",U,z)):(0,r.kq)("",!0),o.error?((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("h1",null,(0,P.zw)(o.error),1),(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[V])),_:1})])):(0,r.kq)("",!0),o.profileData?((0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("h1",Z,[(0,r._)("img",{src:o.profileData.platformInfo.avatarUrl,alt:"profile avatar",class:"platform-avatar"},null,8,$),(0,r.Uk)(" "+(0,P.zw)(o.profileData.platformInfo.platformUserHandle),1)]),(0,r._)("div",H,[(0,r._)("div",null,[(0,r._)("img",{src:o.image,alt:"ct image"},null,8,W)]),(0,r._)("div",null,[(0,r._)("ul",null,[(0,r._)("li",null,[q,(0,r._)("p",null,(0,P.zw)(o.profileData.segments[0].stats.kills.displayValue),1)]),(0,r._)("li",null,[G,(0,r._)("p",null,(0,P.zw)(o.profileData.segments[0].stats.deaths.displayValue),1)]),(0,r._)("li",null,[T,(0,r._)("p",null,(0,P.zw)(o.profileData.segments[0].stats.kd.displayValue),1)]),(0,r._)("li",null,[B,(0,r._)("p",null,(0,P.zw)(o.profileData.segments[0].stats.timePlayed.displayValue),1)])])])]),(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[K])),_:1})])):(0,r.kq)("",!0)])}var M=a(6265),N=a.n(M),E={name:"Profile",data(){return{loading:!1,error:null,profileData:null,image:a(2131)}},beforeCreate(){document.body.className="body-bg-no-image"},async created(){this.loading=!0;try{const e=await N().get(`/api/v1/profile/steam/${this.$route.params.steamid}`);this.profileData=e.data.data,console.log(this.profileData),this.loading=!1}catch(e){this.loading=!1,this.error=e.response.data.message}}};const F=(0,c.Z)(E,[["render",L],["__scopeId","data-v-ea04497e"]]);var R=F;const A=[{path:"/",name:"search",component:S},{path:"/profile/steam/:steamid",name:"profile",component:R}],J=(0,h.p7)({history:(0,h.PO)("/"),routes:A});var Q=J,X=a(5860);(0,n.ri)(g).use(Q).use(X.ZP).mount("#app")},6949:function(e,t,a){e.exports=a.p+"img/logo.f72e9892.png"},2131:function(e,t,a){e.exports=a.p+"img/player.ef2839af.png"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],l=n[1],s=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var c=s(a)}for(t&&t(n);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4028)}));n=a.O(n)})();
//# sourceMappingURL=app.68ca3185.js.map