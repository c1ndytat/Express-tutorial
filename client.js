import fetch from 'node-fetch';

fetch('http://localhost:5010/flip-coins?times=400')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })