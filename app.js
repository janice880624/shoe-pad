async function myAsyncFunction(){
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

    boardReady({device: 'aaaaa'}, function (board) {
        board.samplingInterval = 250;
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

        l1.measure(function (val) {
            l1.detectedVal = val;
            if (l1.detectedVal < 0.5) {
                flag_l1 = '1';  
                l1_c.style.backgroundColor = "#FF7878";
            } else {
                l1_c.style.backgroundColor = "#8CFFFF";
            }
        });

        l2.measure(function (val) {
            l2.detectedVal = val;
            if (l2.detectedVal < 0.5) {
                flag_l2 = '1';  
                l2_c.style.backgroundColor = "#FF7878";
            } else {
                l2_c.style.backgroundColor = "#8CFFFF";
            }
        });

        l3.measure(function (val) {
            l3.detectedVal = val;
            if (l3.detectedVal < 0.5) {
                flag_l3 = '1';  
                l3_c.style.backgroundColor = "#FF7878";
            } else {
                l3_c.style.backgroundColor = "#8CFFFF";
            }
        });

        r1.measure(function (val) {
            r1.detectedVal = val;
            if (r1.detectedVal < 0.5) {
                flag_r1 = '1';  
                r1_c.style.backgroundColor = "#FF7878";
            } else {
                r1_c.style.backgroundColor = "#8CFFFF";
            }
        });

        r2.measure(function (val) {
            r2.detectedVal = val;
            if (r2.detectedVal < 0.5) {
                flag_r2 = '1';  
                r2_c.style.backgroundColor = "#FF7878";
            } else {
                r2_c.style.backgroundColor = "#8CFFFF";
            }
        });

        r3.measure(function (val) {
            r3.detectedVal = val;
            if (r3.detectedVal < 0.5) {
                flag_r3 = '1';  
                r3_c.style.backgroundColor = "#FF7878";
            } else {
                r3_c.style.backgroundColor = "#8CFFFF";
            }
        });

    });

    await delay(5);
}


window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        alert('目前您的螢幕為縱向！');
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        alert('目前您的螢幕為橫向！');
    }
}, false);