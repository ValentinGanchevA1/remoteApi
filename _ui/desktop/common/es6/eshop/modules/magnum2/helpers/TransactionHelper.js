import _ from "lodash";

export function transactionsToSelectOptions(transactions, descriptions) {
    return transactions && transactions.map(transaction => {
        const label =
            descriptions[transaction.factory + "_" + transaction.process + "_" + transaction.subType] ||
            descriptions[transaction.factory + "_" + transaction.process] ||
            descriptions[transaction.factory + "_" + transaction.subType] ||
            transaction.processDescription;

        const designationNumber = transaction.designationNumber ? " " + transaction.designationNumber : "";
        const processedLabel = _.template(label)({
            designationNumber: designationNumber,
            msisdn: transaction.number
        });
        return {
            value: transactionKey(transaction),
            label: processedLabel
        };
    });
}

export function transactionsToSelectOptionsForSimpleMobile(transactions, descriptions) {
    return transactions && transactions.map(transaction => {
        const label =
            descriptions[transaction.subType + "_" + transaction.factory + "_" + transaction.process] ||
            descriptions[transaction.factory + "_" + transaction.process] ||
            transaction.processDescription;

        const designationNumber = transaction.designationNumber ? " " + transaction.designationNumber : "";
        const processedLabel = _.template(label)({
            designationNumber: designationNumber,
            msisdn: transaction.number
        });
        return {
            value: transactionKey(transaction),
            label: processedLabel
        };
    });
}

export function transactionKey(transaction) {
    return transaction.number ? transaction.process + transaction.number : transaction.process;
}

export function findTransaction(possibleTransaction, selectedTransaction) {
    if (possibleTransaction.number && possibleTransaction.number !== "") {
        return possibleTransaction.process === selectedTransaction.process && possibleTransaction.number === selectedTransaction.number;
    } else {
        return possibleTransaction.process === selectedTransaction.process;
    }
}