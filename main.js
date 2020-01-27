const g = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0]
];

// const g = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];



function scanOffice(g) {
    let up = false;
    let left = false;
    let count = 0;
    console.log(up, left);
    for (var i = 0; i < g.length; i++) {
        for (var j = 0; j < g[i].length; j++) {
            if (g[i][j] = 1) {
                if ((i > 0) && g[i - 1][j] == 1) {
                    up = true;
                    console.log(g[-i][j]);
                }
                else if ((j > 0) && g[i][j - 1] == 1) {
                    left = true;
                    console.log(g[i][-j]);
                }
                if (up == false && left == false) {
                    console.log(g[i][j]);
                    count++;
                    console.log('count', count);
                }
            }
        }
    }
    return count;
}

console.log(scanOffice(g));