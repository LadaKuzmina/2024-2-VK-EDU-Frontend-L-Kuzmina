export const createElement = (tagName, className) => {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    return element;
}