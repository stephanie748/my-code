const STORAGE_KEY = "lifeline-tracker-v1";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allItemIds() {
  const ids = [];
  TRACKER_DATA.forEach(section => section.items.forEach(item => ids.push(item.id)));
  DOCUMENTS.forEach(doc => ids.push(doc.id));
  return ids;
}

function updateProgress(state) {
  const ids = allItemIds();
  const done = ids.filter(id => state[id]).length;
  const pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
  const bar = document.getElementById("overall-progress-bar");
  const label = document.getElementById("overall-progress-label");
  bar.style.width = pct + "%";
  label.textContent = `${done} / ${ids.length} complete (${pct}%)`;
}

function renderSections(state) {
  const container = document.getElementById("sections");
  container.innerHTML = "";

  TRACKER_DATA.forEach(section => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "card";

    const heading = document.createElement("h2");
    heading.textContent = section.title;
    sectionEl.appendChild(heading);

    if (section.note) {
      const note = document.createElement("p");
      note.className = "note";
      note.textContent = section.note;
      sectionEl.appendChild(note);
    }

    const list = document.createElement("ul");
    list.className = "checklist";

    section.items.forEach(item => {
      const li = document.createElement("li");

      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = !!state[item.id];
      checkbox.addEventListener("change", () => {
        state[item.id] = checkbox.checked;
        saveState(state);
        updateProgress(state);
        li.classList.toggle("done", checkbox.checked);
      });

      const span = document.createElement("span");
      span.textContent = item.text;

      label.appendChild(checkbox);
      label.appendChild(span);
      li.appendChild(label);

      if (item.detail) {
        const detail = document.createElement("div");
        detail.className = "detail";
        detail.textContent = item.detail;
        li.appendChild(detail);
      }

      if (state[item.id]) li.classList.add("done");

      list.appendChild(li);
    });

    sectionEl.appendChild(list);
    container.appendChild(sectionEl);
  });
}

function renderDocuments(state) {
  const container = document.getElementById("documents");
  container.innerHTML = "";

  const sectionEl = document.createElement("section");
  sectionEl.className = "card";

  const heading = document.createElement("h2");
  heading.textContent = "The 12 PARR Documents (Drafted, on Letterhead)";
  sectionEl.appendChild(heading);

  const note = document.createElement("p");
  note.className = "note";
  note.textContent = "Each document is a Markdown template with {{placeholders}} for the blanks — rent, fees, house manager name, curfew, dates, insurance figures, and permit numbers. Fill them in, then check off once finalized.";
  sectionEl.appendChild(note);

  const list = document.createElement("ul");
  list.className = "checklist";

  DOCUMENTS.forEach(doc => {
    const li = document.createElement("li");

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!state[doc.id];
    checkbox.addEventListener("change", () => {
      state[doc.id] = checkbox.checked;
      saveState(state);
      updateProgress(state);
      li.classList.toggle("done", checkbox.checked);
    });

    const link = document.createElement("a");
    link.href = `documents/${doc.file}`;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = doc.title;

    label.appendChild(checkbox);
    label.appendChild(link);
    li.appendChild(label);

    if (doc.attachNote) {
      const detail = document.createElement("div");
      detail.className = "detail";
      detail.textContent = doc.attachNote;
      li.appendChild(detail);
    }

    if (state[doc.id]) li.classList.add("done");

    list.appendChild(li);
  });

  sectionEl.appendChild(list);
  container.appendChild(sectionEl);
}

function resetAll() {
  if (!confirm("Reset all checked progress? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  init();
}

function init() {
  const state = loadState();
  renderSections(state);
  renderDocuments(state);
  updateProgress(state);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  document.getElementById("reset-btn").addEventListener("click", resetAll);
});
