let sendButton = document.getElementById('sendMessage');

function send() {

    let phone = document.getElementById("domTextElement").value;
    const text = document.getElementById('setmessage');
    const shopingcontent = text.innerText;
    const outputContent = document.getElementById('usercontent');
    let name = outputContent.value ;
    let location = document.getElementById('reanderlocal').innerText;
    let total = document.getElementById('subtotal').innerText;
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwTc8YEWYvjKNjyyATLVB47mVuEGY2HPhGD2BBGapR7kpZxsDWUf6izzXoJ0GhpxoDx4A/exec",
      data: {
          "name": name,
          "shopingcontent": shopingcontent,
          "phone": phone,
          "location": location,
          "total":total

      },
      success: function(response) {
        if(response == "成功"){
          alert("成功");
        }
      },
    });
  };
  
  sendButton.addEventListener('click', send);
  