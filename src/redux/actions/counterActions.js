import { DECREMENT, INCREMENT } from "../types";

export const increment = (number) => ({
          type: INCREMENT,
          payload:number
})

export const decrement = (number) => ({
          type: DECREMENT,
          payload:number
})

