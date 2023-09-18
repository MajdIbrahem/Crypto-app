import React from 'react'
import TableComponent from '../components/TableComponent'
import Filter from '../components/Filter'

const Crypto = () => {
    return (
        <section className='w-screen h-screen flex flex-col mt-16 mb-24  content-center items-center  '>
            <Filter></Filter>
            <TableComponent></TableComponent>

            
        </section>
    )
}

export default Crypto