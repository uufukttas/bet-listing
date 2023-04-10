import React, { useContext, useEffect, useState } from 'react'
import SelectedBet from '../context/SelectedBet'

const Card = () => {
  const selectedBetData = useContext(SelectedBet);
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let sum = 0;

    selectedBetData.selectedBetInfo.forEach(bet => {
      sum += (bet.rate * 4)
    });

    setTotal(sum.toFixed(2));
  }

  useEffect(() => {
    getTotal();
  }, [selectedBetData])
  

  return (
    <div className='card-wrapper'>
      <ul>
        {
          selectedBetData.selectedBetInfo.map((bet, index) => {
            return (
              <>
                <li> 4 Kod: {bet.matchCode} Mac: {bet.match} <strong>Oran {bet.rate}</strong></li>
                <hr/>
              </>)
          })
        }
      </ul>
      <h3>Toplam Tutar: {total} TL</h3>
    </div>
  )
}

export default Card