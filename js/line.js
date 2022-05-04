window.addEventListener('load', () => {
  
  $('a.sendMessage').on('click', function () { 
    let inputValue = document.getElementById("domTextElement").value;
    document.getElementById("inputTel").innerHTML = inputValue; 
    var $partType = $(this).closest('div.cart');
    var $partText = $partType.find('div.setmessage').text();
    console.log($partText);
  });

var liffID = '1657102852-g5rdq53W';
triggerLIFF();
function triggerLIFF() {
    liff.init({
    liffId: liffID
    }).then( () => {
        const btnMessage = document.getElementById('sendMessage');
        btnMessage.addEventListener('click', () => {
          let message = $partText;
        
          liff.sendMessages([
            {
              type: 'text',
              text: message
            }
          ]).then(res => window.alert(res.status))
            .catch(error => window.alert(error));
        });
    
    
    
    }).catch(error => {
        console.log(error);
    });
    }
})