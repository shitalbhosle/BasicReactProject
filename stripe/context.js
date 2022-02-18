import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSiderbarOpen, setSiderbarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] })
    const openSidebar = () => {
        setSiderbarOpen(true)
    }
    const closeSidebar = () => {
        setSiderbarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider
        value={{
            isSubmenuOpen,
            isSiderbarOpen,
            openSubmenu,
            closeSubmenu,
            closeSidebar,
            openSidebar,
            location,
            page
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppContext;