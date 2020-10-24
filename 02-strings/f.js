var stringVar = "Hello World";

subString = stringVar.indexOf(" ", 0)
subString1M =  stringVar.substring(1,0);
subString1m =  stringVar.substring(1,subString);
subString2M =  stringVar.substring(subString + 1,7);
subString2m =  stringVar.substring(subString + 2,11);

subStringComplet = subString1M.toUpperCase() + subString1m.toLowerCase() + " " +  subString2M.toUpperCase() + subString2m.toLowerCase();


console.log(subStringComplet);