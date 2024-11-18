var userData = false;
var visible = document.getElementById('data');
var erR = document.getElementById('err');

// Data that was given by the user
var enteredName = "";
var enteredRN = "";
var enteredContact = "";

// Data that will be shown to the user
var showName = document.getElementById('name');
var showRN = document.getElementById('RN');
var showContact = document.getElementById('Con');
var showRes = document.getElementById('Res');

var Data = [
    {
        name: 'Hasnain',
        rollNumber: '268797',
        contact: 'a@gmail.com',
        result: 'Passed'
    },
    {
        name: 'Abby',
        rollNumber: '264877',
        contact: 'ab@gmail.com',
        result: 'Failed'
    },
    {
        name: 'Tom',
        rollNumber: '262717',
        contact: 'tm@gmail.com',
        result: 'Passed'
    },
    {
        name: 'Ross',
        rollNumber: '265794',
        contact: 'rs@gmail.com',
        result: 'Passed'
    }
]

function blurInp(e, checkInp) {
    var nameError = document.getElementsByClassName('name-error')[0];
    var passError = document.getElementsByClassName('pass-error')[0];
    var mailError = document.getElementsByClassName('email-error')[0];
    
    var validInput = false;

    if (checkInp === 'name') {
        if (e.target.value.length < 3) {
            nameError.innerText = 'Name should be at least 3 characters';
            nameError.style.display = 'block';
            return;
        }
        nameError.style.display = 'none';
        enteredName = e.target.value;
        validInput = true;
    }

    if (checkInp === 'RN') {
        if (e.target.value.length < 6) {
            passError.innerText = 'Roll Number should be at least 6 characters';
            passError.style.display = 'block';
            return;
        }
        passError.style.display = 'none';
        enteredRN = e.target.value;
        validInput = true;
    }

    if (checkInp === 'mail') {
        if (e.target.value.indexOf('@') === -1) {
            mailError.innerText = 'Incorrect E-mail';
            mailError.style.display = 'block';
            return;
        }
        mailError.style.display = 'none';
        enteredContact = e.target.value;
        validInput = true;
    }

    userData = validInput;
}


function showData() {
    if (!userData) return;

    // erR.style.display = 'none';
    visible.style.display = 'none';

    var resultFound = false;
    for (var i = 0; i < Data.length; i++) {
        if (enteredName === Data[i].name && enteredRN === Data[i].rollNumber && enteredContact === Data[i].contact) {
            showName.innerText = enteredName;
            showRN.innerText = enteredRN;
            showContact.innerText = enteredContact;
            showRes.innerText = Data[i].result;

            if (Data[i].result === 'Passed') {
                showRes.classList.add('passed');
                showRes.classList.remove('failed');
            }
            else if (Data[i].result === 'Failed') {
                showRes.classList.add('failed');
                showRes.classList.remove('passed');
            }

            visible.style.display = 'block';
            resultFound = true;
            break;
        }
    }

    if (!resultFound) {
        visible.style.display = 'none';
        erR.style.display = 'block';
    }
}

