import React, { useContext } from 'react'
import SelectedBet from '../context/SelectedBet';

const Tbody = ({ bets }) => {
    const selectedBetData = useContext(SelectedBet);

    const handleClick = (event) => {
        if (!event.target.className) return;

        for (let name of event.target.parentElement.children) {
            if (name !== event.target && name.className.indexOf('active') > -1) {
                name.className = name.className.split(' ')[0];
            }
        }

        if (event.target.className.indexOf('active') === -1) {
            event.target.className += ' active'
        } else {
            event.target.className = event.target.className.split(' ')[0];
        }

        const selectedBets = document.querySelectorAll('.active')

        const selectedArr = [];
        selectedBets.forEach((item) => {
            const selected = {
                matchCode: item.parentElement.children[0].textContent.split(' ')[0],
                match: item.parentElement.children[0].textContent.split(' ')[2] + '-' + item.parentElement.children[0].textContent.split(' ')[4],
                rate: item.textContent
            }
            selectedArr.push(selected);

        })
        selectedBetData.setSelectedBetInfo(selectedArr);
    }

    return (
        <tbody>
            {

                bets.map((item, index) => (
                    <>
                        <tr>
                            <td>{item.D} {item.DAY} {item.LN}</td>
                            <td>Yorumlar</td>
                            <td></td>
                            <td>1</td>
                            <td>X</td>
                            <td>2</td>
                            <td>Alt</td>
                            <td>Ust</td>
                            <td>H1</td>
                            <td>1</td>
                            <td>X</td>
                            <td>2</td>
                            <td>H2</td>
                            <td>1-X</td>
                            <td>1-2</td>
                            <td>X-2</td>
                            <td>Var</td>
                            <td>Yok</td>
                            <td>+99</td>
                        </tr>
                        <tr onClick={handleClick}>
                            <td><strong>{item.C}</strong> {item.T} {item.N}</td>
                            <td>Yorumlar</td>
                            <td>{item.MBS}</td>
                            <td className={`${item.Home > 0 ? 'clickable' : ''}`}>{item.Home}</td>
                            <td className={`${item.Tip > 0 ? 'clickable' : ''}`}>{item.Tip}</td>
                            <td className={`${item.Away > 0 ? 'clickable' : ''}`}>{item.Away}</td>
                            <td className={`${item.Bottom > 0 ? 'clickable' : ''}`}>{item.Bottom}</td>
                            <td className={`${item.Top > 0 ? 'clickable' : ''}`}>{item.Top}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={`${item['1-X'] > 0 ? 'clickable' : ''}`}>{item['1-X']}</td>
                            <td className={`${item['1-2'] > 0 ? 'clickable' : ''}`}>{item['1-2']}</td>
                            <td className={`${item['X-2'] > 0 ? 'clickable' : ''}`}>{item['X-2']}</td>
                            <td></td>
                            <td></td>
                            <td>3</td>
                        </tr>
                    </>
                ))
            }
        </tbody>
    )
}

export default Tbody