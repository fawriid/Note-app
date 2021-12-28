// add note button
const add = document.querySelector(".add-note");
const container = document.querySelector(".container")


add.addEventListener("click", () => {
    const noteEl = document.createElement("div")
    noteEl.classList.add("note")
    noteEl.innerHTML = `
    <div class="tools">
        <button class = "edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class = "delete">
            <i class="fas fa-trash-can"></i>
        </button>
    </div>
    <div class="text hidden"></div>
    <textarea class="textarea"></textarea>
    `;
    container.appendChild(noteEl)
})



// edit button
const deleteEl = document.querySelector(".note .delete")
const text = document.querySelector(".note .text")
const textArea = document.querySelector(".note .textarea")
deleteEl.addEventListener("click", () => {
    // text.classList.toggle("hidden")
    // textArea.classList.toggle("hidden")
})






























{
    /* <div class="note">
    <div class="tools">
        <button class = "edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class = "delete">
            <i class="fas fa-trash-can"></i>
        </button>
    </div>
    <div class="text"></div>
    <textarea class="textarea"></textarea>
</div>; */
}
