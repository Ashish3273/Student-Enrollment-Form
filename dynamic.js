const form = document.getElementById('form');
const fullname = document.getElementById('Name1');
const maleRadio = document.getElementById('male');
const femaleRadio = document.getElementById('female')
const website = document.getElementById('Website1');
const email = document.getElementById('Email1');
const imageLink = document.getElementById('ImgLink1');
const isHtml = document.getElementById('html');
const isJava = document.getElementById('java');
const isCSS = document.getElementById('css');
const tbody = document.getElementById('tableBody');
const table = document.getElementById('table');
var i = 1;


form.addEventListener('submit', function(event) {

    event.preventDefault();
    if (true) {
        addRow();
        addFadingEffect();
        form.reset();
    }
});

function addRow() {
    tbody.innerHTML += `
    <tr style = 'font-size:14px; text-align:screenLeft;'id='row'>
        <td>
            <div>
                <b>${addName()}</b>
            </div>
            <div>${addGender()}</div>
            <div>${addEmail()}</div>
            <div>
                <a href='${addWebsite()}' target='_blank' >${addWebsite()}</a>
            </div>
            <div>${addSkills()}</div>
        </td>
        <td>
            <div id = 'imageDiv'>
                <img id='id_image' src = ${addImage()} alt='Not Found'>
            </div>
        </td>
        </tr>
        `;
}

function addFadingEffect() {
    if (i % 2 == 0) {
        table.rows[i].style.backgroundColor = 'rgba(167,201,65,0.3)';
    } else {
        table.rows[i].style.backgroundColor = '#ffffff';
    }
    i += 1;
}


function addEmail() {
    return email.value;
}

function addImage() {
    return imageLink.value;
}

function addWebsite() {
    return website.value;
}

function addName() {
    return fullname.value;
}

function addGender() {
    if (maleRadio.checked) {
        return 'Male'
    }
    return 'Female'
}

function addSkills() {
    var skillArray = [];
    var skillset = '';
    if (isHtml.checked) {
        skillArray.push(isHtml.value)

    }
    if (isJava.checked) {
        skillArray.push(isJava.value)
    }
    if (isCSS.checked) {
        skillArray.push(isCSS.value)
    }
    for (var i = 0; i < skillArray.length; i++) {
        if (skillset.length > 0) {
            skillset += ',' + skillArray[i]
        } else {
            skillset += skillArray[i]
        }

    }
    return skillset;
}
