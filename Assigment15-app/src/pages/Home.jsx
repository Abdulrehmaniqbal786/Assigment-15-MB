import React from 'react'
import { Navbar_Component } from '../components/Navbar_Components'
import TodoList, {} from '../components/TodoList'



const Home = () => {
    return (
        <div className='bg-bg_color h-[100dvh]'>

            <Navbar_Component/>


            <div className='px-3'>


                <div >
                    <TodoList/>


                </div>
            </div>



        </div>
    )
}

export { Home }