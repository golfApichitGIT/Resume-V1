// CV Generation functionality with Thai font support
export function generateCV() {
  window.open('cv-print.html', '_blank')
  
  // Create new PDF document (A4 size, 20mm margins)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  // Set margins (20mm all sides)
  const margin = 20;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const contentWidth = pageWidth - (margin * 2);
  const startX = margin;
  let currentY = margin;
  
  // Colors
  const accentColor = '#00d4ff';
  const textColor = '#000000';
  
  // Helper function to set font and add text
  const addText = (text, x, y, options = {}) => {
    const fontSize = options.fontSize || 11;
    const fontStyle = options.fontStyle || 'normal';
    
    pdf.setFont('THSarabunNew', fontStyle);
    pdf.setFontSize(fontSize);
    pdf.setTextColor(options.color || textColor);
    pdf.text(text, x, y);
  };
  
  // Helper function to add section header
  const addSectionHeader = (thaiText, englishText, y) => {
    // Thai header
    addText(`${thaiText} (${englishText})`, startX, y, {
      fontSize: 14,
      fontStyle: 'bold',
      color: accentColor
    });
    
    // Add divider line
    pdf.setDrawColor(accentColor);
    pdf.setLineWidth(0.5);
    pdf.line(startX, y + 4, pageWidth - margin, y + 4);
    
    return y + 12;
  };
  
  // ===== HEADER =====
  // Name (Thai + English)
  addText('อภิชิต เปลี่ยนกลาง (Apichit Plueangklang)', startX, currentY, {
    fontSize: 18,
    fontStyle: 'bold'
  });
  
  // Title
  currentY += 8;
  addText('Frontend Developer', startX, currentY, {
    fontSize: 12,
    color: accentColor
  });
  
  // Contact info
  currentY += 10;
  const contactInfo = [
    '📧 golfgod9996@gmail.com',
    '📱 096-395-1661',
    '🔗 github.com/golfApichitGIT',
    '💼 linkedin.com/in/apichit-plueangklang'
  ];
  
  contactInfo.forEach(info => {
    addText(info, startX, currentY, { fontSize: 10 });
    currentY += 5;
  });
  
  currentY += 10;
  
  // ===== SKILLS =====
  currentY = addSectionHeader('ทักษะ', 'Skills', currentY);
  
  const skills = [
    '• JavaScript (ES6+), React, Node.js',
    '• React Vite, HTML5, CSS3, TailwindCSS',
    '• PHP, MySQL, PostgreSQL, Supabase',
    '• Git, GitHub, VS Code, npm, Chart.js',
    '• Vercel, Netlify, Docker basics'
  ];
  
  skills.forEach(skill => {
    addText(skill, startX, currentY);
    currentY += 6;
  });
  
  currentY += 8;
  
  // ===== PROJECTS =====
  currentY = addSectionHeader('โปรเจกต์', 'Projects', currentY);
  
  const projects = [
    {
      name: 'ระบบจัดการสต็อกอะไหล่ (Stock Management System)',
      description: 'ระบบจัดการสต็อกอะไหล่รถยนต์ รองรับ QR Code และ Lazada API',
      tech: 'React Vite, MySQL, Supabase, LINE API, QR Code, Lazada API'
    },
    {
      name: 'ระบบเงินเดือน (Payroll Management System)',
      description: 'ระบบจัดการเงินเดือนพนักงาน อัปโหลด Excel คำนวณอัตโนมัติ',
      tech: 'React Vite, TailwindCSS, React Router, XLSX, Supabase, PostgreSQL'
    },
    {
      name: 'ระบบดูแลผู้สูงอายุ (Elderly Health Monitoring System)',
      description: 'ระบบติดตามสุขภาพผู้สูงอายุ เชื่อมต่อ LINE Bot และ GPS',
      tech: 'PHP, MySQL, Bootstrap 5, Chart.js, LINE API, GPS Tracking'
    }
  ];
  
  projects.forEach((project, index) => {
    // Project number and name
    addText(`${index + 1}. ${project.name}`, startX, currentY, {
      fontSize: 12,
      fontStyle: 'bold'
    });
    
    // Project description
    currentY += 7;
    addText(project.description, startX + 5, currentY, { fontSize: 10 });
    
    // Tech stack
    currentY += 6;
    addText(`Tech: ${project.tech}`, startX + 5, currentY, {
      fontSize: 10,
      color: accentColor
    });
    
    currentY += 10;
  });
  
  // ===== EDUCATION =====
  currentY = addSectionHeader('การศึกษา', 'Education', currentY);
  
  // Bachelor's degree
  addText('ปริญญาตรี วิทยาศาสตรบัณฑิต (B.Sc. Computer Science)', startX, currentY, {
    fontSize: 11,
    fontStyle: 'bold'
  });
  
  currentY += 6;
  addText('มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน', startX, currentY, {
    fontSize: 10
  });
  
  currentY += 5;
  addText('สาขาวิทยาการคอมพิวเตอร์', startX, currentY, {
    fontSize: 10
  });
  
  currentY += 5;
  addText('ปีการศึกษา 2562–2565 (GPA: 3.83)', startX, currentY, {
    fontSize: 10
  });
  
  currentY += 10;
  
  // Associate degree
  addText('ปวช. / อนุปริญญา', startX, currentY, {
    fontSize: 11,
    fontStyle: 'bold'
  });
  
  currentY += 6;
  addText('วิทยาลัยเทคนิคนครราชสีมา', startX, currentY, {
    fontSize: 10
  });
  
  currentY += 5;
  addText('สาขาคอมพิวเตอร์ธุรกิจ', startX, currentY, {
    fontSize: 10
  });
  
  currentY += 5;
  addText('ปีการศึกษา 2560–2562 (GPA: 3.33)', startX, currentY, {
    fontSize: 10
  });
  
  currentY += 15;
  
  // ===== FOOTER =====
  const generatedDate = new Date().toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  addText(`Generated on ${generatedDate}`, startX, currentY, {
    fontSize: 8,
    color: '#999999'
  });
  
  // Save PDF
  pdf.save('Apichit_Plueangklang_CV.pdf');
}

// Make function globally accessible
window.generateCV = generateCV;
