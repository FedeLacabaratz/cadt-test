export const cadenaAleatoria = longitud => {
    const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let random = ""
    for (let i = 0; i < longitud; i++) {
        random += validLetters.charAt(Math.floor(Math.random() * validLetters.length))
    }
    return random
}