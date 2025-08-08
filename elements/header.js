class XHTMLHeaderElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const root = this;
        root.setAttribute("id", "rootElement");
        root.classList.add("fixed", "z-50", "block", "h-12", "w-full", "shadow-md", "dark:bg-dark-100", "bg-light-100", "dark:text-white");

        let left = document.createElement("div");
        left.setAttribute("id", "leftDivision");
        left.classList.add("h-12", "inline-flex", "flex-row", "gap-2", "justify-center", "items-center");

        let logo = document.createElement("div");
        let logoImage = document.createElement("img");
        logoImage.classList.add("col-span-1", "w-8", "h-8", "ml-2");
        logoImage.setAttribute("src", "https://xefili.dev/assets/Bucket Helper.svg");
        logoImage.setAttribute("alt", "Logo Image");

        let logoText = document.createElement("div");
        logoText.classList.add("col-start-2");
        let logoTextInner = document.createElement("span");
        logoTextInner.innerHTML = "Xefili.dev";
        logoTextInner.classList.add("font-circleBold", "font-black");


        let right = document.createElement("div");
        right.setAttribute("id", "rightDivision");
        right.classList.add("flex", "float-right", "h-12", "items-center", "justify-evenly");

        let api = document.createElement("xefili-navbar-link");
        api.setAttribute("data-xhref", "https://api.xefili.dev");
        api.setAttribute("data-xInnerText", "API");
        api.setAttribute("data-icon", "api");

        let blog = document.createElement("xefili-navbar-link");
        blog.setAttribute("data-xhref", "https://xefili.dev/blog.html");
        blog.setAttribute("data-xInnerText", "Blog");
        blog.setAttribute("data-icon", "chat");

        let docs = document.createElement("xefili-navbar-link");
        docs.setAttribute("data-xhref", "https://beta.xefili.dev");
        docs.setAttribute("data-xInnerText", "Documentation");
        docs.setAttribute("data-icon", "description");

        let tools = document.createElement("xefili-navbar-link");
        tools.setAttribute("data-xhref", "https://api.xefili.dev/tools.html");
        tools.setAttribute("data-xInnerText", "Tools");
        tools.setAttribute("data-icon", "construction");

        right.appendChild(api);
        right.appendChild(blog);
        right.appendChild(docs);
        right.appendChild(tools);

        logo.appendChild(logoImage);
        logoText.appendChild(logoTextInner);
        
        left.appendChild(logo);
        left.appendChild(logoText);

        root.appendChild(left);
        root.appendChild(right);
    }
}

class XHTMLNavbarLinkElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const root = this;

        let a = document.createElement("a");
        a.setAttribute("href", root.dataset.xhref);
        
        let aInner = document.createElement("span");
        aInner.classList.add("flex", "items-center", "font-circleBold", "mr-8");
        if(matchMedia("(width >= 48rem)").matches) {
            aInner.innerHTML = root.dataset.xinnertext+ '⠀';
        }
        let icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.innerHTML = root.dataset.icon;

        aInner.appendChild(icon);
        a.appendChild(aInner);
        root.appendChild(a);
    }
}



customElements.define("xefili-navbar-link", XHTMLNavbarLinkElement);
customElements.define("xefili-header", XHTMLHeaderElement);