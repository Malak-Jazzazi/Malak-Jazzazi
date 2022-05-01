var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function hide_show_table(col_name) {
    var checkbox_val = document.getElementById(col_name);
    if (checkbox_val.checked) {
        var all_col = document.getElementsByClassName(col_name);
        for (var i = 0; i < all_col.length; i++) {
            all_col[i].style.display = "none";
        }
        document.getElementById(col_name + "_head").style.display = "none";
        document.getElementById(col_name).value = "show";
    }

    else {
        var all_col = document.getElementsByClassName(col_name);
        for (var i = 0; i < all_col.length; i++) {
            all_col[i].style.display = "table-cell";
        }
        document.getElementById(col_name + "_head").style.display = "table-cell";
        document.getElementById(col_name).value = "hide";
    }
}



fetch("https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode", requestOptions)
    .then(response => response.json())
    .then(function (result) {
        let html = '';
        result.data.forEach(function (countrie) {
            html += `
            <tr>
                  <td>${countrie.name}</td>
                  <td class="currency">${countrie.currency}</td>
                  <td class="dialcode">${countrie.dialCode}</td>
                  <td class="unicodeFlag">${countrie.unicodeFlag}</td>
                  <td class="flag"><img src="${countrie.flag}" alt=""></td>
            </tr>
                  `
        })
        document.querySelector(".add").innerHTML = html;


    })
    .catch(error => console.log('error', error));


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialcode", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

