function setActiveButton(selected) {
    let buttons = document.querySelectorAll(".nav-fitur button");
    buttons.forEach(btn => {
        btn.classList.remove("nav-fitur-active");
        btn.classList.add("nav-fitur-non-active");
    });

    selected.classList.remove("nav-fitur-non-active");
    selected.classList.add("nav-fitur-active");
}

// Fungsi untuk menampilkan hanya bagian persegi
function tampilkanPersegi() {
    document.getElementById("containerPersegi").style.display = "block";
    document.getElementById("containerPersegiPanjang").style.display = "none";
    setActiveButton(document.querySelector(".nav-fitur button:nth-child(1)"));
}

// Fungsi untuk menampilkan hanya bagian persegi panjang
function tampilkanPersegiPanjang() {
    document.getElementById("containerPersegi").style.display = "none";
    document.getElementById("containerPersegiPanjang").style.display = "block";
    setActiveButton(document.querySelector(".nav-fitur button:nth-child(2)"));
}

// Fungsi untuk validasi input angka
function validasiInput(nilai, tipe) {
    if (nilai === "") {
        alert(`${tipe} tidak boleh kosong!`);
        return false;
    }
    if (isNaN(nilai)) {
        alert(`${tipe} hanya boleh berisi angka!`);
        return false;
    }
    if (parseFloat(nilai) <= 0) {
        alert(`${tipe} harus lebih dari 0!`);
        return false;
    }
    return true;
}

// Fungsi menghitung luas persegi
function hitungLuasPersegi() {
    let sisi = document.getElementById("sisiLuas").value;
    if (!validasiInput(sisi, "Sisi")) return;
    let luas = parseFloat(sisi) * parseFloat(sisi);
    let proses = `L = S × S <br> L = ${sisi} × ${sisi} <br> L = ${luas}`;
    tampilkanHasil("resultLuasPersegi", proses);
}

// Fungsi menghitung keliling persegi
function hitungKelilingPersegi() {
    let sisi = document.getElementById("sisiKeliling").value;
    if (!validasiInput(sisi, "Sisi")) return;
    let keliling = 4 * parseFloat(sisi);
    let proses = `K = 4 × S <br> K = 4 × ${sisi} <br> K = ${keliling}`;
    tampilkanHasil("resultKelilingPersegi", proses);
}

// Fungsi menghitung luas persegi panjang
function hitungLuasPersegiPanjang() {
    let panjang = document.getElementById("panjangLuas").value;
    let lebar = document.getElementById("lebarLuas").value;
    if (!validasiInput(panjang, "Panjang") || !validasiInput(lebar, "Lebar")) return;
    let luas = parseFloat(panjang) * parseFloat(lebar);
    let proses = `L = P × L <br> L = ${panjang} × ${lebar} <br> L = ${luas}`;
    tampilkanHasil("resultLuasPersegiPanjang", proses);
}

// Fungsi menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang() {
    let panjang = document.getElementById("panjangKeliling").value;
    let lebar = document.getElementById("lebarKeliling").value;
    if (!validasiInput(panjang, "Panjang") || !validasiInput(lebar, "Lebar")) return;
    let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
    let proses = `K = 2 × (P + L) <br> K = 2 × (${panjang} + ${lebar}) <br> K = ${keliling}`;
    tampilkanHasil("resultKelilingPersegiPanjang", proses);
}


// Fungsi untuk menampilkan hasil dengan proses perhitungan
function tampilkanHasil(id, proses) {
    let resultContainer = document.getElementById(id);
    resultContainer.innerHTML = `<div class="result-container">${proses}</div>`;
    resultContainer.style.display = "block";
}
// Fungsi reset semua input dan hasil
function resetForm() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.querySelectorAll(".result-container").forEach(result => {
        result.innerHTML = "";
        result.style.display = "none";
    });
}

window.onload = function() {
    tampilkanPersegi();
    document.getElementById("radioLuasPersegi").checked = true;
};


// Fungsi untuk menampilkan luas/keliling persegi dengan memastikan hanya satu checkbox aktif
function tampilkanLuasPersegi() {
    document.getElementById("luasPersegi").style.display = "block";
    document.getElementById("kelilingPersegi").style.display = "none";
    document.getElementById("radioLuasPersegi").checked = true;
    document.getElementById("radioKelilingPersegi").checked = false;
}

function tampilkanKelilingPersegi() {
    document.getElementById("luasPersegi").style.display = "none";
    document.getElementById("kelilingPersegi").style.display = "block";
    document.getElementById("radioLuasPersegi").checked = false;
    document.getElementById("radioKelilingPersegi").checked = true;
}

// Fungsi untuk menampilkan luas/keliling persegi panjang dengan memastikan hanya satu checkbox aktif
function tampilkanLuasPersegiPanjang() {
    document.getElementById("luasPersegiPanjang").style.display = "block";
    document.getElementById("kelilingPersegiPanjang").style.display = "none";
    document.getElementById("radioLuasPersegiPanjang").checked = true;
    document.getElementById("radioKelilingPersegiPanjang").checked = false;
}

function tampilkanKelilingPersegiPanjang() {
    document.getElementById("luasPersegiPanjang").style.display = "none";
    document.getElementById("kelilingPersegiPanjang").style.display = "block";
    document.getElementById("radioLuasPersegiPanjang").checked = false;
    document.getElementById("radioKelilingPersegiPanjang").checked = true;
}

// Tambahkan event listener untuk memastikan hanya satu checkbox yang bisa aktif
document.getElementById("radioLuasPersegi").addEventListener("change", function() {
    if (this.checked) {
        tampilkanLuasPersegi();
    }
});
document.getElementById("radioKelilingPersegi").addEventListener("change", function() {
    if (this.checked) {
        tampilkanKelilingPersegi();
    }
});
document.getElementById("radioLuasPersegiPanjang").addEventListener("change", function() {
    if (this.checked) {
        tampilkanLuasPersegiPanjang();
    }
});
document.getElementById("radioKelilingPersegiPanjang").addEventListener("change", function() {
    if (this.checked) {
        tampilkanKelilingPersegiPanjang();
    }
});
