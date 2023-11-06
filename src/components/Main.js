import React from 'react'

const Main = () => (
    <div>
        <main className='px-14 py-7  text-white'>
            <h1 className='m-0 text-4xl tracking-tighter'>Fun facts about React</h1>
            <ul className='list-disc marker:text-green marker:text-2xl pl-6 text-base mt-10 [&>*]:p-1'>
                <li>was first released in 2013</li>
                <li>was originally created by Jordan Walke</li>
                <li>has well over 100k stars on Github</li>
                <li>is maintained by facebook</li>
                <li>powers thousand of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    </div>
)

export default Main;