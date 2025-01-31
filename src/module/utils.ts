export function sleep(ms: number): Promise<void> { return new Promise((resolve) => setTimeout(resolve, ms)) }

export function getRandomIntInRange(min: number, max: number): number { return Math.floor(Math.random() * (max - min + 1)) + min }
export function getRandomFloatInRange(min: number, max: number): number { return Math.random() * (max - min) + min }

export function shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))

        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
        // [array[i], array[j]] = [array[j], array[i]]
    }

    return array
}