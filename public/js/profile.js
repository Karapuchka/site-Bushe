let btnInfo = document.getElementById('profile-btn-info');
let infoUser = document.forms.profileInfo;

btnInfo.onclick = async ()=>{
    let res = await fetch('/set-profile', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
            'firstName': (infoUser.userFirstname.value == '') ? infoUser.userFirstname.dataset.val : infoUser.userFirstname.value,
            'lastName': (infoUser.userLastname.value  == '') ? infoUser.userLastname.dataset.val : infoUser.userLastname.value,
            'login': (infoUser.userLogin.value == '') ? infoUser.userLogin.dataset.val : infoUser.userLogin.value,
            'password': (infoUser.userPassword.value == '') ? infoUser.userPassword.dataset.val : infoUser.userPassword.value,
        }),
    });

    let text = await res.text();

    alert(text);
};

let btnAddress = document.getElementById('profile-btn-address');
let addressUser = document.forms.listAddresses;

btnAddress.onclick = async ()=>{
    let res = await fetch('/set-profile', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
            'address': addressUser.userNewAddress.value,
        }),
    });

    let text = await res.text();

    alert(text);
};