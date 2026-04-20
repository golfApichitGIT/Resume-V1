// CV Generation functionality - Opens printable CV page and triggers print dialog
export function generateCV() {
  // Open CV page in new window
  const cvWindow = window.open('cv-print.html', '_blank');
  
  // Wait for the page to load, then trigger print dialog
  cvWindow.onload = function() {
    // Small delay to ensure page is fully rendered
    setTimeout(() => {
      cvWindow.print();
    }, 500);
  };
}

// Make function globally accessible for onclick handler in HTML
// This is intentional - the function needs to be called from HTML onclick attributes
window.generateCV = generateCV;
