//window properties related to size
console.log(innerHeight, innerWidth, outerHeight, outerWidth);


//alert
function samp1() {
    var a = 1;
    // alert("hello" + a);
    alert(`Hello ${a}`)
}

//confirm
function samp2() {
    var res = confirm("Do you want to delete a file?");
    var msg = res ? 'File Deleted' : 'File Not Deleted';
    alert(msg);
}

//prompt
function samp3() {
    var agestr = prompt("Enter your Age");
    var age = Number(agestr);
    var res = age >= 18 ? 'Eligible for vote' : 'Not Eligible for vote';
    alert(res);
}

//open()
function samp4() {
    window.open("https://www.youtube.com/", "YouTube", "height=500,width=500");
}


//resizeTo()
function samp5() {
    //mtd 1
    // window.resizeTo(700, 800);
    // console.log("resize is clicked");
    // window.open('', '', 'width=700,height=800,resizable=yes')

    //mtd 2
    window.open('', '', 'width=700,height=800').resizeTo(300, 300);
}

//moveTo()

var kin;
function samp6() {
    // var width = outerWidth;
    // var height = outerHeight;

    //mtd 1

    // var width = 500;
    // var height = 500;

    // var cX = (screen.width - width) / 2; //390
    // var cY = (screen.height - height) / 2; //110
    // var newWin = window.open('', '', `width=${width},height=${height},resizable=yes`);
    // newWin.moveTo(cX, cY);


    //mtd 2
    // window.open('', '',`'width=${width},height=${height}'`).moveTo(((screen.width-`${width}`)/2),((screen.height-`${height}`))/2);


    //mtd 3
    //window.open('', '', 'width=500,height=500').moveTo(390,110);

    // var myWindow = window.open("", "", "width=500,height=500");
    // myWindow.moveTo(390,110);
    // setTimeout(function() {
    //     myWindow.close();
    // }, 3000); 


    kin = window.open('dom13.html', "Bom example", "width=500,height=500");
    kin.moveTo(390,110);

}
function samp8() {
    kin.close();
}


//close
function samp7() {
    var res = confirm("Do you want to close the Browser?");
    if (res) {
        window.close();
    } else {
        alert('Not Closed');
    }

}




// screen.width gives you the width of the entire display screen.

// window.outerWidth gives you the width of the browser window,
// including the parts of the window that are not used for displaying web content.

// Chaining Methods:
// JavaScript doesn’t allow chaining of window methods like moveTo directly after
// window.open() because moveTo doesn’t return the window object but rather undefined.