const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")

    /** @type {Array<{title: string; url: string}>} data */
    const data = await response.json();

    if (!response.ok) {
        throw {data}
    }

    return {data};
}

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    /** @type {Array<{name: string}>} data */
    const data = await response.json();

    if (!response.ok) {
        throw {data}
    }

    return {data};
}

document.addEventListener("DOMContentLoaded", async () => {
    const contentHolder = document.getElementById("content")
    const usersHolder = document.getElementById("user-list")

    const {data: photos} = await getPhotos()
    const {data: users} = await getUsers()

    photos.forEach(photo => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
       
        const image = document.createElement("img");
        image.src = photo.url;
        image.alt = photo.title;
        image.classList.add("card-img-top");
        card.appendChild(image);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = photo.title;
        cardBody.appendChild(cardTitle);

        card.appendChild(cardBody)

        contentHolder.appendChild(card)
    })

    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "align-items-center");
       
        const image = document.createElement("img");
        image.src = "https://picsum.photos/200/300"
        image.alt = user.name;
        image.height = 45; 
        image.width = 45; 
        image.classList.add("rounded-circle");
        listItem.appendChild(image);

        const anchor = document.createElement("a");
        anchor.href = "#"
        anchor.classList.add("fw-bold", "d-inline");
        anchor.textContent = user.name;
        listItem.appendChild(anchor);

        usersHolder.appendChild(listItem)
    })
})