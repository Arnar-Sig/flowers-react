import { cache } from 'react'
import 'server-only'
 
export const preload = (id: string) => {
  void getStuff(id)
}
 
export const getStuff = cache(async (id: string) => {
  const res = await fetch('http://localhost:3000/api/search-flowers-table')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  console.log("HERE!")
  return res.json();
})