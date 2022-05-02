window.addEventListener('load', () => {

var liffID = '1657102852-g5rdq53W';
triggerLIFF();



function triggerLIFF() {
    liff.init({
    liffId: liffID
    }).then( () => {
        const btnMessage = document.getElementById('sendMessage');
        btnMessage.addEventListener('click', () => {
          let message = document.getElementById('message');
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