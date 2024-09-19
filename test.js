var strs = [];
var numb = [];
var splchar = [];

function samp() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]*$/.test(arguments[i])) {
                splchar.push(arguments[i]);
            } else {
                strs.push(arguments[i]);
            }
        } else if (typeof arguments[i] === 'number') {
            numb.push(arguments[i]);
        } else {
            splchar.push(arguments[i]);
        }
    }
}

samp(1, 2, 3, 4, 5, 6, 7, 'a', 'b', 'c', 'd', '@', '<', '#', '^', 78);
console.log('Strings:', strs);
console.log('Numbers:', numb);
console.log('Special Characters:', splchar);


