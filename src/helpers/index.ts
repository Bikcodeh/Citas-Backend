export const generateId = (): string => {
    const numberRandom = Math.random().toString(32).substring(2);
    const date = Date.now().toString(32);
    return numberRandom + date;
}