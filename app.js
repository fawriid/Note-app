// add note button
const add = document.querySelector(".add-note");
const container = document.querySelector(".container");

const notes = JSON.parse(localStorage.getItem("notes"));
console.log(notes);
if (notes) {
    notes.forEach((e) => {
        addNote(e);
    });
}

add.addEventListener("click", () => {
    addNote();
});

function addNote(localtext = "") {
    const noteEl = document.createElement("div");
    noteEl.classList.add("note");
    noteEl.innerHTML = `
    <div class="tools">
        <button class = "edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class = "delete">
            <i class="fas fa-trash-can"></i>
        </button>
    </div>
    <div class="text ${localtext ? "" : "hidden"}"></div>
    <textarea class="textarea ${localtext ? "hidden" : ""}"></textarea>
    `;

    const edit = noteEl.querySelector(".edit");
    const deleteBtn = noteEl.querySelector(".delete");
    const text = noteEl.querySelector(".text");
    const textArea = noteEl.querySelector(".textarea");

    text.innerHTML = localtext;

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        text.innerHTML = value;

        updateLS();
    });

    deleteBtn.addEventListener("click", () => {
        noteEl.remove();

        updateLS();
    });

    edit.addEventListener("click", () => {
        console.log("hello");
        text.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    container.appendChild(noteEl);
}

function updateLS() {
    const notes = container.querySelectorAll(".note .text");

    const noteArr = [];

    notes.forEach((e) => {
        const noteValue = e.innerHTML;
        noteArr.push(noteValue);
    });

    localStorage.setItem("notes", JSON.stringify(noteArr));
}
