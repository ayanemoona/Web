function digit8(a, b) {
    var v = parseInt(document.getElementById(a).value, 10);
    let str = "";

    for (let i = 0; i < 8; i++, v <<= 1) {
        if ((v & 0x80)) {
            str += "1";
        } else {
            str += "0";
        }
    }

    document.getElementById(b).value = str;
}


function bit(cha) {
    var num1 = parseInt(document.getElementById('num').value, 2);
    var num2 = parseInt(document.getElementById('num2').value, 2);
    var sum;
  
    if (cha === '&') {
      sum = num1 & num2; // 비트 AND 연산
    } else if (cha === '|') {
      sum = num1 | num2; // 비트 OR 연산
    } else if (cha === '^') {
      sum = num1 ^ num2; // 비트 XOR 연산
    } else if (cha === '<<') {
      sum = num1 << num2; // 비트 좌측 시프트 연산
    } else if (cha === '>>') {
      sum = num1 >> num2; // 비트 우측 시프트 연산
    } else {
      sum = 'Invalid Operator';
    }
  
    document.getElementById('res3').value = sum.toString(2).padStart(8, '0'); // 2진수로 변환하여 출력
  }
  
