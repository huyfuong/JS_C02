console.log('Bài-1: User');
function xuat(user) {
    console.log('Tên đăng nhập:', user.name);
    console.log('Mật khẩu :', user.password);
    console.log('Email:', user.email);
    console.log('Số điện thoại:',user.phone);
    console.log('SỐ nút dt: ',sonutdt);
}


function capnhat(user) {
    user.name = String(prompt('Tên đăng nhập: '));
    user.password = Number(prompt("Nhập password: "));
    user.email = String(prompt('Nhập email:'));
}

let userA = {
    name: 'Huy',
    password: 123456,
    email: 'huy123@gmail.com',
    phone: 032157,
};

let sonutdt = userA.phone % 10;

capnhat(userA);
xuat(userA);



console.log("Bài-2: Player");
function xuat(player) {
    console.log("Tên cầu thủ:", cauthu.ten);
    console.log("Số áo:", cauthu.ao);
    console.log("Kỹ năng: ", cauthu.kynang);
    console.log("Chỉ số trung bình", chisotrungbinh(cauthu));
    console.log("Sô áo nhập: ",checksoao(cauthu));
}

function capnhat(player) {
    cauthu.ten = String(prompt("Tên cầu thủ: "));
    cauthu.ao = Number(prompt("Số áo: "));
    cauthu.kynang.sut = Number(prompt("Kỹ năng sút: "));
    cauthu.kynang.chuyen = Number(prompt("Kỹ năng chuyển: "));
    cauthu.kynang.danhdau = Number(prompt("Kỹ năng đánh đầu: "));
}

function chisotrungbinh (cauthu) {
    let chisotrungbinh = (cauthu.kynang.sut + cauthu.kynang.chuyen + cauthu.kynang.danhdau) / 3;
    return chisotrungbinh;
}

function checksoao(cauthu) {
    let checksoao = (cauthu.ao  > 9 && cauthu.ao < 100) ? true : false;
    return checksoao;
} 

let cauthu = {
    ten: 'Fernando Torres',
    ao: 9,
    kynang: {
        sut: 85,
        chuyen: 83,
        danhdau: 82,
    },
}

capnhat(cauthu);
xuat(cauthu);

console.log("Bài-3: Laptop");
function xuat(lap) {
    console.log("Tên máy: ",laptop.tenmay);
    console.log("Năm sản xuất: ",laptop.namsanxuat);
    console.log("Cấu hình máy:" , "Ram:",laptop.cauhinh.RAM , "HDD:",laptop.cauhinh.HDD);
    console.log("Kích thước máy: ", "Chiều ngang:",laptop.cauhinh.kichthuoc.W, "Chiều cao:",laptop.cauhinh.kichthuoc.H);
    console.log("Máy tính đã sản xuât: " + tinhnam(laptop) + " năm");
    console.log("Điểm của máy tính = ", diemcuamaytinh(laptop));
}

function capnhat(lap) {
    laptop.tenmay = String(prompt("Nhập tên máy: "));
    laptop.namsanxuat = Number(prompt("Nhập năm sản xuất máy: "));
    laptop.cauhinh.RAM = Number(prompt("Nhập RAM máy : "));
    laptop.cauhinh.HDD = Number(prompt("Nhập HDD máy: "));
    laptop.cauhinh.kichthuoc.W = Number(prompt("Nhập chiều ngang máy: "));
    laptop.cauhinh.kichthuoc.H = Number(prompt("Nhập cao máy: "));
}

function tinhnam (laptop) {
    let x = new Date();
    let namhientai = x.getFullYear();
    let d = namhientai - laptop.namsanxuat;
    return d
};

function diemcuamaytinh (laptop) {
    let diem = (3 * laptop.cauhinh.RAM + 2 * laptop.cauhinh.HDD) / 5;
    return diem 
};

let laptop = {
    tenmay: "Legion",
    namsanxuat: 2018,
    cauhinh: {
        RAM: 21,
        HDD: 500,
        kichthuoc: {
            W: 323,
            H: 23,
        }
    }
};

capnhat(laptop);
xuat(laptop);



