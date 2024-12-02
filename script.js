// Tambahkan data ke tabel absensi
const attendanceForm = document.getElementById("attendance-form");
const attendanceTableBody = document.querySelector("#attendance-table tbody");
let attendanceCount = 0;

attendanceForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form refresh halaman

    // Ambil data dari input
    const studentName = document.getElementById("student-name").value;
    const attendanceDate = document.getElementById("attendance-date").value;
    const subject = document.getElementById("subject").value;

    if (studentName && attendanceDate && subject) {
        // Tambahkan data ke tabel
        attendanceCount++;
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${attendanceCount}</td>
            <td>${studentName}</td>
            <td>${attendanceDate}</td>
            <td>${subject}</td>
        `;
        attendanceTableBody.appendChild(newRow);

        // Tampilkan pesan sukses
        const successMessage = document.getElementById("success-message");
        successMessage.textContent = "Attendance marked successfully!";
        successMessage.style.color = "green";

        // Reset form setelah submit
        attendanceForm.reset();
    } else {
        alert("Please fill all the fields!");
    }
});