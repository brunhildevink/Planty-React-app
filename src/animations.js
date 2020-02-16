window.addEventListener('DOMContentLoaded', (event) => {

    let currentDelay = 0;
    
    const allItems = document.getElementById("cards-container-row").childNodes.length;

    for (let i = 0; i < allItems; i++) {
        let currentItem =  document.getElementById(i);
        // currentItem.classList.add("scale");
        currentItem.classList.add("scale");
        currentItem.style.animationDelay = `${currentItem}s`;
        currentDelay += 1;
    }
});