export function start() {
    if (document.getElementById("clickbutton")) return
    const button = document.getElementById("mycoolbutton")
    const buttonParent = button.parentElement
    const usernameInput = document.createElement("input")
    const codeInput = document.createElement("input")
    const clickButton = document.createElement("img")
    usernameInput.placeholder = "Naam"
    codeInput.placeholder = "Code"
    clickButton.id = "clickbutton"
    clickButton.src = "https://aardrijkskundeleren.nl/wp-content/uploads/2025/09/AardrijkskundeLerenBannervid1short-50mb.gif"
    clickButton.style.cursor = "pointer"
    buttonParent.appendChild(usernameInput)
    buttonParent.appendChild(codeInput)
    buttonParent.appendChild(clickButton)
    clickButton.addEventListener("click", () => {
        let spelerNaam = usernameInput.value
        let spelerCode = codeInput.value
        console.log(supabase)
        (async () => {
            const { error } = await supabase.from("scores").insert([{
            username: spelerNaam,
            code: spelerCode,
            game: "Wereld Quiz",
            points: 1
        }])})();
    })
}
export default {
    start
}
