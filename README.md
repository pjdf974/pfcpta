pfcpta
======

Chiffre comptable

Version 0.2.4

WARNING : 
Cpta.ent replace with Cpta.e
Cpta.dec replace with Cpta.d
Cpta.cpta replace with Cpta.c
          

```js

var Cpta = require("pfcpta"); 

/*  DEPRECATED :
    var a = new Cpta({ent:452, dec:14});  // 452.14 
    var a = Cpta({ent:452, dec:14});  // 452.14
    console.log(a.ent, a.dec, a.cpta);// 452 14 452.14

    remplace with :
    var a = new Cpta({e:452, d:14});  // 452.14 
    var a = Cpta({e:452, d:14});  // 452.14
    console.log(a.e, a.d, a.c);// 452 14 452.14

*/

var b = new Cpta({e:7854.5});  // 7 854.00

var c = new Cpta({e:-45.0});  // -45.00

var d = new Cpta({e:.0, d:74});  // "0.74

var e = new Cpta({d:"Oté la po"});  // 0.00

var f = new Cpta({d:"45.543.5"});  // 0.45

var g = new Cpta({e:78541.259874, d:45845});  // 78 541.45

var h = new Cpta({e:"7485.2.25"});  // 7 485.00

var i = new Cpta({d:"coucou.54", e:"478OTE"});   // 478.00

var j = new Cpta({e:"87.5,54"});   // 87.00

var k = new Cpta(452);   // 452.00

var l = new Cpta(7854.5);   // 854.50

var m = new Cpta(-45.0);  // -45.00

var n = new Cpta(.0);  // 0.00

var o = new Cpta("Oté la po");  // 0.00

var p = new Cpta("45.543.5");  // 45.54

var q = new Cpta(78541.259874);  // 78 541.25

var r = new Cpta("7485.2.25");  // 7 485.20

var s = new Cpta("coucou.b4");   // 0.04

var t = new Cpta("87.5,54");   // 87.50

console.log("a+b", a.add(b));   // 8 306.14

console.log("c+k", c.add(k));   // 407.00

console.log("l+d", l.add(d));   // 7 855.24  	

console.log("m-125", m.add(-125));   // - 170.00

console.log("e+54.25", e.add(54.25));   // 54.25

console.log("d+458.25.25", d.add("458.25.25"));   // 458.99

console.log("g+q+r+s", g.add(q.add(r.add(s))));   // 164 567.94

console.log("9452.999+7458.011", new Cpta(9452.999).add(7458.011));   // 16 911.00

// -------------------WARNING-----------------
var aa = 9125.05999;
var bb = 10478.79999;

var aaC = new Cpta(aa); 
var bbC = new Cpta(bb);

console.log("%d + %d = %d MAIS avec Cpta = %s car :", aa, bb, aa+bb, aaC.add(bbC));
// 19 603.84
console.log("%s + %s = %s", aaC.c, bbC.c, aaC.add(bbC));
```
