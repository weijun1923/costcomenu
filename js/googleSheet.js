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

    console.log(total);
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxLgREC_j1td-pTo1Y9DwbNX4Q2onrsqoB0BFGMvcnjCYPD6AErgrfNTWjTJbfoWyaIQA/exec",
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
          alert("成功");
        }
      },
    });
  };
  
  sendButton.addEventListener('click', send);
  