// <!-- 複製購物清單 -->
function CopyTextToClipboard(id) {

var TextRange = document.createRange();

TextRange.selectNode(document.getElementById(id));

sel = window.getSelection();

sel.removeAllRanges();

sel.addRange(TextRange);

document.execCommand("copy");

editor.addEventListener("paste", function(e) {
  // cancel paste
  e.preventDefault();

  // get text representation of clipboard
  var text = (e.originalEvent || e).clipboardData.getData('text/plain');

  // insert text manually
  document.execCommand("insertHTML", false, text);
});

}


window.addEventListener('load', () => {

var liffID = '1657102852-g5rdq53W';
triggerLIFF();


function triggerLIFF() {
    liff.init({
    liffId: liffID
    }).then( () => {
        const btnMessage = document.getElementById('sendMessage');
        btnMessage.addEventListener('click', () => {
          let message = text;
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