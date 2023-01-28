import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
const Sidebar = () => {
  const {isOpen, handleClose}= useContext(SidebarContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-gray-200 fixed top-0 right-0 h-full shadow-xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}>

      <div className='flex items-center justify-between py-6 border-b'>
        <div className=' uppercase text-sm font-semibold'>
          Shoping Bag (0)
        </div>
        <div onClick={handleClose} className=' cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
    </div>

  )
};

export default Sidebar;
