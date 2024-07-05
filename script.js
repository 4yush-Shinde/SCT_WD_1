document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert('More information about this project will be available soon.');
        });
    });
});
