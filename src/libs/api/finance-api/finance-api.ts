import { useMutation, useQuery } from "@tanstack/react-query";
import { add_finance, get_finance } from "@zenra/controller";
import { getAuthenticated, postAuthenticated } from "@zenra/functions";
import { AxiosError } from "axios";

export const AddFinance = () => {
    const { mutate: addFinanceMutate } = useMutation({
        mutationFn: async (payload: any) => {
            const response = await postAuthenticated(add_finance, payload);
            return response.data;
        },
        onSuccess: (response: Response) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        addFinanceMutate,
    };
}

export const GetFinance = (isExecute: boolean) => {
    const fetch = async () => {
        const data = await getAuthenticated(get_finance);
        return data;
    };
    const { data: response, status, error } = useQuery({
        queryKey: ['get-finance'],
        queryFn: () => fetch(),
        enabled: isExecute,
    });
    return {
        response,
        status,
        error
    };
};