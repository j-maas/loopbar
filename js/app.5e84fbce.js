(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(u.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},u=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/loopbar/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var s=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1288:function(t,e,n){"use strict";n("6f96")},1493:function(t,e,n){},"1ae8":function(t,e,n){},"35c6":function(t,e,n){"use strict";n("1ae8")},"5b5b":function(t,e,n){"use strict";n("9553")},"6d44":function(t,e,n){},"6f96":function(t,e,n){},"6fc2":function(t,e,n){"use strict";n("1493")},9553:function(t,e,n){},a958:function(t,e,n){"use strict";n("6d44")},b7dd:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(t,e){var n=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}n("1288");const u={};u.render=a;var o=u,i=n("9483");Object(i["a"])("".concat("/loopbar/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var c=n("6c02"),l=Object(r["M"])("data-v-91f06490");Object(r["t"])("data-v-91f06490");var s={class:"root-container"},d={key:0,class:"control-container"},p={class:"video-area"},b={class:"video-controls"},f={class:"control-group"},v=Object(r["f"])("Speed (in %)"),m={class:"control-group"},O={class:"compact-label"},j=Object(r["f"])(" Loop "),h={class:"control-group"},g={class:"compact-label"},y=Object(r["f"])(" Mirrored "),k={class:"currentTime"},S={class:"loop-area"},I={class:"inline-label"},x=Object(r["f"])(" Loop title: "),V={class:"loop-settings"},w={class:"input-with-button"},T=Object(r["f"])("from"),_=Object(r["f"])("for duration"),C={class:"input-with-button"},L=Object(r["f"])("to"),M={class:"loop-settings"},N=Object(r["f"])(" Shift loop "),B=Object(r["f"])("Shift multiplier"),D={class:"loop-settings"},P=Object(r["f"])("Preparation"),E=Object(r["f"])(" Choose a video file ");Object(r["r"])();var F=l((function(t,e,n,a,u,o){var i=Object(r["y"])("VideoPlayer"),c=Object(r["y"])("NumberInput"),F=Object(r["y"])("Slider"),q=Object(r["y"])("LoopTrackStack"),U=Object(r["y"])("BeatSettings");return Object(r["q"])(),Object(r["d"])("div",s,[null!==t.videoFile?(Object(r["q"])(),Object(r["d"])("div",d,[Object(r["g"])("div",p,[Object(r["g"])(i,{ref:"player",class:"player",file:t.videoFile,"onUpdate:timeDisplay":e[1]||(e[1]=function(e){return t.currentTimeDisplay=e}),"onUpdate:isPlaying":e[2]||(e[2]=function(e){return t.isPlaying=e}),playbackRate:t.playbackRate,"onUpdate:playbackRate":e[3]||(e[3]=function(e){return t.playbackRate=e}),"onUpdate:duration":e[4]||(e[4]=function(e){return t.duration=e}),mirrored:t.mirrored},null,8,["file","playbackRate","mirrored"]),Object(r["g"])("div",b,[Object(r["g"])("div",f,[Object(r["g"])("button",{onClick:e[5]||(e[5]=function(e){return t.togglePlay()})},Object(r["A"])(t.playButtonText),1),Object(r["g"])(c,{modelValue:t.playbackRatePercent,"onUpdate:modelValue":e[6]||(e[6]=function(e){return t.playbackRatePercent=e}),step:5},{default:l((function(){return[v]})),_:1},8,["modelValue"])]),Object(r["g"])("div",m,[Object(r["g"])("label",O,[Object(r["K"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.isLooping=e})},null,512),[[r["E"],t.isLooping]]),j]),Object(r["g"])("button",{onClick:e[8]||(e[8]=function(e){return t.goToLoopStart()})},"Go to loop start")]),Object(r["g"])("div",h,[Object(r["g"])("label",g,[Object(r["K"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=function(e){return t.mirrored=e})},null,512),[[r["E"],t.mirrored]]),y])])]),Object(r["g"])("span",k," Beat #"+Object(r["A"])(t.bar)+" ("+Object(r["A"])(t.currentTimeIndicator)+") ",1),Object(r["g"])(F,{class:"time-slider",modelValue:t.currentTimeDisplay,"onUpdate:modelValue":e[10]||(e[10]=function(e){return t.seekToSecond(e)}),min:0,max:t.duration,step:.01},null,8,["modelValue","max"]),null!==t.durationInBars?(Object(r["q"])(),Object(r["d"])(q,{key:0,loops:t.loops,selected:t.selectedLoop,"onUpdate:selected":e[11]||(e[11]=function(e){return t.selectedLoop=e}),duration:t.durationInBars},null,8,["loops","selected","duration"])):Object(r["e"])("",!0)]),Object(r["g"])("div",S,[Object(r["g"])("label",I,[x,Object(r["K"])(Object(r["g"])("input",{class:"margin-left",type:"text","onUpdate:modelValue":e[12]||(e[12]=function(e){return t.loopTitle=e})},null,512),[[r["G"],t.loopTitle]])]),Object(r["g"])("div",V,[Object(r["g"])("div",w,[Object(r["g"])(c,{modelValue:t.range.start,"onUpdate:modelValue":e[13]||(e[13]=function(e){return t.range.setStart(e)}),class:"narrow-input"},{default:l((function(){return[T]})),_:1},8,["modelValue"]),Object(r["g"])("button",{onClick:e[14]||(e[14]=function(e){return t.loopStartToNowClicked()})},"set to now")]),Object(r["g"])(c,{modelValue:t.range.duration,"onUpdate:modelValue":e[15]||(e[15]=function(e){return t.range.setDurationByShiftingEnd(e)}),class:"narrow-input"},{default:l((function(){return[_]})),_:1},8,["modelValue"]),Object(r["g"])("div",C,[Object(r["g"])(c,{modelValue:t.range.end,"onUpdate:modelValue":e[16]||(e[16]=function(e){return t.range.setEnd(e)}),class:"narrow-input"},{default:l((function(){return[L]})),_:1},8,["modelValue"]),Object(r["g"])("button",{onClick:e[17]||(e[17]=function(e){return t.loopEndToNowClicked()})},"set to now")])]),Object(r["g"])("div",M,[N,Object(r["g"])("button",{onClick:e[18]||(e[18]=function(e){return t.shiftLoop(-1)})},"⬅️"),Object(r["g"])("button",{onClick:e[19]||(e[19]=function(e){return t.shiftLoop(1)})},"➡️️"),Object(r["g"])(c,{modelValue:t.shiftMultiplier,"onUpdate:modelValue":e[20]||(e[20]=function(e){return t.shiftMultiplier=e})},{default:l((function(){return[B]})),_:1},8,["modelValue"])]),Object(r["g"])("div",D,[Object(r["g"])(c,{modelValue:t.warmup,"onUpdate:modelValue":e[21]||(e[21]=function(e){return t.warmup=e}),class:"narrow-input"},{default:l((function(){return[P]})),_:1},8,["modelValue"])]),t.loopIsSelected?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])("button",{key:0,onClick:e[22]||(e[22]=function(e){return t.saveLoop()})},"Save")),t.loopIsSelected?(Object(r["q"])(),Object(r["d"])("button",{key:1,onClick:e[23]||(e[23]=function(e){return t.deleteSelectedLoop()})}," Delete ")):Object(r["e"])("",!0)]),Object(r["g"])(U,{class:"beat-settings",currentTimeDisplay:t.currentTimeDisplay,getCurrentTime:t.getCurrentTime,customBpm:t.customBpm,customOffset:t.customOffset,"onUpdate:bpm":e[24]||(e[24]=function(e){return t.bpm=e}),"onUpdate:offset":e[25]||(e[25]=function(e){return t.offset=e}),onStartPlay:e[26]||(e[26]=function(e){return t.player.play()})},null,8,["currentTimeDisplay","getCurrentTime","customBpm","customOffset"]),Object(r["K"])(Object(r["g"])("textarea",{"onUpdate:modelValue":e[27]||(e[27]=function(e){return t.exportData=e})},null,512),[[r["G"],t.exportData]]),Object(r["g"])("button",{onClick:e[28]||(e[28]=function(e){return t.importData()})},"Import")])):Object(r["e"])("",!0),Object(r["g"])("label",null,[E,Object(r["g"])("input",{ref:"videoFileInput",type:"file",accept:"video/*",onChange:e[29]||(e[29]=function(){return t.videoFileSelected.apply(t,arguments)})},null,544)])])})),q=(n("99af"),n("d81d"),n("a434"),n("b0c0"),n("2909")),U=n("3835"),R=Object(r["M"])("data-v-0120fb31"),A=R((function(t,e,n,a,u,o){return Object(r["q"])(),Object(r["d"])("video",{ref:"player",class:{mirrored:t.mirrored},src:t.source,onLoadedmetadata:e[1]||(e[1]=function(e){return t.durationChanged()}),onClick:e[2]||(e[2]=function(e){return t.togglePlay()}),onPlaying:e[3]||(e[3]=function(e){return t.$emit("update:isPlaying",!0)}),onPause:e[4]||(e[4]=function(e){return t.$emit("update:isPlaying",!1)}),onRatechange:e[5]||(e[5]=function(e){return t.rateChanged()}),onDuration:e[6]||(e[6]=function(e){return t.durationChanged()})},null,42,["src"])})),$=(n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),Object(r["h"])({props:{file:{type:Object},playbackRate:{type:Number,default:1},mirrored:{type:Boolean,default:!1}},emits:["update:time-display","update:isPlaying","update:playbackRate","update:duration"],setup:function(t,e){var n=Object(r["v"])(null),a=Object(r["b"])((function(){if(null!=t.file){var e=URL.createObjectURL(t.file);return e}return null}));Object(r["I"])(Object(r["B"])(t,"playbackRate"),(function(t){n.value.playbackRate=t}));var u=null,o=function t(){var r,a=null===(r=n.value)||void 0===r?void 0:r.currentTime;null!==a&&u!==a&&(u=a,e.emit("update:time-display",a)),requestAnimationFrame(t)};return Object(r["o"])(o),{player:n,source:a}},methods:{getCurrentTime:function(){return this.player.currentTime},seekToSecond:function(t){this.player.currentTime=t},togglePlay:function(){this.player.paused||this.player.ended?this.play():this.player.pause()},play:function(){this.player.play()},pause:function(){this.player.pause()},rateChanged:function(){var t=this.player.playbackRate;this.$emit("update:playbackRate",t)},durationChanged:function(){var t=this.player.duration;this.$emit("update:duration",t)}}}));n("a958");$.render=A,$.__scopeId="data-v-0120fb31";var z=$,J=Object(r["M"])("data-v-ef6d8c70");Object(r["t"])("data-v-ef6d8c70");var K={class:"beat-settings"},G={class:"visualization"},W={class:"beat-indicator"},H={class:"settings-area"},Q={class:"custom setting"},X={class:"header"},Y=Object(r["f"])(" Use custom settings "),Z={class:"inputs"},tt=Object(r["f"])("Beats per minute (bpm)"),et=Object(r["f"])(" Offset "),nt=Object(r["f"])(" % of bpm"),rt={class:"meter setting"},at={class:"header"},ut={key:0},ot={class:"inputs"},it={class:"bpm-display"},ct={key:0,class:"missing-beats"},lt={key:1,class:"bpm"};Object(r["r"])();var st=J((function(t,e,n,a,u,o){var i=Object(r["y"])("NumberInput"),c=Object(r["y"])("SliderInput");return Object(r["q"])(),Object(r["d"])("div",K,[Object(r["g"])("div",G,[Object(r["g"])("span",W,Object(r["A"])(t.beatIndicator),1),Object(r["f"])(" "+Object(r["A"])(t.bpmDisplay)+" bpm ",1)]),Object(r["g"])("div",H,[Object(r["g"])("div",Q,[Object(r["g"])("div",X,[Object(r["g"])("label",null,[Object(r["K"])(Object(r["g"])("input",{type:"radio",name:"beatInput",value:"custom","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.beatInput=e})},null,512),[[r["F"],t.beatInput]]),Y])]),Object(r["g"])("div",Z,[Object(r["g"])(i,{modelValue:t.customBpmRef,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.customBpmRef=e})},{default:J((function(){return[tt]})),_:1},8,["modelValue"]),Object(r["g"])(c,{modelValue:t.customOffsetPercent,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.customOffsetPercent=e}),min:-50,max:50},{unit:J((function(){return[nt]})),default:J((function(){return[et]})),_:1},8,["modelValue"])])]),Object(r["g"])("div",rt,[Object(r["g"])("div",at,[Object(r["g"])("label",null,[Object(r["K"])(Object(r["g"])("input",{type:"radio",name:"beatInput",value:"meter","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.beatInput=e}),disabled:t.beatMeter.needsMoreBeats},null,8,["disabled"]),[[r["F"],t.beatInput]]),Object(r["g"])("div",null,[Object(r["g"])("span",{class:{disabled:t.beatMeter.needsMoreBeats}},"Use tap settings",2),t.beatMeter.needsMoreBeats?(Object(r["q"])(),Object(r["d"])("span",ut," (unavailable until set)")):Object(r["e"])("",!0)])])]),Object(r["g"])("div",ot,[Object(r["g"])("button",{onMousedown:e[5]||(e[5]=function(){return t.tappedBeat.apply(t,arguments)})},"Tap me to the beat",32),Object(r["g"])("div",it,[t.beatMeter.needsMoreBeats?(Object(r["q"])(),Object(r["d"])("span",ct," Set the beats per minute (bpm) by tapping the button. ")):(Object(r["q"])(),Object(r["d"])("span",lt,Object(r["A"])(t.meterBpmDisplay)+" bpm (offset "+Object(r["A"])(t.meterOffsetDisplay)+") ",1))]),Object(r["g"])("button",{onClick:e[6]||(e[6]=function(){return t.resetClicked.apply(t,arguments)})},"Reset bpm")])])])])})),dt=(n("b680"),Object(r["M"])("data-v-261329c0"));Object(r["t"])("data-v-261329c0");var pt={class:"number-input"},bt={class:"label"};Object(r["r"])();var ft=dt((function(t,e,n,a,u,o){return Object(r["q"])(),Object(r["d"])("div",pt,[Object(r["g"])("button",{class:"first-button",onClick:e[1]||(e[1]=function(){return t.decrement.apply(t,arguments)})},"-"+Object(r["A"])(t.step),1),Object(r["g"])("label",null,[Object(r["g"])("div",bt,[Object(r["x"])(t.$slots,"default")]),Object(r["g"])("input",{class:"input",type:"text",inputmode:"decimal",size:"2",value:t.inputText,onChange:e[2]||(e[2]=function(e){return t.newInput(e.target.value)}),onFocus:e[3]||(e[3]=function(t){return t.target.select()})},null,40,["value"])]),Object(r["g"])("button",{class:"second-button",onClick:e[4]||(e[4]=function(){return t.increment.apply(t,arguments)})},"+"+Object(r["A"])(t.step),1)])})),vt=(n("c35a"),n("25f0"),Object(r["h"])({props:{modelValue:{type:Number,required:!0},step:{type:Number,default:1}},emits:["update:modelValue"],setup:function(t){var e=Object(r["C"])(t),n=e.modelValue,a=Object(r["v"])(Ot(n.value));return Object(r["I"])(n,(function(t){var e=mt(a.value);null!=e&&e!==t&&(a.value=Ot(t))})),{inputText:a}},methods:{newInput:function(t){this.inputText=t;var e=mt(t);null!=e&&this.$emit("update:modelValue",e)},increment:function(){this.$emit("update:modelValue",this.modelValue+this.step)},decrement:function(){this.$emit("update:modelValue",this.modelValue-this.step)}}}));function mt(t){var e=Number.parseFloat(t);return isNaN(e)?null:e}function Ot(t){return t%1===0?t.toString():t.toFixed(2)}n("cebe");vt.render=ft,vt.__scopeId="data-v-261329c0";var jt=vt,ht=Object(r["M"])("data-v-47869579");Object(r["t"])("data-v-47869579");var gt={class:"inputs"};Object(r["r"])();var yt=ht((function(t,e,n,a,u,o){var i=Object(r["y"])("Slider");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["g"])("label",null,[Object(r["x"])(t.$slots,"default"),Object(r["g"])("div",gt,[Object(r["g"])("div",null,[Object(r["g"])("input",{type:"text",inputmode:"decimal",value:t.inputText,onChange:e[1]||(e[1]=function(e){return t.newTextInput(e.target.value)})},null,40,["value"]),Object(r["g"])("span",null,[Object(r["x"])(t.$slots,"unit")])]),Object(r["g"])(i,{modelValue:t.modelValue,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.$emit("update:modelValue",e)}),min:t.min,max:t.max,step:t.step},null,8,["modelValue","min","max","step"])])])])})),kt=Object(r["M"])("data-v-777acaa2"),St=kt((function(t,e,n,a,u,o){return Object(r["q"])(),Object(r["d"])("input",{type:"range",value:t.modelValue,onInput:e[1]||(e[1]=function(e){return t.newSliderInput(e.target.value)}),min:t.min,max:t.max,step:t.step},null,40,["value","min","max","step"])})),It=Object(r["h"])({props:{modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:modelValue"],methods:{newSliderInput:function(t){var e=xt(t);null!=e&&this.$emit("update:modelValue",e)}}});function xt(t){var e=Number.parseFloat(t);return isNaN(e)?null:e}It.render=St,It.__scopeId="data-v-777acaa2";var Vt=It,wt=Object(r["h"])({components:{Slider:Vt},props:{modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:modelValue"],setup:function(t){var e=Object(r["C"])(t),n=e.modelValue,a=Object(r["v"])(_t(n.value,t.step)),u=Object(r["b"])((function(){return n.value.toFixed(0)}));return Object(r["I"])(n,(function(e){var n=Tt(a.value);null!=n&&n!==e&&(a.value=_t(e,t.step))})),{inputText:a,modelValueDisplay:u}},methods:{newTextInput:function(t){this.inputText=t;var e=Tt(t);null!=e&&this.$emit("update:modelValue",e)},newSliderInput:function(t){var e=Tt(t);null!=e&&this.$emit("update:modelValue",e)}}});function Tt(t){var e=Number.parseFloat(t);return isNaN(e)?null:e}function _t(t,e){var n=e%1;return 0===n?t.toFixed(0):t.toFixed(2)}n("6fc2");wt.render=yt,wt.__scopeId="data-v-47869579";var Ct=wt,Lt=(n("13d5"),n("fb6a"),n("d4ec")),Mt=n("bee2"),Nt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(Lt["a"])(this,t),this.beats=e,this.period_=0,this.offset_=0,this.calculate(e)}return Object(Mt["a"])(t,[{key:"addBeats",value:function(){var t;(t=this.beats).push.apply(t,arguments),Ut(this.beats),this.calculate(this.beats)}},{key:"reset",value:function(){this.beats=[],this.calculate(this.beats)}},{key:"calculate",value:function(t){this.period_=Pt(t),this.offset_=Ft(t,this.period)}},{key:"period",get:function(){return this.period_}},{key:"bpm",get:function(){return 0===this.period?0:Bt(this.period)}},{key:"offset",get:function(){return this.offset_}},{key:"needsMoreBeats",get:function(){return this.beats.length<2}}]),t}();function Bt(t){return 60/t}function Dt(t){return 60/t}function Pt(t){if(t.length<=1)return 0;var e=Ut(Et(t)),n=qt(e),r=n.reduce((function(t,e){return t+e}),0)/n.length;return r}function Et(t){for(var e=new Array(t.length-1),n=0;n<t.length-1;n++){var r=t[n],a=t[n+1],u=a-r;e[n]=u}return e}function Ft(t,e){if(0===e)return 0;var n=Ut(t.map((function(t){return t%e}))),r=qt(n),a=r.reduce((function(t,e){return t+e}),0)/r.length;return a/e}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=t.length,a=Math.floor(r/e*n),u=Math.ceil(r/e*(e-n));return t.slice(a,u)}function Ut(t){return t.sort((function(t,e){return t-e}))}var Rt=Object(r["h"])({components:{NumberInput:jt,SliderInput:Ct},props:{customBpm:{type:Number,required:!0},customOffset:{type:Number,required:!0},currentTimeDisplay:{type:Number,required:!0},getCurrentTime:{type:Function,required:!0}},emits:["update:bpm","update:offset","start-play"],setup:function(t,e){var n=Object(r["v"])("custom"),a=Object(r["v"])(t.customBpm),u=Object(r["v"])(t.customOffset),o=Object(r["b"])({get:function(){return 100*u.value},set:function(t){u.value=t/100}});Object(r["I"])((function(){return t.customBpm}),(function(){t.customBpm!==a.value&&(a.value=t.customBpm)})),Object(r["I"])((function(){return t.customOffset}),(function(t){t!==u.value&&(u.value=t)})),Object(r["I"])([a,u],(function(){n.value="custom"}));var i=Object(r["u"])(new Nt),c=Object(r["b"])((function(){return"meter"===n.value?i.period:Dt(a.value)})),l=Object(r["b"])((function(){return"meter"===n.value?i.bpm:a.value})),s=Object(r["b"])((function(){return"meter"===n.value?i.offset:u.value}));Object(r["J"])((function(){return e.emit("update:bpm",l.value)})),Object(r["J"])((function(){return e.emit("update:offset",s.value)}));var d=Object(r["b"])((function(){var e=s.value*c.value,n=(t.currentTimeDisplay-e)%c.value;return n/c.value<.25})),p=Object(r["b"])((function(){return d.value?"👏":"👐"})),b=Object(r["b"])((function(){return i.bpm.toFixed(1)})),f=Object(r["b"])((function(){return"".concat((100*i.offset).toFixed(0)," %")})),v=Object(r["b"])((function(){return l.value.toFixed(1)})),m=Object(r["b"])((function(){var t=100*s.value;return"".concat(t.toFixed(0)," %")}));return{customOffsetPercent:o,customBpmRef:a,meterBpmDisplay:b,meterOffsetDisplay:f,bpmDisplay:v,offsetDisplay:m,beatMeter:i,beatIndicator:p,beatInput:n}},methods:{tappedBeat:function(){this.$emit("start-play"),this.beatMeter.addBeats(this.getCurrentTime()),this.beatMeter.needsMoreBeats||(this.beatInput="meter")},resetClicked:function(){this.beatMeter.reset(),this.beatInput="custom"}}});n("5b5b");Rt.render=st,Rt.__scopeId="data-v-ef6d8c70";var At=Rt,$t=Object(r["M"])("data-v-73a90b90");Object(r["t"])("data-v-73a90b90");var zt={class:"track"};Object(r["r"])();var Jt=$t((function(t,e,n,a,u,o){return Object(r["q"])(),Object(r["d"])("div",{class:"loop-track-stack-container",onClick:e[1]||(e[1]=Object(r["L"])((function(e){return t.deselect()}),["stop"]))},[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(t.trackStack.tracks,(function(e){return Object(r["q"])(),Object(r["d"])("div",zt,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(e.items,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:["loop",{selected:t.isSelected(e.index)}],style:{left:"".concat(t.normalized(e.getStart()),"%"),width:"".concat(t.normalizedWidth(e),"%")},onClick:Object(r["L"])((function(n){return t.select(e.index)}),["stop"])},Object(r["A"])(e.loop.title),15,["onClick"])})),256))])})),256))])})),Kt=(n("4160"),n("159b"),n("5db7"),n("73d9"),n("b85c")),Gt=function(){function t(e,n){Object(Lt["a"])(this,t),this.range=e,this.title=n}return Object(Mt["a"])(t,[{key:"getStart",value:function(){return this.range.getStart()}},{key:"getEnd",value:function(){return this.range.getEnd()}},{key:"getDuration",value:function(){return this.range.getDuration()}}]),t}(),Wt=function(){function t(){Object(Lt["a"])(this,t),this.items_=[]}return Object(Mt["a"])(t,[{key:"insert",value:function(t){var e=0;for(e;e<this.items.length;e++){var n=this.items[e];if(n.getEnd()>t.getStart())break}var r=e;for(r;r<this.items.length;r++){var a=this.items[r];if(a.getStart()>=t.getEnd())break}var u=r-e;if(0===u)return this.items.splice(e,0,t);var o=this.items[e];return o.getStart()<t.getStart()||o.getStart()===t.getStart()&&o.getEnd()>t.getEnd()?[t]:this.items.splice(e,u,t)}},{key:"removeAtIndex",value:function(t){this.items.splice(t,1)}},{key:"items",get:function(){return this.items_}}]),t}(),Ht=function(){function t(){Object(Lt["a"])(this,t),this.tracks_=[new Wt]}return Object(Mt["a"])(t,[{key:"insert",value:function(t){var e,n=[t],r=Object(Kt["a"])(this.tracks);try{var a=function(){var t=e.value,r=n.flatMap((function(e){return t.insert(e)}));if(n=r,0===r.length)return"break"};for(r.s();!(e=r.n()).done;){var u=a();if("break"===u)break}}catch(i){r.e(i)}finally{r.f()}if(n.length>0){var o=new Wt;n.forEach((function(t){o.insert(t)})),this.tracks.push(o)}}},{key:"tracks",get:function(){return this.tracks_}}]),t}(),Qt=function(){function t(e,n){Object(Lt["a"])(this,t),this.loop=e,this.index=n}return Object(Mt["a"])(t,[{key:"getStart",value:function(){return this.loop.getStart()}},{key:"getEnd",value:function(){return this.loop.getEnd()}},{key:"getDuration",value:function(){return this.loop.getDuration()}}]),t}(),Xt=Object(r["h"])({props:{loops:{type:Array,required:!0},selected:{type:Number,default:null},duration:{type:Number,required:!0}},setup:function(t){var e=Object(r["C"])(t),n=e.loops,a=Object(r["b"])((function(){var t=new Ht;return n.value.forEach((function(e,n){var r=new Qt(e,n);t.insert(r)})),t}));return{trackStack:a}},emits:["update:selected"],methods:{normalized:function(t){return t/this.duration*100},normalizedWidth:function(t){return this.normalized(t.getEnd()-t.getStart())},select:function(t){this.$emit("update:selected",t)},deselect:function(){this.$emit("update:selected",null)},isSelected:function(t){return null!==this.selected&&this.selected===t}}});n("35c6");Xt.render=Jt,Xt.__scopeId="data-v-73a90b90";var Yt=Xt,Zt=function(){function t(e,n){Object(Lt["a"])(this,t),this.start_=Math.max(0,e),this.end_=Math.max(this.start,n)}return Object(Mt["a"])(t,[{key:"setStart",value:function(t){this.start_=this.sanitizeInput(t,this.start),this.end<this.start&&this.setEnd(this.start)}},{key:"setDurationByShiftingEnd",value:function(t){t>=0&&this.setEnd(this.start+t)}},{key:"setEnd",value:function(t){this.end_=this.sanitizeInput(t,this.end),this.start>this.end&&this.setStart(this.end)}},{key:"shift",value:function(t){var e=this.start+t;if(e>=0){var n=this.end+t;this.setStart(e),this.setEnd(n)}else{var r=this.duration;this.setStart(0),this.setEnd(r)}}},{key:"getStart",value:function(){return this.start}},{key:"getEnd",value:function(){return this.end}},{key:"getDuration",value:function(){return this.duration}},{key:"sanitizeInput",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return isNaN(t)?e:Math.max(n,t)}},{key:"start",get:function(){return this.start_}},{key:"duration",get:function(){return this.end-this.start}},{key:"end",get:function(){return this.end_}}],[{key:"fromStartAndDuration",value:function(e,n){var r=e+n;return new t(e,r)}},{key:"fromStartAndEnd",value:function(e,n){return new t(e,n)}}]),t}();n("4d90");function te(t){var e=t/60,n=e/60,r=Math.floor(n).toFixed(0).padStart(2,"0"),a=Math.floor(e%60).toFixed(0).padStart(2,"0"),u=Math.floor(t%60).toFixed(0).padStart(2,"0"),o=Math.floor(100*t%100).toFixed(0).padStart(2,"0"),i="".concat(r,":").concat(a,":").concat(u,".").concat(o);return i}var ee=Object(r["h"])({components:{VideoPlayer:z,NumberInput:jt,Slider:Vt,BeatSettings:At,LoopTrackStack:Yt},setup:function(){var t=Object(r["v"])(null),e=Object(r["v"])(null),n=Object(r["v"])(null),a=Object(r["v"])(null),u=Object(r["b"])((function(){return null!==a.value?m(a.value,f.value,v.value):null})),o=Object(r["v"])(!1),i=Object(r["v"])(!1),c=Object(r["b"])((function(){return i.value?"Pause":"Play"})),l=Object(r["v"])(0),s=Object(r["b"])((function(){return te(l.value)})),d=Object(r["v"])(1),p=Object(r["b"])({get:function(){return 100*d.value},set:function(t){d.value=t/100}}),b=Object(r["v"])(120),f=Object(r["b"])((function(){return Dt(b.value)})),v=Object(r["v"])(0),m=function(t,e,n){if(e>0){var r=n*e;return Math.floor((t-r)/e)}return 0},O=Object(r["b"])((function(){return m(l.value,f.value,v.value)})),j=Object(r["v"])(b.value),h=Object(r["v"])(v.value),g=Object(r["u"])([]),y=Object(r["v"])(null),k=Object(r["b"])((function(){return null!==y.value})),S=Object(r["u"])(Zt.fromStartAndDuration(0,8)),I=Object(r["b"])((function(){var t=y.value;return null!==t?g[t].range:S})),x=Object(r["v"])(8),V=Object(r["v"])(""),w=Object(r["b"])({get:function(){var t=y.value;return null!==t?g[t].title:V.value},set:function(t){var e=y.value;null!==e?g[e].title=t:V.value=t}}),T=Object(r["v"])(8),_=Object(r["v"])(!1),C=Object(r["b"])((function(){return _.value?"Stop loop":"Start loop"})),L=function(){var t=ne(I.value.start-x.value,f.value,v.value);n.value.seekToSecond(t)},M=function(){L(),n.value.play()},N=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=ne(e.start-x.value,f.value,v.value)-n,a=ne(e.end,f.value,v.value);return r<t&&t<a};Object(r["I"])([_,l,I],(function(t){var e=Object(U["a"])(t,3),n=e[0],r=e[1],a=e[2],u=N(r,a,.1);n&&!u&&L()}));var B=function(t,e){localStorage.setItem(t.name,JSON.stringify(e))},D=function(t){var e=localStorage.getItem(t.name);return null!==e?JSON.parse(e):null},P=Object(r["v"])(""),E=function(t){P.value=JSON.stringify(t)};Object(r["I"])([b,v,S,g],(function(t){var n=Object(U["a"])(t,4),r=n[0],a=n[1],u=n[2],o=n[3];if(null!==e.value){var i=o.map((function(t){return{start:t.getStart(),end:t.getEnd(),title:t.title}}));B(e.value,{bpm:r,offset:a,range:{start:u.start,end:u.end},loops:i}),E({bpm:r,offset:a,loops:i})}}));var F=function(t){return t.map((function(t){return new Gt(Zt.fromStartAndEnd(t.start,t.end),t.title)}))};return Object(r["I"])(e,(function(t){if(null!==t){var e=D(t);if(null!==e){j.value=e.bpm,h.value=e.offset,I.value.setStart(e.range.start),I.value.setEnd(e.range.end);var n=F(e.loops);g.splice.apply(g,[0,g.length].concat(Object(q["a"])(n)))}}})),{videoFileInput:t,videoFile:e,isPlaying:i,player:n,duration:a,durationInBars:u,mirrored:o,playButtonText:c,currentTimeDisplay:l,currentTimeIndicator:s,isInsideRange:N,playbackRate:d,playbackRatePercent:p,bpm:b,period:f,offset:v,customBpm:j,customOffset:h,bar:O,isLooping:_,loops:g,selectedLoop:y,loopTitle:w,loopIsSelected:k,range:I,warmup:x,shiftMultiplier:T,loopButtonText:C,goToLoopStart:L,playLoopStart:M,deserializeLoops:F,exportData:P}},methods:{videoFileSelected:function(){var t=this.videoFileInput.files;if(null!==t&&0!==t.length){var e=t[0];null!=e&&(this.videoFile=e)}},getCurrentTime:function(){return null!==this.player?this.player.getCurrentTime():0},seekToSecond:function(t){var e=this.isInsideRange(t,this.range);e||this.stopLoop(),this.player.seekToSecond(t)},togglePlay:function(){this.player.togglePlay()},shiftLoop:function(t){var e=t*this.shiftMultiplier;this.range.shift(e)},saveLoop:function(){var t=new Gt(Zt.fromStartAndEnd(this.range.start,this.range.end),this.loopTitle);this.loops.push(t)},deleteSelectedLoop:function(){null!==this.selectedLoop&&(this.loops.splice(this.selectedLoop,1),this.selectedLoop=null)},toggleLoop:function(){this.isLooping?this.stopLoop():this.startLoop()},startLoop:function(){this.isLooping=!0,this.playLoopStart()},stopLoop:function(){this.isLooping=!1},videoPaused:function(){this.stopLoop()},loopStartToNowClicked:function(){this.range.setStart(this.bar)},loopEndToNowClicked:function(){this.range.setEnd(this.bar)},importData:function(){var t,e=JSON.parse(this.exportData);this.customBpm=e.bpm,this.customOffset=e.offset,(t=this.loops).splice.apply(t,[0,this.loops.length].concat(Object(q["a"])(this.deserializeLoops(e.loops))))}}});function ne(t,e,n){var r=n*e;return t*e+r}n("dbe2");ee.render=F,ee.__scopeId="data-v-91f06490";var re=ee,ae=[{path:"/",name:"Loopbar",component:re}],ue=Object(c["a"])({history:Object(c["b"])(),routes:ae}),oe=ue,ie=n("5502"),ce=Object(ie["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(o).use(ce).use(oe).mount("#app")},cda9:function(t,e,n){},cebe:function(t,e,n){"use strict";n("b7dd")},dbe2:function(t,e,n){"use strict";n("cda9")}});
//# sourceMappingURL=app.5e84fbce.js.map