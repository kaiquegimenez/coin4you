(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e7a69a4"],{"129b":function(t,o,e){"use strict";e("58bb")},1551:function(t,o,e){},5747:function(t,o,e){t.exports=e.p+"img/shop.9b18c927.svg"},"58bb":function(t,o,e){},"6ab2":function(t,o,e){"use strict";e("1551")},"7b4a":function(t,o,e){},"7cda":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("Header"),e("div",{staticClass:"body-container"},[e("div",{staticClass:"input-container"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Nome do Produto"},domProps:{value:t.name},on:{input:function(o){o.target.composing||(t.name=o.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{type:"number",placeholder:"Valor do Produto"},domProps:{value:t.value},on:{input:function(o){o.target.composing||(t.value=o.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"input input__description",attrs:{type:"text",placeholder:"Descrição do Produto"},domProps:{value:t.description},on:{input:function(o){o.target.composing||(t.description=o.target.value)}}})])]),e("div",{staticClass:"button-container"},[e("button",{staticClass:"button",on:{click:function(o){return t.registerNewProduct()}}},[t._v("Cadastrar")])]),e("div",{staticClass:"list-products"},t._l(t.products,(function(o,n){return e("ListStore",{key:n,attrs:{edit:!0,product:o},on:{getProducts:function(o){return t.getListProducts()}}})})),1)]),e("Footer")],1)},i=[],s=(e("b0c0"),e("a4d3"),e("e01a"),e("d722")),a=e("0418"),c=e("fd2d"),r=e("f04a"),u={components:{Header:a["a"],Footer:c["a"],ListStore:r["a"]},data:function(){return{name:"",value:"",description:"",products:{}}},mounted:function(){this.getListProducts()},methods:{getListProducts:function(){var t=this;return s["a"].get("https://back-coin.herokuapp.com/adm/product").then((function(o){200===o.status&&(t.products=o.data)})).catch((function(t){console.log(t)}))},registerNewProduct:function(){var t=this;return s["a"].post("https://back-coin.herokuapp.com/adm/product",{nome:this.name,valor:this.value,descricao:this.description}).then((function(o){o.data.success&&(t.getListProducts(),console.log(o.data.message),t.description="",t.value="",t.name="")})).catch((function(t){console.log(t)}))}}},d=u,l=(e("824b"),e("2877")),p=Object(l["a"])(d,n,i,!1,null,"6bbabb92",null);o["default"]=p.exports},"824b":function(t,o,e){"use strict";e("7b4a")},b0c0:function(t,o,e){var n=e("83ab"),i=e("5e77").EXISTS,s=e("e330"),a=e("9bf2").f,c=Function.prototype,r=s(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=s(u.exec),l="name";n&&!i&&a(c,l,{configurable:!0,get:function(){try{return d(u,r(this))[1]}catch(t){return""}}})},daf0:function(t,o,e){t.exports=e.p+"img/edit.46cb6fb5.svg"},f04a:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,n=t._self._c||o;return null===t.product.deletado_em?n("div",{staticClass:"list"},[n("div",{staticClass:"list__container"},[n("div",{staticClass:"list__user-data"},[t._m(0),n("div",{staticClass:"items"},[n("div",[t._v(" "+t._s(t.product.nome)+" "),n("span",{staticClass:"items__price"},[t._v(t._s(t.product.valor)+" KC")])]),n("div",{staticClass:"items__decription"},[t._v(" "+t._s(t.product.descricao)+" ")])])])]),t.edit?n("div",[n("button",{staticClass:"button button__edit",on:{click:function(o){return t.editProduct()}}},[n("img",{attrs:{src:e("daf0"),width:"24px",height:"24px",alt:""}})]),n("button",{staticClass:"button button__delete",on:{click:function(o){return t.deleteProduct()}}},[n("img",{attrs:{src:e("0d45"),width:"24px",height:"24px",alt:""}})])]):n("button",{staticClass:"button-buy",on:{click:function(o){return t.buyItem()}}},[t._v("Comprar")]),t.showDialogProduct?n("DialogEdit",{attrs:{data:t.product,title:"Editar Produto",type:"product"},on:{confirmEdit:t.confirmEdit,close:function(o){t.showDialogProduct=!1}}}):t._e(),t.showModal?n("ConfirmDialog",{attrs:{product:t.product},on:{close:function(o){t.showModal=!1}}}):t._e()],1):t._e()},i=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"list__image"},[n("img",{attrs:{src:e("5747"),alt:""}})])}],s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[e("h3",[t._v("Comprar Produto")])]}))],2),e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[e("span",[t._v("Deseja trocar "),e("b",[t._v(t._s(t.product.valor))]),t._v(" moedas pelo produto "),e("b",[t._v(t._s(t.product.nome))])])]}))],2),e("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[e("button",{staticClass:"button button__cancel",on:{click:function(o){return t.$emit("close")}}},[t._v(" Cancelar ")]),e("button",{staticClass:"button button__confirm",on:{click:function(o){return t.confirm()}}},[t._v(" Confirmar ")])]}))],2)])])])])},a=[],c=e("d722"),r={name:"ConfirmDialog",props:{product:{}},data:function(){return{idUser:""}},mounted:function(){this.idUser=JSON.parse(localStorage.getItem("user")).id},methods:{confirm:function(){var t=this;return c["a"].post("https://back-coin.herokuapp.com/coins/changes",{idProduto:this.product.id,idUsuario:this.idUser}).then((function(o){o.success,console.log(o.data.message),t.$emit("close")})).catch((function(t){console.log(t)}))}}},u=r,d=(e("6ab2"),e("2877")),l=Object(d["a"])(u,s,a,!1,null,"9e9ee122",null),p=l.exports,m=e("e4d5"),f={name:"ListStore",components:{ConfirmDialog:p,DialogEdit:m["a"]},data:function(){return{showModal:!1,showDialogProduct:!1}},props:{product:{type:Object,default:function(){return{name:"",description:"",price:""}}},edit:{default:!1,type:Boolean}},methods:{buyItem:function(){this.showModal=!0},deleteProduct:function(){var t=this,o=this.product.id;return c["a"].put("https://back-coin.herokuapp.com/delete/product",{id:o}).then((function(o){o.data.success?(t.$emit("getProducts"),console.log(o.data.message)):console.log("Não foi possível deletar")})).catch((function(t){console.log(t)}))},editProduct:function(){this.showDialogProduct=!0},confirmEdit:function(){this.$emit("getProducts")}}},v=f,h=(e("129b"),Object(d["a"])(v,n,i,!1,null,"17f4beed",null));o["a"]=h.exports}}]);
//# sourceMappingURL=chunk-2e7a69a4.c4af67ef.js.map