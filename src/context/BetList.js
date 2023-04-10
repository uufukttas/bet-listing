import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const BetList = createContext();

export const BetListProvider = ({ children }) => {
    const [betList, setBetList] = useState([]);

    useEffect(() => {
        getBetListData();
    }, []);

    const getBetListData = async () => {
        await axios('https://nesine-case-study.onrender.com/bets')
            .then(response => setBetList(response.data))
            .catch(error => console.log(error))
            .finally(() => console.log('Request completed.'));
    };

    return <BetList.Provider value={betList}>{children}</BetList.Provider>
}

export default React.memo(BetList);