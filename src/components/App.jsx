import "../styles/index.scss"
import Recipes from "./Recipes"

import React from 'react'

const App = () => {
    return (
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Hello from React</h1>
            </section>
        </main>

        <Recipes />
        </>
    )
}

export default App