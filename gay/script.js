$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });

   // Hàm mở modal
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = "block";
    }
    // Hàm đóng modal
    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = "none";
    }
    // Đóng modal khi nhấn ra ngoài modal
    window.onclick = function(event) {
        if (event.target.className === "modal") {
            closeModal('loginModal');
            closeModal('signupModal');
        }
    }

