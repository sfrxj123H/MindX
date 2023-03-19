function getRandomInt(num) {
    a = Math.ceil(Math.random() * num) - 1;
    if (a < 0) {
        return 0;
    }
    else { return a; }
}
function check_game(a, b) {
    if (a > b) {
        return 'người chơi thứ 1 thắng.'
    }
    else {
        if (a < b) {
            return 'người chơi thứ 2 thắng.'
        }
        else {
            return '2 người chơi hòa.'
        }
    }
}
function check_zero(a) {
    if (a == 0) {
        return (10);
    }
    else {
        return (a);
    }
}