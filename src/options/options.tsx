import React from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/tailwind.css'

const option = (
    <div>
        <h1 className="text-5xl bg-green-500">Option page</h1>
        <img src="banner.png"/>
    </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(option)