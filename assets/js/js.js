function showSection(sectionId) {
    // 获取所有的section元素
    const sections = document.querySelectorAll('section');
    
    // 遍历并隐藏所有section
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // 显示指定的section
    document.getElementById(sectionId).style.display = 'block';
}

// 默认显示第一个部分
showSection('justify-content');