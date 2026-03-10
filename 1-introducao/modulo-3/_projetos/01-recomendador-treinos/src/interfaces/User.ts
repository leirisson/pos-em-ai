import {CompletedWorkout} from './CompletedWorkout'
export interface User {
  id: number
  name: string
  age: number
  weight: number
  goal: string
  level: string
  completedWorkouts: CompletedWorkout[]
}