(function () {
  //Returns the version of Internet Explorer or a -1
  //(indicating the use of another browser).
  var ieVersion = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      ieVersion = parseFloat(RegExp.$1);
  }
  
  if ((ieVersion >= 0 && ieVersion < 9) || (window.location.search.indexOf('svg.render.forceflash=true') != -1)) {
    document.write('<script type="text/javascript" src="../../polyfills/svgweb/src/svg.js"></script>');
  }
})();
