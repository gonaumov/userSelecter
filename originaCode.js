(function() {
    const inputNumber = prompt('Please select a number of the user which you want to select:');
    if ((new RegExp('^[1-9][0-9]*$')).test(inputNumber) === false) {
        alert('Please enter only decimal numbers!');
        return;
    }
    const winnerNumber = parseInt(inputNumber, 10);
    const wantedNumber = winnerNumber - 1;
    const winners = Array.from(document.querySelectorAll('._54_6._4-ss._4-sv a[data-hovercard]')).reverse();
    if (typeof winners[wantedNumber] === 'undefined') {
        alert('There are not enough likes. You have only ' + winners.length);
        return;
    }
    alert('Selected number ' + winnerNumber + ' from ' + winners.length + ' users.')
    const winner = winners[wantedNumber];
    winner.style.backgroundColor = 'coral';
    winner.scrollIntoView();
})()
