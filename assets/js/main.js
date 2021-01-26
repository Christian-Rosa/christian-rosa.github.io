/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $banner = $("#banner"),
    $overlay = $("#overlay");

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["981px", "1280px"],
    narrow: ["841px", "980px"],
    narrower: ["737px", "840px"],
    mobile: [null, "736px"]
  });

  // Play initial animations on page load.
  $window.on("load", function() {
    window.setTimeout(function() {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Scrolly.
  $(".scrolly").scrolly({
    speed: 1000,
    offset: function() {
      return $header.height() + 10;
    }
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    mode: "fade",
    noOpenerFade: true,
    expandMode: browser.mobile ? "click" : "hover"
  });

  // Nav Panel.

  // Button.
  $(
    '<div id="navButton">' +
      '<a href="#navPanel" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible"
    });

  // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
  if (browser.os == "wp" && browser.osVersion < 10)
    $("#navButton, #navPanel, #page-wrapper").css("transition", "none");

  // Header.
  if (!browser.mobile && $header.hasClass("alt") && $banner.length > 0) {
    $window.on("load", function() {
      $banner.scrollex({
        bottom: $header.outerHeight(),
        terminate: function() {
          $header.removeClass("alt");
        },
        enter: function() {
          $header.addClass("alt reveal");
        },
        leave: function() {
          $header.removeClass("alt");
        }
      });
    });
  }
  // Get the modal
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  var resumeModal = document.getElementById("myResumeModal");
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var img2 = document.getElementById("myImg2");
  var resumeImg = document.getElementById("myResumeImg");

  var modalImg = document.getElementById("img01");
  var modalImg2 = document.getElementById("img02");
  var modalResumeImg = document.getElementById("resumeImg");

  var captionText = document.getElementById("caption");
  var captionText2 = document.getElementById("caption2");
  var captionResume = document.getElementById("resumeCaption");

  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
  };

  resumeImg.onclick = function() {
    resumeModal.style.display = "block";
    modalResumeImg.src = this.src;
    captionResume.innerHTML = this.alt;
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementsByClassName("close")[1];
  var resumeSpan = document.getElementsByClassName("close")[2];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    if (document.getElementById("img01")) {
      modal.style.display = "none";
    }
  };

  span1.onclick = function() {
    if (document.getElementById("img02")) {
      modal2.style.display = "none";
    }
  };

  resumeSpan.onclick = function() {
    if (document.getElementById("resumeImg")) {
      resumeModal.style.display = "none";
    }
  };
})(jQuery);
