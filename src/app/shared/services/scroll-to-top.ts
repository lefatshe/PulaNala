export function scrollWindowToTop() {
    return window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}