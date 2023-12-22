var ggk = {
  //------------------------you have to input these data ----------------------//
  a: function () {
    return [];
  },
  b: function () {
    return "";
  },
  c: function (a) {
    return "";
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
