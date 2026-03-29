window.onload = function() {

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let iWho = Math.floor(Math.random() * who.length);
    let iAction = Math.floor(Math.random() * action.length);
    let iWhat = Math.floor(Math.random() * what.length);
    let iWhen = Math.floor(Math.random() * when.length);

    let fullExcuse = who[iWho] + ' ' + action[iAction] + ' ' + what[iWhat] + ' ' + when[iWhen];

    document.getElementById('excuse').innerHTML = fullExcuse;
};