var ggk = {
  //------------------------you have to input these data ----------------------//
  a: function () {},
  c: function (a) {
    var r = "";
    var a = String(a);
    var k = this.a();
    for (var i = 0; i < a.length; i++) {
      var ii = a.charAt(i);
      if (ii == ".") {
        r += ".";
        continue;
      }
      ii = eval(ii);
      if (ii < k.length) {
        r += k[ii];
      }
    }
    return r;
  },
  //------------------------you have to input these data ----------------------//

  d: function (a, b) {
    return { t: ggk.c(new Date().getTime() / 1000), s: ggk.c(a), m: ggk.c(b) };
  },
  hack: (time, score) => {
    return { t: ggk.c(time / 1000), s: ggk.c(score), m: ggk.c(0x1) };
  },
};

exports.ggk = ggk;
