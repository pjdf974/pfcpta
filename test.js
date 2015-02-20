
var Cpta = require("./cpta");
var assert = require("assert");

console.log(Cpta);

var a = new Cpta({ent:452, dec:14});
assert.ok(a.cpta === "452.14", "Erreur a");

var b = new Cpta({ent:7854.5});
assert.ok(b.cpta === "7 854.00", "Erreur b");

var c = new Cpta({ent:-45.0});
assert.ok(c.cpta === "-45.00", "Erreur c");

var d = new Cpta({ent:.0, dec:74});
assert.ok(d.cpta === "0.74", "Erreur d");

var e = new Cpta({dec:"Oté la po"});
assert.ok(e.cpta === "0.00", "Erreur e");

var f = new Cpta({dec:"45.543.5"});
assert.ok(f.cpta === "0.45", "Erreur f");

var g = new Cpta({ent:78541.259874, dec:45845});
console.log(".........g = ", g);
assert.ok(g.cpta === "78 541.45", "Erreur g");

var h = new Cpta({ent:"7485.2.25"});
assert.ok(h.cpta === "7 485.00", "Erreur h");

var i = new Cpta({dec:"coucou.54", ent:"478OTE"});
assert.ok(i.cpta === "478.00", "Erreur i");

var j = new Cpta({ent:"87.5,54"});
assert.ok(j.cpta === "87.00", "Erreur j");

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
assert.ok(k.cpta === "452.00", "Erreur k");

var l = new Cpta(7854.5);
assert.ok(l.cpta === "7 854.50", "Erreur l");

var m = new Cpta(-45.0);
assert.ok(m.cpta === "-45.00", "Erreur m");

var n = new Cpta(.0);
assert.ok(n.cpta === "0.00", "Erreur n");

var o = new Cpta("Oté la po");
assert.ok(o.cpta === "0.00", "Erreur o");

var p = new Cpta("45.543.5");
assert.ok(p.cpta === "45.54", "Erreur p");

var q = new Cpta(78541.259874);
assert.ok(q.cpta === "78 541.25", "Erreur q");

var r = new Cpta("7485.2.25");
assert.ok(r.cpta === "7 485.20", "Erreur r");

var s = new Cpta("coucou.b4");
assert.ok(s.cpta === "0.04", "Erreur s");

var t = new Cpta("87.5,54");
assert.ok(t.cpta === "87.50", "Erreur t");

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
assert.ok(a.add(b).cpta === "8 306.14", "Erreur a+b");

console.log("c+k", c.add(k));
assert.ok(c.add(k).cpta === "407.00", "Erreur c+k");

console.log("l+d", l.add(d));
assert.ok(l.add(d).cpta === "7 855.24", "Erreur l+d");  	

console.log("m-125", m.add(-125));
assert.ok(m.add(-125).cpta === "- 170.00", "Erreur m-125"); 

console.log("e+54.25", e.add(54.25));
assert.ok(e.add(54.25).cpta === "54.25", "Erreur e+54.25");

console.log("d+458.25.25", d.add("458.25.25"));
assert.ok(d.add("458.25.25").cpta === "458.99", "Erreur d+458.25.25"); 

console.log("g+q+r+s", g.add(q.add(r.add(s))));
console.log(s.cpta);
console.log(r.cpta);
console.log(q.cpta);
console.log(g.cpta);	
assert.ok(g.add(q.add(r.add(s))).cpta === "164 567.94", "Erreur g+q+r+s");

console.log("9452.999+7458.011", new Cpta(9452.999).add(7458.011));
assert.ok(new Cpta(9452.999).add(7458.011).cpta === "16 911.00", "Erreur 9452.999+7458.011");

console.log("\n--------------------------------");

console.log("-345458725.2554 =", Cpta(-345458725.2554).cpta);


var ww = Cpta(-45254.07458);
console.log("ww = "+ww);

console.log("\n-------------------WARNING-----------------")
var aa = 9125.05999;
var bb = 10478.79999;

var aaC = new Cpta(aa);
var bbC = new Cpta(bb);

console.log("%d + %d = %d MAIS avec Cpta = %s car :", aa, bb, aa+bb, aaC.add(bbC));
console.log("%s + %s = %s", aaC.cpta, bbC.cpta, aaC.add(bbC));

