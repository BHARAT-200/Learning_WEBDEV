
function formatViews(views) {
    if (views >= 1000000000) {
        return (views / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'; // .replace(/\.0$/, '') :- Removes trailing .0 if present.
    }
    else if (views >= 1000000) {
        return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';  // .toFixed(1) :-  Keeps 1 decimal place.
    }
    else if (views >= 1000) {
        return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'K';  // (views/1000) :- Converts the number to k
    }
    else {
        return views.toString();
    }
}


function createCard(title, cname, views, months, duration, thumbnail) {
    let fviews = formatViews(views);
    let cont = document.querySelector(".container");

    let card = document.createElement("div");
    card.className = "card";
    card.style.cssText = `
        background-color: black;
        height: 150px;
        width: 85vw;
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: flex-start;
    `;
    cont.append(card);

    
    // thumbnail
    let thumb = document.createElement("div");
    thumb.className = "thumb";
    thumb.innerHTML = `<img style="height: 120px; width: 200px; margin-left: 20px; border-radius: 10%;" src="${thumbnail}" alt="">`;
    card.append(thumb);


    // info to store title and details
    let info = document.createElement("div");
    info.style.cssText = `
        color: white;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        margin-top: 2px;
    `;
    card.append(info);


    // title
    let title2 = document.createElement("div");
    title2.className = "title2";
    title2.innerHTML = title;
    title2.style.cssText = `
        margin-bottom: 2px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: large;
    `;
    info.append(title2);

    
    // details 
    let details = document.createElement("div");
    details.className = "detail";

    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.textContent = cname;
    let li2 = document.createElement("li");
    li2.textContent = fviews;
    let li3 = document.createElement("li");
    li3.textContent = months + "months ago";
    ul.append(li1, li2, li3);

    ul.style.cssText = `
        margin: 0;
        padding: 0;
        gap: 10px;
        display: flex;
        flex-direction: row;
        list-style-position: inside;
    `;
    details.append(ul);
    info.append(details);
}