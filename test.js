
var Cpta = require("./cpta");
var assert = require("assert");

console.log(Cpta);

var a = new Cpta({e:452, d:14});
assert.ok(a.c === "452.14", "Erreur a");

var b = new Cpta({e:7854.5});
assert.ok(b.c === "7 854.00", "Erreur b");

var c = new Cpta({e:-45.0});
assert.ok(c.c === "-45.00", "Erreur c");

var d = new Cpta({e:.0, d:74});
assert.ok(d.c === "0.74", "Erreur d");

var e = new Cpta({d:"Oté la po"});
assert.ok(e.c === "0.00", "Erreur e");

var f = new Cpta({d:"45.543.5"});
assert.ok(f.c === "0.45", "Erreur f");

var g = new Cpta({e:78541.259874, d:45845});
console.log(".........g = ", g);
assert.ok(g.c === "78 541.45", "Erreur g");

var h = new Cpta({e:"7485.2.25"});
assert.ok(h.c === "7 485.00", "Erreur h");

var i = new Cpta({d:"coucou.54", e:"478OTE"});
assert.ok(i.c === "478.00", "Erreur i");

var j = new Cpta({e:"87.5,54"});
assert.ok(j.c === "87.00", "Erreur j");

console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("d", d);
console.log("e", e);
console.log("f", f);
console.log("g", g);
console.log("h", h);
console.log("i", i);
console.log("j", j);
console.log("\n----------------------------------");

var k = new Cpta(452);
assert.ok(k.c === "452.00", "Erreur k");

var l = new Cpta(7854.5);
assert.ok(l.c === "7 854.50", "Erreur l");

var m = new Cpta(-45.0);
assert.ok(m.c === "-45.00", "Erreur m");

var n = new Cpta(.0);
assert.ok(n.c === "0.00", "Erreur n");

var o = new Cpta("Oté la po");
assert.ok(o.c === "0.00", "Erreur o");

var p = new Cpta("45.543.5");
assert.ok(p.c === "45.54", "Erreur p");

var q = new Cpta(78541.259874);
assert.ok(q.c === "78 541.25", "Erreur q");

var r = new Cpta("7485.2.25");
assert.ok(r.c === "7 485.20", "Erreur r");

var s = new Cpta("coucou.b4");
assert.ok(s.c === "0.04", "Erreur s");

var t = new Cpta("87.5,54");
assert.ok(t.c === "87.50", "Erreur t");

console.log("k", k);
console.log("l", l);
console.log("m", m);
console.log("n", n);
console.log("o", o);
console.log("p", p);
console.log("q", q);
console.log("r", r);
console.log("s", s);
console.log("t", t);
console.log("\n---------------------------");

console.log("a+b", a.add(b));
assert.ok(a.add(b).c === "8 306.14", "Erreur a+b");

console.log("c+k", c.add(k));
assert.ok(c.add(k).c === "407.00", "Erreur c+k");

console.log("l+d", l.add(d));
assert.ok(l.add(d).c === "7 855.24", "Erreur l+d");  	

console.log("m-125", m.add(-125));
assert.ok(m.add(-125).c === "- 170.00", "Erreur m-125"); 

console.log("e+54.25", e.add(54.25));
assert.ok(e.add(54.25).c === "54.25", "Erreur e+54.25");

console.log("d+458.25.25", d.add("458.25.25"));
assert.ok(d.add("458.25.25").c === "458.99", "Erreur d+458.25.25"); 

console.log("g+q+r+s", g.add(q.add(r.add(s))));
console.log(s.c);
console.log(r.c);
console.log(q.c);
console.log(g.c);	
assert.ok(g.add(q.add(r.add(s))).c === "164 567.94", "Erreur g+q+r+s");

//console.log("9452.999+7458.011", new Cpta(9452.999).add(7458.011));
//assert.ok(new Cpta(9452.999).add(7458.011).cpta === "16 911.00", "Erreur 9452.999+7458.011");

console.log("\n--------------------------------");

console.log("-345458725.2554 =", Cpta(-345458725.2554).c);


var ww = Cpta(-45254.07458);
console.log("ww = "+ww);

console.log("\n-------------------WARNING-----------------")
var aa = 9125.05999;
var bb = 10478.79999;

var aaC = new Cpta(aa);
var bbC = new Cpta(bb);

console.log("%d + %d = %d MAIS avec Cpta = %s car :", aa, bb, aa+bb, aaC.add(bbC));
console.log("%s + %s = %s", aaC.c, bbC.c, aaC.add(bbC));

