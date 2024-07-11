var mangMacDinh = [];
document.querySelector("#btn").onclick = function themSo() {
    var input = document.querySelector("#input").value*1;
    mangMacDinh.push(input);
    document.querySelector("#mang").innerHTML = `Mảng hiện tại: ${mangMacDinh}`;
    console.log("mangMacDinh:",mangMacDinh);
    return mangMacDinh;
}

// BT1:
document.querySelector("#tinhTong").onclick = function tinhTong() {
    var Tong = 0;
    for (var index=0; index < mangMacDinh.length; index++) {
        Tong += mangMacDinh[index];
    }
    console.log("Tong:",Tong);
    document.querySelector("#tongCacSoDuong").innerHTML = Tong;
}

// BT2:
document.querySelector("#demSoDuong").onclick = function demSoDuong() {
    var soDuong = 0;
    for (var index=0; index < mangMacDinh.length; index++) {
        if (mangMacDinh[index] > 0) {
            soDuong++
        }
    }
    console.log("soDuong:",soDuong);
    document.querySelector("#soDuong").innerHTML = soDuong;
}

// BT3:
document.querySelector("#timSoNhoNhat").onclick = function timSoNhoNhat() {
    var soMin = mangMacDinh[0];
    for (var index=0; index < mangMacDinh.length; index++) {
        if (soMin > mangMacDinh[index]) {
            soMin = mangMacDinh[index]
        }
    }
    console.log("soMin:",soMin);
    document.querySelector("#soMin").innerHTML = soMin;
}

// BT4:
document.querySelector("#timSoDuongNhoNhat").onclick = function timSoDuongNhoNhat() {
    for (var mangDuong=[] , index=0; index < mangMacDinh.length; index++) {
        if (mangMacDinh[index] > 0) {
            mangDuong.push(mangMacDinh[index]); 
            }
        }
    console.log("mangDuong:",mangDuong);

    if (mangDuong.length > 0) {
        var soDuongMin = mangDuong[0];
        for (var index1 = 0; index1 < mangDuong.length; index1++) {
            if (soDuongMin > mangDuong[index1]) {
                soDuongMin = mangDuong[index1]
            }
        }
        console.log("soDuongMin:",soDuongMin);
        document.querySelector("#soDuongMin").innerHTML = soDuongMin; 
    } else {
        document.querySelector("#soDuongMin").innerHTML = "Không có số dương";
    }
}

// BT5:
document.querySelector("#timSoChanCuoi").onclick = function timSoChanCuoi() {
    var soChanCuoi = -1;
    for (var index=0; index < mangMacDinh.length; index++) {
        if (mangMacDinh[index]%2 == 0) {
            soChanCuoi = mangMacDinh[index]
        }
    }
    console.log("soChanCuoi:", soChanCuoi);
    document.querySelector("#soChanCuoi").innerHTML = soChanCuoi;
}


// BT6:
document.querySelector("#doiCho").onclick = function doiCho() {
    var viTri1 = document.querySelector("#viTri1").value*1;
    var viTri2 = document.querySelector("#viTri2").value*1;
    var giaTri1 = mangMacDinh[viTri1];
    var giaTri2 = mangMacDinh[viTri2];
    mangMacDinh[viTri2] = giaTri1;
    mangMacDinh[viTri1] = giaTri2;
    document.querySelector("#mangDoi").innerHTML = mangMacDinh;
}

// BT7:
document.querySelector("#sapTangDan").onclick = function sapTangDan(){
    // mangMacDinh.sort((a,b) => a-b);
    mangMacDinh.sort(function(a,b) {
        return a-b;
    })
    console.log("mangMacDinhsorted:",mangMacDinh);
    document.querySelector("#mangTangDan").innerHTML = mangMacDinh;
}

// BT8:
function ktSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (var index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false 
        }          
    }
    return true;
}

document.querySelector("#timSoNguyenToDauTien").onclick = function timSoNguyenToDauTien() {
    var soNguyenToDauTien = -1;
    for (var index = 0; index < mangMacDinh.length; index++) {
        if ( ktSoNguyenTo(mangMacDinh[index])) {
            soNguyenToDauTien = mangMacDinh[index];
            break
        }
    }
    document.querySelector("#soNguyenToDauTien").innerHTML = soNguyenToDauTien;
}

// BT9:
var mangSoThuc = [];
document.querySelector("#themSoThuc").onclick = function themSoThuc() {
    var input2 = document.querySelector("#input2").value*1;
    mangSoThuc.push(input2);
    document.querySelector("#mangSoThuc").innerHTML = `Mảng số thực hiện tại: ${mangSoThuc}`;
    console.log("mangSoThuc:",mangSoThuc);
    return mangSoThuc;
}

document.querySelector("#timSoNguyen").onclick = function timSoNguyen() {
    var soNguyen = 0
    for (var index=0; index < mangSoThuc.length; index++) {
        if (Number.isInteger(mangSoThuc[index])) {
            soNguyen++;
        }
    }
    console.log("soNguyen:", soNguyen);
    document.querySelector("#soNguyen").innerHTML = soNguyen;
}

// BT10: 
document.querySelector("#soSanh").onclick = function soSanh() {
    var numDuong = 0;
    var numAm = 0;
    for (var index = 0; index < mangMacDinh.length; index++) {
        if (mangMacDinh[index] > 0) {
            numDuong++
        } else {
            numAm++
        }
    } 
    console.log("🚀 ~ soSanh ~ numDuong:", numDuong)
    console.log("🚀 ~ soSanh ~ numAm:", numAm)
    document.querySelector("#numDuong").innerHTML = numDuong;
    document.querySelector("#numAm").innerHTML = numAm;
    if (numDuong > numAm) {
        document.querySelector("#ketQuaSs").innerHTML = "Số dương nhiều hơn số âm";
    } else {
        document.querySelector("#ketQuaSs").innerHTML = "Số âm nhiều hơn số dương";
    }
}