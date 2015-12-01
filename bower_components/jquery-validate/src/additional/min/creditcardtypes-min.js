$.validator.addMethod("creditcardtypes",function(t,e,n){if(/[^0-9\-]+/.test(t))return!1;t=t.replace(/\D/g,"");var r=0;return n.mastercard&&(r|=1),n.visa&&(r|=2),n.amex&&(r|=4),n.dinersclub&&(r|=8),n.enroute&&(r|=16),n.discover&&(r|=32),n.jcb&&(r|=64),n.unknown&&(r|=128),n.all&&(r=255),1&r&&/^(5[12345])/.test(t)?16===t.length:2&r&&/^(4)/.test(t)?16===t.length:4&r&&/^(3[47])/.test(t)?15===t.length:8&r&&/^(3(0[012345]|[68]))/.test(t)?14===t.length:16&r&&/^(2(014|149))/.test(t)?15===t.length:32&r&&/^(6011)/.test(t)?16===t.length:64&r&&/^(3)/.test(t)?16===t.length:64&r&&/^(2131|1800)/.test(t)?15===t.length:128&r?!0:!1},"Please enter a valid credit card number.");