(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-404b75d0"],{"0a5a":function(t,a,e){},"0b42":function(t,a,e){var i=e("da84"),r=e("e8b5"),o=e("68ee"),s=e("861d"),n=e("b622"),h=n("species"),m=i.Array;t.exports=function(t){var a;return r(t)&&(a=t.constructor,o(a)&&(a===m||r(a.prototype))?a=void 0:s(a)&&(a=a[h],null===a&&(a=void 0))),void 0===a?m:a}},"1dde":function(t,a,e){var i=e("d039"),r=e("b622"),o=e("2d00"),s=r("species");t.exports=function(t){return o>=51||!i((function(){var a=[],e=a.constructor={};return e[s]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},3784:function(t,a,e){"use strict";e.r(a);var i=e("7a23"),r=function(t){return Object(i["v"])("data-v-706d61b8"),t=t(),Object(i["t"])(),t},o={class:"text-center"},s={key:0},n={key:1},h=r((function(){return Object(i["g"])("br",null,null,-1)}));function m(t,a,e,r,m,k){var c=Object(i["z"])("vue-drawing-canvas");return Object(i["s"])(),Object(i["f"])("div",o,["waitNext"==m.state?(Object(i["s"])(),Object(i["f"])("h1",s,Object(i["B"])(m.current.kana),1)):Object(i["e"])("",!0),"waitAnswer"==m.state?(Object(i["s"])(),Object(i["f"])("h1",n,Object(i["B"])(m.current.romaji),1)):Object(i["e"])("",!0),Object(i["j"])(c,{ref:"c",width:"400",height:"400",backgroundColor:"beige"},null,512),h,Object(i["g"])("button",{onClick:a[0]||(a[0]=Object(i["K"])((function(a){return t.$refs.c.undo()}),["prevent"])),class:"btn btn-outline-danger text-sm"},"↺"),"waitAnswer"==m.state?(Object(i["s"])(),Object(i["f"])("button",{key:2,onClick:a[1]||(a[1]=Object(i["K"])((function(){return k.validate&&k.validate.apply(k,arguments)}),["prevent"])),class:"btn btn-outline-primary text-lg"},"OK!")):Object(i["e"])("",!0),"waitNext"==m.state?(Object(i["s"])(),Object(i["f"])("button",{key:3,onClick:a[2]||(a[2]=Object(i["K"])((function(){return k.next&&k.next.apply(k,arguments)}),["prevent"])),class:"btn btn-outline-primary"},"Next →")):Object(i["e"])("",!0),Object(i["g"])("button",{onClick:a[3]||(a[3]=Object(i["K"])((function(a){return t.$refs.c.redo()}),["prevent"])),class:"btn btn-outline-success text-sm"},"↻")])}e("99af");var k=e("3b13"),c={name:"Kana",components:{VueDrawingCanvas:k["a"]},data:function(){return{state:"waitNext",current:{romaji:"",kana:""},defaults:{hiragana:[{romaji:"a",kana:"あ"},{romaji:"i",kana:"い"},{romaji:"u",kana:"う"},{romaji:"e",kana:"え"},{romaji:"o",kana:"お"},{romaji:"ka",kana:"か"},{romaji:"ki",kana:"き"},{romaji:"ku",kana:"く"},{romaji:"ke",kana:"け"},{romaji:"ko",kana:"こ"},{romaji:"sa",kana:"さ"},{romaji:"shi",kana:"し"},{romaji:"su",kana:"す"},{romaji:"se",kana:"せ"},{romaji:"so",kana:"そ"},{romaji:"ta",kana:"た"},{romaji:"chi",kana:"ち"},{romaji:"tsu",kana:"つ"},{romaji:"te",kana:"て"},{romaji:"to",kana:"と"},{romaji:"na",kana:"な"},{romaji:"ni",kana:"に"},{romaji:"nu",kana:"ぬ"},{romaji:"ne",kana:"ね"},{romaji:"no",kana:"の"},{romaji:"ha",kana:"は"},{romaji:"hi",kana:"ひ"},{romaji:"fu",kana:"ふ"},{romaji:"he",kana:"へ"},{romaji:"ho",kana:"ほ"},{romaji:"ma",kana:"ま"},{romaji:"mi",kana:"み"},{romaji:"mu",kana:"む"},{romaji:"me",kana:"め"},{romaji:"mo",kana:"も"},{romaji:"ya",kana:"や"},{romaji:"yu",kana:"い"},{romaji:"yo",kana:"よ"},{romaji:"ra",kana:"ら"},{romaji:"ri",kana:"り"},{romaji:"ru",kana:"る"},{romaji:"re",kana:"れ"},{romaji:"ro",kana:"ろ"},{romaji:"wa",kana:"わ"},{romaji:"wi",kana:"ゐ"},{romaji:"we",kana:"ゑ"},{romaji:"wo",kana:"を"},{romaji:"n",kana:"ん"}],katakana:[{romaji:"A",kana:"ア"},{romaji:"I",kana:"イ"},{romaji:"U",kana:"ウ"},{romaji:"E",kana:"エ"},{romaji:"O",kana:"オ"},{romaji:"KA",kana:"カ"},{romaji:"KI",kana:"キ"},{romaji:"KU",kana:"ク"},{romaji:"KE",kana:"ケ"},{romaji:"KO",kana:"コ"},{romaji:"SA",kana:"サ"},{romaji:"SHI",kana:"シ"},{romaji:"SU",kana:"ス"},{romaji:"SE",kana:"セ"},{romaji:"SO",kana:"ソ"},{romaji:"TA",kana:"タ"},{romaji:"CHI",kana:"チ"},{romaji:"TSU",kana:"ツ"},{romaji:"TE",kana:"テ"},{romaji:"TO",kana:"ト"},{romaji:"NA",kana:"ナ"},{romaji:"NI",kana:"ニ"},{romaji:"NU",kana:"ヌ"},{romaji:"NE",kana:"ネ"},{romaji:"NO",kana:"ノ"},{romaji:"HA",kana:"ハ"},{romaji:"HI",kana:"ヒ"},{romaji:"FU",kana:"フ"},{romaji:"HE",kana:"ヘ"},{romaji:"HO",kana:"ホ"},{romaji:"MA",kana:"マ"},{romaji:"MI",kana:"ミ"},{romaji:"MU",kana:"ム"},{romaji:"ME",kana:"メ"},{romaji:"MO",kana:"モ"},{romaji:"YA",kana:"ヤ"},{romaji:"YU",kana:"ユ"},{romaji:"YO",kana:"ヨ"},{romaji:"RA",kana:"ラ"},{romaji:"RI",kana:"リ"},{romaji:"RU",kana:"ル"},{romaji:"RE",kana:"レ"},{romaji:"RO",kana:"ロ"},{romaji:"WA",kana:"ワ"},{romaji:"WI",kana:"ヰ"},{romaji:"WE",kana:"ヱ"},{romaji:"WO",kana:"ヲ"},{romaji:"N",kana:"ン"}],katakanaAccent:[{romaji:"ga",kana:"が"},{romaji:"gi",kana:"ぎ"},{romaji:"gu",kana:"ぐ"},{romaji:"ge",kana:"げ"},{romaji:"go",kana:"ご"},{romaji:"za",kana:"ざ"},{romaji:"ji",kana:"じ"},{romaji:"zu",kana:"ず"},{romaji:"ze",kana:"ぜ"},{romaji:"zo",kana:"ぞ"},{romaji:"da",kana:"だ"},{romaji:"de",kana:"で"},{romaji:"do",kana:"ど"},{romaji:"ba",kana:"ば"},{romaji:"bi",kana:"び"},{romaji:"bu",kana:"ぶ"},{romaji:"be",kana:"べ"},{romaji:"bo",kana:"ぼ"},{romaji:"pa",kana:"ぱ"},{romaji:"pi",kana:"ぴ"},{romaji:"pu",kana:"ぷ"},{romaji:"pe",kana:"ぺ"},{romaji:"po",kana:"ぽ"}],hiraganaAccent:[{romaji:"GA",kana:"ガ"},{romaji:"GI",kana:"ギ"},{romaji:"GU",kana:"グ"},{romaji:"GE",kana:"ゲ"},{romaji:"GO",kana:"ゴ"},{romaji:"ZA",kana:"ザ"},{romaji:"JI",kana:"ジ"},{romaji:"ZU",kana:"ズ"},{romaji:"ZE",kana:"ゼ"},{romaji:"ZO",kana:"ゾ"},{romaji:"DA",kana:"ダ"},{romaji:"DE",kana:"デ"},{romaji:"DO",kana:"ド"},{romaji:"BA",kana:"バ"},{romaji:"BI",kana:"ビ"},{romaji:"BU",kana:"ブ"},{romaji:"BE",kana:"ベ"},{romaji:"BO",kana:"ボ"},{romaji:"PA",kana:"パ"},{romaji:"PI",kana:"ピ"},{romaji:"PU",kana:"プ"},{romaji:"PE",kana:"ペ"},{romaji:"PO",kana:"ポ"}]}}},mounted:function(){this.list=[].concat(this.defaults.katakana,this.defaults.hiragana,this.defaults.katakanaAccent,this.defaults.hiraganaAccent),this.next()},methods:{validate:function(){this.state="waitNext"},next:function(){this.$refs.c.reset(),this.current=this.list[Math.floor(Math.random()*this.list.length)],this.state="waitAnswer"}}},l=(e("7418a"),e("d959")),d=e.n(l);const u=d()(c,[["render",m],["__scopeId","data-v-706d61b8"]]);a["default"]=u},"3b13":function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var i=e("7a23"),r=!1;var o=Object(i["k"])({name:"VueDrawingCanvas",props:{strokeType:{type:String,validator:t=>-1!==["dash","square","circle","triangle","half_triangle"].indexOf(t),default:()=>"dash"},fillShape:{type:Boolean,default:()=>!1},width:{type:[String,Number],default:()=>600},height:{type:[String,Number],default:()=>400},image:{type:String,default:()=>""},eraser:{type:Boolean,default:()=>!1},color:{type:String,default:()=>"#000000"},lineWidth:{type:Number,default:()=>5},lock:{type:Boolean,default:()=>!1},styles:{type:[Array,String,Object]},classes:{type:[Array,String,Object]},backgroundColor:{type:String,default:()=>"#FFFFFF"},backgroundImage:{type:String,default:()=>null},watermark:{type:Object},saveAs:{type:String,validator:t=>-1!==["jpeg","png"].indexOf(t),default:()=>"png"},canvasId:{type:String,default:()=>"VueDrawingCanvas"},initialImage:{type:Array,default:()=>[]}},data(){return{loadedImage:null,drawing:!1,context:null,images:[],strokes:{type:"",from:{x:0,y:0},coordinates:[],color:"",width:"",fill:!1},guides:[],trash:[]}},mounted(){this.setContext(),this.$nextTick(()=>{this.drawInitialImage()})},watch:{backgroundImage:function(){this.loadedImage=null}},methods:{async setContext(){let t=document.querySelector("#"+this.canvasId);this.context=this.context?this.context:t.getContext("2d"),await this.setBackground()},drawInitialImage(){this.initialImage.length>0&&(this.images=[].concat(this.images,this.initialImage),this.redraw())},clear(){this.context.clearRect(0,0,this.width,this.height)},async setBackground(){this.clear(),this.context.fillStyle=this.backgroundColor,this.context.fillRect(0,0,this.width,this.height),await this.$nextTick(async()=>{await this.drawBackgroundImage()}),this.save()},async drawBackgroundImage(){if(!this.loadedImage)return new Promise(t=>{if(!this.backgroundImage)return void t();const a=new Image;a.src=this.backgroundImage,a.onload=()=>{this.context.drawImage(a,0,0,this.width,this.height),this.loadedImage=a,t()}});this.context.drawImage(this.loadedImage,0,0,this.width,this.height)},getCoordinates(t){let a,e;if(t.touches&&t.touches.length>0){let i=document.querySelector("#"+this.canvasId),r=i.getBoundingClientRect();a=t.touches[0].clientX-r.left,e=t.touches[0].clientY-r.top}else a=t.offsetX,e=t.offsetY;return{x:a,y:e}},startDraw(t){if(!this.lock){this.drawing=!0;let a=this.getCoordinates(t);this.strokes={type:this.eraser?"eraser":this.strokeType,from:a,coordinates:[],color:this.eraser?this.backgroundColor:this.color,width:this.lineWidth,fill:!this.eraser&&"dash"!==this.strokeType&&this.fillShape},this.guides=[]}},draw(t){if(this.drawing){this.context||this.setContext();let a=this.getCoordinates(t);if(this.eraser||"dash"===this.strokeType)this.strokes.coordinates.push(a),this.drawShape(this.strokes,!1);else{let t;switch(this.strokeType){case"square":t=[{x:a.x,y:this.strokes.from.y},{x:a.x,y:a.y},{x:this.strokes.from.x,y:a.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"triangle":let e=Math.floor((a.x-this.strokes.from.x)/2)<0?-1*Math.floor((a.x-this.strokes.from.x)/2):Math.floor((a.x-this.strokes.from.x)/2),i=this.strokes.from.x<a.x?this.strokes.from.x+e:this.strokes.from.x-e;t=[{x:a.x,y:this.strokes.from.y},{x:i,y:a.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"half_triangle":t=[{x:a.x,y:this.strokes.from.y},{x:this.strokes.from.x,y:a.y},{x:this.strokes.from.x,y:this.strokes.from.y}];break;case"circle":let r=this.strokes.from.x-a.x<0?-1*(this.strokes.from.x-a.x):this.strokes.from.x-a.x;t=[{x:this.strokes.from.x>a.x?this.strokes.from.x-r:this.strokes.from.x+r,y:this.strokes.from.y},{x:r,y:r}];break}this.guides=t,this.drawGuide(!0)}}},drawGuide(t){this.redraw(!1),this.context.strokeStyle="#000000",this.context.lineWidth=1,this.context.lineJoin="round",this.context.lineCap="round",this.context.beginPath(),this.context.setLineDash([15,15]),"circle"===this.strokes.type?this.context.ellipse(this.guides[0].x,this.guides[0].y,this.guides[1].x,this.guides[1].y,0,0,2*Math.PI):(this.context.moveTo(this.strokes.from.x,this.strokes.from.y),this.guides.forEach(t=>{this.context.lineTo(t.x,t.y)}),t&&this.context.closePath()),this.context.stroke()},drawShape(t,a){this.context.strokeStyle=t.color,this.context.fillStyle=t.color,this.context.lineWidth=t.width,this.context.lineJoin="round",this.context.lineCap="round",this.context.beginPath(),this.context.setLineDash([]),"circle"===t.type?this.context.ellipse(t.coordinates[0].x,t.coordinates[0].y,t.coordinates[1].x,t.coordinates[1].y,0,0,2*Math.PI):(this.context.moveTo(t.from.x,t.from.y),t.coordinates.forEach(t=>{this.context.lineTo(t.x,t.y)}),a&&this.context.closePath()),t.fill?this.context.fill():this.context.stroke()},stopDraw(){this.drawing&&(this.strokes.coordinates=this.guides.length>0?this.guides:this.strokes.coordinates,this.images.push(this.strokes),this.redraw(),this.drawing=!1,this.trash=[])},reset(){this.lock||(this.images=[],this.strokes={type:"",coordinates:[],color:"",width:"",fill:!1},this.guides=[],this.trash=[],this.redraw())},undo(){if(!this.lock){let t=this.images.pop();t&&(this.trash.push(t),this.redraw())}},redo(){if(!this.lock){let t=this.trash.pop();t&&(this.images.push(t),this.redraw())}},async redraw(t){t="undefined"===typeof t||t,await this.setBackground().then(()=>{this.images.forEach(t=>{this.drawShape(t,this.type=!1)})}).then(()=>{t&&this.save()})},wrapText(t,a,e,i,r,o){const s=/(\r\n|\n\r|\n|\r)+/g,n=/\s+/g;var h=a.split(s).filter(t=>t.length>0);for(let f=0;f<h.length;f++){for(var m=h[f].split(n).filter(t=>t.length>0),k="",c=0;c<m.length;c++){var l=k+m[c]+" ",d=t.measureText(l),u=d.width;u>r&&c>0?(this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&"stroke"===this.watermark.fontStyle.drawType?t.strokeText(k,e,i):t.fillText(k,e,i),k=m[c]+" ",i+=o):k=l}this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&"stroke"===this.watermark.fontStyle.drawType?t.strokeText(k,e,i):t.fillText(k,e,i),i+=m.length>0?o:0}},save(){if(!this.watermark){let t=document.querySelector("#"+this.canvasId);return this.$emit("update:image",t.toDataURL("image/"+this.saveAs,1)),t.toDataURL("image/"+this.saveAs,1)}{let t=document.querySelector("#"+this.canvasId),a=document.createElement("canvas"),e=a.getContext("2d");if(a.width=this.width,a.height=this.height,e.drawImage(t,0,0,this.width,this.height),"Image"===this.watermark.type){let t=this.watermark.imageStyle&&this.watermark.imageStyle.width?this.watermark.imageStyle.width:this.width,i=this.watermark.imageStyle&&this.watermark.imageStyle.height?this.watermark.imageStyle.height:this.height;const r=new Image;r.src=this.watermark.source,r.onload=()=>(e.drawImage(r,this.watermark.x,this.watermark.y,t,i),this.$emit("update:image",a.toDataURL("image/"+this.saveAs,1)),a.toDataURL("image/"+this.saveAs,1))}else if("Text"===this.watermark.type){let t=this.watermark.fontStyle&&this.watermark.fontStyle.font?this.watermark.fontStyle.font:"20px serif",i=this.watermark.fontStyle&&this.watermark.fontStyle.textAlign?this.watermark.fontStyle.textAlign:"start",r=this.watermark.fontStyle&&this.watermark.fontStyle.textBaseline?this.watermark.fontStyle.textBaseline:"alphabetic",o=this.watermark.fontStyle&&this.watermark.fontStyle.color?this.watermark.fontStyle.color:"#000000";if(e.font=t,e.textAlign=i,e.textBaseline=r,this.watermark.fontStyle&&this.watermark.fontStyle.rotate){let t,a;t=this.watermark.fontStyle&&this.watermark.fontStyle.width?this.watermark.x+Math.floor(this.watermark.fontStyle.width/2):this.watermark.x,a=this.watermark.fontStyle&&this.watermark.fontStyle.lineHeight?this.watermark.y+Math.floor(this.watermark.fontStyle.lineHeight/2):this.watermark.y,e.translate(t,a),e.rotate(this.watermark.fontStyle.rotate*Math.PI/180),e.translate(-1*t,-1*a)}return this.watermark.fontStyle&&this.watermark.fontStyle.drawType&&"stroke"===this.watermark.fontStyle.drawType?(e.strokeStyle=this.watermark.fontStyle.color,this.watermark.fontStyle&&this.watermark.fontStyle.width?this.wrapText(e,this.watermark.source,this.watermark.x,this.watermark.y,this.watermark.fontStyle.width,this.watermark.fontStyle.lineHeight):e.strokeText(this.watermark.source,this.watermark.x,this.watermark.y)):(e.fillStyle=o,this.watermark.fontStyle&&this.watermark.fontStyle.width?this.wrapText(e,this.watermark.source,this.watermark.x,this.watermark.y,this.watermark.fontStyle.width,this.watermark.fontStyle.lineHeight):e.fillText(this.watermark.source,this.watermark.x,this.watermark.y)),this.$emit("update:image",a.toDataURL("image/"+this.saveAs,1)),a.toDataURL("image/"+this.saveAs,1)}}},isEmpty(){return!(this.images.length>0)},getAllStrokes(){return this.images}},render(){return r?Object(i["m"])("canvas",{attrs:{id:this.canvasId,width:this.width,height:this.height},style:{touchAction:"none",...this.styles},class:this.classes,on:{mousedown:t=>this.startDraw(t),mousemove:t=>this.draw(t),mouseup:t=>this.stopDraw(t),mouseleave:t=>this.stopDraw(t),touchstart:t=>this.startDraw(t),touchmove:t=>this.draw(t),touchend:t=>this.stopDraw(t),touchleave:t=>this.stopDraw(t),touchcancel:t=>this.stopDraw(t),pointerdown:t=>this.startDraw(t),pointermove:t=>this.draw(t),pointerup:t=>this.stopDraw(t),pointerleave:t=>this.stopDraw(t),pointercancel:t=>this.stopDraw(t)},...this.$props}):Object(i["m"])("canvas",{id:this.canvasId,height:this.height,width:this.width,style:{touchAction:"none",...this.styles},class:this.classes,onMousedown:t=>this.startDraw(t),onMousemove:t=>this.draw(t),onMouseup:t=>this.stopDraw(t),onMouseleave:t=>this.stopDraw(t),onTouchstart:t=>this.startDraw(t),onTouchmove:t=>this.draw(t),onTouchend:t=>this.stopDraw(t),onTouchleave:t=>this.stopDraw(t),onTouchcancel:t=>this.stopDraw(t),onPointerdown:t=>this.startDraw(t),onPointermove:t=>this.draw(t),onPointerup:t=>this.stopDraw(t),onPointerleave:t=>this.stopDraw(t),onPointercancel:t=>this.stopDraw(t)})}})},"65f0":function(t,a,e){var i=e("0b42");t.exports=function(t,a){return new(i(t))(0===a?0:a)}},"7418a":function(t,a,e){"use strict";e("0a5a")},8418:function(t,a,e){"use strict";var i=e("a04b"),r=e("9bf2"),o=e("5c6c");t.exports=function(t,a,e){var s=i(a);s in t?r.f(t,s,o(0,e)):t[s]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),r=e("da84"),o=e("d039"),s=e("e8b5"),n=e("861d"),h=e("7b0b"),m=e("07fa"),k=e("8418"),c=e("65f0"),l=e("1dde"),d=e("b622"),u=e("2d00"),f=d("isConcatSpreadable"),w=9007199254740991,j="Maximum allowed index exceeded",y=r.TypeError,g=u>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),x=l("concat"),p=function(t){if(!n(t))return!1;var a=t[f];return void 0!==a?!!a:s(t)},b=!g||!x;i({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,i,r,o,s=h(this),n=c(s,0),l=0;for(a=-1,i=arguments.length;a<i;a++)if(o=-1===a?s:arguments[a],p(o)){if(r=m(o),l+r>w)throw y(j);for(e=0;e<r;e++,l++)e in o&&k(n,l,o[e])}else{if(l>=w)throw y(j);k(n,l++,o)}return n.length=l,n}})},e8b5:function(t,a,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-404b75d0.1a231f1f.js.map