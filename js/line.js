// <!-- 複製購物清單 -->

function CopyTextToClipboard(id) {

  var TextRange = document.createRange();

  TextRange.selectNode(document.getElementById(id));

  sel = window.getSelection();

  sel.removeAllRanges();

  sel.addRange(TextRange);

  document.execCommand("copy");
  // 貼上輸入框
  const pasteText = document.querySelector('#message');
  pasteText.focus();
  document.execCommand('paste');
}

window.addEventListener('load', () => {

var liffID = '1657102852-g5rdq53W';
triggerLIFF();
var messagetext =$("#message").val();


function triggerLIFF() {
    liff.init({
    liffId: liffID
    }).then( () => {
        const btnMessage = document.getElementById('sendMessage');
        btnMessage.addEventListener('click', () => {
          let message = messagetext;
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