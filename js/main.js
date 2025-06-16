// Content data - all your information goes here
const content = {
  profile: `
    <section id="profile">
      <h2>PROFILE</h2>
      <p>I'm a tech-driven cybersecurity analyst and software developer passionate about solving real-world challenges through secure coding and robust infrastructure. From backend development to deploying networks in government ministries, I combine precision, innovation, and adaptability. I thrive in dynamic environments and take pride in being a dependable teammate and a proactive problem-solver.</p>
    </section>
  `,
  
  experience: `
    <section id="experience">
      <h2>EXPERIENCE</h2>
      
      <div class="experience-item">
        <h3>Intern – Network and Systems Technician</h3>
        <div class="job-meta">
          <span>TechSource Point – Westlands, Kenya</span>
          <span>April 2025 – Present</span>
        </div>
        <ul>
          <li>Currently deployed to the Ministry of Energy and Petroleum (Kawi) and the Ministry of Transport and Roads, supporting key IT infrastructure projects</li>
          <li>Assisted with structured cabling, trunking, and general cable management</li>
          <li>Configured Cisco switches and optimized LAN/WAN performance</li>
          <li>Set up server rooms, assembled racks, and organized patch panels</li>
          <li>Provided IP addressing, diagnostics, and general network troubleshooting</li>
        </ul>
      </div>
      
      <!-- Other experience items similarly -->
    </section>
  `,
  
  // Add other sections (education, skills, etc.) following same pattern
};

// Insert content into page
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  
  // Add sections in order
  main.innerHTML = `
    ${content.profile}
    ${content.experience}
    ${content.education}
    ${content.skills}
  `;
});
