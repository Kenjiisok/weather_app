"use client"

import {AiOutlineSearch} from "react-icons/ai"

interface InputProps {
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
    setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({handleSearch, setLocation}: InputProps) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
        <input
            type="text"
            placeholder="Procure por uma cidade"
            className="w-full bg-transparent border-b-2 border-zinc-700 dark:border-zinc-200 outline-none text-zinc-950 dark:text-zinc-200 "
            onKeyDown={handleSearch}
            onChange={(e) => setLocation(e.target.value)}
        />
        <div className="ml-[-25px] text-zinc-700 cursor-pointer">
            <AiOutlineSearch fontSize={25} color={'gray'}/>
        </div>
    </form>
  )
}

export default Input