import './style.css';

import {OpenDialog} from '../wailsjs/go/main/App';

document.querySelector('#app').innerHTML = `
    <button class="btn" onclick="opendialog()">Press to open a dialog with a default "No" option</button>
    <div id="result"></div>
`;

window.opendialog = function () {
    try {
        OpenDialog().then((result) => {
            document.querySelector('#result').innerHTML = "You selected: " + result;
        });
    } catch (err) {
        console.error(err);
    }
};
