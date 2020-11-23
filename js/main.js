/* ----------- ABOUT SECTION TABS ______*/
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event)=> {
        if(event.target.classList.contains("tab-item")&&
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            
            //deactuvate existing active tab
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

            //activate tab item
            event.target.classList.add("active","outer-shadow");

            //deactivate existing active tab-content
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //activate tab content
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();