export default interface getApiResponse {
    data: dataArray[]
}

export interface dataArray {
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    rating: {
        count: number,
        rate: number
    },
    title: string
}