function compare(a, b) {
    var x = document.getElementById(a).value;
    var y = document.getElementById(b).value;

    alert("x == y : " + (x == y) + "\n" +
        "x != y : " + (x != y) + "\n" +
        "x >= y : " + (x >= y) + "\n" +
        "x > y : " + (x > y) + "\n" +
        "x <= y : " + (x <= y) + "\n" +
        "x < y : " + (x < y)
    );
}
