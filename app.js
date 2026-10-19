// ===== MENU DATA =====
const menuItems = [
  {
    id: 1,
    name: 'Cà Phê Sữa Đá',
    description: 'Cà phê phin truyền thống kết hợp sữa đặc, đá viên. Đậm đà, ngọt ngào.',
    price: '35.000',
    currency: 'đ',
    category: 'coffee',
    image: 'images/ca-phe-sua-da.jpg',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Cà Phê Đen',
    description: 'Cà phê phin nguyên chất, hương thơm đậm đà. Cho người yêu vị đắng.',
    price: '29.000',
    currency: 'đ',
    category: 'coffee',
    image: 'images/ca-phe-den.jpg',
    badge: null
  },
  {
    id: 3,
    name: 'Cà Phê Trứng',
    description: 'Đặc sản Hà Nội — lớp kem trứng béo ngậy phủ trên cà phê đen nóng.',
    price: '45.000',
    currency: 'đ',
    category: 'coffee',
    image: 'images/ca-phe-trung.jpg',
    badge: 'Đặc biệt'
  },
  {
    id: 4,
    name: 'Cà Phê Dừa',
    description: 'Cà phê kết hợp kem dừa tươi, vị béo ngọt tự nhiên mát lạnh.',
    price: '42.000',
    currency: 'đ',
    category: 'coffee',
    image: 'images/coffee-drinks.jpg',
    badge: 'Mới'
  },
  {
    id: 5,
    name: 'Matcha Latte',
    description: 'Bột matcha Nhật Bản cao cấp kết hợp sữa tươi — thanh mát, dịu nhẹ.',
    price: '49.000',
    currency: 'đ',
    category: 'tea',
    image: 'images/coffee-drinks.jpg',
    badge: null
  },
  {
    id: 6,
    name: 'Trà Sen Vàng',
    description: 'Trà ướp hương sen tự nhiên, vị thanh tao mang hồn Việt Nam.',
    price: '39.000',
    currency: 'đ',
    category: 'tea',
    image: 'images/coffee-drinks.jpg',
    badge: null
  },
  {
    id: 7,
    name: 'Bánh Mì Pate',
    description: 'Bánh mì giòn rụm với pate, thịt nguội, đồ chua và rau thơm.',
    price: '35.000',
    currency: 'đ',
    category: 'food',
    image: 'images/coffee-drinks.jpg',
    badge: null
  },
  {
    id: 8,
    name: 'Croissant Bơ Pháp',
    description: 'Croissant nướng giòn thơm lừng bơ, hoàn hảo để kèm cà phê sáng.',
    price: '32.000',
    currency: 'đ',
    category: 'food',
    image: 'images/coffee-drinks.jpg',
    badge: null
  },
  {
    id: 9,
    name: 'Bạc Xỉu',
    description: 'Cà phê nhẹ nhàng với nhiều sữa — thích hợp cho người mới bắt đầu.',
    price: '35.000',
    currency: 'đ',
    category: 'coffee',
    image: 'images/ca-phe-sua-da.jpg',
    badge: null
  }
];

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const menuGrid = document.getElementById('menuGrid');
const backToTopBtn = document.getElementById('backToTop');
const loadingScreen = document.getElementById('loadingScreen');

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1200);
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Add scrolled class
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top button
  if (scrollY > 600) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }

  // Active nav link based on scroll position
  updateActiveNavLink();

  lastScrollY = scrollY;
});

// ===== MOBILE MENU =====
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
      const targetPosition = targetElement.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== BACK TO TOP =====
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== ACTIVE NAV LINK =====
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a[data-nav]').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ===== RENDER MENU =====
function renderMenu(category = 'all') {
  const filteredItems = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);

  menuGrid.innerHTML = filteredItems.map((item, index) => `
    <div class="menu-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both">
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-title">${item.name}</h3>
        <p class="menu-card-desc">${item.description}</p>
        <div class="menu-card-footer">
          <div class="menu-card-price">
            ${item.price}<span class="currency">${item.currency}</span>
          </div>
          <button class="menu-card-add" aria-label="Thêm ${item.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize menu
renderMenu();

// ===== MENU TAB FILTER =====
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.category);
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat-number');
  
  counters.forEach(counter => {
    const text = counter.textContent;
    const match = text.match(/(\d+)/);
    if (!match) return;
    
    const target = parseInt(match[1]);
    const suffix = text.replace(match[1], '').trim();
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        current = target;
      } else {
        requestAnimationFrame(() => setTimeout(updateCounter, stepTime));
      }
      
      // Rebuild inner HTML maintaining accent span
      const accentSpan = counter.querySelector('.accent');
      if (accentSpan) {
        counter.childNodes[0].textContent = Math.floor(current);
      }
    };
    
    updateCounter();
  });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      heroObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  heroObserver.observe(heroStats);
}

// ===== FORM HANDLING =====
function handleFormSubmit() {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const phone = document.getElementById('contactPhone').value;
  const message = document.getElementById('contactMessage').value;

  if (!name || !email || !message) {
    showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
    return;
  }

  const btn = document.getElementById('submitBtn');
  btn.innerHTML = '<span class="loading-spinner"></span> Đang gửi...';
  btn.disabled = true;

  // Simulate sending
  setTimeout(() => {
    btn.innerHTML = '✓ Đã gửi thành công!';
    btn.style.background = '#22c55e';
    
    showNotification('Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.', 'success');
    
    // Reset form
    setTimeout(() => {
      document.getElementById('contactName').value = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactPhone').value = '';
      document.getElementById('contactMessage').value = '';
      btn.innerHTML = 'Gửi tin nhắn <span class="arrow">→</span>';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1500);
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  if (email) {
    showNotification('Đăng ký thành công! Cảm ơn bạn.', 'success');
    document.getElementById('newsletterEmail').value = '';
  }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <p>${message}</p>
  `;
  
  Object.assign(notification.style, {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%) translateY(20px)',
    padding: '14px 28px',
    background: type === 'success' ? '#1a3a1a' : type === 'error' ? '#3a1a1a' : '#1a1a3a',
    border: `1px solid ${type === 'success' ? '#22c55e33' : type === 'error' ? '#ef444433' : '#3b82f633'}`,
    borderRadius: '12px',
    color: '#f5f5f5',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: '10000',
    opacity: '0',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
  });

  document.body.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(-50%) translateY(0)';
  });

  // Auto remove
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => notification.remove(), 400);
  }, 4000);
}

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', () => {
  const heroImg = document.querySelector('.hero-bg img');
  if (heroImg && window.scrollY < window.innerHeight) {
    heroImg.style.transform = `scale(1.1) translateY(${window.scrollY * 0.15}px)`;
  }
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});

console.log('%c☕ Phú Cooffe', 'font-size: 24px; font-weight: bold; color: #c8a97e;');
console.log('%cWelcome to Phú Cooffe website!', 'font-size: 12px; color: #a0a0a0;');
