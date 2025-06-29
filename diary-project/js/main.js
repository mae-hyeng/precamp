const selectCategory = (e) => {
    const categorys = document.getElementsByClassName("storage-category");
    for (let i of categorys) {
        i.classList.remove("selected");
    }

    e.target.classList.add("selected");
};
