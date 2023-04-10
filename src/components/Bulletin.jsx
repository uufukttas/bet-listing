import React, { useContext } from 'react'
import data from '../data.js'
import SelectedBet from '../context/SelectedBet.js';
import BetList from '../context/BetList.js';
import Thead from './Thead.jsx';
import Tbody from './Tbody.jsx';


const Bulletin = () => {
    const betList = useContext(BetList); // Data is not coming!?.
    
    let bets = [];
    const getNewArr = () => {

        // betList.forEach((item, index) => {
        data.forEach((item, index) => {
            let betInfo = {}
            betInfo.D = item.D;
            betInfo.DAY = item.DAY
            betInfo.LN = item.LN
            betInfo.C = item.C
            betInfo.T = item.T
            betInfo.N = item.N

            Object.keys(item.OCG).forEach(element => {
                betInfo.MBS = item.OCG[element].MBS
            })

            Object.keys(item.OCG).forEach(element => {
                Object.keys((typeof item.OCG[element].OC !== 'undefined' ? item.OCG[element].OC : [])).forEach(rate => {
                    Object.keys(item.OCG[element].OC[rate].O).forEach((bet, k) => {

                        switch (rate) {
                            case "0":
                                betInfo['Home'] = item.OCG[element].OC[rate].O;
                                break;
                            case "1":
                                betInfo['Tip'] = item.OCG[element].OC[rate].O;
                                break;
                            case "2":
                                betInfo['Away'] = item.OCG[element].OC[rate].O;
                                break;
                            case "3":
                                betInfo['1-X'] = item.OCG[element].OC[rate].O;
                                break;
                            case "4":
                                betInfo['1-2'] = item.OCG[element].OC[rate].O;
                                break;
                            case "5":
                                betInfo['X-2'] = item.OCG[element].OC[rate].O;
                                break;
                            case "25":
                                betInfo['Bottom'] = item.OCG[element].OC[rate].O;
                                break;
                            case "26":
                                betInfo['Top'] = item.OCG[element].OC[rate].O;
                                break;
                            default:
                                break;
                        }
                    })
                })
            })

            bets.push(betInfo)
        })
    }

    getNewArr();

    return (
        <div className={`table`}>
            <table>
                <Thead />
                <Tbody bets={bets} />
            </table>
        </div >

    )
}

export default Bulletin

