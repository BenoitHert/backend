import {FiEdit, FiList, FiBookOpen, FiCompass} from 'react-icons/fi'
import {BsMenuAppFill, BsFillCalendarDateFill, BsKanban} from 'react-icons/bs'
import {AiOutlineCalendar} from 'react-icons/ai'


export const links = [
    {
        name: 'Dashboard',
        icon: '' ,
        linkto: '/',
    },
    {
        name: 'Todo List',
        icon: <FiEdit /> ,
        linkto: '/todos',
    },
    {
        name: 'Menus',
        icon: <BsMenuAppFill /> ,
        linkto: '/menus',
    },
    {
        name: 'Agenda',
        icon: <BsFillCalendarDateFill /> ,
        linkto: '/agenda',
    },
    {
        name: 'Calendar',
        icon: <AiOutlineCalendar /> ,
        linkto: '/calendar',
    },
    {
        name: 'Editor',
        icon: <FiBookOpen /> ,
        linkto: '/editor',
    },
    {
        name: 'Shopping List',
        icon: <FiList/> ,
        linkto: '/shoplist',
    },
    {
        name: 'Kanban',
        icon: <BsKanban /> ,
        linkto: '/kanban',
    },
    {
        name: 'About',
        icon: <FiCompass /> ,
        linkto: '/about' ,
    },

]