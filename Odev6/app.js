"use strict";
// switch (tarayici) {
// case 'Edge':
// alert( "Edge browser kullanıyorsun" );
// break;

// case 'Chrome':
// case 'Firefox':
// case 'Safari':
// case 'Opera':
// alert( 'Tamam bunları destekliyoruz.' );
// break;

// default:
// alert( 'Umarım sayfanız güzel görünüyordur' );
// }

let tarayici = prompt("Bir tarayıcı giriniz.").toLocaleLowerCase();


if (tarayici == "edge") {
    alert("Edge browser kullanıyorsun");
} else if (tarayici == "chrome" || tarayici == "firefox" || tarayici == "safari" || tarayici == "opera") {
    alert('Tamam bunları destekliyoruz.');
} else {
    alert('Umarım sayfanız güzel görünüyordur');
}