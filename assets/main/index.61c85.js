window.__require=function t(e,o,n){function i(a,l){if(!o[a]){if(!e[a]){var s=a.split("/");if(s=s[s.length-1],!e[s]){var c="function"==typeof __require&&__require;if(!l&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var p=o[a]={exports:{}};e[a][0].call(p.exports,function(t){return i(e[a][1][t]||t)},p,p.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({Container_ts:[function(t,e,o){"use strict";cc._RF.push(e,"6b277ZIGFVN/5+iQ5s1Ke9Q","Container_ts");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./Drag_Drop_Touch_ts"),l=t("./GameLogicManager_ts"),s=cc._decorator,c=s.ccclass,p=s.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.canCheckAnswer=!1,e.TitleNode=null,e.BorderIndicator=null,e.GameManagerScript=null,e.AnimalClass=null,e.oneAnimalisTopOnIt=!1,e.StayedAnimalNode=null,e.stayedNodeExited=null,e.collisionManager=null,e}return i(e,t),e.prototype.onLoad=function(){this.canCheckAnswer=!0,this.stayedNodeExited=!0,this.CollisionActivation()},e.prototype.onCollisionEnter=function(t){"Animals"==t.node.group&&(this.oneAnimalisTopOnIt=!0,this.stayedNodeExited&&(this.AnimalClass=t.node.getComponent(a.default),console.log("collision value on Enter : "+this.AnimalClass.canStartCollisionLocally),null!=this.AnimalClass&&(this.AnimalClass.isOnContainer=!0)))},e.prototype.onCollisionStay=function(t,e){"Animals"==t.node.group&&(this.oneAnimalisTopOnIt=!0,this.stayedNodeExited?null!=this.AnimalClass&&this.AnimalClass.canStartCollisionLocally&&(this.AnimalClass.isOnContainer=!0,this.AnimalClass.canDrag||(t.node.setPosition(e.node.position),this.TitleNode.y=60,l.default.currentlyFilledContainers.push(e.node),this.StayedAnimalNode=t.node,this.stayedNodeExited=!1,cc.audioEngine.play(this.GameManagerScript.AllSounds[1],!1,1))):null!=this.StayedAnimalNode&&this.StayedAnimalNode.name==t.node.name&&!this.AnimalClass.canDrag&&this.AnimalClass.canStartCollisionLocally&&(this.AnimalClass.isOnContainer=!0,t.node.setPosition(e.node.position),this.AnimalClass.oneTimePlayDropAudioInSameBox&&(cc.audioEngine.play(this.GameManagerScript.AllSounds[1],!1,1),this.AnimalClass.oneTimePlayDropAudioInSameBox=!1)))},e.prototype.onCollisionExit=function(t){"Animals"==t.node.group&&(null!=this.StayedAnimalNode&&this.StayedAnimalNode.name==t.node.name&&(this.oneAnimalisTopOnIt=!1,null!=this.AnimalClass&&(this.AnimalClass.isOnContainer=!1),console.log("the node got exited! "+t.node.name),this.BorderIndicator.active=!1,this.TitleNode.y=0,this.AnimalClass=null,this.StayedAnimalNode=null,this.stayedNodeExited=!0),null!=this.AnimalClass&&(this.AnimalClass.isOnContainer=!1))},e.prototype.CollisionActivation=function(){this.collisionManager=cc.director.getCollisionManager(),this.collisionManager.enabled=!0},r([p(cc.Node)],e.prototype,"TitleNode",void 0),r([p(cc.Node)],e.prototype,"BorderIndicator",void 0),r([p(l.default)],e.prototype,"GameManagerScript",void 0),r([c],e)}(cc.Component);o.default=d,cc._RF.pop()},{"./Drag_Drop_Touch_ts":"Drag_Drop_Touch_ts","./GameLogicManager_ts":"GameLogicManager_ts"}],Drag_Drop_Touch_ts:[function(t,e,o){"use strict";cc._RF.push(e,"3795f6cTm9OP7pSHpNv5DpG","Drag_Drop_Touch_ts");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./GameLogicManager_ts"),l=cc._decorator,s=l.ccclass,c=l.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.canDrag=null,e.initialDropLocation=null,e.isOnContainer=!1,e.collisionManager=null,e.canStartCollisionLocally=null,e.PreviousParentNode=null,e.stopEvents=!1,e.oneTimePlayAudio=!0,e.oneTimePlayDropAudioInSameBox=!0,e.touchIsEnded=!1,e.CurrentDragHolderNode=null,e.GameManagerScript=null,e}return i(e,t),e.prototype.onLoad=function(){this.PreviousParentNode=this.node.parent,this.canStartCollisionLocally=!0,this.CollisionActivation(),this.initialDropLocation=this.node.position,console.log("Initial pos: "+this.initialDropLocation),this.EventsBinding()},e.prototype.EventsBinding=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.EventsDragDropCallback,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.EventsDragDropCallback,this),this.node.on(cc.Node.EventType.TOUCH_END,this.EventsDragDropCallback,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.EventsDragDropCallback,this)},e.prototype.EventsDragDropCallback=function(t){this.stopEvents||("touchstart"==t.type&&0==t.getID()&&(this.canDrag=!0,this.canStartCollisionLocally=!0,this.node.parent=this.CurrentDragHolderNode,t.stopPropagationImmediate=!0,this.ChangeOpacity(125,t.currentTarget)),"touchmove"==t.type&&this.canDrag&&0==t.getID()&&(t.currentTarget.x+=t.getDelta().x,t.currentTarget.y+=t.getDelta().y,this.oneTimePlayAudio&&(cc.audioEngine.play(this.GameManagerScript.AllSounds[0],!1,1),this.oneTimePlayAudio=!1)),"touchend"!=t.type&&"touchcancel"!=t.type||0==t.getID()&&(this.oneTimePlayDropAudioInSameBox=!0,this.canDrag=!1,this.isOnContainer||(console.log("Reset Logic get Called!"),this.ResetLocation()),this.ChangeOpacity(255,t.currentTarget),this.node.parent=this.PreviousParentNode,this.oneTimePlayAudio=!0,this.touchIsEnded=!0,console.log("Touch is ended!")))},e.prototype.ChangeOpacity=function(t,e){e.opacity=t},e.prototype.ResetLocation=function(){this.stopEvents=!0,this.canStartCollisionLocally=!1,(new cc.Tween).target(this.node).then(cc.moveTo(.5,new cc.Vec2(this.initialDropLocation.x,this.initialDropLocation.y))).call(d).then(cc.callFunc(this.CanDrag,this)).start()},e.prototype.CollisionActivation=function(){this.collisionManager=cc.director.getCollisionManager(),this.collisionManager.enabled=!0},e.prototype.CanDrag=function(){this.stopEvents=!1,console.log("can Drag again!")},r([c(cc.Node)],e.prototype,"CurrentDragHolderNode",void 0),r([c(a.default)],e.prototype,"GameManagerScript",void 0),r([s],e)}(cc.Component);function d(){a.default.canPerformResetLogic=!0,console.log("can perform reset logic!")}o.default=p,cc._RF.pop()},{"./GameLogicManager_ts":"GameLogicManager_ts"}],GameLogicManager_ts:[function(t,e,o){"use strict";cc._RF.push(e,"c202f50i4ZB4Zxofrg6ZGkD","GameLogicManager_ts");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./Container_ts"),l=t("./Drag_Drop_Touch_ts"),s=cc._decorator,c=s.ccclass,p=s.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.AllAnimalsScript=[],e.AllContainersScript=[],e.AllAnimalsNode=[],e.AllContainers=[],e.AllSounds=[],e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){this.GettingAnimal_Box_ScriptsOnce()},e.prototype.GettingAnimal_Box_ScriptsOnce=function(){for(var t in this.AllAnimalsNode)this.AllAnimalsScript[t]=this.AllAnimalsNode[t].getComponent(l.default);for(var e in this.AllContainers)this.AllContainersScript[e]=this.AllContainers[e].getComponent(a.default)},e.prototype.ResetButtonLogic=function(){if(o.canPerformResetLogic){for(var t in this.AllAnimalsScript){var e=this.AllAnimalsScript[t];e.ResetLocation(),e.stopEvents=!1}for(var n in this.AllContainersScript){var i=this.AllContainersScript[n];null!=i.AnimalClass&&(i.AnimalClass.isOnContainer=!1,i.AnimalClass=null),null!=i.StayedAnimalNode&&(i.StayedAnimalNode=null),i.BorderIndicator.active=!1,i.TitleNode.y=0,i.stayedNodeExited=!0,i.canCheckAnswer=!0}o.currentlyFilledContainers.splice(0,o.currentlyFilledContainers.length),cc.audioEngine.play(this.AllSounds[2],!1,1),o.canPerformResetLogic=!1}},e.prototype.AnswerLogicButtonFun=function(){if(null!=o.currentlyFilledContainers&&o.currentlyFilledContainers.length>0){for(var t=0;t<o.currentlyFilledContainers.length;t++){var e=o.currentlyFilledContainers[t].getComponent(a.default);if(null!=e.StayedAnimalNode){var n=e.StayedAnimalNode.name;e.StayedAnimalNode.getComponent(l.default).stopEvents=!0}var i=e.node.getChildByName("name").getComponent(cc.Label).string;e.canCheckAnswer&&null!=e.StayedAnimalNode&&(console.log("answer logic is performed!"+n),n.toLowerCase()==i.toLowerCase()?(e.BorderIndicator.color=cc.color(4,168,24),console.log("correct Answer!")):(e.BorderIndicator.color=cc.color(168,4,4),console.log("wrong Answer!")),e.BorderIndicator.active=!0,e.canCheckAnswer=!1,console.log("Answer logic get called!"),e.canCheckAnswer=!1)}o.currentlyFilledContainers.splice(0,o.currentlyFilledContainers.length),console.log("total containers: "+o.currentlyFilledContainers.length)}cc.audioEngine.play(this.AllSounds[2],!1,1)},e.canPerformResetLogic=!0,e.currentlyFilledContainers=[],e.oneTouchActive=!1,r([p(cc.Node)],e.prototype,"AllAnimalsNode",void 0),r([p(cc.Node)],e.prototype,"AllContainers",void 0),r([p(cc.AudioClip)],e.prototype,"AllSounds",void 0),o=r([c],e)}(cc.Component);o.default=d,cc._RF.pop()},{"./Container_ts":"Container_ts","./Drag_Drop_Touch_ts":"Drag_Drop_Touch_ts"}]},{},["Container_ts","Drag_Drop_Touch_ts","GameLogicManager_ts"]);