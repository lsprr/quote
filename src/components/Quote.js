import React, { useState, useEffect } from 'react'

export default function Quote() {

    const API = 'https://api.quotable.io/random'

    const [quotes, setQuotes] = useState('')

    async function fetchData() {
        const response = await fetch(API)
        const data = await response.json()
        setQuotes(data)
    }

    useEffect(() => {
        fetchData()
        const interval = setInterval(fetchData, 7000)
        return (() => clearInterval(interval))
    }, [])

    return (
        <>
        <article>
            <blockquote>{quotes.content}</blockquote>
            <cite>{quotes.author}</cite>
        </article>
        </>
    )
}
