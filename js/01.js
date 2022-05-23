window.addEventListener("load", () => {
    triggerLIFF();
    function triggerLIFF() {
        // Using a Promise object
        const liffID = "1657153949-289wRmb1";
        liff.init({
            liffId: liffID, // Use own liffId
        }).then(() => {
            console.log("V5");
            //start useing liff api
            //取使用者公開資料
                liff.getProfile().then(profile => {
                    const username = document.getElementById('username');
                    const userid = document.getElementById('userid');
                    let json = `${JSON.stringify(profile)}`;
                    username.innerHTML = `${profile.displayName}`;
                    userid.innerHTML = `${profile.userId}`;
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




    })
    .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
    });

// Using a callback
liff.init({ liffId: liffID }, successCallback, errorCallback);
    }
})