// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏高亮当前页面
    highlightCurrentPage();

    // 滚动动画
    initScrollAnimations();

    // 导航栏滚动效果
    initNavbarScroll();
});

// 高亮当前页面的导航链接
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 初始化滚动动画
function initScrollAnimations() {
    // 创建 Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.work-card, .skill-card, .contact-card, .about-content');

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // 向下滚动超过100px时添加阴影
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(37, 99, 235, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(37, 99, 235, 0.1)';
        }

        lastScroll = currentScroll;
    });
}

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 作品卡片点击事件（预留）
document.addEventListener('click', function(e) {
    if (e.target.closest('.work-card')) {
        const workCard = e.target.closest('.work-card');
        // 这里可以添加点击作品卡片后的操作
        // 例如：打开模态框显示作品详情
        console.log('点击了作品卡片');
    }
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});