import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Box,
  Divider,
  Typography,
} from '@mui/material';
import DashboardHeader from '../DashboardHeader';
import TransactionHistoryTable from '../TransactionHistoryTable';

const TransactionHistory: FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Box ref={parentRef}>
      <DashboardHeader title="Transaction History" />
      <TransactionHistoryTable
        {...fakeTrpcDashboardData}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        parentContainerRef={parentRef}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default TransactionHistory;

const fakeTrpcDashboardData = {
  error: false,
  data: [
    {
      amount: '1000 CNCT',
      lockDuration: '1 Month',
      "Date & Time": "27 Feb, 24 10:31",
      status: "Executed",
      actions: { transactionLink: "#" }
    },
    {
      amount: '2500 CNCT',
      lockDuration: '6 Months',
      "Date & Time": "07 Feb, 24 06:42",
      status: "Pending",
      actions: { transactionLink: "#" }
    },
    {
        amount: '500 CNCT',
        lockDuration: '1 Month',
        "Date & Time": "01 Feb, 24 04:22",
        status: "Pending",
        actions: { transactionLink: "#" }
    },
    {
      amount: '1300 CNCT',
      lockDuration: '3 Months',
      "Date & Time": "16 Feb, 24 03:32",
      status: "Executed",
      actions: { transactionLink: "#" }
    },
    {
      amount: '1000 CNCT',
      lockDuration: '1 Month',
      "Date & Time": "27 Feb, 24 10:31",
      status: "Executed",
      actions: { transactionLink: "#" }
    },
    {
      amount: '2500 CNCT',
      lockDuration: '6 Months',
      "Date & Time": "07 Feb, 24 06:42",
      status: "Pending",
      actions: { transactionLink: "#" }
    },
    {
      amount: '500 CNCT',
      lockDuration: '1 Month',
      "Date & Time": "01 Feb, 24 04:22",
      status: "Pending",
      actions: { transactionLink: "#" }
    },
    {
      amount: '1900 CNCT',
      lockDuration: '3 Months',
      "Date & Time": "16 Feb, 24 03:32",
      status: "Executed",
      actions: { transactionLink: "#" }
    },
    {
      amount: '1000 CNCT',
      lockDuration: '1 Month',
      "Date & Time": "27 Feb, 24 10:31",
      status: "Executed",
      actions: { transactionLink: "#" }
    },
    {
      amount: '2500 CNCT',
      lockDuration: '6 Months',
      "Date & Time": "07 Feb, 24 06:42",
      status: "Pending",
      actions: { transactionLink: "#" }
    },
    {
      amount: '500 CNCT',
      lockDuration: '1 Month',
      "Date & Time": "01 Feb, 24 04:22",
      status: "Pending",
      actions: { transactionLink: "#" }
    },
    {
      amount: '1300 CNCT',
      lockDuration: '3 Months',
      "Date & Time": "16 Feb, 24 03:32",
      status: "Executed",
      actions: { transactionLink: "#" }
    }
  ]
}