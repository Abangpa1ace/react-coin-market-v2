import { QuoteListDefaultParams } from "@/constants/coin/list";
import { QuoteListRequestParams } from "@/types/coin/list";
import { create } from "zustand";

interface QuoteStoreType {
  requestParams: Omit<QuoteListRequestParams, 'page'>;
  getParamsVsCurrency: () => QuoteListRequestParams['vs_currency'];
  updateRequestParams: (nextParams: Partial<QuoteListRequestParams>) => void;
}

const useQuoteStore = create<QuoteStoreType>((set, get) => ({
  requestParams: QuoteListDefaultParams,
  getParamsVsCurrency: () => get().requestParams.vs_currency,
  updateRequestParams: (nextParams) =>
    set(({ requestParams }) => ({ requestParams: { ...requestParams, ...nextParams } }))
}))

export default useQuoteStore;