(function (f, b, g) {
  var a = {
    key: 'U8U0mF0L',
    appendTo: 'track_container', // Corrigido para corresponder ao ID correto
    customer: {
      name: '',
      email: '',
      phone: ''
    }
  };

  var e;
  var c = f.getElementById('track_container'); // Corrigido para encontrar o elemento com o ID correto
  if (f.getElementById(g)) { return };
  
  e = f.createElement(b);
  e.id = g;
  e.src = 'https://app.track.co/widget.min.js';
  e.type = 'text/javascript';
  e.async = true;
  e.onload = e.onreadystatechange = function () {
    var h = this.readyState;
    if (h && h !== 'complete' && h !== 'loaded') { return };
    
    try {
      var c = new TrackWidget();
      c.createWidget(a);
    } catch (i) { }
  };
  
  c.parentNode.insertBefore(e, c);
}(document, 'script', 'trackwidget-js'));
