
    (function() {
      Polymer('polymer-jsonp', {
        /**
         * The URL target of the request.
         * 
         * @attribute url
         * @type string
         * @default ''
         */
        url: '',
        /**
         * Returns the response object.
         *
         * @attribute response
         * @type Object
         * @default null
         */
        response: null,
        bustCache: false,
        auto: false,
        urlChanged: function() {
          if (this.url && this.auto) {
            this.go();
          }
        },
        /**
         * Performs a JSONP request to the url specified.
         *
         * @method go
         */
        go: function() {
          if (!this.isInFlight()) {
            this.callbackFunc = JSONP_CALLBACK_FUNC_NAME + callbackId++;
            window[this.callbackFunc] = this.respond.bind(this);
            var url = this.url + this.callbackFunc + (this.bustCache ? '&' + Math.random() : '');
            this.addScript(url);
          }
        },
        isInFlight: function() {
          return !!this.script;
        },
        addScript: function(inSrc) {
          this.script = document.createElement('script');
          this.script.src = inSrc;
          this.script.onerror = this.respond.bind(this);
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(this.script, s);
        },
        removeScript: function() {
          if (this.script.parentNode) {
            this.script.parentNode.removeChild(this.script);
          }
          this.script = null;
        },
        respond: function(inResponse) {
          this.response = inResponse;
          this.removeScript();
          delete window[this.callbackFunc];
          this.fire('polymer-response', {response: inResponse});
        }
      });
      var JSONP_CALLBACK_FUNC_NAME = '_polymer_jsonp_callback_';
      var callbackId = 0;
    })();
  