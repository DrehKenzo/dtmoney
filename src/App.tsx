import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTranscationModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () =>{
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () =>{
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <TransactionsProvider>
        <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
        <Dashboard />

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </div>
  );
}
