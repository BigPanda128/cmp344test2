//Ryan Postma
//CMP344
//bonus extra credit Sets section

load("set.js");
var a = new Set();
a.add(12);
a.add(72);
a.add(9);
a.add(41);
a.add(13);
a.add(41);
var b = new Set();
b.add(19);
b.add(32);
b.add(12);
b.add(11);
b.add(70);
b.add(72);
var it = new Set();
it = a.union(b);//does the union
print(it.show());
