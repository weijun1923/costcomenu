let sendButton = document.getElementById('sendMessage');

function send() {
    let phone = document.getElementById("domTextElement").value;
    const text = document.getElementById('setmessage');
    const shopingcontent = text.innerText;
    let location = document.getElementById('reanderlocal').innerText;
    let total = document.getElementById('subtotal').innerText;
    let time = document.getElementById('showbox').innerText;
    let getusername = document.getElementById('username').innerText;
    let getuserid = document.getElementById('userid').innerText;
    if ($('#username').text().length == 0){
      getusername = $('#lineNameValue').val();
    }
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwmZEuFWBrEjffrCQ1RRavLx7wMfR_L8hndYPqorbfNITcb4IXfuOJQvZITqF2xyHXvqQ/exec",
      data: {
          "name": getusername,
          "shopingcontent": shopingcontent,
          "phone": phone,
          "location":location,
          "total":total,
          "time":time,
          "userid":getuserid
      },
      success: function(response) {
        if(response == "成功"){
          Swal.fire({
            text:'訂單已送出',
            icon:'success'
          }).then((result) => {
            localStorage.removeItem('CART');
            localStorage.removeItem('Stop');
            localStorage.setItem("CloseWindow",1)
            window.location.reload();

          })
        }
      },
    });
  };
  
  sendButton.addEventListener('click', send);
  