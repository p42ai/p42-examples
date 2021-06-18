let value1 = x && x.a;
let value2 = x != null && x.a;

if (x !== null && x !== undefined && x.a) {
  console.log(x.a);
}

function f(obj) {
  return obj && obj.a && obj.a.b && obj.a.b.c && obj.a.b.c.d;
}
