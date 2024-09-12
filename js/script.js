document.getElementById('triangleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai dari input
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);

    // Validasi input
    if (isNaN(base) || isNaN(height) || isNaN(side1) || isNaN(side2)) {
        alert("Semua nilai harus diisi dan berupa angka yang valid.");
        return;
    }

    // Hitung luas
    const area = (base * height) / 2;

    // Hitung keliling
    const perimeter = base + side1 + side2;

    // Tampilkan hasil
    document.getElementById('areaResult').textContent = `Luas: ${area}`;
    document.getElementById('perimeterResult').textContent = `Keliling: ${perimeter}`;
});

// Tambahkan logika untuk tombol reset
document.getElementById('resetButton').addEventListener('click', function() {
    // Reset semua input
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('side1').value = '';
    document.getElementById('side2').value = '';

    // Hapus hasil perhitungan
    document.getElementById('areaResult').textContent = 'Luas:';
    document.getElementById('perimeterResult').textContent = 'Keliling:';
});
