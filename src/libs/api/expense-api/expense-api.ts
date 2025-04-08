import { useMutation, useQuery } from "@tanstack/react-query";
import { add_expense, get_expense, get_this_monthly_expense_count } from "@zenra/controller";
import { getAuthenticated, postAuthenticated } from "@zenra/functions";
import { AxiosError } from "axios";

export const AddExpense = () => {
    const { mutate: addExpenseMutate } = useMutation({
        mutationFn: async (payload: any) => {
            const response = await postAuthenticated(add_expense, payload);
            return response.data;
        },
        onSuccess: (response: Response) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        addExpenseMutate,
    };
}

export const GetExpense = (isExecute: boolean) => {
    const fetch = async () => {
        const data = await getAuthenticated(get_expense);
        return data;
    };
    const { data: response, status, error } = useQuery({
        queryKey: ['get-expense'],
        queryFn: () => fetch(),
        enabled: isExecute,
    });
    return {
        response,
        status,
        error
    };
};

export const GetThisMonthlyExpensesCount = (isExecute: boolean) => {
    const fetch = async () => {
        const data = await getAuthenticated(get_this_monthly_expense_count);
        return data;
    };
    const { data: response, status, error } = useQuery({
        queryKey: ['get-this-monthly-expense-count'],
        queryFn: () => fetch(),
        enabled: isExecute,
    });
    return {
        response,
        status,
        error
    };
}