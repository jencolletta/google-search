import { useState, useEffect } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const CONTEXT_KEY = process.env.NEXT_PUBLIC_CONTEXT_KEY

const SearchAPI = (term) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [term])
  return { data, loading }
}

export default SearchAPI
