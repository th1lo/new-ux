var isFirefox = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1);
var isMobile = (typeof window.orientation !== "undefined") ||
               (navigator.userAgent.indexOf('IEMobile') !== -1);

if(isFirefox && !isMobile) {
    $('a[href^="tel:"]').click(function() { return false; });
}
