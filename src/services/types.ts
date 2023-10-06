import { AxiosError } from 'axios';

type ResponseAttr<TData> = {
    statusCode: number;
    data: TData;
};

type ErrorAttr = AxiosError<{
    code: string;
    error: boolean;
    message: string;
}>;

export type { ErrorAttr, ResponseAttr }