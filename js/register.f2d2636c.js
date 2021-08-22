(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"166a":function(e,t,s){},"2c64":function(e,t,s){},"3d86":function(e,t,s){},"791b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[s("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-card-title",{staticClass:"text-h4 font-weight-bold"},[e._v("Register to note")]),s("v-divider",{staticClass:"mx-4"}),s("v-card-text",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[s("v-text-field",{attrs:{rules:[function(){return!!e.userRegister.firstName||"First name is required"}],label:"First name",required:""},model:{value:e.userRegister.firstName,callback:function(t){e.$set(e.userRegister,"firstName",t)},expression:"userRegister.firstName"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[s("v-text-field",{attrs:{rules:[function(){return!!e.userRegister.lastName||"Last name is required"}],label:"Last name",required:""},model:{value:e.userRegister.lastName,callback:function(t){e.$set(e.userRegister,"lastName",t)},expression:"userRegister.lastName"}})],1)],1),s("v-text-field",{attrs:{rules:[function(){return!!e.userRegister.username||"Username is required"}],label:"Username",required:""},model:{value:e.userRegister.username,callback:function(t){e.$set(e.userRegister,"username",t)},expression:"userRegister.username"}}),s("v-text-field",{staticClass:"input-group--focused",attrs:{label:"Password",rules:[function(){return!!e.userRegister.password||"Password is required"},function(e){return e.length>=8||"Min 8 characters"}],"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",name:"password",hint:"At least 8 characters"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.userRegister.password,callback:function(t){e.$set(e.userRegister,"password",t)},expression:"userRegister.password"}}),s("v-text-field",{attrs:{rules:[function(){return!!e.userRegister.age||"Age is required"},function(){return e.userRegister.age>0}],label:"Age",required:""},model:{value:e.userRegister.age,callback:function(t){e.$set(e.userRegister,"age",t)},expression:"userRegister.age"}}),s("v-radio-group",{attrs:{row:"",mandatory:""},model:{value:e.userRegister.gender,callback:function(t){e.$set(e.userRegister,"gender",t)},expression:"userRegister.gender"}},[s("label",{staticClass:"mr-4"},[e._v("Gender: ")]),s("v-radio",{attrs:{label:"Male",value:"Male"}}),s("v-radio",{attrs:{label:"Female",value:"Female"}}),s("v-radio",{attrs:{label:"Other",value:"Other"}})],1)],1),s("v-divider",{staticClass:"mx-4"}),s("v-card-actions",{staticClass:"pa-4"},[s("v-btn",{staticClass:"rounded-lg font-weight-bold",attrs:{color:"warning",block:""},on:{click:e.submit}},[e._v("Register")])],1),s("v-card-text",{staticClass:"font-italic text-center pt-0"},[e._v("Already have an account? "),s("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" now")],1)],1)],1)],1)],1)],1)},a=[],r=s("67cf"),l={name:"FormSignup",data:function(){return{userRegister:{username:"",password:"",firstName:"",lastName:"",age:"",gender:""},show:!1}},methods:{submit:function(e){var t=this;e.preventDefault(),this.validate()&&r["a"].register(this.userRegister).then((function(e){e["isRegister"]?(t.$router.push("/home"),t.$emit("snackbar",e["message"],1)):t.$emit("snackbar",e["message"],3)}))},validate:function(){return this.$refs.form.validate()}}},n=l,o=s("2877"),u=s("6544"),d=s.n(u),h=s("7496"),c=s("8336"),p=s("b0af"),m=s("99d9"),g=s("62ad"),v=s("ce7e"),f=s("4bd4"),b=(s("2c64"),s("ba87")),V=s("9d26"),y=s("c37a"),C=s("7e2b"),x=s("a9ad"),w=s("4e82"),I=s("5607"),R=s("2b0e"),S=R["default"].extend({name:"rippleable",directives:{ripple:I["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),k=s("7560"),A=s("80d2"),$=R["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:A["f"]}}}),O=s("58df");function D(e){e.preventDefault()}var F=Object(O["a"])(y["a"],S,$).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=y["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:D},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:D},ref:"input"})},onBlur(){this.isFocused=!1},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const s=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===s&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(){this.isFocused=!0},onKeydown(e){}}}),G=s("d9f7");const M=Object(O["a"])(C["a"],x["a"],S,Object(w["a"])("radioGroup"),k["a"]);var _=M.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){return F.options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return y["a"].options.computed.computedId.call(this)},hasLabel:y["a"].options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-"+this.radioGroup._uid},rippleState(){return F.options.computed.rippleState.call(this)},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(e){return F.options.methods.genInput.call(this,"radio",e)},genLabel(){return this.hasLabel?this.$createElement(b["a"],{on:{click:D},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(A["j"])(this,"label")||this.label):null},genRadio(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(V["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput({name:this.computedName,value:this.value,...t}),this.genRipple(this.setTextColor(this.rippleState))])},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(e){const t={staticClass:"v-radio",class:this.classes,on:Object(G["b"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return e("div",t,[this.genRadio(),this.genLabel()])}}),j=(s("ec29"),s("3d86"),s("166a"),s("a452")),N=s("d9bd");const B=Object(O["a"])(j["a"],k["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((e,t)=>this.toggleMethod(this.getValue(e,t)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.internalValue===e;const e=this.internalValue;return Array.isArray(e)?t=>e.includes(t):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(N["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return null==e.value||""===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",()=>this.onClick(e)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),s=this.getValue(e,t);this.items.splice(t,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(e=>e!==s):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const s=this.getValue(e,t);e.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const s=t.find(e=>!e.disabled);if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],s=t.slice(),i=s.findIndex(t=>t===e);this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(e),this.internalValue=s)},updateSingle(e){const t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});B.extend({name:"v-item-group",provide(){return{itemGroup:this}}});const L=Object(O["a"])($,B,y["a"]);var q=L.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes(){return{...y["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},y["a"].options.methods.genDefaultSlot.call(this))},genInputSlot(){const e=y["a"].options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel(){const e=y["a"].options.methods.genLabel.call(this);return e?(e.data.attrs.id=this.computedId,delete e.data.attrs.for,e.tag="legend",e):null},onClick:B.options.methods.onClick}}),E=s("0fd9"),T=s("8654"),z=Object(o["a"])(n,i,a,!1,null,null,null);t["default"]=z.exports;d()(z,{VApp:h["a"],VBtn:c["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:g["a"],VDivider:v["a"],VForm:f["a"],VRadio:_,VRadioGroup:q,VRow:E["a"],VTextField:T["a"]})},ec29:function(e,t,s){}}]);
//# sourceMappingURL=register.f2d2636c.js.map