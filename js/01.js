window.addEventListener("load",()=>{
    triggerLIFF();
    function triggerLIFF(){
            // Using a Promise object
        const liffID = "1657102852-g5rdq53W";
        liff.init({
        liffId: liffID, // Use own liffId
        }).then(() => {
        //start useing liff api
            console.log("start liff api");
            const btnMessage = document.getElementById('sendMessage');
            btnMessage.addEventListener("click",()=>{
                console.log("btnMessage Click working");
                let inputValue = document.getElementById("domTextElement").value;
                document.getElementById("inputTel").innerHTML = inputValue; 
                const text = document.getElementById('setmessage');
                const message = text.innerText;
                liff.sendMessages([
                    {
                    type: "text",
                    text: message,
                    },
                ])
                .then(() => {
                    console.log("message sent");
                    Swal.fire({
                        text:'訂單已送出',
                        icon:'success'
                            }).then((result) => {
                                liff.closeWindow();
                                localStorage.removeItem('CART');
                                localStorage.removeItem('Stop');
                            })
                })
                .catch((err) => {
                    console.log("error", err);
                    window.alert(err + "訂單無法送出，請在line聊天回報問題");
                });

            })
            // 使用者資訊
            let language, version, isInClient, isLoggedIn, os, lineVersion;

            language = liff.getLanguage(); // String。引用 LIFF SDK 的頁面，頁面中的 lang 值
            version = liff.getVersion(); // String。LIFF SDK 的版本
            isInClient = liff.isInClient(); // Boolean。回傳是否由 LINE App 存取
            isLoggedIn = liff.isLoggedIn(); // Boolean。使用者是否登入 LINE 帳號。true 時，可呼叫需要 Access Token 的 API
            os = liff.getOS(); // String。回傳使用者作業系統：ios、android、web
            lineVersion = liff.getLineVersion(); // 使用者的 LINE 版本
    
            const outputBasic = document.getElementById('result-basic');
            outputBasic.value = `language: ${language}\nversion: ${version}\nisInClient: ${isInClient}\nisLoggedIn: ${isLoggedIn}\nos: ${os}\nlineVersion: ${lineVersion}`;
            const btnLogout = document.getElementById('logout');




        })
        .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
        });

        // Using a callback
        liff.init({ liffId: "1657102852-g5rdq53W" }, successCallback, errorCallback);
    }
})