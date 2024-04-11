let githubBtn = document.getElementById('github-btn');
let downloadBtn = document.getElementById('download-btn');

githubBtn.onclick = function () {
    window.open('https://github.com/hafizasad419', '_blank');
}

downloadBtn.onclick = function () {


    const link = document.createElement('a');
    link.href = './My_Resume_React.pdf';
    link.download = './My_Resume_React.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

