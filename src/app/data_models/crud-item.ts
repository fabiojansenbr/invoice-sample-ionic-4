export interface CRUDItem {
    id: number,
    title: string,
    value: string,
    modified: number
}

export const ITEMS_KEY = 'my-items';