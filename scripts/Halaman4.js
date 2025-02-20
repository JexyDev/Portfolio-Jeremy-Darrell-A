// Fungsi untuk menampilkan detail
function showDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
  
  // Fungsi untuk scroll ke bagian tertentu
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }