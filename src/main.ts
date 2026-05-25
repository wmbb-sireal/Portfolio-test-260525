import {
  createIcons,
  Zap,
  Mail,
  Phone,
  Globe,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MapPin,
  Layers,
  Workflow,
  Award,
  Star,
  CheckCircle,
  GraduationCap,
  BookOpen,
  Share2,
  Camera,
  Trash2
} from 'lucide';

import './index.css';

// 1. Initialize Lucide Icons
createIcons({
  icons: {
    Zap,
    Mail,
    Phone,
    Globe,
    Menu,
    X,
    ChevronRight,
    Sparkles,
    ArrowRight,
    MapPin,
    Layers,
    Workflow,
    Award,
    Star,
    CheckCircle,
    GraduationCap,
    BookOpen,
    Share2,
    Camera,
    Trash2
  }
});

// 2. Responsive Sticky Header Navigation and Highlighting
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add('py-2');
    header.firstElementChild?.classList.remove('glass-card-light');
    header.firstElementChild?.classList.add('bg-[#050508]/85', 'border-[#3d5afe]/10');
  } else {
    header.classList.remove('py-2');
    header.firstElementChild?.classList.add('glass-card-light');
    header.firstElementChild?.classList.remove('bg-[#050508]/85', 'border-[#3d5afe]/10');
  }
});

// 3. Mobile Navigation Menu Toggle Engine
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const mobileMenu = document.getElementById('mobile-menu');

const openMobileMenu = () => {
  mobileMenu?.classList.remove('translate-x-full');
};

const closeMobileMenu = () => {
  mobileMenu?.classList.add('translate-x-full');
};

mobileMenuBtn?.addEventListener('click', openMobileMenu);
mobileCloseBtn?.addEventListener('click', closeMobileMenu);

// Close menu when clicking links
const mobileLinks = mobileMenu?.querySelectorAll('a');
mobileLinks?.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});


// 4. Custom Cursor Follower Engine
const cursor = document.getElementById('custom-cursor');
const cursorDot = document.getElementById('custom-cursor-dot');

window.addEventListener('mousemove', (e) => {
  if (!cursor || !cursorDot) return;
  
  // Smoothly move cursor
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
});

// Cursor Hover effects on buttons & links
const interactiveElements = document.querySelectorAll('a, button, select, input, textarea, select option, .tilt-card');
interactiveElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor?.classList.add('scale-125', 'border-[#4ecca3]');
    cursorDot?.classList.add('scale-75', 'bg-[#3d5afe]');
  });
  el.addEventListener('mouseleave', () => {
    cursor?.classList.remove('scale-125', 'border-[#4ecca3]');
    cursorDot?.classList.remove('scale-75', 'bg-[#3d5afe]');
  });
});


// 5. Hero Dynamic Text Typing Animator
const typingTarget = document.getElementById('hero-typing-target');
const typingPhrases = [
  'Notion Systems Expert',
  'Zapier & Make Automation Architect',
  'Business Process Optimization Consultant',
  'Digital Transformation strategy catalyst'
];

let currentPhraseIdx = 0;
let currentCharIdx = 0;
let isDeleting = false;
let typeSpeed = 100;

function handleTyping() {
  if (!typingTarget) return;

  const currentPhrase = typingPhrases[currentPhraseIdx];
  
  if (isDeleting) {
    typingTarget.textContent = currentPhrase.substring(0, currentCharIdx - 1);
    currentCharIdx--;
    typeSpeed = 40; // delete faster
  } else {
    typingTarget.textContent = currentPhrase.substring(0, currentCharIdx + 1);
    currentCharIdx++;
    typeSpeed = 100; // standard typing speed
  }

  // Handle phase transition thresholds
  if (!isDeleting && currentCharIdx === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at the end of the phrase
  } else if (isDeleting && currentCharIdx === 0) {
    isDeleting = false;
    currentPhraseIdx = (currentPhraseIdx + 1) % typingPhrases.length;
    typeSpeed = 500; // Small pause before starting next word
  }

  setTimeout(handleTyping, typeSpeed);
}

// Start typing loop
handleTyping();


// 6. Interactive 3D Perspective Tilt Engine
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach((card) => {
  const htmlCard = card as HTMLElement;
  
  htmlCard.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = htmlCard.getBoundingClientRect();
    const x = e.clientX - rect.left; // x cursor coordinate relative to card
    const y = e.clientY - rect.top;  // y cursor coordinate relative to card
    
    // Centralized mapping
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    // Calculate tilt degree (-10deg to +10deg scale)
    const tiltX = -(y - midY) / (midY / 10);
    const tiltY = (x - midX) / (midX / 10);
    
    // Apply 3D perspective transform
    htmlCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
    
    // Calculate light shine reflection gradient highlights
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    htmlCard.style.backgroundImage = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.08) 0%, transparent 80%)`;
  });
  
  htmlCard.addEventListener('mouseleave', () => {
    // Smooth reset
    htmlCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    htmlCard.style.backgroundImage = '';
  });
});


// 7. Interactive Connected Automation Node Network Background Canvas
const canvas = document.getElementById('ambient-canvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

let particles: Particle[] = [];
let maxParticles = 40;
let connectionDistance = 140;

// Handle canvas resizing
function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

function initParticles() {
  if (!canvas) return;
  particles = [];
  
  // Neon colors fitting our automation aesthetic
  const colors = [
    'rgba(78, 204, 163, 0.5)', // Neo-mint
    'rgba(61, 90, 254, 0.5)',  // Royal blue
    'rgba(78, 204, 163, 0.3)'  // Highlight
  ];

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

// Mouse coordinates for particle attraction/interaction
let mouseX = -1000;
let mouseY = -1000;
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
window.addEventListener('mouseleave', () => {
  mouseX = -1000;
  mouseY = -1000;
});

function drawParticles() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;

    // Boundary bounces
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    // Mouse attraction cursor bubble
    if (mouseX > -1000) {
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        // Subtle push
        p.x -= (dx / dist) * 0.15;
        p.y -= (dy / dist) * 0.15;
      }
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  // Draw networks connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const p1 = particles[i];
      const p2 = particles[j];

      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < connectionDistance) {
        const opacity = (1 - dist / connectionDistance) * 0.18;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(78, 204, 163, ${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

// Start particle simulation
resizeCanvas();
initParticles();
if (canvas) {
  requestAnimationFrame(drawParticles);
}


// 8. Contact Form - Live Automation Workspace Simulation Climax Engine
const automationForm = document.getElementById('automation-form') as HTMLFormElement;
const simulatorStatus = document.getElementById('simulator-status');
const terminalConsoles = document.getElementById('terminal-consoles');

// Active route SVGs and elements for simulation
const lineTriggerZapier = document.getElementById('line-trigger-zapier') as any;
const lineZapierNotion = document.getElementById('line-zapier-notion') as any;
const lineZapierSlack = document.getElementById('line-zapier-slack') as any;

const nodeTriggerGraphic = document.getElementById('node-trigger-graphic');
const nodeTriggerBadge = document.getElementById('node-trigger-badge');
const nodeZapierGraphic = document.getElementById('node-zapier-graphic');
const nodeZapierPulse = document.getElementById('node-zapier-pulse');
const nodeNotionGraphic = document.getElementById('node-notion-graphic');
const nodeSlackGraphic = document.getElementById('node-slack-graphic');

const formSubmitBtn = document.getElementById('form-submit-btn') as HTMLButtonElement | null;

function clearConsole() {
  if (terminalConsoles) {
    terminalConsoles.innerHTML = '';
  }
}

function writeConsole(text: string, colorClass: string = 'text-slate-400', isTag = false) {
  if (!terminalConsoles) return;
  const p = document.createElement('p');
  p.className = `text-xs font-mono leading-relaxed tracking-wide fade-in ${colorClass}`;
  p.innerHTML = isTag ? text : `>> ${text}`;
  terminalConsoles.appendChild(p);

  // Keep bottom scroll
  terminalConsoles.scrollTop = terminalConsoles.scrollHeight;
}

automationForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameVal = (document.getElementById('form-name') as HTMLInputElement).value;
  const emailVal = (document.getElementById('form-email') as HTMLInputElement).value;
  const categorySelect = (document.getElementById('form-category') as HTMLSelectElement);
  const categoryText = categorySelect.options[categorySelect.selectedIndex].text;
  const messageVal = (document.getElementById('form-message') as HTMLTextAreaElement).value;

  if (!nameVal || !emailVal || !messageVal) return;

  // Lock buttons to avoid double execution
  if (formSubmitBtn) {
    formSubmitBtn.disabled = true;
    formSubmitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      워크플로우 처리 중...
    `;
  }

  // Set status state
  if (simulatorStatus) {
    simulatorStatus.textContent = '⚡ RUNNING';
    simulatorStatus.className = 'px-2.5 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded text-[9px] font-mono font-bold text-yellow-400 uppercase tracking-widest';
  }

  clearConsole();
  writeConsole('Incoming Workspace Packet Received.', 'text-amber-400');
  
  // Step 1: Active Input Trigger Node Glows
  setTimeout(() => {
    writeConsole(`Initial values parsed. User: "${nameVal}" (Email: ${emailVal})`, 'text-slate-300');
    
    nodeTriggerGraphic?.classList.add('bg-[#4ecca3]/10', 'border-[#4ecca3]/50', 'scale-105');
    nodeTriggerBadge?.classList.remove('scale-0');
    nodeTriggerBadge?.classList.add('scale-100');
    
    // Flow wire begins animating
    if (lineTriggerZapier) {
      lineTriggerZapier.style.stroke = '#4ecca3';
      lineTriggerZapier.style.strokeWidth = '3px';
      lineTriggerZapier.classList.add('flow-wire-moving');
    }
  }, 600);

  // Step 2: Route to Zapier Hub
  setTimeout(() => {
    writeConsole('Transmitting raw payload to [Zapier Cloud Hub] via webhook gateway...', 'text-slate-400');
    writeConsole(`Action Routing mapped to segment: [${categoryText}]`, 'text-[#4ecca3]');
    
    nodeZapierGraphic?.classList.add('bg-[#3d5afe]/10', 'border-[#3d5afe]/50', 'scale-110');
    nodeZapierPulse?.classList.remove('opacity-0', 'scale-75');
    nodeZapierPulse?.classList.add('ping-glow');

    if (lineTriggerZapier && lineZapierNotion && lineZapierSlack) {
      // Zapier processing done trigger subsequent branches
      lineZapierNotion.style.stroke = '#3d5afe';
      lineZapierNotion.style.strokeWidth = '3px';
      lineZapierNotion.classList.add('flow-wire-moving');

      lineZapierSlack.style.stroke = '#4ecca3';
      lineZapierSlack.style.strokeWidth = '3px';
      lineZapierSlack.classList.add('flow-wire-moving');
    }
  }, 1800);

  // Step 3: Append Row database to Notion & Dispatch Sijin's Slack notification
  setTimeout(() => {
    writeConsole(`Notion integration: Processing Relation DB schemas...`, 'text-slate-400');
    writeConsole(`Writing row successfully into "[Sijin CRM] Inbound Inquiries" 테이블 ✅`, 'text-[#3d5afe]');
    nodeNotionGraphic?.classList.add('bg-[#3d5afe]/10', 'border-[#3d5afe]/50', 'scale-105', 'text-[#3d5afe]');
  }, 3000);

  setTimeout(() => {
    writeConsole(`Slack integration: Dispatching webhook message packet...`, 'text-slate-400');
    writeConsole(`Slack notification ping delivered safely to Sijin Jeon's mobile! 💬`, 'text-[#4ecca3]');
    nodeSlackGraphic?.classList.add('bg-[#4ecca3]/10', 'border-[#4ecca3]/50', 'scale-105', 'text-[#4ecca3]');
  }, 4100);

  // Step 4: Finished Simulation Success Card Modal
  setTimeout(() => {
    writeConsole('-------------------------------------------', 'text-slate-600', true);
    writeConsole('Workflow Run Successful! Transmit Pack complete.', 'text-emerald-400 font-bold');
    writeConsole(`Sijin Jeon will review your specs and respond to ${emailVal} within 24 hours.`, 'text-slate-300');

    if (simulatorStatus) {
      simulatorStatus.textContent = '🟢 SUCCESS';
      simulatorStatus.className = 'px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest';
    }

    // Reset button design
    if (formSubmitBtn) {
      formSubmitBtn.disabled = false;
      formSubmitBtn.className = 'w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-all duration-300';
      formSubmitBtn.innerHTML = `
        <i data-lucide="check-circle" class="w-4 h-4 text-white"></i>
        워크플로우 전송 완료! (성공)
      `;
    }

    // Reset simulator in 8 seconds
    setTimeout(() => {
      // reset forms
      automationForm.reset();
      
      // reset elements
      nodeTriggerGraphic?.classList.remove('bg-[#4ecca3]/10', 'border-[#4ecca3]/50', 'scale-105');
      nodeTriggerBadge?.classList.add('scale-0');
      nodeTriggerBadge?.classList.remove('scale-100');
      
      nodeZapierGraphic?.classList.remove('bg-[#3d5afe]/10', 'border-[#3d5afe]/50', 'scale-110');
      nodeZapierPulse?.classList.add('opacity-0', 'scale-75');
      nodeZapierPulse?.classList.remove('ping-glow');

      nodeNotionGraphic?.classList.remove('bg-[#3d5afe]/10', 'border-[#3d5afe]/50', 'scale-105', 'text-[#3d5afe]');
      nodeSlackGraphic?.classList.remove('bg-[#4ecca3]/10', 'border-[#4ecca3]/50', 'scale-105', 'text-[#4ecca3]');

      if (lineTriggerZapier && lineZapierNotion && lineZapierSlack) {
        lineTriggerZapier.style.stroke = 'rgba(255,255,255,0.05)';
        lineTriggerZapier.style.strokeWidth = '2px';
        lineTriggerZapier.classList.remove('flow-wire-moving');

        lineZapierNotion.style.stroke = 'rgba(255,255,255,0.05)';
        lineZapierNotion.style.strokeWidth = '2px';
        lineZapierNotion.classList.remove('flow-wire-moving');

        lineZapierSlack.style.stroke = 'rgba(255,255,255,0.05)';
        lineZapierSlack.style.strokeWidth = '2px';
        lineZapierSlack.classList.remove('flow-wire-moving');
      }

      if (simulatorStatus) {
        simulatorStatus.textContent = '● READY';
        simulatorStatus.className = 'px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest';
      }

      // Revert submit buttons
      if (formSubmitBtn) {
        formSubmitBtn.className = 'w-full py-4 bg-gradient-to-r from-[#4ecca3] to-[#3d5afe] hover:brightness-110 text-white rounded-xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 group shadow-[0_4px_25px_rgba(78,204,163,0.35)] transition-all duration-300 transform active:scale-[0.98]';
        formSubmitBtn.innerHTML = `
          <i data-lucide="zap" class="w-4 h-4 text-white group-hover:scale-125 transition-transform"></i>
          워크플로우 자동 배송 실행
        `;
      }

      clearConsole();
      writeConsole('System initialization... OK');
      writeConsole('Ready to route cloud automation request packets.');
      writeConsole('>> waiting for form inputs...', 'text-[#4ecca3]/80 font-bold');
    }, 8000);

  }, 5200);

});


// 9. Intersection Observer for Scroll Reveals
const revealElements = document.querySelectorAll('.scroll-reveal-timeline');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const el = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      sectionObserver.unobserve(el);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach((el) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.opacity = '0';
  htmlEl.style.transform = 'translateY(30px)';
  htmlEl.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  sectionObserver.observe(htmlEl);
});


// 10. Interactive Profile Avatar Drag & Drop and Local Storage Persistence
const avatarContainer = document.getElementById('avatar-container');
const avatarInput = document.getElementById('avatar-input') as HTMLInputElement | null;
const avatarPreview = document.getElementById('avatar-preview') as HTMLImageElement | null;
const avatarDefaultIcon = document.getElementById('avatar-default-icon');
const avatarDeleteBtn = document.getElementById('avatar-delete-btn');

// Load stored avatar on boot
const savedAvatar = localStorage.getItem('profile-avatar');
if (savedAvatar && avatarPreview && avatarDefaultIcon && avatarDeleteBtn) {
  avatarPreview.src = savedAvatar;
  avatarPreview.classList.remove('hidden');
  avatarDefaultIcon.classList.add('hidden');
  avatarDeleteBtn.classList.remove('hidden');
  avatarDeleteBtn.classList.add('inline-flex');
}

// Handler to analyze and stream file
function handleAvatarFile(file: File) {
  if (!file.type.startsWith('image/')) {
    console.error('Only image files (*.jpg, *.png, etc.) are allowed for avatar upload.');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const base64Data = e.target?.result as string;
    if (base64Data && avatarPreview && avatarDefaultIcon && avatarDeleteBtn) {
      localStorage.setItem('profile-avatar', base64Data);
      avatarPreview.src = base64Data;
      avatarPreview.classList.remove('hidden');
      avatarDefaultIcon.classList.add('hidden');
      avatarDeleteBtn.classList.remove('hidden');
      avatarDeleteBtn.classList.add('inline-flex');
    }
  };
  reader.readAsDataURL(file);
}

