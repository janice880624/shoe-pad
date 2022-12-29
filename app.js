var l1;
var l2;
var l3;
var r1;
var r2;
var r3;

var l1_value = 0;
var l2_value = 0;
var l3_value = 0;

var flag_l1;
var flag_l2;
var flag_l3;

var flag_r1;
var flag_r2;
var flag_r3;

var ans_l = '';
var ans_r = ''; 

var l1_c = document.querySelector('.l1');
var l2_c = document.querySelector('.l2');
var l3_c = document.querySelector('.l3');

var r1_c = document.querySelector('.r1');
var r2_c = document.querySelector('.r2');
var r3_c = document.querySelector('.r3');

var btn = document.getElementById('btn');

var flag_l1 = '0';
var flag_l2 = '0';
var flag_l3 = '0';

var flag_r1 = '0';
var flag_r2 = '0';
var flag_r3 = '0';


boardReady({device: 'GKxMj'}, function (board) {
    board.samplingInterval = 500;
    l1 = getPhotocell(board, 0);
    l2 = getPhotocell(board, 3);
    l3 = getPhotocell(board, 2);

    r1 = getPhotocell(board, 1);
    r2 = getPhotocell(board, 4);
    r3 = getPhotocell(board, 5);

    l1.measure(function (val1) {
        l1.detectedVal = val1;
        if (l1.detectedVal > 0.4) {
            flag_l1 = '1';  
            l1_c.style.fill = "#8CFFFF";
            r1_c.style.fill = "#8CFFFF";
        } else {
            flag_l1 = '0'; 
            l1_c.style.fill = "#FF7878";
            r1_c.style.fill = "#FF7878";
        }
        console.log("val1 =>" + val1)
    });

    l2.measure(function (val2) {
        l2.detectedVal = val2;
        l2_value = ((l2.detectedVal - (0.72)) * (1/((0.93)-(0.72)))) * ((1)-(0)) + (0);
        if (l2_value > 1.5 || l2_value == 0) { //0.92
            flag_l2 = '1';  
            l2_c.style.fill = "#8CFFFF";
            r2_c.style.fill = "#8CFFFF";
        } else {
            flag_l2 = '0'; 
            l2_c.style.fill = "#FF7878";
            r2_c.style.fill = "#FF7878";
        }
        console.log("val2 =>" + l2_value)
    });

    l3.measure(function (val3) {
        l3.detectedVal = val3;
        l3_value = ((l3.detectedVal - (0.78)) * (1/((0.97)-(0.78)))) * ((1)-(0)) + (0);
        if (l3_value > 3) { //0.9
            flag_l3 = '1';  
            l3_c.style.fill = "#8CFFFF";
            r3_c.style.fill = "#8CFFFF";
        } else {
            flag_l3 = '0'; 
            l3_c.style.fill = "#FF7878";
            r3_c.style.fill = "#FF7878";
        }
        console.log("val3 =>" + l3_value)
    });

    // r1.measure(function (val4) {
    //     r1.detectedVal = val4;
    //     if (r1.detectedVal < 0.5) {
    //         flag_r1 = '1';  
    //         r1_c.style.fill = "#8CFFFF";
    //     } else {
    //         flag_r1 = '0'; 
    //         r1_c.style.fill = "#FF7878";
    //     }
    //     // console.log("val4 =>" + val4)
    // });

    // r2.measure(function (val5) {
    //     r2.detectedVal = val5;
    //     if (r2.detectedVal < 0.5) {
    //         flag_r2 = '1';  
    //         r2_c.style.fill = "#8CFFFF";
    //     } else {
    //         flag_r2 = '0'; 
    //         r2_c.style.fill = "#FF7878";
    //     }
    //     // console.log("val5 =>" + val5)
    // });

    // r3.measure(function (val6) {
    //     r3.detectedVal = val6;
    //     if (r3.detectedVal < 0.5) {
    //         flag_r3 = '1';  
    //         r3_c.style.fill = "#8CFFFF";
    //     } else {
    //         flag_r3 = '0'; 
    //         r3_c.style.fill = "#FF7878";
    //     }
    //     // console.log("val6 =>" + val6)
    // });

});

btn.onclick = function () {
    if (flag_l1 == '0'&& flag_l2 == '1'&& flag_l3 == '1') {
        ans_l = '正常足';
    } else if (flag_l1 == '1'&& flag_l2 == '1'&& flag_l3 == '1') {
        ans_l = '扁平足';
    } else if (flag_l1 == '0'&& flag_l2 == '0'&& flag_l3 == '1') {
        ans_l = '高弓足';
    } else {
        ans_l = '測量異常';
    }

    // if (flag_r1 == '0'&& flag_r2 == '0'&& flag_r3 == '0') {
    //     ans_r = '測量不到';
    // } else if (flag_r1 == '0'&& flag_r2 == '1'&& flag_r3 == '1') {
    //     ans_r = '正常足';
    // } else if (flag_r1 == '1'&& flag_r2 == '1'&& flag_r3 == '1') {
    //     ans_r = '扁平足';
    // } else if (flag_r1 == '1'&& flag_r2 == '0'&& flag_r3 == '1') {
    //     ans_r = '高弓足';
    // }

    document.getElementById('ansl').value = ans_l;
    document.getElementById('ansr').value = ans_l;

    console.log("ans_l =>" + ans_l);
    // console.log("ans_r =>" + ans_r);
}


window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        alert('目前您的螢幕為縱向！');
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        alert('目前您的螢幕為橫向！');
    }
}, false);
