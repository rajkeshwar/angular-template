// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '../shared-jslibs/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '../shared-jslibs/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '../shared-jslibs/flot/jquery.flot.js',
                          '../shared-jslibs/flot/jquery.flot.pie.js', 
                          '../shared-jslibs/flot/jquery.flot.resize.js',
                          '../shared-jslibs/flot/jquery.flot.spline.js',
                          '../shared-jslibs/flot.tooltip/js/jquery.flot.tooltip.js',
                          '../shared-jslibs/flot.orderbars/js/jquery.flot.orderBars.js'],
      moment:         [   '../shared-jslibs/moment/moment.js'],
      screenfull:     [   '../shared-jslibs/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '../shared-jslibs/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '../shared-jslibs/html5sortable/jquery.sortable.js'],
      nestable:       [   '../shared-jslibs/nestable/jquery.nestable.js',
                          '../shared-jslibs/nestable/jquery.nestable.css'],
      filestyle:      [   '../shared-jslibs/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '../shared-jslibs/bootstrap-slider/bootstrap-slider.js',
                          '../shared-jslibs/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '../shared-jslibs/chosen/chosen.jquery.js',
                          '../shared-jslibs/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '../shared-jslibs/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js',
                          '../shared-jslibs/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css'],
      wysiwyg:        [   '../shared-jslibs/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../shared-jslibs/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '../shared-jslibs/datatables/media/js/jquery.dataTables.js',
                          '../shared-jslibs/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../shared-jslibs/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '../shared-jslibs/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../shared-jslibs/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../shared-jslibs/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../shared-jslibs/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   '../shared-jslibs/footable/js/footable.js',
                          '../shared-jslibs/footable/css/footable.core.css'],
      fullcalendar:   [   '../shared-jslibs/moment/moment.js',
                          '../shared-jslibs/fullcalendar/dist/fullcalendar.js',
                          '../shared-jslibs/fullcalendar/dist/fullcalendar.css',
                          '../shared-jslibs/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '../shared-jslibs/moment/moment.js',
                          '../shared-jslibs/bootstrap-daterangepicker/daterangepicker.js',
                          '../shared-jslibs/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '../shared-jslibs/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../shared-jslibs/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      '../shared-jslibs/ng-grid/build/ng-grid.js',
                      '../shared-jslibs/ng-grid/ng-grid.css',
                      '../shared-jslibs/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '../shared-jslibs/angular-ui-grid/ui-grid.js',
                      '../shared-jslibs/angular-ui-grid/ui-grid.css',
                      '../shared-jslibs/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      '../shared-jslibs/angular-ui-select/dist/select.js',
                      '../shared-jslibs/angular-ui-select/dist/select.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    '../shared-jslibs/angular-file-upload/angular-file-upload.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['../shared-jslibs/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '../shared-jslibs/ngImgCrop/compile/minified/ng-img-crop.js',
                      '../shared-jslibs/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      '../shared-jslibs/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      '../shared-jslibs/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      '../shared-jslibs/angularjs-toaster/toaster.js',
                      '../shared-jslibs/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      '../shared-jslibs/textAngular/src/textAngular-sanitize.js',
                      '../shared-jslibs/textAngular/src/textAngular.js',
                      '../shared-jslibs/textAngular/src/textAngularSetup.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      '../shared-jslibs/venturocket-angular-slider/build/angular-slider.js',
                      '../shared-jslibs/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '../shared-jslibs/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '../shared-jslibs/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '../shared-jslibs/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '../shared-jslibs/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '../shared-jslibs/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '../shared-jslibs/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      '../shared-jslibs/angular-xeditable/dist/js/xeditable.js',
                      '../shared-jslibs/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '../shared-jslibs/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;
