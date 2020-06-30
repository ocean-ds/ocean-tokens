function theoReplaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "UIColor(red: " + r + ", green: " + g + ", blue: " + b + ", alpha: " + alpha + ")";
    } else {
        return "UIColor(red: " + r + ", green: " + g + ", blue: " + b + ", alpha: 1)";
    }
}

function convertToShadowSwift(str) {
  
  str = str.replace("rgba(","").replace(")","");
  var res = str.split(" ");
  var prefix = ['x:',', y:',', blurRadius:',', color: UIColor(red:',' green:',' blue:',' alpha:']; 
  var text = "";
  for (i = 0; i < res.length; i++) {
     text += prefix[i] + " " + res[i];
     
  }
  text = "createShadow(" + text + "))";
  return text;
  
}

module.exports = theo => {

	theo.registerValueTransform(
    	'ios-rgba-swift',
    	(prop) =>
      		prop.get('type') === 'shadow',
    	(prop) => {
        let valueShadow = prop.get('value')
    		return convertToShadowSwift(`${valueShadow}`);
    	}
  	);

  	theo.registerValueTransform(
    	'ios-remove-pixel',
    	(prop) => prop.get('type') === 'unit' ||  prop.get('type') === 'number' ||  prop.get('type') === 'size' ||  prop.get('type') === 'shadow',
    	(prop) => {
      		return theoReplaceAll(`${prop.get('value')}`, 'px', '');
    	}
  	);

    //theo.registerTransform("ios", ['color/rgb','ios-remove-rgb-word','ios-remove-pixel']);
    theo.registerTransform("ios", ['ios-rgba-swift','ios-remove-pixel']);
  }