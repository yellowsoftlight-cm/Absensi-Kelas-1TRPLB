// Data Nama dan NIM Mahasiswa kelas 1 trpl b
const dataSiswa = [
    { nim: "1062531", nama: "ABIMANYU NARENDRA BERLIAN AMIRUDIN" },
    { nim: "1062532", nama: "APAN NURUL FADLI" },
    { nim: "1062533", nama: "BAREL KAMADA" },
    { nim: "1062534", nama: "BUNGA PRATISHA" },
    { nim: "1062535", nama: "DAVID GUNTORO" },
    { nim: "1062536", nama: "ERDIKA DRITUFANZA" },
    { nim: "1062537", nama: "FARIZ ALFARIZI" },
    { nim: "1062538", nama: "HAFIZ HAWARI" },
    { nim: "1062539", nama: "INTAN PRATAMA MEIDYASARI" },
    { nim: "1062540", nama: "JIHAN PUTRI RAMADHANIA" },
    { nim: "1062541", nama: "JULIANTO BAHARU TRISTAN SILABAN" },
    { nim: "1062542", nama: "KHALID RAMADHON" },
    { nim: "1062543", nama: "M. AFFAN FAIZ RAIHANDY" },
    { nim: "1062544", nama: "M. RUBEN JUL FATTAH" },
    { nim: "1062545", nama: "MITA YULIANA" },
    { nim: "1062546", nama: "M AMIRIL MUKMININ AZZAKY" },
    { nim: "1062547", nama: "MUHAMMAD FADIL" },
    { nim: "1062548", nama: "MUHAMMAD IQBAL PATIH" },
    { nim: "1062549", nama: "MUHAMMAD RIZKY ALVAREZI NASIUB" },
    { nim: "1062550", nama: "NABIL MUHADZAB" },
    { nim: "1062551", nama: "OKTORIO MAHMUD OZY SAPUTRA" },
    { nim: "1062552", nama: "RAYHAN IKRAM" },
    { nim: "1062553", nama: "REVAL" },
    { nim: "1062554", nama: "REZI" },
    { nim: "1062555", nama: "RIFKA SALSABILA" },
    { nim: "1062556", nama: "SAMUEL HANDERSON HALIM" },
    { nim: "1062557", nama: "STEVIN EVLSEN" },
    { nim: "1062558", nama: "TIARA CITRA LESTARI" },
    { nim: "1062559", nama: "VALENCIA PUTRI NOPLITA" },
    { nim: "1062560", nama: "YOPA PITRA RAMADHANI" }
];

// Data khusus Admin/Dosen yang boleh masuk ke sistem
const dataAdmin = {
    username: "ADMIN TRPL B",
    password: "22222"
};

// List Matakuliah
const listMatkul = [
    { id: "PWD", nama: "Pemrograman Web Dasar", dosen: "Ibu Yang Agita Rindri, M.Eng" },
    { id: "PAI", nama: "Pendidikan Agama Islam", dosen: "Bapak Dr. Lukman Sumarna, Lc, M .A .Pd" },
    { id: "ALIN", nama: "Aljabar Linear", dosen: "Ibu Linda Fujiyanti, M. T.I" },
    { id: "APD", nama: "Algoritma Pemrograman Dasar", dosen: "Ibu Linda Fujiyanti, M. T.I" },
    { id: "MTD", nama: "Matematika Diskrit", dosen: "Ibu Indah Riezky Pratiwi, M .Pd" },
    { id: "PDE", nama: "Pengolahan Data Elektronik", dosen: "Bapak M. Syafrizal Zain, M .Kom." }
];

// Data Matkul & Dosen per hari (Sesuai jadwal kelas)
const jadwalHarian = {
    "Senin": ["PWD", "PAI", "ALIN"],
    "Selasa": ["APD"],
    "Rabu": ["MTD", "PWD"],
    "Kamis": [], // Kosong
    "Jumat": ["PDE"]
};

// Fungsi untuk dapet nama hari
function getHariIni() {
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    return hari[new Date().getDay()];
}

// Fungsi untuk simpan absen ke LocalStorage
function simpanKehadiran(nim, matkulId, status) {
    let db = JSON.parse(localStorage.getItem("db_absen_trpl")) || {};
    if (!db[nim]) db[nim] = {};
    db[nim][matkulId] = status;
    localStorage.setItem("db_absen_trpl", JSON.stringify(db));
}

// Logika Modal Keluar (Biar dak bolak balik nulis di tiap HTML)
function tampilModalKeluar() {
    document.getElementById('modalKeluar').style.display = 'flex';
}

function tutupModal() {
    document.getElementById('modalKeluar').style.display = 'none';
}

function logoutSekarang() {
    localStorage.removeItem("userAktif");
    window.location.href = "index.html";
}