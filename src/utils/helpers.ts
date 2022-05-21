export const ScrollToSmooth = (id: string) => {
    const target = document.querySelector(id)
    target?.scrollIntoView({
            behavior: 'smooth'
        })
}