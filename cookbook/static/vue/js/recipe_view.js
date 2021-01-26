(function(e){function t(t){for(var i,r,c=t[0],o=t[1],l=t[2],p=0,f=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,c=1;c<s.length;c++){var o=s[c];0!==a[o]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var i={},a={recipe_view:0},n=[];function r(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=i,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("0671")},"0671":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("a026"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.loading?[s("loading-spinner")]:e._e(),e.loading?e._e():s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[s("h3",[e._v(e._s(e.recipe.name))])])]),s("div",{staticStyle:{"text-align":"center"}},[s("keywords",{attrs:{recipe:e.recipe}})],1),s("div",{staticClass:"row",staticStyle:{"margin-top":"8px"}},[s("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[s("i",[e._v(e._s(e.recipe.description))])])]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-3"},[s("div",{staticClass:"row d-flex",staticStyle:{"padding-left":"16px",height:"100%"}},[e._m(0),s("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[s("span",{staticClass:"text-primary"},[s("b",[e._v(e._s(e._("Preparation")))])]),s("br"),e._v(" "+e._s(e.recipe.working_time)+" "+e._s(e._("min"))+" ")])])]),s("div",{staticClass:"col col-md-3"},[s("div",{staticClass:"row d-flex",staticStyle:{height:"100%"}},[e._m(1),s("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[s("span",{staticClass:"text-primary"},[s("b",[e._v(e._s(e._("Waiting")))])]),s("br"),e._v(" "+e._s(e.recipe.waiting_time)+" "+e._s(e._("min"))+" ")])])]),s("div",{staticClass:"col col-md-4 col-10"},[s("div",{staticClass:"row d-flex",staticStyle:{"padding-left":"16px",height:"100%"}},[e._m(2),s("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.servings,expression:"servings",modifiers:{number:!0}}],staticClass:"form-control form-control-lg",staticStyle:{"border-width":"0px",border:"none",padding:"0px","padding-left":"0.5vw","padding-right":"8px","max-width":"80px"},attrs:{dir:"rtl",value:"1",maxlength:"3",type:"number"},domProps:{value:e.servings},on:{input:function(t){t.target.composing||(e.servings=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"my-auto"},[s("b",[""===e.recipe.servings_text?[e._v(e._s(e._("Servings")))]:[e._v(e._s(e.recipe.servings_text))]],2)])])]),s("div",{staticClass:"col col-md-2 col-2 my-auto",staticStyle:{"text-align":"right","padding-right":"1vw"}},[s("recipe-context-menu",{attrs:{recipe:e.recipe,servings:e.servings}})],1)]),s("hr"),s("div",{staticClass:"row"},[e.recipe&&e.ingredient_count>0?s("div",{staticClass:"col-md-6 order-md-1 col-sm-12 order-sm-2 col-12 order-2"},[s("div",{staticClass:"card border-primary"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-8"},[s("h4",{staticClass:"card-title"},[s("i",{staticClass:"fas fa-pepper-hot"}),e._v(" "+e._s(e._("Ingredients")))])])]),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("table",{staticClass:"table table-sm"},[e._l(e.recipe.steps,(function(t){return[e._l(t.ingredients,(function(t){return[s("Ingredient",{key:t.id,attrs:{ingredient:t,ingredient_factor:e.ingredient_factor},on:{"checked-state-changed":e.updateIngredientCheckedState}})]}))]}))],2)])])])])]):e._e(),s("div",{staticClass:"col-12 order-1 col-sm-12 order-sm-1 col-md-6 order-md-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[null!==e.recipe.image?s("img",{staticClass:"img img-fluid rounded",staticStyle:{"max-height":"30vh"},attrs:{src:e.recipe.image,alt:e._("Recipe Image")}}):e._e()])]),s("div",{staticClass:"row",staticStyle:{"margin-top":"2vh","margin-bottom":"2vh"}},[s("div",{staticClass:"col-12"},[s("Nutrition",{attrs:{recipe:e.recipe,ingredient_factor:e.ingredient_factor}})],1)])])]),e.recipe.internal?e._e():[e.recipe.file_path.includes(".pdf")?s("div",[s("PdfViewer",{attrs:{recipe:e.recipe}})],1):e._e(),e.recipe.file_path.includes(".png")||e.recipe.file_path.includes(".jpg")||e.recipe.file_path.includes(".jpeg")?s("div",[s("ImageViewer",{attrs:{recipe:e.recipe}})],1):e._e()],e._l(e.recipe.steps,(function(t,i){return s("div",{key:t.id,staticStyle:{"margin-top":"1vh"}},[s("Step",{attrs:{recipe:e.recipe,step:t,ingredient_factor:e.ingredient_factor,index:i,start_time:e.start_time},on:{"update-start-time":e.updateStartTime,"checked-state-changed":e.updateIngredientCheckedState}})],1)}))],2),s("add-recipe-to-book",{attrs:{recipe:e.recipe}})],2)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[s("i",{staticClass:"fas fa-user-clock fa-2x text-primary"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[s("i",{staticClass:"far fa-clock fa-2x text-primary"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[s("i",{staticClass:"fas fa-pizza-slice fa-2x text-primary"})])}],r=s("b85c"),c=s("5f5b"),o=(s("2dd8"),s("bc3a")),l=s.n(o),d=s("fa7d");function p(e){var t=Object(d["g"])("api:recipe-detail",e);return void 0!==window.SHARE_UID&&(t+="?share="+window.SHARE_UID),l.a.get(t).then((function(e){return e.data})).catch((function(e){_(e,"There was an error loading a resource!","danger")}))}function f(e){return l.a.post(Object(d["g"])("api:cooklog-list"),e).then((function(e){Object(d["f"])("Saved","Cook Log entry saved!","success")})).catch((function(e){_(e,"There was an error creating a resource!","danger")}))}function u(e){return l.a.get(Object(d["g"])("api:recipebook-list")+"?query="+e).then((function(e){return e.data})).catch((function(e){_(e,"There was an error creating a resource!","danger")}))}function m(e){return l.a.post(Object(d["g"])("api:recipebookentry-list"),e).then((function(e){Object(d["f"])("Saved","Recipe Book entry saved!","success")})).catch((function(e){_(e,"There was an error creating a resource!","danger")}))}function _(e,t){if("response"in e){console.log(e.response);var s="statusText"in e.response?e.response.statusText:Object(d["e"])("Error");t+="\n\n"+JSON.stringify(e.response.data),Object(d["f"])(s,t,"danger")}else Object(d["f"])("Error",t,"danger"),console.log(e)}l.a.defaults.xsrfCookieName="csrftoken",l.a.defaults.xsrfHeaderName="X-CSRFTOKEN";var v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("hr"),"TEXT"===e.step.type?[e.recipe.steps.length>1?s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-8"},[s("h5",{staticClass:"text-primary"},[e.step.name?[e._v(e._s(e.step.name))]:[e._v(e._s(e._("Step"))+" "+e._s(e.index+1))],0!==e.step.time?s("small",{staticClass:"text-muted",staticStyle:{"margin-left":"4px"}},[s("i",{staticClass:"fas fa-user-clock"}),e._v(" "+e._s(e.step.time)+" "+e._s(e._("min"))+" ")]):e._e(),""!==e.start_time?s("small",{staticClass:"d-print-none"},[s("b-link",{attrs:{id:"id_reactive_popover_"+e.step.id,href:"#"},on:{click:e.openPopover}},[e._v(" "+e._s(e.moment(e.start_time).add(e.step.time_offset,"minutes").format("HH:mm"))+" ")])],1):e._e()],2)]),s("div",{staticClass:"col col-md-4",staticStyle:{"text-align":"right"}},[s("b-button",{staticClass:"shadow-none",class:{"text-primary":e.details_visible,"text-success":!e.details_visible},staticStyle:{border:"none",background:"none"},on:{click:function(t){e.details_visible=!e.details_visible}}},[s("i",{staticClass:"far fa-check-circle"})])],1)]):e._e(),s("b-collapse",{attrs:{id:"collapse-1"},model:{value:e.details_visible,callback:function(t){e.details_visible=t},expression:"details_visible"}},[s("div",{staticClass:"row"},[e.step.ingredients.length>0&&e.recipe.steps.length>1?s("div",{staticClass:"col col-md-4"},[s("table",{staticClass:"table table-sm"},[e._l(e.step.ingredients,(function(t){return[s("Ingredient",{key:t.id,attrs:{ingredient:t,ingredient_factor:e.ingredient_factor},on:{"checked-state-changed":function(s){return e.$emit("checked-state-changed",t)}}})]}))],2)]):e._e(),s("div",{staticClass:"col",class:{"col-md-8":e.recipe.steps.length>1,"col-md-12":e.recipe.steps.length<=1}},[s("compile-component",{attrs:{code:e.step.ingredients_markdown,ingredient_factor:e.ingredient_factor}})],1)])])]:e._e(),"TIME"===e.step.type?[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 offset-md-2",staticStyle:{"text-align":"center"}},[s("h4",{staticClass:"text-primary"},[e.step.name?[e._v(e._s(e.step.name))]:[e._v(e._s(e._("Step"))+" "+e._s(e.index+1))]],2),0!==e.step.time?s("span",{staticClass:"text-muted",staticStyle:{"margin-left":"4px"}},[s("i",{staticClass:"fa fa-stopwatch"}),e._v(" "+e._s(e.step.time)+" "+e._s(e._("min")))]):e._e(),""!==e.start_time?s("b-link",{staticClass:"d-print-none",attrs:{id:"id_reactive_popover_"+e.step.id,href:"#"},on:{click:e.openPopover}},[e._v(" "+e._s(e.moment(e.start_time).add(e.step.time_offset,"minutes").format("HH:mm"))+" ")]):e._e()],1),s("div",{staticClass:"col-md-2",staticStyle:{"text-align":"right"}},[s("b-button",{staticClass:"shadow-none",class:{"text-primary":e.details_visible,"text-success":!e.details_visible},staticStyle:{border:"none",background:"none"},on:{click:function(t){e.details_visible=!e.details_visible}}},[s("i",{staticClass:"far fa-check-circle"})])],1)]),s("b-collapse",{attrs:{id:"collapse-1"},model:{value:e.details_visible,callback:function(t){e.details_visible=t},expression:"details_visible"}},[""!==e.step.instruction?s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-12",staticStyle:{"text-align":"center"}},[s("compile-component",{attrs:{code:e.step.ingredients_markdown,ingredient_factor:e.ingredient_factor}})],1)]):e._e()])]:e._e(),""!==e.start_time?s("div",[s("b-popover",{ref:"id_reactive_popover_"+e.step.id,attrs:{target:"id_reactive_popover_"+e.step.id,triggers:"click",placement:"bottom",title:e._("Step start time")}},[s("div",[s("b-form-group",{staticClass:"mb-1",attrs:{label:"Time","label-for":"popover-input-1","label-cols":"3"}},[s("b-form-input",{attrs:{type:"datetime-local",id:"popover-input-1",size:"sm"},model:{value:e.set_time_input,callback:function(t){e.set_time_input=t},expression:"set_time_input"}})],1)],1),s("div",{staticClass:"row",staticStyle:{"margin-top":"1vh"}},[s("div",{staticClass:"col-12",staticStyle:{"text-align":"right"}},[s("b-button",{staticStyle:{"margin-right":"8px"},attrs:{size:"sm",variant:"secondary"},on:{click:e.closePopover}},[e._v("Cancel")]),s("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.updateTime}},[e._v("Ok")])],1)])])],1):e._e()],2)},b=[],g=(s("a9e3"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",{on:{click:function(t){return e.$emit("checked-state-changed",e.ingredient)}}},[e.ingredient.is_header?[s("td",{attrs:{colspan:"5"}},[s("b",[e._v(e._s(e.ingredient.note))])])]:[s("td",[e.ingredient.checked?s("i",{staticClass:"far fa-check-circle text-success"}):e._e(),e.ingredient.checked?e._e():s("i",{staticClass:"far fa-check-circle text-primary"})]),s("td",[0!==e.ingredient.amount?s("span",[e._v(e._s(e.calculateAmount(e.ingredient.amount)))]):e._e()]),s("td",[null!==e.ingredient.unit?s("span",[e._v(e._s(e.ingredient.unit.name))]):e._e()]),s("td",[null!==e.ingredient.food?[null!==e.ingredient.food.recipe?s("a",{attrs:{href:e.resolveDjangoUrl("view_recipe",e.ingredient.food.recipe),target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.ingredient.food.name))]):e._e(),null===e.ingredient.food.recipe?s("span",[e._v(e._s(e.ingredient.food.name))]):e._e()]:e._e()],2),s("td",[e.ingredient.note?s("div",[s("span",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.ingredient.note,expression:"ingredient.note",modifiers:{hover:!0}}],staticClass:"d-print-none"},[s("i",{staticClass:"far fa-comment"})]),s("div",{staticClass:"d-none d-print-block"},[s("i",{staticClass:"far fa-comment-alt"}),e._v(" "+e._s(e.ingredient.note)+" ")])]):e._e()])]],2)}),h=[],j={name:"Ingredient",props:{ingredient:Object,ingredient_factor:{type:Number,default:1}},mixins:[d["b"]],data:function(){return{checked:!1}},methods:{calculateAmount:function(e){return Object(d["d"])(e,this.ingredient_factor)}}},y=j,C=s("2877"),k=Object(C["a"])(y,g,h,!1,null,null,null),w=k.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s(e.compiled,{tag:"component",attrs:{ingredient_factor:e.ingredient_factor,code:e.code}})],1)},O=[],S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[e._v(e._s(e.calculateAmount(e.number)))])},E=[],$={name:"ScalableNumber",props:{number:Number,factor:{type:Number,default:4}},methods:{calculateAmount:function(e){return Object(d["d"])(e,this.factor)}}},z=$,T=Object(C["a"])(z,S,E,!1,null,null,null),N=T.exports,P={name:"CompileComponent",props:["code","ingredient_factor"],data:function(){return{compiled:null}},mounted:function(){this.compiled=i["default"].component("compiled-component",{props:["ingredient_factor","code"],components:{ScalableNumber:N},template:"<div>".concat(this.code,"</div>")})}},M=P,D=Object(C["a"])(M,x,O,!1,null,null,null),R=D.exports,U=s("c1df"),I=s.n(U);i["default"].prototype.moment=I.a;var A={name:"Step",mixins:[d["a"]],components:{Ingredient:w,CompileComponent:R},props:{step:Object,ingredient_factor:Number,index:Number,recipe:Object,start_time:String},data:function(){return{details_visible:!0,set_time_input:""}},mounted:function(){this.set_time_input=I()(this.start_time).add(this.step.time_offset,"minutes").format("yyyy-MM-DDTHH:mm")},methods:{calculateAmount:function(e){return Object(d["d"])(e,this.ingredient_factor)},updateTime:function(){var e=I()(this.set_time_input).add(-1*this.step.time_offset,"minutes").format("yyyy-MM-DDTHH:mm");this.$emit("update-start-time",e),this.closePopover()},closePopover:function(){this.$refs["id_reactive_popover_".concat(this.step.id)].$emit("close")},openPopover:function(){this.$refs["id_reactive_popover_".concat(this.step.id)].$emit("open")}}},H=A,B=Object(C["a"])(H,v,b,!1,null,null,null),L=B.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"dropdown"},[e._m(0),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuLink"}},[s("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("edit_recipe",e.recipe.id)}},[s("i",{staticClass:"fas fa-pencil-alt fa-fw"}),e._v(" "+e._s(e._("Edit")))]),e.recipe.internal?e._e():s("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("edit_convert_recipe",e.recipe.id)}},[s("i",{staticClass:"fas fa-exchange-alt fa-fw"}),e._v(" "+e._s(e._("Convert to internal recipe")))]),s("button",{staticClass:"dropdown-item",on:{click:function(t){return e.$bvModal.show("id_modal_add_book")}}},[s("i",{staticClass:"fas fa-bookmark fa-fw"}),e._v(" "+e._s(e._("Add to Book"))+" ")]),e.recipe.internal?s("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("view_shopping")+"?r=["+e.recipe.id+","+e.servings_value+"]",target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-shopping-cart fa-fw"}),e._v(" "+e._s(e._("Add to Shopping"))+" ")]):e._e(),s("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("new_meal_plan")+"?r="+e.recipe.id,target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-calendar fa-fw"}),e._v(" "+e._s(e._("Add to Plan"))+" ")]),s("button",{staticClass:"dropdown-item",on:{click:function(t){return e.$bvModal.show("id_modal_cook_log")}}},[s("i",{staticClass:"fas fa-clipboard-list fa-fw"}),e._v(" "+e._s(e._("Log Cooking"))+" ")]),s("button",{staticClass:"dropdown-item",attrs:{onclick:"window.print()"}},[s("i",{staticClass:"fas fa-print fa-fw"}),e._v(" "+e._s(e._("Print"))+" ")]),s("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("view_export")+"?r="+e.recipe.id,target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-file-export fa-fw"}),e._v(" "+e._s(e._("Export")))]),e.recipe.internal?s("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("new_share_link",e.recipe.id),target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"fas fa-share-alt fa-fw"}),e._v(" "+e._s(e._("Share")))]):e._e()])]),s("cook-log",{attrs:{recipe:e.recipe}})],1)},F=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"btn shadow-none",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-v"})])}],q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-modal",{staticClass:"modal",attrs:{id:"id_modal_cook_log",title:e._("Log Recipe Cooking"),"ok-title":e._("Save"),"cancel-title":e._("Close")},on:{ok:function(t){return e.logCook()}}},[s("p",[e._v(e._s(e._("All fields are optional and can be left empty.")))]),s("form",[s("label",{attrs:{for:"id_log_servings"}},[e._v(e._s(e._("Servings")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.logObject.servings,expression:"logObject.servings"}],staticClass:"form-control",attrs:{type:"number",id:"id_log_servings"},domProps:{value:e.logObject.servings},on:{input:function(t){t.target.composing||e.$set(e.logObject,"servings",t.target.value)}}}),s("label",{staticStyle:{"margin-top":"2vh"}},[e._v(e._s(e._("Rating"))+" - "),s("span",{attrs:{id:"id_rating_show"}},[e._v(e._s(e.logObject.rating)+"/5")])]),s("b-form-rating",{model:{value:e.logObject.rating,callback:function(t){e.$set(e.logObject,"rating",t)},expression:"logObject.rating"}}),s("label",{staticStyle:{"margin-top":"2vh"},attrs:{for:"id_date"}},[e._v(e._s(e._("Date")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.logObject.created_at,expression:"logObject.created_at"}],staticClass:"form-control",attrs:{type:"datetime-local",id:"id_date"},domProps:{value:e.logObject.created_at},on:{input:function(t){t.target.composing||e.$set(e.logObject,"created_at",t.target.value)}}})],1)])],1)},J=[];i["default"].prototype.moment=I.a,i["default"].use(c["a"]);var K={name:"CookLog",mixins:[d["a"]],props:{recipe:Object},data:function(){return{logObject:{recipe:this.recipe.id,servings:0,rating:0,created_at:I()().format("yyyy-MM-DDTHH:mm")}}},methods:{logCook:function(){f(this.logObject)}}},G=K,X=Object(C["a"])(G,q,J,!1,null,null,null),W=X.exports,Q={name:"RecipeContextMenu",mixins:[d["b"],d["a"]],components:{CookLog:W},data:function(){return{servings_value:0}},props:{recipe:Object,servings:{type:Number,default:-1}},mounted:function(){this.servings_value=-1===this.servings?this.recipe.servings:this.servings}},Y=Q,Z=Object(C["a"])(Y,V,F,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("iframe",{staticStyle:{border:"none"},attrs:{src:e.pdfUrl,width:"100%",height:"700px"}})])},se=[],ie={name:"PdfViewer",mixins:[d["b"]],props:{recipe:Object},computed:{pdfUrl:function(){return"/static/pdfjs/viewer.html?file="+Object(d["g"])("api_get_recipe_file",this.recipe.id)}}},ae=ie,ne=Object(C["a"])(ae,te,se,!1,null,null,null),re=ne.exports,ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("img",{attrs:{src:e.pdfUrl,width:"100%",height:"700px",alt:e._("External Recipe Image")}})])},oe=[],le={name:"ImageViewer",mixins:[d["a"]],props:{recipe:Object},computed:{pdfUrl:function(){return Object(d["g"])("api_get_recipe_file",this.recipe.id)}}},de=le,pe=Object(C["a"])(de,ce,oe,!1,null,null,null),fe=pe.exports,ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.recipe.nutrition?s("div",[s("div",{staticClass:"card border-success"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",{staticClass:"card-title"},[s("i",{staticClass:"fas fa-carrot"}),e._v(" "+e._s(e._("Nutrition")))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("i",{staticClass:"fas fa-fire fa-fw text-primary"}),e._v(" "+e._s(e._("Calories"))+" ")]),s("div",{staticClass:"col-6"},[e._v(" "+e._s(e.calculateAmount(e.recipe.nutrition.calories))+" kcal ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("i",{staticClass:"fas fa-bread-slice fa-fw text-primary"}),e._v(" "+e._s(e._("Carbohydrates"))+" ")]),s("div",{staticClass:"col-6"},[e._v(" "+e._s(e.calculateAmount(e.recipe.nutrition.carbohydrates))+" g ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("i",{staticClass:"fas fa-cheese fa-fw text-primary"}),e._v(" "+e._s(e._("Fats"))+" ")]),s("div",{staticClass:"col-6"},[e._v(" "+e._s(e.calculateAmount(e.recipe.nutrition.fats))+" g ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("i",{staticClass:"fas fa-drumstick-bite fa-fw text-primary"}),e._v(" "+e._s(e._("Proteins"))+" ")]),s("div",{staticClass:"col-6"},[e._v(" "+e._s(e.calculateAmount(e.recipe.nutrition.proteins))+" g ")])])])])]):e._e()},me=[],_e={name:"Nutrition",mixins:[d["a"]],props:{recipe:Object,ingredient_factor:Number},methods:{calculateAmount:function(e){return Object(d["d"])(e,this.ingredient_factor)}}},ve=_e,be=Object(C["a"])(ve,ue,me,!1,null,null,null),ge=be.exports,he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.recipe.keywords.length>0?s("div",e._l(e.recipe.keywords,(function(t){return s("small",{key:t.id,staticStyle:{padding:"2px"}},[e._v(" "+e._s(t.icon)+" "+e._s(t.name)+" ")])})),0):e._e()},je=[],ye={name:"Keywords",props:{recipe:Object}},Ce=ye,ke=Object(C["a"])(Ce,he,je,!1,null,null,null),we=ke.exports,xe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Oe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col",staticStyle:{"text-align":"center"}},[s("i",{staticClass:"fas fa-spinner fa-spin fa-10x"})])])}],Se={name:"LoadingSpinner",props:{recipe:Object}},Ee=Se,$e=Object(C["a"])(Ee,xe,Oe,!1,null,null,null),ze=$e.exports,Te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-modal",{staticClass:"modal",attrs:{id:"id_modal_add_book",title:e._("Add to Book"),"ok-title":e._("Add"),"cancel-title":e._("Close")},on:{ok:function(t){return e.addToBook()}}},[s("multiselect",{attrs:{options:e.books,"preserve-search":!0,placeholder:e._("Select Book"),label:"name","track-by":"id",id:"id_books",multiple:!1},on:{"search-change":e.loadBook},model:{value:e.selected_book,callback:function(t){e.selected_book=t},expression:"selected_book"}})],1)],1)},Ne=[],Pe=s("8e5f"),Me=s.n(Pe);i["default"].prototype.moment=I.a,i["default"].use(c["a"]);var De={name:"AddRecipeToBook",mixins:[d["a"]],components:{Multiselect:Me.a},props:{recipe:Object},data:function(){return{books:[],selected_book:null}},mounted:function(){this.loadBook("")},methods:{loadBook:function(e){var t=this;u(e).then((function(e){t.books=e}))},addToBook:function(){m({recipe:this.recipe.id,book:this.selected_book.id})}}},Re=De,Ue=(s("60bc"),Object(C["a"])(Re,Te,Ne,!1,null,null,null)),Ie=Ue.exports;i["default"].prototype.moment=I.a,i["default"].use(c["a"]);var Ae={name:"RecipeView",mixins:[d["a"],d["b"],d["c"]],components:{PdfViewer:re,ImageViewer:fe,Ingredient:w,Step:L,RecipeContextMenu:ee,Nutrition:ge,Keywords:we,LoadingSpinner:ze,AddRecipeToBook:Ie},computed:{ingredient_factor:function(){return this.servings/this.recipe.servings}},data:function(){return{loading:!0,recipe:void 0,ingredient_count:0,servings:1,start_time:""}},mounted:function(){this.loadRecipe(window.RECIPE_ID)},methods:{loadRecipe:function(e){var t=this;p(e).then((function(e){0!==window.USER_SERVINGS&&(e.servings=window.USER_SERVINGS),t.servings=e.servings;var s,i=0,a=Object(r["a"])(e.steps);try{for(a.s();!(s=a.n()).done;){var n=s.value;t.ingredient_count+=n.ingredients.length;var c,o=Object(r["a"])(n.ingredients);try{for(o.s();!(c=o.n()).done;){var l=c.value;t.$set(l,"checked",!1)}}catch(d){o.e(d)}finally{o.f()}n.time_offset=i,i+=n.time}}catch(d){a.e(d)}finally{a.f()}i>0&&(t.start_time=I()().format("yyyy-MM-DDTHH:mm")),t.recipe=e,t.loading=!1}))},updateStartTime:function(e){this.start_time=e},updateIngredientCheckedState:function(e){var t,s=Object(r["a"])(this.recipe.steps);try{for(s.s();!(t=s.n()).done;){var i,a=t.value,n=Object(r["a"])(a.ingredients);try{for(n.s();!(i=n.n()).done;){var c=i.value;c.id===e.id&&this.$set(c,"checked",!c.checked)}}catch(o){n.e(o)}finally{n.f()}}}catch(o){s.e(o)}finally{s.f()}}}},He=Ae,Be=Object(C["a"])(He,a,n,!1,null,null,null),Le=Be.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(Le)}}).$mount("#app")},4678:function(e,t,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=n,e.exports=a,a.id="4678"},fa7d:function(e,t,s){"use strict";s.d(t,"c",(function(){return n})),s.d(t,"f",(function(){return r})),s.d(t,"a",(function(){return c})),s.d(t,"e",(function(){return o})),s.d(t,"b",(function(){return l})),s.d(t,"g",(function(){return d})),s.d(t,"d",(function(){return f}));s("99af");var i=s("59e4");function a(e,t,s){var i=Math.floor(e),a=1,n=i+1,r=1;if(e!==i)while(a<=t&&r<=t){var c=(i+n)/(a+r);if(e===c){a+r<=t?(a+=r,i+=n,r=t+1):a>r?r=t+1:a=t+1;break}e<c?(n=i+n,r=a+r):(i+=n,a+=r)}if(a>t&&(a=r,i=n),!s)return[0,i,a];var o=Math.floor(i/a);return[o,i-o*a,a]}var n={methods:{makeToast:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r(e,t,s)}}};function r(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=new i["a"];a.$bvToast.toast(t,{title:e,variant:s,toaster:"b-toaster-top-center",solid:!0})}var c={methods:{_:function(e){return o(e)}}};function o(e){return window.gettext(e)}var l={methods:{resolveDjangoUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return d(e,t)}}};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==t?window.Urls[e](t):window.Urls[e]()}function p(e){return window.USER_PREF[e]}function f(e,t){if(p("user_fractions")){var s="",i=a.cont(e*t,9,!0);return i[0]>0&&(s+=i[0]),i[1]>0&&(s+=" <sup>".concat(i[1],"</sup>&frasl;<sub>").concat(i[2],"</sub>")),s}return u(e*t)}function u(e){var t=p("user_fractions")?p("user_fractions"):2;return+(Math.round(e+"e+".concat(t))+"e-".concat(t))}}});