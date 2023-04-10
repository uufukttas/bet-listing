import { createContext, useState } from "react";

const SelectedBet = createContext();

export const SelectedBetProvider = ({ children }) => {
    const [selectedBetInfo, setSelectedBetInfo] = useState([]);

    const values = {
        selectedBetInfo,
        setSelectedBetInfo
    };

    return <SelectedBet.Provider value={values}>{children}</SelectedBet.Provider>
}

export default SelectedBet;