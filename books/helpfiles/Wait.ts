export const waitFor = (milliseconds: number): Promise<void> => new Promise((resolve, _) => {
    setTimeout(resolve, milliseconds);
})