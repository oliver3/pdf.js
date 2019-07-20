angular.module('pdfjsViewer', []).directive('pdfjsViewer', pdfjsViewer);

function pdfjsViewer() {
  return {
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {},
    template: '<iframe class="pdfjs-viewer"' +
              'src="../../build/generic/web/viewer.html">' +
              '</iframe>'
  }
}