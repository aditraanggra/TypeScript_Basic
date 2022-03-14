"use strict";
//enum
//enum number
// enum month {
//     JAN=1,
//     FEB,
//     MAR,
//     APR,
//     MAY,
//     JUN,
//     JUL,
//     AUG,
//     SEP,
//     OKT,
//     NOV,
//     DES
// }
var month;
(function (month) {
    month["JAN"] = "Januari";
    month["FEB"] = "Februari";
    month["MAR"] = "Maret";
    month["APR"] = "April";
    month["MAY"] = "Mei";
    month["JUN"] = "Juni";
    month["JUL"] = "Juli";
    month["AUG"] = "Agustus";
    month["SEP"] = "September";
    month["OKT"] = "Oktober";
    month["NOV"] = "Nopember";
    month["DES"] = "Desember";
})(month || (month = {}));
console.log(month);
