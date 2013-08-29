$(document).ready(function(){var e,t,n,r,i,o,a;module("Backbone.Collection",_.extend(new Environment,{setup:function(){Environment.prototype.setup.apply(this,arguments),e=new Backbone.Model({id:3,label:"a"}),t=new Backbone.Model({id:2,label:"b"}),n=new Backbone.Model({id:1,label:"c"}),r=new Backbone.Model({id:0,label:"d"}),i=null,o=new Backbone.Collection([e,t,n,r]),a=new Backbone.Collection}})),test("new and sort",9,function(){var t=0;o.on("sort",function(){t++}),equal(o.first(),e,"a should be first"),equal(o.last(),r,"d should be last"),o.comparator=function(e,t){return e.id>t.id?-1:1},o.sort(),equal(t,1),equal(o.first(),e,"a should be first"),equal(o.last(),r,"d should be last"),o.comparator=function(e){return e.id},o.sort(),equal(t,2),equal(o.first(),r,"d should be first"),equal(o.last(),e,"a should be last"),equal(o.length,4)}),test("String comparator.",1,function(){var e=new Backbone.Collection([{id:3},{id:1},{id:2}],{comparator:"id"});deepEqual(e.pluck("id"),[1,2,3])}),test("new and parse",3,function(){var e=Backbone.Collection.extend({parse:function(e){return _.filter(e,function(e){return 0===e.a%2})}}),t=[{a:1},{a:2},{a:3},{a:4}],n=new e(t,{parse:!0});strictEqual(n.length,2),strictEqual(n.first().get("a"),2),strictEqual(n.last().get("a"),4)}),test("get",6,function(){equal(o.get(0),r),equal(o.get(r.clone()),r),equal(o.get(2),t),equal(o.get({id:1}),n),equal(o.get(n.clone()),n),equal(o.get(o.first().cid),o.first())}),test("get with non-default ids",5,function(){var e=new Backbone.Collection,t=Backbone.Model.extend({idAttribute:"_id"}),n=new t({_id:100});e.add(n),equal(e.get(100),n),equal(e.get(n.cid),n),equal(e.get(n),n),equal(e.get(101),void 0);var r=new Backbone.Collection;r.model=t,r.add(n.attributes),equal(r.get(n.clone()),r.first())}),test("update index when id changes",3,function(){var e=new Backbone.Collection;e.add([{id:0,name:"one"},{id:1,name:"two"}]);var t=e.get(0);equal(t.get("name"),"one"),t.set({id:101}),equal(e.get(0),null),equal(e.get(101).get("name"),"one")}),test("at",1,function(){equal(o.at(2),n)}),test("pluck",1,function(){equal(o.pluck("label").join(" "),"a b c d")}),test("add",10,function(){var e,t,n;e=t=n=null,i=new Backbone.Model({id:10,label:"e"}),a.add(i),a.on("add",function(){n=!0}),o.on("add",function(n,r,i){e=n.get("label"),t=i}),o.add(i,{amazing:!0}),equal(e,"e"),equal(o.length,5),equal(o.last(),i),equal(a.length,1),equal(n,null),ok(t.amazing);var r=new Backbone.Model({id:20,label:"f"}),s=new Backbone.Model({id:21,label:"g"}),u=new Backbone.Model({id:22,label:"h"}),l=new Backbone.Collection([r,s,u]);equal(l.length,3),l.add(i,{at:1}),equal(l.length,4),equal(l.at(1),i),equal(l.last(),u)}),test("add multiple models",6,function(){var e=new Backbone.Collection([{at:0},{at:1},{at:9}]);e.add([{at:2},{at:3},{at:4},{at:5},{at:6},{at:7},{at:8}],{at:2});for(var t=0;5>=t;t++)equal(e.at(t).get("at"),t)}),test("add; at should have preference over comparator",1,function(){var e=Backbone.Collection.extend({comparator:function(e,t){return e.id>t.id?-1:1}}),t=new e([{id:2},{id:3}]);t.add(new Backbone.Model({id:1}),{at:1}),equal(t.pluck("id").join(" "),"3 1 2")}),test("can't add model to collection twice",function(){var e=new Backbone.Collection([{id:1},{id:2},{id:1},{id:2},{id:3}]);equal(e.pluck("id").join(" "),"1 2 3")}),test("can't add different model with same id to collection twice",1,function(){var e=new Backbone.Collection;e.unshift({id:101}),e.add({id:101}),equal(e.length,1)}),test("merge in duplicate models with {merge: true}",3,function(){var e=new Backbone.Collection;e.add([{id:1,name:"Moe"},{id:2,name:"Curly"},{id:3,name:"Larry"}]),e.add({id:1,name:"Moses"}),equal(e.first().get("name"),"Moe"),e.add({id:1,name:"Moses"},{merge:!0}),equal(e.first().get("name"),"Moses"),e.add({id:1,name:"Tim"},{merge:!0,silent:!0}),equal(e.first().get("name"),"Tim")}),test("add model to multiple collections",10,function(){var e=0,t=new Backbone.Model({id:10,label:"e"});t.on("add",function(i,o){e++,equal(t,i),e>1?equal(o,r):equal(o,n)});var n=new Backbone.Collection([]);n.on("add",function(e,r){equal(t,e),equal(n,r)});var r=new Backbone.Collection([]);r.on("add",function(e,n){equal(t,e),equal(r,n)}),n.add(t),equal(t.collection,n),r.add(t),equal(t.collection,n)}),test("add model with parse",1,function(){var e=Backbone.Model.extend({parse:function(e){return e.value+=1,e}}),t=Backbone.Collection.extend({model:e}),n=new t;n.add({value:1},{parse:!0}),equal(n.at(0).get("value"),2)}),test("add with parse and merge",function(){var e=Backbone.Model.extend({parse:function(e){return e.model}}),t=new Backbone.Collection;t.model=e,t.add({id:1}),t.add({model:{id:1,name:"Alf"}},{parse:!0,merge:!0}),equal(t.first().get("name"),"Alf")}),test("add model to collection with sort()-style comparator",3,function(){var e=new Backbone.Collection;e.comparator=function(e,t){return e.get("name")<t.get("name")?-1:1};var t=new Backbone.Model({name:"Tom"}),n=new Backbone.Model({name:"Rob"}),r=new Backbone.Model({name:"Tim"});e.add(t),e.add(n),e.add(r),equal(e.indexOf(n),0),equal(e.indexOf(r),1),equal(e.indexOf(t),2)}),test("comparator that depends on `this`",2,function(){var e=new Backbone.Collection;e.negative=function(e){return-e},e.comparator=function(e){return this.negative(e.id)},e.add([{id:1},{id:2},{id:3}]),deepEqual(e.pluck("id"),[3,2,1]),e.comparator=function(e,t){return this.negative(t.id)-this.negative(e.id)},e.sort(),deepEqual(e.pluck("id"),[1,2,3])}),test("remove",5,function(){var t=null,n=null;o.on("remove",function(e,n,r){t=e.get("label"),equal(r.index,3)}),a.on("remove",function(){n=!0}),o.remove(r),equal(t,"d"),equal(o.length,3),equal(o.first(),e),equal(n,null)}),test("shift and pop",2,function(){var e=new Backbone.Collection([{a:"a"},{b:"b"},{c:"c"}]);equal(e.shift().get("a"),"a"),equal(e.pop().get("c"),"c")}),test("slice",2,function(){var e=new Backbone.Collection([{a:"a"},{b:"b"},{c:"c"}]),t=e.slice(1,3);equal(t.length,2),equal(t[0].get("b"),"b")}),test("events are unbound on remove",3,function(){var e=0,t=new Backbone.Model,n=new Backbone.Collection([t]);n.on("change",function(){e++}),t.set({name:"Kool"}),equal(e,1),n.reset([]),equal(t.collection,void 0),t.set({name:"Shadow"}),equal(e,1)}),test("remove in multiple collections",7,function(){var e={id:5,title:"Othello"},t=!1,n=new Backbone.Model(e),r=new Backbone.Model(e);r.on("remove",function(){t=!0});var i=new Backbone.Collection([n]),o=new Backbone.Collection([r]);ok(n!=r),ok(1===i.length),ok(1===o.length),i.remove(n),equal(t,!1),ok(0===i.length),o.remove(n),ok(0===o.length),equal(t,!0)}),test("remove same model in multiple collection",16,function(){var e=0,t=new Backbone.Model({id:5,title:"Othello"});t.on("remove",function(i,o){e++,equal(t,i),e>1?equal(o,n):equal(o,r)});var n=new Backbone.Collection([t]);n.on("remove",function(e,r){equal(t,e),equal(n,r)});var r=new Backbone.Collection([t]);r.on("remove",function(e,n){equal(t,e),equal(r,n)}),equal(n,t.collection),r.remove(t),ok(0===r.length),ok(1===n.length),equal(e,1),equal(n,t.collection),n.remove(t),equal(null,t.collection),ok(0===n.length),equal(e,2)}),test("model destroy removes from all collections",3,function(){var e=new Backbone.Model({id:5,title:"Othello"});e.sync=function(e,t,n){n.success()};var t=new Backbone.Collection([e]),n=new Backbone.Collection([e]);e.destroy(),ok(0===t.length),ok(0===n.length),equal(void 0,e.collection)}),test("Colllection: non-persisted model destroy removes from all collections",3,function(){var e=new Backbone.Model({title:"Othello"});e.sync=function(){throw"should not be called"};var t=new Backbone.Collection([e]),n=new Backbone.Collection([e]);e.destroy(),ok(0===t.length),ok(0===n.length),equal(void 0,e.collection)}),test("fetch",4,function(){var e=new Backbone.Collection;e.url="/test",e.fetch(),equal(this.syncArgs.method,"read"),equal(this.syncArgs.model,e),equal(this.syncArgs.options.parse,!0),e.fetch({parse:!1}),equal(this.syncArgs.options.parse,!1)}),test("fetch with an error response triggers an error event",1,function(){var e=new Backbone.Collection;e.on("error",function(){ok(!0)}),e.sync=function(e,t,n){n.error()},e.fetch()}),test("ensure fetch only parses once",1,function(){var e=new Backbone.Collection,t=0;e.parse=function(e){return t++,e},e.url="/test",e.fetch(),this.syncArgs.options.success(),equal(t,1)}),test("create",4,function(){var e=new Backbone.Collection;e.url="/test";var t=e.create({label:"f"},{wait:!0});equal(this.syncArgs.method,"create"),equal(this.syncArgs.model,t),equal(t.get("label"),"f"),equal(t.collection,e)}),test("create with validate:true enforces validation",2,function(){var e=Backbone.Model.extend({validate:function(){return"fail"}}),t=Backbone.Collection.extend({model:e}),n=new t;n.on("invalid",function(e,t,n){equal(n.validationError,"fail")}),equal(n.create({foo:"bar"},{validate:!0}),!1)}),test("a failing create returns model with errors",function(){var e=Backbone.Model.extend({validate:function(){return"fail"}}),t=Backbone.Collection.extend({model:e}),n=new t,r=n.create({foo:"bar"});equal(r.validationError,"fail"),equal(n.length,1)}),test("initialize",1,function(){var e=Backbone.Collection.extend({initialize:function(){this.one=1}}),t=new e;equal(t.one,1)}),test("toJSON",1,function(){equal(JSON.stringify(o),'[{"id":3,"label":"a"},{"id":2,"label":"b"},{"id":1,"label":"c"},{"id":0,"label":"d"}]')}),test("where and findWhere",8,function(){var e=new Backbone.Model({a:1}),t=new Backbone.Collection([e,{a:1},{a:1,b:2},{a:2,b:2},{a:3}]);equal(t.where({a:1}).length,3),equal(t.where({a:2}).length,1),equal(t.where({a:3}).length,1),equal(t.where({b:1}).length,0),equal(t.where({b:2}).length,2),equal(t.where({a:1,b:2}).length,1),equal(t.findWhere({a:1}),e),equal(t.findWhere({a:4}),void 0)}),test("Underscore methods",13,function(){equal(o.map(function(e){return e.get("label")}).join(" "),"a b c d"),equal(o.any(function(e){return 100===e.id}),!1),equal(o.any(function(e){return 0===e.id}),!0),equal(o.indexOf(t),1),equal(o.size(),4),equal(o.rest().length,3),ok(!_.include(o.rest(),e)),ok(_.include(o.rest(),r)),ok(!o.isEmpty()),ok(!_.include(o.without(r),r)),equal(o.max(function(e){return e.id}).id,3),equal(o.min(function(e){return e.id}).id,0),deepEqual(o.chain().filter(function(e){return 0===e.id%2}).map(function(e){return 2*e.id}).value(),[4,0])}),test("sortedIndex",function(){var e=new Backbone.Model({key:2}),t=new(Backbone.Collection.extend({comparator:"key"}))([e,{key:1}]);equal(t.sortedIndex(e),1),equal(t.sortedIndex(e,"key"),1),equal(t.sortedIndex(e,function(e){return e.get("key")}),1)}),test("reset",12,function(){var e=0,t=o.models;o.on("reset",function(){e+=1}),o.reset([]),equal(e,1),equal(o.length,0),equal(o.last(),null),o.reset(t),equal(e,2),equal(o.length,4),equal(o.last(),r),o.reset(_.map(t,function(e){return e.attributes})),equal(e,3),equal(o.length,4),ok(o.last()!==r),ok(_.isEqual(o.last().attributes,r.attributes)),o.reset(),equal(o.length,0),equal(e,4)}),test("reset with different values",function(){var e=new Backbone.Collection({id:1});e.reset({id:1,a:1}),equal(e.get(1).get("a"),1)}),test("same references in reset",function(){var e=new Backbone.Model({id:1}),t=new Backbone.Collection({id:1});t.reset(e),equal(t.get(1),e)}),test("reset passes caller options",3,function(){var e=Backbone.Model.extend({initialize:function(e,t){this.model_parameter=t.model_parameter}}),t=new(Backbone.Collection.extend({model:e}));t.reset([{astring:"green",anumber:1},{astring:"blue",anumber:2}],{model_parameter:"model parameter"}),equal(t.length,2),t.each(function(e){equal(e.model_parameter,"model parameter")})}),test("trigger custom events on models",1,function(){var t=null;e.on("custom",function(){t=!0}),e.trigger("custom"),equal(t,!0)}),test("add does not alter arguments",2,function(){var e={},t=[e];(new Backbone.Collection).add(t),equal(t.length,1),ok(e===t[0])}),test("#714: access `model.collection` in a brand new model.",2,function(){var e=new Backbone.Collection;e.url="/test";var t=Backbone.Model.extend({set:function(t){return equal(t.prop,"value"),equal(this.collection,e),this}});e.model=t,e.create({prop:"value"})}),test("#574, remove its own reference to the .models array.",2,function(){var e=new Backbone.Collection([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]);equal(e.length,6),e.remove(e.models),equal(e.length,0)}),test("#861, adding models to a collection which do not pass validation, with validate:true",function(){var e=Backbone.Model.extend({validate:function(e){return 3==e.id?"id can't be 3":void 0}}),t=Backbone.Collection.extend({model:e}),n=new t;n.on("error",function(){ok(!0)}),n.add([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}],{validate:!0}),deepEqual(n.pluck("id"),[1,2,4,5,6])}),test("Invalid models are discarded with validate:true.",5,function(){var e=new Backbone.Collection;e.on("test",function(){ok(!0)}),e.model=Backbone.Model.extend({validate:function(e){return e.valid?void 0:"invalid"}});var t=new e.model({id:1,valid:!0});e.add([t,{id:2}],{validate:!0}),t.trigger("test"),ok(e.get(t.cid)),ok(e.get(1)),ok(!e.get(2)),equal(e.length,1)}),test("multiple copies of the same model",3,function(){var e=new Backbone.Collection,t=new Backbone.Model;e.add([t,t]),equal(e.length,1),e.add([{id:1},{id:1}]),equal(e.length,2),equal(e.last().id,1)}),test("#964 - collection.get return inconsistent",2,function(){var e=new Backbone.Collection;ok(void 0===e.get(null)),ok(void 0===e.get())}),test("#1112 - passing options.model sets collection.model",2,function(){var e=Backbone.Model.extend({}),t=new Backbone.Collection([{id:1}],{model:e});ok(t.model===e),ok(t.at(0)instanceof e)}),test("null and undefined are invalid ids.",2,function(){var e=new Backbone.Model({id:1}),t=new Backbone.Collection([e]);e.set({id:null}),ok(!t.get("null")),e.set({id:1}),e.set({id:void 0}),ok(!t.get("undefined"))}),test("falsy comparator",4,function(){var e=Backbone.Collection.extend({comparator:function(e){return e.id}}),t=new e,n=new e(null,{comparator:!1}),r=new e(null,{comparator:null}),i=new e(null,{comparator:void 0});ok(t.comparator),ok(!n.comparator),ok(!r.comparator),ok(i.comparator)}),test("#1355 - `options` is passed to success callbacks",2,function(){var e=new Backbone.Model({x:1}),t=new Backbone.Collection,n={success:function(e,t,n){ok(n)}};t.sync=e.sync=function(e,t,n){n.success(t,[],n)},t.fetch(n),t.create(e,n)}),test("#1412 - Trigger 'request' and 'sync' events.",4,function(){var e=new Backbone.Collection;e.url="/test",Backbone.ajax=function(e){e.success()},e.on("request",function(t){ok(t===e,"collection has correct 'request' event after fetching")}),e.on("sync",function(t){ok(t===e,"collection has correct 'sync' event after fetching")}),e.fetch(),e.off(),e.on("request",function(t){ok(t===e.get(1),"collection has correct 'request' event after one of its models save")}),e.on("sync",function(t){ok(t===e.get(1),"collection has correct 'sync' event after one of its models save")}),e.create({id:1}),e.off()}),test("#1447 - create with wait adds model.",1,function(){var e=new Backbone.Collection,t=new Backbone.Model;t.sync=function(e,t,n){n.success()},e.on("add",function(){ok(!0)}),e.create(t,{wait:!0})}),test("#1448 - add sorts collection after merge.",1,function(){var e=new Backbone.Collection([{id:1,x:1},{id:2,x:2}]);e.comparator=function(e){return e.get("x")},e.add({id:1,x:3},{merge:!0}),deepEqual(e.pluck("id"),[2,1])}),test("#1655 - groupBy can be used with a string argument.",3,function(){var e=new Backbone.Collection([{x:1},{x:2}]),t=e.groupBy("x");strictEqual(_.keys(t).length,2),strictEqual(t[1][0].get("x"),1),strictEqual(t[2][0].get("x"),2)}),test("#1655 - sortBy can be used with a string argument.",1,function(){var e=new Backbone.Collection([{x:3},{x:1},{x:2}]),t=_.map(e.sortBy("x"),function(e){return e.get("x")});deepEqual(t,[1,2,3])}),test("#1604 - Removal during iteration.",0,function(){var e=new Backbone.Collection([{},{}]);e.on("add",function(){e.at(0).destroy()}),e.add({},{at:0})}),test("#1638 - `sort` during `add` triggers correctly.",function(){var e=new Backbone.Collection;e.comparator=function(e){return e.get("x")};var t=[];e.on("add",function(n){n.set({x:3}),e.sort(),t.push(n.id)}),e.add([{id:1,x:1},{id:2,x:2}]),deepEqual(t,[1,2])}),test("fetch parses models by default",1,function(){var e={},t=Backbone.Collection.extend({url:"test",model:Backbone.Model.extend({parse:function(t){strictEqual(t,e)}})});(new t).fetch(),this.ajaxSettings.success([e])}),test("`sort` shouldn't always fire on `add`",1,function(){var e=new Backbone.Collection([{id:1},{id:2},{id:3}],{comparator:"id"});e.sort=function(){ok(!0)},e.add([]),e.add({id:1}),e.add([{id:2},{id:3}]),e.add({id:4})}),test("#1407 parse option on constructor parses collection and models",2,function(){var e={namespace:[{id:1},{id:2}]},t=Backbone.Collection.extend({model:Backbone.Model.extend({parse:function(e){return e.name="test",e}}),parse:function(e){return e.namespace}}),n=new t(e,{parse:!0});equal(n.length,2),equal(n.at(0).get("name"),"test")}),test("#1407 parse option on reset parses collection and models",2,function(){var e={namespace:[{id:1},{id:2}]},t=Backbone.Collection.extend({model:Backbone.Model.extend({parse:function(e){return e.name="test",e}}),parse:function(e){return e.namespace}}),n=new t;n.reset(e,{parse:!0}),equal(n.length,2),equal(n.at(0).get("name"),"test")}),test("Reset includes previous models in triggered event.",1,function(){var e=new Backbone.Model,t=new Backbone.Collection([e]).on("reset",function(t,n){deepEqual(n.previousModels,[e])});t.reset([])}),test("set",function(){var e=new Backbone.Model,t=new Backbone.Model({id:2}),n=new Backbone.Model,r=new Backbone.Collection([e,t]);r.on("add",function(e){strictEqual(e,n)}),r.on("change",function(e){strictEqual(e,t)}),r.on("remove",function(t){strictEqual(t,e)}),r.set([],{remove:!1}),strictEqual(r.length,2),r.set([e,t,n],{add:!1}),strictEqual(r.length,2),r.set([e,{id:2,a:1}],{merge:!1}),strictEqual(t.get("a"),void 0),r.set([e,{id:2,a:0},n,{id:4}],{add:!1,remove:!1}),strictEqual(r.length,2),strictEqual(t.get("a"),0),r.set([{id:2,a:1},n]),strictEqual(r.length,2),strictEqual(t.get("a"),1),r.off("remove").on("remove",function(e){ok(e===t||e===n)}),r.set([]),strictEqual(r.length,0)}),test("set with only cids",3,function(){var e=new Backbone.Model,t=new Backbone.Model,n=new Backbone.Collection;n.set([e,t]),equal(n.length,2),n.set([e]),equal(n.length,1),n.set([e,e,e,t,t],{remove:!1}),equal(n.length,2)}),test("set with only idAttribute",3,function(){var e={_id:1},t={_id:2},n=Backbone.Collection.extend({model:Backbone.Model.extend({idAttribute:"_id"})}),r=new n;r.set([e,t]),equal(r.length,2),r.set([e]),equal(r.length,1),r.set([e,e,e,t,t],{remove:!1}),equal(r.length,2)}),test("set + merge with default values defined",function(){var e=Backbone.Model.extend({defaults:{key:"value"}}),t=new e({id:1}),n=new Backbone.Collection([t],{model:e});equal(n.first().get("key"),"value"),n.set({id:1,key:"other"}),equal(n.first().get("key"),"other"),n.set({id:1,other:"value"}),equal(n.first().get("key"),"value"),equal(n.length,1)}),test("`set` and model level `parse`",function(){var e=Backbone.Model.extend({parse:function(e){return e.model}}),t=Backbone.Collection.extend({model:e,parse:function(e){return e.models}}),n=new e({id:1}),r=new t(n);r.set({models:[{model:{id:1}},{model:{id:2}}]},{parse:!0}),equal(r.first(),n)}),test("`set` data is only parsed once",function(){var e=new Backbone.Collection;e.model=Backbone.Model.extend({parse:function(e){return equal(e.parsed,void 0),e.parsed=!0,e}}),e.set({},{parse:!0})}),test("#1894 - Push should not trigger a sort",0,function(){var e=Backbone.Collection.extend({comparator:"id",sort:function(){ok(!1)}});(new e).push({id:1})}),test("`set` with non-normal id",function(){var e=Backbone.Collection.extend({model:Backbone.Model.extend({idAttribute:"_id"})}),t=new e({_id:1});t.set([{_id:1,a:1}],{add:!1}),equal(t.first().get("a"),1)}),test("#1894 - `sort` can optionally be turned off",0,function(){var e=Backbone.Collection.extend({comparator:"id",sort:function(){ok(!0)}});(new e).add({id:1},{sort:!1})}),test("#1915 - `parse` data in the right order in `set`",function(){var e=new(Backbone.Collection.extend({parse:function(e){return strictEqual(e.status,"ok"),e.data}})),t={status:"ok",data:[{id:1}]};e.set(t,{parse:!0})}),asyncTest("#1939 - `parse` is passed `options`",1,function(){var e=new(Backbone.Collection.extend({url:"/",parse:function(e,t){return strictEqual(t.xhr.someHeader,"headerValue"),e}})),t=Backbone.ajax;Backbone.ajax=function(e){return _.defer(e.success),{someHeader:"headerValue"}},e.fetch({success:function(){start()}}),Backbone.ajax=t}),test("`add` only `sort`s when necessary",2,function(){var e=new(Backbone.Collection.extend({comparator:"a"}))([{id:1},{id:2},{id:3}]);e.on("sort",function(){ok(!0)}),e.add({id:4}),e.add({id:1,a:1},{merge:!0}),e.add({id:1,b:1},{merge:!0}),e.add({id:1,a:1},{merge:!0}),e.add(e.models),e.add(e.models,{merge:!0})}),test("`add` only `sort`s when necessary with comparator function",3,function(){var e=new(Backbone.Collection.extend({comparator:function(e,t){return e.get("a")>t.get("a")?1:e.get("a")<t.get("a")?-1:0}}))([{id:1},{id:2},{id:3}]);e.on("sort",function(){ok(!0)}),e.add({id:4}),e.add({id:1,a:1},{merge:!0}),e.add({id:1,b:1},{merge:!0}),e.add({id:1,a:1},{merge:!0}),e.add(e.models),e.add(e.models,{merge:!0})}),test("Attach options to collection.",3,function(){var e="/somewhere",t=new Backbone.Model,n=function(){},r=new Backbone.Collection([],{url:e,model:t,comparator:n});strictEqual(r.url,e),ok(r.model===t),ok(r.comparator===n)})});