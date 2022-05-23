let sendButton = document.getElementById('sendMessage');

function send() {
    let phone = document.getElementById("domTextElement").value;
    const text = document.getElementById('setmessage');
    const shopingcontent = text.innerText;
    const outputContent = document.getElementById('usercontent');
    let name = outputContent.value ;
    let location = document.getElementById('reanderlocal').innerText;

    let total = document.getElementById('subtotal').innerText;
    console.log(total);
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxoakbL8BDw_2BbNuRuRC6KVgmsy44gr2_6isxW8mvxO_ticpgbTBEfpYthyeTUAumEbA/exec",
      data: {
          "name": name,
          "phone": shopingcontent,
          "demand": phone,
          "demand1":location,
          "demand2":total
      },
      success: function(response) {
        if(response == "成功"){
          alert("成功");
        }
      },
    });
  };
  
  sendButton.addEventListener('click', send);
  