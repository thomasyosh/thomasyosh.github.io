const ppsEx = document.getElementById("ppsExternal");
const ppsInt = document.getElementById("ppsInternal");
const modal = document.getElementById("myModal");


ppsInt.addEventListener("click", () => {
    modal.showModal();
    window.open("https://www.ppshk.com/pps/pps2/revamp2/template/pc/login_c.jsp", "ytplayer");
    // window.open("https://www.ppshk.com/pps/pps2/revamp2/template/pc/login_c.jsp", "ytplayer");
});

ppsEx.addEventListener('click', () => {
        const url = "https://www.ppshk.com/pps/pps2/revamp2/template/pc/login_c.jsp";
        const windowName = "ExternalPageWindow";
        
        // Define the size and features of the new window
        const windowFeatures = "width=800,height=600,left=200,top=200,popup=yes";

        // Open the URL in the new popup window
        window.open(url, windowName, windowFeatures);
    });


modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
});
