document.addEventListener('DOMContentLoaded', () => {
    const clrsInputs = document.querySelectorAll('input[type="color"]');
    const gradientScreen = document.querySelector('div.gradient-box'); 
    const bodyGradient = document.querySelector('body');
    const selctedDirection = document.querySelector('div.select-box select');
    const copyText = document.querySelector('textarea');
    const refreshBTn = document.querySelector('.refresh');
    const copyBTn = document.querySelector('.copy');

    const randomColoring = () => {
        const randomClr = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        return `#${randomClr}`;
    }

    const changeGradient = (areRandomColors) => {
        if (areRandomColors) {
            clrsInputs[0].value = randomColoring();
            clrsInputs[1].value = randomColoring();
        }
        const gradientBackgroundString = `linear-gradient(${selctedDirection.value}, ${clrsInputs[0].value}, ${clrsInputs[1].value})`;
        gradientScreen.style.background = gradientBackgroundString;
        bodyGradient.style.background = gradientBackgroundString;
        copyText.value = `background: ${gradientBackgroundString};`;
    }

    const gradientTextCopt = () => {
        navigator.clipboard.writeText(copyText.value);
        copyBTn.innerHTML = "Code Copied";
        setTimeout(() => copyBTn.innerHTML = "Copy", 1600);
    }

    clrsInputs.forEach(color => {
        color.addEventListener("input", () => changeGradient(false));
    });

    selctedDirection.addEventListener("change", () => changeGradient(false));

    refreshBTn.addEventListener("click", () => changeGradient(true));
    copyBTn.addEventListener("click", gradientTextCopt);
});
