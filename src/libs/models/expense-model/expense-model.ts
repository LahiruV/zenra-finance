export interface ExpensePayload {
    date: string;
    expenseType: string;
    amount: string;
}

export interface ExpenseMonthResponse {
    month: string;
    amount: number;
}

// export interface FinanceYearResponse {
//     year: string;
//     amount: number;
// }

// export interface FinanceCurrentWeekDailyResponse {
//     day: string;
//     amount: number;
// }