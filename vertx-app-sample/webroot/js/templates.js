this["JST"] = this["JST"] || {};

this["JST"]["templates/detailscontent.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\r\n  <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.lastSearchURL || (depth0 != null ? depth0.lastSearchURL : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"lastSearchURL","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary\" data-navigo>Back To Search Results</a>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<tbody>\r\n	<tr>\r\n	<td>"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.URI : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>\r\n	<td>"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n 	</tr>\r\n	</tbody>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span title=\""
    + container.escapeExpression(((helper = (helper = helpers.URI || (depth0 != null ? depth0.URI : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"URI","hash":{},"data":data}) : helper)))
    + "\"> [?]</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lastSearchURL : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<h3>Details of <strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></h3>\r\n\r\n<table class=\"table table-striped table-hover\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.props : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</table>\r\n\r\n<a href=\"/relatedwords/"
    + alias4(((helper = (helper = helpers.encodedURI || (depth0 != null ? depth0.encodedURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"encodedURI","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-success\" data-navigo>Related Words</a>\r\n";
},"useData":true});

this["JST"]["templates/home-logged-in.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return " \n <div>\n	 Welcome <strong>"
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "</strong>!\n </div>\n \n <br />\n\n \n \n\n\n            ";
},"useData":true});

this["JST"]["templates/homecontent.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <h3>HOME</h3>\n\n\n            ";
},"useData":true});

this["JST"]["templates/relatedwords_query.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "GRAPH {\r\n\r\n  value segments: ['wordnet']\r\n\r\n  value offset: "
    + alias4(((helper = (helper = helpers.offset || (depth0 != null ? depth0.offset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"offset","hash":{},"data":data}) : helper)))
    + "\r\n  \r\n  value limit: "
    + alias4(((helper = (helper = helpers.limit || (depth0 != null ? depth0.limit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data}) : helper)))
    + "\r\n  \r\n  ARC {\r\n  \r\n  	node_constraint { 'URI eq "
    + ((stack1 = ((helper = (helper = helpers.URI || (depth0 != null ? depth0.URI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"URI","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "' }\r\n  \r\n  	ARC_OR {\r\n  	\r\n  	    ARC {\r\n    \r\n    		node_bind { 'related1' }\r\n    \r\n      		value direction: 'forward'\r\n    \r\n    	}\r\n\r\n  	    ARC {\r\n    \r\n    		node_bind { 'related2' }\r\n    \r\n      		value direction: 'reverse'\r\n    \r\n    	}\r\n  	\r\n  	}\r\n    \r\n  }\r\n  \r\n\r\n}";
},"useData":true});

this["JST"]["templates/search_query.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "SELECT { \r\n\r\n  value segments: ['wordnet']\r\n	\r\n  value limit: "
    + alias4(((helper = (helper = helpers.limit || (depth0 != null ? depth0.limit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data}) : helper)))
    + "\r\n\r\n  value offset: "
    + alias4(((helper = (helper = helpers.offset || (depth0 != null ? depth0.offset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"offset","hash":{},"data":data}) : helper)))
    + " \r\n	\r\n  OR {\r\n\r\n    node_constraint { ai.vital.vitalsigns.model.VITAL_Node.props().name.equalTo_i('"
    + ((stack1 = ((helper = (helper = helpers.escapedQuery || (depth0 != null ? depth0.escapedQuery : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"escapedQuery","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "') }\r\n\r\n    node_constraint { ai.vital.vitalsigns.model.VITAL_Node.props().name.contains_i('"
    + ((stack1 = ((helper = (helper = helpers.escapedQuery || (depth0 != null ? depth0.escapedQuery : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"escapedQuery","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "') }\r\n\r\n  }\r\n\r\n}";
},"useData":true});

this["JST"]["templates/searchresultscontent.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\r\n  <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.lastSearchURL || (depth0 != null ? depth0.lastSearchURL : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"lastSearchURL","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-primary\" data-navigo>Back To Search Results</a>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>Query: <strong>"
    + container.escapeExpression(((helper = (helper = helpers.q || (depth0 != null ? depth0.q : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"q","hash":{},"data":data}) : helper)))
    + "</strong></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>Total results: "
    + container.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"total","hash":{},"data":data}) : helper)))
    + "</div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<tr><td colspan=\"4\"><p>(no results to display)</p></td></tr>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<tr>\r\n			<td>"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>\r\n				<a href=\"/details/"
    + alias4(((helper = (helper = helpers.encodedURI || (depth0 != null ? depth0.encodedURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"encodedURI","hash":{},"data":data}) : helper)))
    + "\" data-navigo>"
    + alias4(((helper = (helper = helpers.URI || (depth0 != null ? depth0.URI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"URI","hash":{},"data":data}) : helper)))
    + "</a>\r\n			</td>\r\n		</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lastSearchURL : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<h4>"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</h4>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.q : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = ((helper = (helper = helpers.objectDetails || (depth0 != null ? depth0.objectDetails : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"objectDetails","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n<div>Displaying: "
    + alias4(((helper = (helper = helpers.firstIndex || (depth0 != null ? depth0.firstIndex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstIndex","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.lastIndex || (depth0 != null ? depth0.lastIndex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastIndex","hash":{},"data":data}) : helper)))
    + "</div>\r\n\r\n\r\n<table class=\"table table-hover table-striped\">\r\n	<thead>\r\n		<tr>\r\n			<th>Index</th>\r\n			<th>Name</th>\r\n			<th>Score</th>\r\n			<th>URI</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\r\n	<tfoot>\r\n	\r\n		<tr><td colspan=\"4\" style=\"text-align: center;\">\r\n		\r\n		 	"
    + ((stack1 = ((helper = (helper = helpers.firstLink || (depth0 != null ? depth0.firstLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstLink","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " &nbsp; "
    + ((stack1 = ((helper = (helper = helpers.prevLink || (depth0 != null ? depth0.prevLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevLink","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " &nbsp;&nbsp;&nbsp; "
    + ((stack1 = ((helper = (helper = helpers.nextLink || (depth0 != null ? depth0.nextLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextLink","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " &nbsp; "
    + ((stack1 = ((helper = (helper = helpers.lastLink || (depth0 != null ? depth0.lastLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastLink","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n		\r\n		</td></tr>\r\n	\r\n	</tfoot>\r\n</table>\r\n\r\n";
},"useData":true});