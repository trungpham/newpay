YUI.add("datatable-datasource",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}e.mix(n,{NS:"datasource",NAME:"dataTableDataSource",ATTRS:{datasource:{setter:"_setDataSource"},initialRequest:{setter:"_setInitialRequest"}}}),e.extend(n,e.Plugin.Base,{_setDataSource:function(t){return t||new e.DataSource.Local(t)},_setInitialRequest:function(e){},initializer:function(t){e.Lang.isUndefined(t.initialRequest)||this.load({request:t.initialRequest})},load:function(t){t=t||{},t.request=t.request||this.get("initialRequest"),t.callback=t.callback||{success:e.bind(this.onDataReturnInitializeTable,this),failure:e.bind(this.onDataReturnInitializeTable,this),argument:this.get("host").get("state")};var n=t.datasource||this.get("datasource");n&&n.sendRequest(t)},onDataReturnInitializeTable:function(e){var t=e.response&&e.response.results||[];this.get("host").set("data",t)}}),e.namespace("Plugin").DataTableDataSource=n},"@VERSION@",{requires:["datatable-base","plugin","datasource-local"]});