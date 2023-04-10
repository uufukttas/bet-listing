import React from 'react';
import './App.css';
import Bulletin from './components/Bulletin';
import Card from './components/Card';
import { BetListProvider } from './context/BetList';
import { SelectedBetProvider } from './context/SelectedBet';

const Main = () => {
  return (
    <BetListProvider>
      <SelectedBetProvider>
        <div className="bulletin-wrapper">
          <Bulletin />
          <Card />
        </div>
      </SelectedBetProvider>
    </BetListProvider>
  );
}

export default Main;
