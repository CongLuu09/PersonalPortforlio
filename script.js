// DOM Elements
const header = document.getElementById("header")
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const nav = document.getElementById("nav")
const navLinks = document.querySelectorAll(".nav-link")
const backToTopBtn = document.getElementById("back-to-top")

// Toggle Elements
const heroToggle = document.getElementById("hero-toggle")
const aboutToggle = document.getElementById("about-toggle")
const heroDetail = document.getElementById("hero-detail")
const aboutDetail = document.getElementById("about-detail")

// Header scroll effect
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Header background effect
  if (scrollTop > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  // Back to top button
  if (scrollTop > 500) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }

  lastScrollTop = scrollTop
})

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active")

  // Animate hamburger menu
  const spans = mobileMenuBtn.querySelectorAll("span")
  if (nav.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active")
    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const headerHeight = header.offsetHeight
      const targetPosition = targetSection.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const scrollPosition = window.scrollY + header.offsetHeight + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
})

// Hero detail toggle
heroToggle.addEventListener("click", () => {
  heroDetail.classList.toggle("active")
  heroToggle.classList.toggle("active")

  const toggleText = heroToggle.querySelector(".toggle-text")
  const toggleIcon = heroToggle.querySelector("i")

  if (heroDetail.classList.contains("active")) {
    toggleText.textContent = "Thu gọn"
    toggleIcon.className = "fas fa-chevron-up"
  } else {
    toggleText.textContent = "Tìm hiểu thêm"
    toggleIcon.className = "fas fa-chevron-down"
  }
})

// About detail toggle
aboutToggle.addEventListener("click", () => {
  aboutDetail.classList.toggle("active")
  aboutToggle.classList.toggle("active")

  const toggleText = aboutToggle.querySelector(".toggle-text")
  const toggleIcon = aboutToggle.querySelector("i")

  if (aboutDetail.classList.contains("active")) {
    toggleText.textContent = "Thu gọn"
    toggleIcon.className = "fas fa-minus"
  } else {
    toggleText.textContent = "Xem thêm"
    toggleIcon.className = "fas fa-plus"
  }
})

// Back to top functionality
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Animate skill progress bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px",
}

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-bar")
      progressBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress")
        setTimeout(() => {
          bar.style.width = progress + "%"
        }, 200)
      })
    }
  })
}, observerOptions)

// Observe skills section
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills")
  if (skillsSection) {
    skillsObserver.observe(skillsSection)
  }

  // Add fade-in animation to elements
  const animateElements = document.querySelectorAll(".project-card, .skill-category, .stat-card")
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up")
        }
      })
    },
    { threshold: 0.1 },
  )

  animateElements.forEach((el) => fadeObserver.observe(el))
})

// Parallax effect for floating icons
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-icon")

  parallaxElements.forEach((element, index) => {
    const speed = 0.3 + index * 0.1
    const yPos = -(scrolled * speed)
    element.style.transform = `translateY(${yPos}px)`
  })
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title .name-highlight")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 80)
  }
})

// Console log for demo purposes
console.log("Lưu Viết Công Portfolio loaded successfully! 🚀")
console.log("Contact: cong090503@gmail.com")
console.log("GitHub: https://github.com/CongLuu09")
