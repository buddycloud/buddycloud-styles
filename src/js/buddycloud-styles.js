/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

var $window = $(window)
var $body   = $(document.body)

var navHeight = $('.navbar').outerHeight(true) + 10

$body.scrollspy({
  target: '.bs-docs-sidebar',
  // offset: navHeight
})

$window.on('load', function () {
  $body.scrollspy('refresh')
})

$('.bs-docs-container [href=#]').click(function (e) {
  e.preventDefault()
})

// back to top
setTimeout(function () {
  var $sideBar = $('.bs-docs-sidebar')

  $sideBar.affix({
    offset: {
      top: function () {
        var offsetTop      = $sideBar.offset().top
        var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
        var navOuterHeight = $('.bs-docs-nav').height()

        return (this.top = offsetTop - navOuterHeight - sideBarMargin)
      },
      bottom: function () {
        return (this.bottom = $('.bs-docs-footer').outerHeight(true))
      }
    }
  })
}, 100)

setTimeout(function () {
  $('.bs-top').affix()
}, 100)
