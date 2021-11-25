import React from "react";
import Paper from "../../components/atoms/paper/Paper";
import Skeleton from "../../components/atoms/skeleton/Skeleton";
import { formatFinanceValue } from "../../utils/utils";
import { useFinance } from "./Finance-context";
import { getBalanceValues } from "./Finance-utils";

function FinancesBalanceCards() {
  const { totalEntries, totalExpenditure, balance, loading } = useFinance();
  return (
    <div className="flex-column gap-2">
      <h3>Balanços</h3>
      <div className="flex-row gap-2 flex-wrap">
        {getBalanceValues([totalEntries, totalExpenditure, balance]).map(
          ({ value, label }) => (
            <Paper
              key={label}
              classes={`p-4 border border-radius justify-center align-center flex-column `}
              style={{ flex: 1 }}
            >
              <h2 style={{ fontWeight: 400 }}>{label}</h2>
              {loading ? (
                <Skeleton classes="mt-1" style={{ width: 50 }} />
              ) : (
                <span
                  className={`${
                    value > 0
                      ? "success-typography"
                      : value < 0
                      ? "error-typography"
                      : ""
                  }`}
                >
                  {formatFinanceValue(value)}
                </span>
              )}
            </Paper>
          )
        )}
      </div>
    </div>
  );
}

export default FinancesBalanceCards;
