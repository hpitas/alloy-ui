AUI.add("aui-form-builder-field",function(cm){var cd=cm.Lang,a9=cd.isArray,cO=cd.isObject,b9=cd.isString,cM=cm.Array,g="acceptChildren",bK="allowRemoveRequiredFields",aM="availableFieldId",d="bodyContent",a7="boolean",a0="boundingBox",cv="builder",cE="button",Q="buttons",C="buttonsNode",cQ="cancel",aR="checkbox",R="checked",r="children",cA="clearfix",a3="close",a5="component",aV="container",cL="contentBox",cH="controls",b1="controlsToolbar",cP="dataType",cB="default",be="delete",h="deleteEvent",br="deleteFieldsMessage",b2="deleteMessage",F="description",bV="disabled",b3=".",bq="drag",aL="dragContainer",B="dragContainerNode",cf="dragNodesList",aH="drop",co="dropNode",bG="dropZone",bj="dropZoneNode",aP="duplicate",D="duplicateEvent",bD="duplicateMessage",Y="edit",p="editEvent",ba="editMessage",bW="",bE="field",f="fields",b0="for",u="form",bt="formBuilder",aQ="form-builder-field",b6="gear",w="help",q="helper",aA="hidden",v="icon",cz="id",ap="label",ci="labelNode",bS="lightbulb",bv="metadata",aK="name",j="newwin",bc="no",cR="node",a="panel",aG="parent",ch="pencil",bo="portalLayout",aY="predefinedValue",bH="proxy",cu="readOnlyAttributes",a4="rendered",av="required",bm="requiredFlagNode",bC="select",bu="selected",bg="settings",ay="settingsFormNode",ac="showLabel",aC="size",ad=" ",bU="state",b7="string",ce="strings",aj="templateNode",bY="text",ax="textarea",y="tip",bL="tipIconNode",ae="type",aO="unique",bz="widget",cw="yes",ca="zone",o=",",cJ="-",aB=".",P="",cg="#",bk="_",K=cm.getClassName,bB=K(a5),bw=K(u,cv,cE),aw=K(u,cv,cE,be),X=K(u,cv,cE,aP),aN=K(u,cv,cE,Y),n=K(u,cv,cE,cH),az=K(u,cv,aH,cR),H=K(u,cv,aH,ca),ct=K(u,cv,bE),aq=K(u,cv,bE,Q),bd=K(u,cv,bE,bu),cb=K(u,cv,v),ak=K(u,cv,v,be),bx=K(u,cv,v,aP),Z=K(u,cv,v,Y),bF=K(u,cv,v,y),a1=K(u,cv,av),I=K(u,cv,aO),c=K(bE),aU=K(bE,ap),bI=K(bE,bY),t=K(q,cA),al=K(q,aA),b4=K(bU,cB),N=K(bz),ck='<div class="'+[N,bB,ct].join(ad)+'"></div>',ah='<div class="'+H+'"></div>',bl='<label class="'+aU+'" for="{id}">{label}</label>',aF='<span class="'+a1+'">*</span>',bA='<a href="javascript:;" class="'+bF+'"></a>';var am=cm.Component.create({NAME:aQ,AUGMENTS:[cm.FieldSupport]});var x=cm.Component.create({NAME:aQ,ATTRS:{acceptChildren:{value:true},controlsToolbar:{validator:cO,valueFn:"_valueControlsToolbar"},dataType:{value:b7},disabled:{value:false},id:{setter:"_setId"},label:{value:bW},localizationMap:{value:{}},name:{valueFn:function(){var A=this;var L=A.get(ae);return cm.FormBuilderField.buildFieldName(L);}},parent:{value:null},predefinedValue:{value:bW},readOnlyAttributes:{validator:a9,value:[]},required:{setter:cm.DataType.Boolean.parse,value:false},selected:{setter:cm.DataType.Boolean.parse,value:false},showLabel:{setter:cm.DataType.Boolean.parse,value:true},strings:{value:{button:"Button",buttonType:"Button Type",deleteFieldsMessage:"Are you sure you want to delete the selected field(s)?",duplicateMessage:"Duplicate",editMessage:"Edit",label:"Label",large:"Large",medium:"Medium",multiple:"Multiple",name:"Name",no:"No",options:"Options",predefinedValue:"Predefined Value",required:"Required",reset:"Reset",showLabel:"Show Label",small:"Small",submit:"Submit",tip:"Tip",type:"Type",width:"Width",yes:"Yes"}},tabIndex:{value:1},template:{value:bW},tip:{value:bW},type:{value:bW},unique:{setter:cm.DataType.Boolean.parse,value:false},zIndex:{value:100},dropZoneNode:{valueFn:function(){return cm.Node.create(ah);}},labelNode:{valueFn:function(){var A=this;return cm.Node.create(cd.sub(bl,{id:A.get(cz),label:A.get(ap)}));}},requiredFlagNode:{valueFn:function(){return cm.Node.create(aF);}},templateNode:{valueFn:"getNode"},tipIconNode:{valueFn:function(){return cm.Node.create(bA);}}},UI_ATTRS:[g,bV,f,ap,aK,aY,av,bu,ac,y,aO],EXTENDS:am,buildFieldId:function(A){return f+bk+bE+bk+A;},buildFieldName:function(A){return A+(++cm.Env._uidx);},HTML_PARSER:{dropZoneNode:b3+H,labelNode:ap+b3+aU,requiredFlagNode:b3+a1,tipIconNode:b3+bF},prototype:{BOUNDING_TEMPLATE:ck,CONTROLS_TEMPLATE:'<div class="'+n+'"></div>',initializer:function(){var A=this;A.toolTip=new cm.Tooltip({trigger:A.get(bL),hideDelay:100});},renderUI:function(){var A=this;var L=A.get(cL);var cU=A.get(ci);var cW=A.get(bm);var cV=A.get(aj);var cT=A.get(bL);L.addClass(t);L.append(cU);L.append(cW);L.append(cT);L.append(cV);A.toolTip.render();},destructor:function(){var A=this;A.get(f).each(function(cT){cT.destroy();});var L=A.get(cv);if(L.editingField===A){delete L.editingField;L.closeEditProperties();}if(L.selectedField===A){delete L.selectedField;}if(A.controlsToolbar){A.controlsToolbar.destroy();}A.get(a0).dd.destroy();A.toolTip.destroy();A.get(aG).removeField(A);L.uniqueFields.remove(A);},createField:function(cT){var A=this;var L=A.get(cv);cT=L.createField(cT);cT.set(aG,A);return cT;},getHTML:function(){return bW;},getNode:function(){var A=this;return cm.Node.create(A.getHTML());},getProperties:function(){var A=this;var cT=A.getPropertyModel();var L=A.get(cu);cM.each(cT,function(cX){var cV=cX.attributeName;var cW=A.get(cV),cU=cd.type(cW);if(cU===a7){cW=String(cW);}cX.value=cW;if(cM.indexOf(L,cV)>-1){cX.editor=false;}});return cT;},getPropertyModel:function(){var L=this;var A=L.getStrings();return[{attributeName:ae,editor:false,name:A[ae]},{attributeName:ap,editor:new cm.TextCellEditor(),name:A[ap]},{attributeName:ac,editor:new cm.RadioCellEditor({options:{"true":A[cw],"false":A[bc]}}),formatter:cm.bind(L._booleanFormatter,L),name:A[ac]},{attributeName:av,editor:new cm.RadioCellEditor({options:{"true":A[cw],"false":A[bc]}}),formatter:cm.bind(L._booleanFormatter,L),name:A[av]},{attributeName:aK,editor:new cm.TextCellEditor({validator:{rules:{value:{required:true}}}}),name:A[aK]},{attributeName:aY,editor:new cm.TextCellEditor(),name:A[aY]},{attributeName:y,editor:new cm.TextAreaCellEditor(),name:A[y]}];},_booleanFormatter:function(cU){var L=this;var A=L.getStrings();var cT=cm.DataType.Boolean.parse(cU.record.get(bM).value);return cT?A[cw]:A[bc];},_renderControlsToolbar:function(){var L=this;var cT=L.get(a0);if(!L.controlsNode){L.controlsNode=cm.Node.create(L.CONTROLS_TEMPLATE);
L.controlsNode.appendTo(cT);}var A=L.controlsToolbar=new cm.Toolbar(L.get(b1)).render(L.controlsNode);A.get(a0).hide();L._uiSetRequired(L.get(av));},_setId:function(A){return cm.FormBuilderField.buildFieldId(A);},_uiSetAcceptChildren:function(cV){var A=this;var L=A.get(a0);var cU=A.get(bj);var cT=L.one(b3+H);if(cV&&!cT){L.append(cU);}else{if(!cV&&cT){cT.remove();}else{if(cV&&cT){A.set(bj,cT);}}}},_uiSetDisabled:function(cT){var A=this;var L=A.get(aj);if(cT){L.setAttribute(bV,cT);}else{L.removeAttribute(bV);}},_handleDuplicateEvent:function(L){var A=this;if(!A.get(aO)){A.get(cv).duplicateField(A);}},_handleEditEvent:function(L){var A=this;A.get(cv).editField(A);},_handleDeleteEvent:function(cT){var L=this;var A=L.getStrings();if(confirm(A[br])){L.destroy();}},_uiSetFields:function(cT){var A=this;var L=A.get(cv);L.plotFields(cT,A.get(bj));},_uiSetLabel:function(cT){var A=this;var L=A.get(ci);L.setContent(cT);},_uiSetName:function(cT){var A=this;var L=A.get(aj);L.set(aK,cT);},_uiSetPredefinedValue:function(cT){var A=this;var L=A.get(aj);L.val(cT);},_uiSetRequired:function(cV){var cT=this;var cU=cT.get(cv);var L=cT.controlsToolbar;var A=cT.getStrings();if(L){if(cV&&!cU.get(bK)){L.remove(h);}else{L.add({handler:cm.bind(cT._handleDeleteEvent,cT),icon:a3,id:h,title:A[b2]});}}cT.get(bm).toggleClass(al,!cV);},_uiSetSelected:function(cT){var L=this;L.get(a0).toggleClass(bd,cT);if(!L.controlsToolbar){L._renderControlsToolbar();}var A=L.controlsToolbar.get(a0);if(cT){A.show();}else{A.hide();}},_uiSetShowLabel:function(cT){var A=this;var L=A.get(ci);L.toggleClass(al,!cT);},_uiSetTip:function(cT){var A=this;var L=A.get(bL);L.toggleClass(al,!cT);A.toolTip.set(d,cT);},_uiSetUnique:function(cV){var cT=this;var cU=cT.get(a0);var L=cT.controlsToolbar;var A=cT.getStrings();cU.toggleClass(I,cV);if(L){if(cV){L.remove(D);}else{L.add({handler:cm.bind(cT._handleDuplicateEvent,cT),icon:j,id:D,title:A[bD]});}}},_valueControlsToolbar:function(){var L=this;var A=L.getStrings();return{activeState:false,children:[{handler:cm.bind(L._handleEditEvent,L),icon:b6,id:p,title:A[ba]},{handler:cm.bind(L._handleDuplicateEvent,L),icon:j,id:D,title:A[bD]},{handler:cm.bind(L._handleDeleteEvent,L),icon:a3,id:h,title:A[b2]}]};}}});cm.FormBuilderField=x;cm.FormBuilder.types["field"]=cm.FormBuilderField;var cd=cm.Lang,a9=cd.isArray,aJ=cd.isNumber,b9=cd.isString,bn=cm.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),cE="button",cC="buttonType",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",b8="form-builder-button-field",bh="input",ap="label",aK="name",cR="node",aa="option",ai="options",aY="predefinedValue",bH="proxy",b5="reset",bu="selected",aE="submit",ad=" ",ce="strings",aS="template",aj="templateNode",bY="text",ae="type",m="value",K=cm.getClassName,bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(aQ),cq=K(aQ,cR),b4=K(bU,cB),bX='<input id="{id}" class="'+[cq,bJ].join(ad)+'" name="{name}" type="{type}" value="{value}" />',cS=[aE,b5,cE];var cp=cm.Component.create({NAME:b8,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:aE,validator:function(A){return cm.Array(cS).indexOf(A.toLowerCase())>-1;}},predefinedValue:{value:bn(aE)},showLabel:{value:false},template:{valueFn:function(){return bX;}}},UI_ATTRS:cm.FormBuilderField.UI_ATTRS.concat([cC]),CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cz),label:A.get(ap),name:A.get(aK),type:A.get(cC),value:A.get(aY)});},getPropertyModel:function(){var L=this;var A=L.getStrings();var cT=cm.FormBuilderButtonField.superclass.getPropertyModel.apply(L,arguments);cT.push({attributeName:cC,editor:new cm.RadioCellEditor({options:{"button":A[cE],"reset":A[b5],"submit":A[aE]}}),name:A[cC]});return cT;},_uiSetButtonType:function(cT){var A=this;var L=A.get(aj);L.setAttribute(ae,cT);}}});cm.FormBuilderButtonField=cp;cm.FormBuilder.types["button"]=cm.FormBuilderButtonField;var cd=cm.Lang,a9=cd.isArray,bf=cd.isBoolean,aJ=cd.isNumber,b9=cd.isString,a7="boolean",aR="checkbox",R="checked",b3=".",bW="",bE="field",cG="form-builder-checkbox-field",aQ="form-builder-field",ap="label",b="labels",aK="name",cR="node",aY="predefinedValue",ad=" ",aS="template",aj="templateNode",m="value",K=cm.getClassName,c=K(bE),au=K(bE,aR),cj=K(bE,aD),bZ=K(aQ),cI=K(aQ,aR),cq=K(aQ,cR),a6='<input id="{id}" class="'+[cq,c,au,cj].join(ad)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var ag=cm.Component.create({NAME:cG,ATTRS:{dataType:{value:a7},predefinedValue:{setter:cm.DataType.Boolean.parse,value:false},template:{valueFn:function(){return a6;}}},CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderField,prototype:{renderUI:function(){var A=this;var cT=A.get(aj);var L=A.get(ci);cm.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);L.insert(cT,L,"before");},getPropertyModel:function(){var L=this;var A=L.getStrings();var cT=cm.FormBuilderCheckBoxField.superclass.getPropertyModel.apply(L,arguments);cM.each(cT,function(cV,cU,cW){if(cV.attributeName===aY){cW[cU]={attributeName:aY,editor:new cm.RadioCellEditor({options:{"true":A[cw],"false":A[bc]}}),formatter:cm.bind(L._booleanFormatter,L),name:A[aY]};}});return cT;},getHTML:function(){var A=this;var L=A.get(R);return cd.sub(A.get(aS),{checked:L?'checked="checked"':bW,id:A.get(cz),label:A.get(ap),name:A.get(aK),value:A.get(aY)});},_uiSetPredefinedValue:function(cT){var A=this;var L=A.get(aj);if(cT){L.setAttribute(R,cT);}else{L.removeAttribute(R);}}}});cm.FormBuilderCheckBoxField=ag;cm.FormBuilder.types.checkbox=cm.FormBuilderCheckBoxField;var cd=cm.Lang,a0="boundingBox",cL="contentBox",aV="container",cP="dataType",b3=".",aH="drop",bW="",ac="showLabel",bE="field",f="fields",bj="dropZoneNode",aQ="form-builder-field",M="form-builder-fieldset-field",cz="id",v="icon",ap="label",aK="name",cR="node",aY="predefinedValue",ad=" ",ce="strings",aS="template",aj="templateNode",bY="text",ae="type",m="value",ca="zone",K=cm.getClassName,bZ=K(aQ),cq=K(aQ,cR),at=K(u,cv,aH,ca),aX='<fieldset id="{id}" class="'+[cq].join(ad)+'"></fieldset>',k='<legend class="'+aU+'"></legend>';
var E=cm.Component.create({NAME:M,ATTRS:{acceptChildren:{value:true,readOnly:true},dataType:{value:undefined},labelNode:{valueFn:function(){return cm.Node.create(k);}},template:{valueFn:function(){return aX;}}},UI_ATTRS:[g,ap,ac],CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderField,prototype:{CONTENT_TEMPLATE:aX,getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cz)});},getPropertyModel:function(){var L=this;var A=L.getStrings();return[{attributeName:ae,editor:false,name:A[ae]},{attributeName:ap,editor:new cm.TextCellEditor(),name:A[ap]},{attributeName:ac,editor:new cm.RadioCellEditor({options:{"true":A[cw],"false":A[bc]}}),formatter:cm.bind(L._booleanFormatter,L),name:A[ac]}];},_uiSetAcceptChildren:function(cV){var A=this;var L=A.get(cL);var cU=A.get(bj);var cT=L.one(b3+at);if(cV&&!cT){L.append(cU);}else{if(!cV&&cT){cT.remove();}else{if(cV&&cT){A.set(bj,cT);}}}A.get(aj).hide();}}});cm.FormBuilderFieldsetField=E;cm.FormBuilder.types["fieldset"]=cm.FormBuilderFieldsetField;var cd=cm.Lang,b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",cK="form-builder-file-upload-field",v="icon",cz="id",ap="label",aK="name",cR="node",aY="predefinedValue",ad=" ",ce="strings",aS="template",aj="templateNode",bY="text",ae="type",m="value",K=cm.getClassName,bZ=K(aQ),cq=K(aQ,cR),b4=K(bU,cB),bR='<input id="{id}" class="'+[cq].join(ad)+'" name="{name}" type="file" value="{value}" />';var S=cm.Component.create({NAME:cK,ATTRS:{template:{valueFn:function(){return bR;}}},CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cz),label:A.get(ap),name:A.get(aK),value:A.get(aY)});}}});cm.FormBuilderFileUploadField=S;cm.FormBuilder.types["fileupload"]=cm.FormBuilderFileUploadField;var cy=cm.Lang,cM=cm.Array,b9=cy.isString,J="addOption",bM="data",bq="drag",aH="drop",l="editOptions",bb="editable",s="editor",bE="field",f="fields",bt="form-builder",T="form-builder-multiple-choice-field",V="form-builder-options-editor",aA="hidden",v="icon",cz="id",bh="input",ao="item",ap="label",cD="multiple",aK="name",cR="node",aa="option",bP="optionTemplate",ai="options",aY="predefinedValue",G="render",ad=" ",aS="template",aj="templateNode",bY="text",ae="type",m="value",o=",",P="",bQ=" ",K=cm.getClassName,z=function(L){var A={};cM.each(L,function(cU,cT,cV){A[cU.value]=cU.label;});return A;},bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(bt,bE),cq=K(aQ,cR),cx=K(bt,ai,s,aA);var bs=cm.Component.create({NAME:V,ATTRS:{editable:{setter:function(){return false;}}},EXTENDS:cm.RadioCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+cx+'"></div>',initializer:function(){var A=this;A.after(G,function(){A._onEditEvent();});},_onSubmit:function(L){var A=this;A.saveOptions();bs.superclass._onSubmit.apply(this,arguments);}}});var e=cm.Component.create({NAME:T,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{label:"option 1",value:"value 1"},{label:"option 2",value:"value 2"},{label:"option 3",value:"value 3"}]},optionTemplate:{value:'<option {selected} value="{value}">{label}</option>'}},UI_ATTRS:[g,aY,ap,aK,ai,ac],CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderField,prototype:{initializer:function(){var A=this;var L=A.get(ai);A.predefinedValueEditor=new cm.RadioCellEditor({options:z(L)});},getPropertyModel:function(){var L=this;var cU=L.get(ai);var A=L.getStrings();var cT=cm.FormBuilderMultipleChoiceField.superclass.getPropertyModel.apply(L,arguments);cM.each(cT,function(cW,cV,cX){if(cW.attributeName===aY){cX[cV]=cm.merge(cW,{editor:L.predefinedValueEditor,formatter:function(cZ){var c0=L.predefinedValueEditor.get(ai);var cY=c0[cZ.record.get(bM).value];if(!b9(cY)){cY=P;}return cY;}});}});cT.push({attributeName:ai,editor:new bs({editable:true,on:{optionsChange:function(cV){L.predefinedValueEditor.set(ai,cV.newVal);}},options:z(cU),inputFormatter:function(){var cV=[];cm.each(this.get(ai),function(cY,cW,cZ){var cX={label:cY,value:cW};cM.each(cU,function(c0){if(c0.value===cW){cX=cm.merge(c0,cX);}});cV.push(cX);});return cV;}}),formatter:function(cW){var cV=[];cm.each(cW.record.get(bM).value,function(cY,cX,cZ){cV.push(cY.label);});return cV.join(o+bQ);},name:A[ai]});return cT;},_uiSetOptions:function(cU){var A=this;var cT=A.get(aY);var L=[];cm.each(cU,function(cW,cV,cX){L.push(cy.sub(A.get(bP),{label:cW.label,selected:cW.value===cT?'selected="selected"':P,value:cW.value}));});A.get(aj).setContent(L.join(P));}}});cm.FormBuilderMultipleChoiceField=e;cm.FormBuilder.types["multiple-choice"]=cm.FormBuilderMultipleChoiceField;var cd=cm.Lang,R="checked",aD="choice",aV="container",cL="contentBox",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",bp="form-builder-radio-field",v="icon",cz="id",by="inline",ap="label",b="labels",a2="left",aK="name",cR="node",O="optionsContainerNode",aY="predefinedValue",ab="radio",ad=" ",aS="template",aj="templateNode",m="value",K=cm.getClassName,c=K(bE),cj=K(bE,aD),aI=K(bE,ab),bZ=K(aQ),cq=K(aQ,cR),cs=K(aQ,ai,aV),aZ=K(aQ,ab),b4=K(bU,cB),af='<div class="'+cs+'"></div>',a8='<div><input id="{id}" class="'+[c,cj,aI,cq].join(ad)+'" name="{name}" type="radio" value="{value}" {checked} {disabled} /><label class="aui-field-label" for="{id}">{label}</label></div>';var i=cm.Component.create({NAME:bp,ATTRS:{name:{value:ab},template:{valueFn:function(){return a8;}}},CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){return af;},_uiSetDisabled:function(cT){var A=this;var L=A.get(aj);L.all(bh).each(function(cU){if(cT){cU.setAttribute(bV,cT);}else{cU.removeAttribute(bV);}});},_uiSetOptions:function(cU){var A=this;var L=0;var cT=A.get(aj);cT.setContent(bW);cm.each(cU,function(cW,cV,cX){cT.append(cm.Node.create(cd.sub(a8,{checked:cW.value===A.get(aY)?'checked="checked"':bW,disabled:A.get(bV)?'disabled="disabled"':bW,id:A.get(cz)+L++,label:cW.label,name:A.get(aK),value:cW.value})));});}}});cm.FormBuilderRadioField=i;cm.FormBuilder.types.radio=cm.FormBuilderRadioField;var cd=cm.Lang,a9=cd.isArray,aJ=cd.isNumber,b9=cd.isString,cE="button",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",cl="form-builder-select-field",v="icon",cz="id",bh="input",ap="label",cD="multiple",aK="name",cR="node",aa="option",ai="options",aY="predefinedValue",bu="selected",cc="selectedIndex",ad=" ",aS="template",aj="templateNode",bY="text",ae="type",m="value",K=cm.getClassName,bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(aQ),cq=K(aQ,cR),b4=K(bU,cB),bT='<select id="{id}" class="'+[cq].join(ad)+'" name="{name}" value="{value}"></select>';
var an=cm.Component.create({NAME:cl,ATTRS:{multiple:{setter:cm.DataType.Boolean.parse,value:false},template:{valueFn:function(){return bT;}}},UI_ATTRS:cm.FormBuilderField.UI_ATTRS.concat([cD]),CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cz),label:A.get(ap),name:A.get(aK),value:A.get(aY)});},getPropertyModel:function(){var L=this;var A=L.getStrings();var cT=cm.FormBuilderSelectField.superclass.getPropertyModel.apply(L,arguments);cT.push({attributeName:cD,editor:new cm.RadioCellEditor({options:{"true":A[cw],"false":A[bc]}}),formatter:cm.bind(L._booleanFormatter,L),name:A[cD]});return cT;},_uiSetMultiple:function(cT){var A=this;var L=A.get(aj);if(cT){L.setAttribute(cD,cD);}else{L.removeAttribute(cD);}}}});cm.FormBuilderSelectField=an;cm.FormBuilder.types.select=cm.FormBuilderSelectField;var cd=cm.Lang,a0="boundingBox",aV="container",cL="contentBox",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",bi="form-builder-text-field",v="icon",cz="id",bh="input",ap="label",cN="large",cr="medium",aK="name",cR="node",bo="portalLayout",aY="predefinedValue",cn="small",ad=" ",aS="template",aj="templateNode",bY="text",m="value",bO="width",K=cm.getClassName,bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(aQ),cq=K(aQ,cR),bX='<input id="{id}" class="'+[cq,bJ,W].join(ad)+'" name="{name}" type="text" value="{value}" />',aT={25:"small",50:"medium",100:"large"};var bN=cm.Component.create({NAME:bi,ATTRS:{template:{valueFn:function(){return bX;}},width:{setter:cm.DataType.String.evaluate,value:25}},CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cz),label:A.get(ap),name:A.get(aK),value:A.get(aY),width:A.get(bO)});},getPropertyModel:function(){var L=this;var A=L.getStrings();var cT=cm.FormBuilderTextField.superclass.getPropertyModel.apply(L,arguments);cT.push({attributeName:bO,editor:new cm.RadioCellEditor({options:{25:A[cn],50:A[cr],100:A[cN]}}),formatter:function(cV){var cU=cV.record.get(bM).value;return A[aT[cU]];},name:A[bO]});return cT;},_uiSetWidth:function(cT){var A=this;var L=A.get(aj);L.addClass(K("w"+cT));L.removeClass(K("w"+A.prevWidth));A.prevWidth=cT;}}});cm.FormBuilderTextField=bN;cm.FormBuilder.types["text"]=cm.FormBuilderTextField;var cd=cm.Lang,a9=cd.isArray,aJ=cd.isNumber,b9=cd.isString,b3=".",cF="form-builder-textarea-field",K=cm.getClassName,c=K(bE),bI=K(bE,bY),U=K(bE,ax),bZ=K(aQ),cq=K(aQ,cR),ar='<textarea id="{id}" class="'+[cq,c,bI,U].join(ad)+'" name="{name}">{value}</textarea>';var aW=cm.Component.create({NAME:cF,ATTRS:{template:{valueFn:function(){return ar;}}},CSS_PREFIX:bZ,EXTENDS:cm.FormBuilderTextField,prototype:{getPropertyModel:function(){var A=this;var cT=A.get(ai);var L=cm.FormBuilderTextAreaField.superclass.getPropertyModel.apply(A,arguments);cM.each(L,function(cV,cU,cW){if(cV.attributeName===aY){cW[cU].editor=new cm.TextAreaCellEditor();}});return L;}}});cm.FormBuilderTextAreaField=aW;cm.FormBuilder.types["textarea"]=cm.FormBuilderTextAreaField;},"@VERSION@",{skinnable:true,requires:["aui-datatype","aui-panel","aui-tooltip"]});