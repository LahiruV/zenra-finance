import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainBaseLayout, RegLogLayout } from '@zenra/layouts';
import {
  Dashboard,
  Login,
  Register,
  Finance,
  FinanceForm,
  titleComponentFinanceList,
  titleComponentFinanceForm,
  titleComponentExpensesList,
  Expenses
} from '@zenra/pages';
import './styles/main.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const renderMainBaseLayout = (showSidebar: boolean, Component: React.FC, showTitlebar: boolean, titleComponent?: React.ReactNode,) => (
    <MainBaseLayout showSidebar={showSidebar} titleComponent={titleComponent} showTitlebar={showTitlebar}>
      <Component />
    </MainBaseLayout>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RegLogLayout>
                <Login />
              </RegLogLayout>
            }
          />
          <Route
            path="/register"
            element={
              <RegLogLayout>
                <Register />
              </RegLogLayout>
            }
          />
          <Route path="/dashboard" element={renderMainBaseLayout(true, Dashboard, false)} />
          <Route path="/new-home" element={renderMainBaseLayout(true, Dashboard, false)} />
          <Route path="/homes" element={renderMainBaseLayout(false, Dashboard, false)} />
          <Route path="/finance" element={renderMainBaseLayout(true, Finance, true, titleComponentFinanceList)} />
          <Route path='/newFinance' element={renderMainBaseLayout(true, FinanceForm, true, titleComponentFinanceForm)} />
          <Route path="/expenses" element={renderMainBaseLayout(true, Expenses, true, titleComponentExpensesList)} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;