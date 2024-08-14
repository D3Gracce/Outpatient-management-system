// JavaScript to open the section and close others
/*function openSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Display the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}
*/

// log in script
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Redirect to the homepage
    window.location.href = 'homepage.html'; // Replace with the actual homepage path
});