var z = [];
var p = "hijo de puta z";
for(var i=1; i<10; i++){
var x = Math.ceil(Math.random()*31);
z.push(x);
}
console.log(p.replace(/[abc]/gi, z[0]).replace(/[def]/gi, z[1]).replace(/[ghi]/gi, z[2]).replace(/[jkl]/gi, z[3]).replace(/[mnñ]/gi, z[4]).replace(/[opq]/gi, z[5]).replace(/[rst]/gi, z[6]).replace(/[uvw]/gi, z[7]).replace(/[xyz]/gi, z[8]));
console.log(z.toString());