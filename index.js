// Bài 1 : 
//B1: input gọi giá trị và DOM
let butTon = document.getElementById("button1").onclick = function () {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("num3").value;

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    let showNu = document.getElementById("show1");
    showNu.style.display = "block";

    // B2: thuật toán + xuất KQ
if (a > b && a > c) {
    if (b > c){
        showNu.innerHTML =  a + " , " + b + " , " + c;
    }
    else {
        showNu.innerHTML = a + " , " + c + " , " + b;
    }
} else if (b > a && b > c) {
    if (a > c) {
        showNu.innerHTML = b + " , " + a + " , " + c;
        
    } else {
        showNu.innerHTML = b + " , " + c + " , " + a;
    }
} else if (c > a && c > b) {
    if ( b > a) {
        showNu.innerHTML = c + " , " + b + " , " + a;
    } else {
        showNu.innerHTML = c + " , " + a + " , " + b;
    }
} else {
    alert("Dữ liệu không hợp lệ");
}  
    
}

// Bài 2: 
// B1: DOM button gọi ra để thực hiện sự kiện của ng dùng   
let clickText = document.getElementById("button").onclick = function () {
    let option = document.getElementById("list").value;
    let showEL = document.getElementById("show");
    showEL.style.display = "block";

    // B2: tạo 4 biến lưu giá trị chuỗi 
    let textB = "B" ;
    let textM = "M" ;
    let textA = "A" ;
    let textE = "E" ;
    // B3: thuạt toán + KQ 
    if ( option === textB) {
        showEL.innerHTML = "Xin chào Bố!";
    } else if ( option === textM) {
        showEL.innerHTML = "Xin chào Mẹ!";
    } else if ( option === textA) {
        showEL.innerHTML = "Xin chào Anh trai!";
    } else if ( option === textE) {
        showEL.innerHTML = "Xin chào Em Gái!";
    } else {
        showEL.innerHTML = "Vui Lòng Chọn Thành Viên!";
    }

    
};

// bài 3:
// B1: DOM button gọi ra để thực hiện sự kiện của ng dùng  
let clickNum = document.getElementById("button2").onclick = function () {
    // B2: tạo 3 biến lưu giá trị và tạo biến để hiển thị mục kết quả
    let numOne = document.getElementById("s1").value;
    let numTwo = document.getElementById("s2").value; 
    let numThree = document.getElementById("s3").value;

    let showL = document.getElementById("show2");
    showL.style.display = "block";

    // B3: giải thuât toán và xuất kết quả 

    numOne = parseInt(Math.round(numOne));
    numTwo = parseInt(Math.round(numTwo));
    numThree = parseInt(Math.round(numThree));



    let numC = 0; // biến lưu số chẵn
    let numL = 0; // biến lưu số lẻ 

        if ( numOne % 2 == 0 ) {
            numC++;    
        } else {
            numL++;   
        } 
        if ( numTwo % 2 == 0 ) {
            numC++;
        } else {
            numL++;
        } 
        if ( numThree % 2 == 0 ) {
            numC++; 
        } else {
            numL++;
        }
        showL.innerHTML = " Có " + numC + " số chẵn " + "," + " Có " + numL + " số lẻ ";

    }

// Bài 4:
// B1: DOM button gọi ra để thực hiện sự kiện của ng dùng 
let clickDd = document.getElementById("button3").onclick = function () {

     // B2: tạo 3 biến lưu giá trị và tạo biến để hiển thị mục kết quả và ép kiểu từ chuỗi sang number

    let ddOne = document.getElementById("ddc1").value;
    let ddTwo = document.getElementById("ddc2").value; 
    let ddThree = document.getElementById("ddc3").value;

    ddOne = parseInt(ddOne);
    ddTwo = parseInt(ddTwo);
    ddThree = parseInt(ddThree);

    let showDd = document.getElementById("show3");
    showDd.style.display = "block";

    // B3: thuật toán và xuất kq 

    if (ddOne + ddTwo > ddThree && ddTwo + ddThree > ddOne && ddOne + ddThree > ddTwo) {
        if (ddOne === ddTwo && ddTwo === ddThree) {
            showDd.innerHTML = "Hình Tam Giác Đều";
        } else if ( ddOne === ddTwo || ddOne === ddThree || ddTwo === ddThree ) {
            showDd.innerHTML = "Hình Tam Giác Cân";
        } else if ( ddThree**2 === ddOne**2 + ddTwo**2 ) {
            showDd.innerHTML = "Hình Tam Giác Vuông";
        } else {
            showDd.innerHTML = "Hình Tam Giác khác";
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}