// Register Trigger Listeners
avatarContainer?.addEventListener('click', () => {
  avatarInput?.click();
});

avatarInput?.addEventListener('change', (e) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    handleAvatarFile(target.files[0]);
  }
});

// Drag & Drop handlers over the container boundary
avatarContainer?.addEventListener('dragover', (e) => {
  e.preventDefault();
  avatarContainer.classList.add('border-[#4ecca3]', 'scale-105', 'shadow-[0_0_15px_rgba(78,204,163,0.3)]');
});

avatarContainer?.addEventListener('dragleave', () => {
  avatarContainer.classList.remove('border-[#4ecca3]', 'scale-105', 'shadow-[0_0_15px_rgba(78,204,163,0.3)]');
});

avatarContainer?.addEventListener('drop', (e) => {
  e.preventDefault();
  avatarContainer.classList.remove('border-[#4ecca3]', 'scale-105', 'shadow-[0_0_15px_rgba(78,204,163,0.3)]');
  const dt = e.dataTransfer;
  if (dt && dt.files && dt.files[0]) {
    handleAvatarFile(dt.files[0]);
  }
});

// Reset Profile back to hand-drawn default avatar
avatarDeleteBtn?.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop click from triggering parent container input open!
  if (avatarPreview && avatarDefaultIcon && avatarDeleteBtn) {
    localStorage.removeItem('profile-avatar');
    avatarPreview.src = '/src/assets/images/avatar_1779681330951.png';
    avatarPreview.classList.remove('hidden');
    avatarDefaultIcon.classList.add('hidden');
    avatarDeleteBtn.classList.remove('inline-flex');
    avatarDeleteBtn.classList.add('hidden');
  }
});
