// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const Immutable = require("immutable");
const _ = require("lodash");
const { comment, indent } = require("../util");

module.exports = def => {
  const content = def
    .get("props")
    .map(prop => {
      let result = Immutable.List();
      if (prop.has("comment")) {
        result = result.push(`${indent(comment(prop.get("comment").trim()))}`);
      }
      const k = _.camelCase(prop.get("name"));
      let v = prop.get("value");

      var fontSearch = k.search("fontFamily");
      if (fontSearch > -1) {
      	v = v.replace(/\s/g, '');
      }

      var n = v.search("%");
      if (n > -1) {
      	v = v.replace('%','')
      	if (isNaN(v) == false) 
      		v = v / 100
      }

      if (isNaN(v)) 
      	v = JSON.stringify(v);
      
		
      

      result = result.push(`  "${k}": ${v},`);
      return result;
    })
    .flatten(1)
    .toArray()
    .join("\n");
  return ["{", content, "}"].join("\n");
};
