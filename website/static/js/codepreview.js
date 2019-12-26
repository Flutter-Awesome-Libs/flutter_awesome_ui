function renderCodePreviews() {
    let previewDivs = document.getElementsByClassName("code-preview");
    let execs = [];
    for (let i = 0; i < previewDivs.length; i++) {
        let current = previewDivs[i];
        let url = current.getAttribute("url");
        let title = current.getAttribute("title");
        let gistUrl = current.getAttribute("gist");
        let height = current.getAttribute("frameHeight");
        let text = current.getAttribute("text");

        let temp = document.createElement("div");
        temp.innerHTML =
            `<div style="height: auto; width: 100%; background-color: #ffffff; border-width: 1px; border-style: solid; border-color: #ebedf0">
                <iframe style="margin: 0px; width: 100%; height: ${height}" src="${url}"></iframe>
                <div style="width: 100%; display: flex; align-items: center; position: relative">
                    <div style="width: 100%; height: 1px; background-color: #ebedf0"></div>
                    <div class="code-preview-title">
                        ${title}
                    </div>
                </div>
                <div style="margin-top: 30px; font-size: 14px; padding-right: 40px; padding-left: 40px">
                    ${text}
                </div>
                <div style="display: flex; flex-direction: row; justify-content: flex-end; margin-top: 20px; margin-bottom: 20px; padding-right: 20px">
                    <a
                        href="${gistUrl}"
                        target="_blank"
                        class="gist-link">
                        View example source
                    </a>
                </div>
            </div>`;
        execs.push(() => {
            current.parentNode.replaceChild(temp.firstChild, current)
        })
    }

    execs.forEach(exec => {exec()});
}

document.addEventListener("DOMContentLoaded", () => {
    renderCodePreviews();
    document.body.style.opacity = "100%";
})