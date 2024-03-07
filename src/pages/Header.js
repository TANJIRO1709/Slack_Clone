import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function Header() {
    return (
        <div className='flex justify-center py-4 bg-gray-500 h-14'>
            <span><KeyboardBackspaceIcon /></span>
            <span className='px-2'><EastIcon /></span>
            <span className='px-2'><QueryBuilderIcon /></span>
            <span className='px-2'><SearchIcon /></span><input placeholder='Search' tex className='bg-gray-400 text-black rounded-lg h-8 w-96 border-solid border-2 text-center'></input>
            <span className='absolute right-0'><HelpOutlineIcon /></span>
        </div>
    )
}

export default Header
