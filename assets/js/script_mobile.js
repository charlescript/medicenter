window.onload = function () {
    document.querySelector(".menu_mobile").addEventListener("click", function () {
        if (document.querySelector(".menu nav ul").style.display == 'flex') {

            document.querySelector(".menu nav ul").style.display = 'none';
            document.querySelector(".bloco_mobile").style.marginTop = '0';

        } else {

            document.querySelector(".menu nav ul").style.display = 'flex';
            document.querySelector(".bloco_mobile").style.marginTop = '20%';

        }
    });
};