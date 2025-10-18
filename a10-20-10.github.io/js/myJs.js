const textConfig = {
  text1: "Helloooo 🐥",
  text2: "Hôm nay là ngày 20/10 nèeee",
  text3: "Dạo này 🐥 mệt mỏi với mấy cái deadline lắm đúng hong nè ? :3",
  text4: "Thì nhân ngày 20/10 á, nên là tui có mấy món quà tinh thần nho nhỏ để tặng 🐥",
  text5: "Thôi 🐥 hổng dám nhận đâu",
  text6: "Đâu cho 🐥 xem thử coiiiiii",
  text7: "🐥 có gì để nói với tui không nèeee ?",
  text8: "Gửi cho tui coi dớiii",
  text9: "Cảm ơn nhoooo <3333",
  text10: "1, 2, 3 con 🐥. 20/10 vui vẻ nháaaa",
  text11:
    "Okela nè. Chúc 🐥 có một ngày 20/10 thiệc là dui dẻ nhoaaaaaa ",
  text12: "Okelaaa luônnnnn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);


  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button position
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whatttttt?'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
        }).then(() => {
          // Hiển thị bức thư
          Swal.fire({
            width: 800,
            padding: "24",
            background: 'linear-gradient(135deg, #FFF9E6 0%, #FFEDCC 100%)',
            title: "💌 Thư gửi 🐥 nhân ngày 20/10 💌",
            html: `
              <div class="chicken-letter-container">
                <!-- Decorative chickens -->
                <div class="chicken-decoration-top-left">🐥</div>
                <div class="chicken-decoration-top-right">🐥</div>
                <div class="chicken-decoration-bottom">🐥🐣🐥</div>
                
                <div class="chicken-letter-content">
                  <p class="chicken-greeting">
                    <span class="chicken-greeting-icon">🐥</span> Chào 🐥,
                  </p>
                  <p class="chicken-paragraph chicken-paragraph-gold">
                    Tui biết dạo này 🐥 đang rất bận rộn với deadline, áp lực công việc và học tập.
                    Nhưng tui muốn 🐥 biết rằng, dù có vất vả đến đâu, 🐥 vẫn luôn là một người tuyệt vời
                    trong mắt tui. <span class="chicken-emoji-decoration">🌟</span>
                  </p>
                  <p class="chicken-paragraph chicken-paragraph-orange">
                    Nhân ngày Phụ nữ Việt Nam 20/10, tui muốn gửi đến 🐥 những lời chúc tốt đẹp nhất.
                    Chúc 🐥 luôn vui vẻ, hạnh phúc và thành công trong mọi việc. Hãy luôn giữ nụ cười
                    tươi tắn và tinh thần lạc quan nhé! <span class="chicken-emoji-decoration">💐</span>
                  </p>
                  <p class="chicken-paragraph chicken-paragraph-gold">
                    🐥 hãy nhớ rằng, sau mỗi deadline vất vả đều sẽ có những khoảnh khắc thư giãn đáng nhớ.
                    Và tui sẽ luôn ở đây để ủng hộ 🐥! <span class="chicken-emoji-decoration">💪</span>
                  </p>
                  <div class="chicken-divider">
                    <span class="chicken-divider-emojis">🐔🐥🐣🥚</span>
                  </div>
                  <p class="chicken-signature">
                   TÊ LỜ ❤️<br>
                    <span class="chicken-date">20/10/2025</span>
                  </p>
                </div>
              </div>
            `,
            confirmButtonText: "🐥 Cảm ơn nhaaa 🐥",
            confirmButtonColor: "#FFD700",
            customClass: {
              popup: 'chicken-letter-popup'
            }
          });
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
