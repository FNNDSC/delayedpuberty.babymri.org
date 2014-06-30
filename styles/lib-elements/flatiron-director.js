
    (function() {
      var private_router;
      Polymer('flatiron-director', {
        autoHash: false,
        ready: function() {
          this.router.on(/(.*)/, function(route) {
            this.route = route;
          }.bind(this));
          this.route = this.router.getRoute(0) || '';
        },
        routeChanged: function() {
          if (this.autoHash) {
            window.location.hash = this.route;
          }
          this.fire('director-route', this.route);
        },
        get router() {
          if (!private_router) {
            private_router = new Router();
            private_router.init();
          }
          return private_router;
        }
      });
    })();
  