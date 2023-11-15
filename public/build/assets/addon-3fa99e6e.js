function v(t,e,i,a,l,r,o,c){var s=typeof t=="function"?t.options:t;e&&(s.render=e,s.staticRenderFns=i,s._compiled=!0),a&&(s.functional=!0),r&&(s._scopeId="data-v-"+r);var d;if(o?(d=function(n){n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!n&&typeof __VUE_SSR_CONTEXT__<"u"&&(n=__VUE_SSR_CONTEXT__),l&&l.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(o)},s._ssrRegister=d):l&&(d=c?function(){l.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:l),d)if(s.functional){s._injectStyles=d;var f=s.render;s.render=function(p,h){return d.call(h),f(p,h)}}else{var u=s.beforeCreate;s.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:s}}const{ValidatesFieldConditions:_}=FieldConditions,m={mixins:[Fieldtype,_],inject:["storeName"],computed:{fieldsObject(){return Object.fromEntries(this.meta.fields.map(t=>[t.handle,t]))},filterFields(){return{field:Object.fromEntries(this.meta.fields.map(t=>[t.handle,t.fields]))}}},methods:{addFilter(t,e){const i=uniqid();this.$refs.addFilterDropdowm.close(),this.update([...this.value,{id:i,type:t,handle:e,values:this.meta.defaults[e]}]),this.updateMeta({...this.meta,existing:{...this.meta.existing,[i]:this.meta.new[e]}})},resetFilter(t,e){const{type:i}=this.value[t];this.update([...this.value.slice(0,t),{type:i,handle:e,values:this.meta.defaults[e]},...this.value.slice(t+1)])},updateFilterField(t,e,i){this.update([...this.value.slice(0,t),{...this.value[t],values:{...this.value[t].values,[e]:i}},...this.value.slice(t+1)])},updateFilterMeta(t,e,i){this.updateMeta({...this.meta,existing:{...this.meta.existing,[t]:{...this.meta.existing[t],[e]:i}}})},removeFilter(t){this.update([...this.value.slice(0,t),...this.value.slice(t+1)])},filterlabel(t){return{field:"Field"}[t.type],`${this.fieldsObject[t.handle].display}`},filterFieldMeta(t,e,i){return this.meta.existing[t][i]},filterFieldPath(t,e){return`${this.handle}.${t}.values.${e}`},filterFieldErrors(t,e){const i=this.$store.state.publish[this.storeName];return i?i.errors[this.filterFieldPath(t,e)]||[]:[]}}};var F=function(){var e=this,i=e._self._c;return i("div",[e.loading?i("loading-graphic",{attrs:{text:!1}}):e._e(),e.loading?e._e():i("div",[i("div",{},e._l(e.value,function(a,l){return i("div",{staticClass:"replicator-set shadow-sm mb-2 rounded border"},[i("div",{staticClass:"replicator-set-header"},[i("div",{staticClass:"py-2 pl-2 replicator-set-header-inner flex justify-between items-end w-full"},[i("div",{staticClass:"text-sm leading-none"},[e._v(" "+e._s(e.filterlabel(a))+" ")]),i("button",{staticClass:"flex self-end group items-center",attrs:{"aria-label":e.__("Delete Filter")},on:{click:function(r){return e.removeFilter(l)}}},[i("svg-icon",{staticClass:"w-4 h-4 text-gray-600 group-hover:text-gray-900",attrs:{name:"micro/trash"}})],1)])]),i("div",{staticClass:"replicator-set-body flex-1 publish-fields @container"},e._l(e.filterFields[a.type][a.handle],function(r){return i("set-field",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true || showField(field.field, filterFieldPath(index, field.handle))"}],key:r.handle,attrs:{field:r,value:a.values[r.handle],meta:e.filterFieldMeta(a.id,a.handle,r.handle),"parent-name":e.name,"set-index":l,errors:e.filterFieldErrors(l,r.handle),"field-path":e.filterFieldPath(l,r.handle),"read-only":e.isReadOnly},on:{updated:o=>e.updateFilterField(l,r.handle,o),"meta-updated":o=>e.updateFilterMeta(a.id,r.handle,o)}})}),1)])}),0),i("div",{staticClass:"flex"},[i("popover",{ref:"addFilterDropdowm",staticClass:"dropdown-list filter_builder-dropdown",attrs:{placement:"bottom-start"},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("button",{staticClass:"btn"},[e._v(" Add Filter ")])]},proxy:!0}],null,!1,3422622939)},e._l(e.meta.fields,function(a){return i("button",{domProps:{textContent:e._s(a.display)},on:{click:function(l){return e.addFilter("field",a.handle)}}})}),0)],1)])],1)},b=[],g=v(m,F,b,!1,null,null,null,null);const C=g.exports;Statamic.booting(()=>{Statamic.component("filter_builder-fieldtype",C)});