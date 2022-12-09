var l1;
var l2;
var l3;
var r1;
var r2;
var r3;

var flag_l1;
var flag_l2;
var flag_l3;
var flag_r1;
var flag_r2;
var flag_r3;

var l1_c = document.querySelector('.l1');
var l2_c = document.querySelector('.l2');
var l3_c = document.querySelector('.l3');

var r1_c = document.querySelector('.r1');
var r2_c = document.querySelector('.r2');
var r3_c = document.querySelector('.r3');

boardReady({device: 'GKxMj'}, function (board) {
    board.samplingInterval = 500;
    l1 = getPhotocell(board, 0);
    l2 = getPhotocell(board, 1);
    l3 = getPhotocell(board, 2);

    r1 = getPhotocell(board, 3);
    r2 = getPhotocell(board, 4);
    r3 = getPhotocell(board, 5);

    flag_l1 = '0';
    flag_l2 = '0';
    flag_l3 = '0';

    flag_r1 = '0';
    flag_r2 = '0';
    flag_r3 = '0';


    l1.measure(function (val1) {
        l1.detectedVal = val1;
        if (l1.detectedVal > 0.4) {
            flag_l1 = '1';  
            l1_c.style.fill = "#8CFFFF";
        } else {
            flag_l1 = '0'; 
            l1_c.style.fill = "#FF7878";
        }
        console.log("val1 =>" + val1)
    });

    l2.measure(function (val2) {
        l2.detectedVal = val2;
        if (l2.detectedVal > 0.4) {
            flag_l2 = '1';  
            l2_c.style.fill = "#8CFFFF";
        } else {
            flag_l2 = '0'; 
            l2_c.style.fill = "#FF7878";
        }
        console.log("val2 =>" + val2)
    });

    l3.measure(function (val3) {
        l3.detectedVal = val3;
        if (l3.detectedVal > 0.4) {
            flag_l3 = '1';  
            l3_c.style.fill = "#8CFFFF";
        } else {
            flag_l3 = '0'; 
            l3_c.style.fill = "#FF7878";
        }
        console.log("val3 =>" + val3)
    });

    // r1.measure(function (val4) {
    //     r1.detectedVal = val4;
    //     if (r1.detectedVal < 0.5) {
    //         flag_r1 = '1';  
    //         r1_c.style.fill = "#FF7878";
    //     } else {
    //         r1_c.style.fill = "#8CFFFF";
    //     }
    // });

    // r2.measure(function (val5) {
    //     r2.detectedVal = val5;
    //     if (r2.detectedVal < 0.5) {
    //         flag_r2 = '1';  
    //         r2_c.style.fill = "#FF7878";
    //     } else {
    //         r2_c.style.fill = "#8CFFFF";
    //     }
    // });

    // r3.measure(function (val6) {
    //     r3.detectedVal = val6;
    //     if (r3.detectedVal < 0.5) {
    //         flag_r3 = '1';  
    //         r3_c.style.fill = "#FF7878";
    //     } else {
    //         r3_c.style.fill = "#8CFFFF";
    //     }
    // });

});


window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        alert('目前您的螢幕為縱向！');
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        alert('目前您的螢幕為橫向！');
    }
}, false);