define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.transactionsToSelectOptions = transactionsToSelectOptions;
    _exports.transactionsToSelectOptionsForSimpleMobile = transactionsToSelectOptionsForSimpleMobile;
    _exports.transactionKey = transactionKey;
    _exports.findTransaction = findTransaction;
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    function transactionsToSelectOptions(transactions, descriptions) {
        return transactions && transactions.map(function(transaction) {
            var label = descriptions[transaction.factory + "_" + transaction.process + "_" + transaction.subType] || descriptions[transaction.factory + "_" + transaction.process] || descriptions[transaction.factory + "_" + transaction.subType] || transaction.processDescription;
            var designationNumber = transaction.designationNumber ? " " + transaction.designationNumber : "";

            var processedLabel = _lodash.default.template(label)({
                designationNumber: designationNumber,
                msisdn: transaction.number
            });

            return {
                value: transactionKey(transaction),
                label: processedLabel
            };
        });
    }

    function transactionsToSelectOptionsForSimpleMobile(transactions, descriptions) {
        return transactions && transactions.map(function(transaction) {
            var label = descriptions[transaction.subType + "_" + transaction.factory + "_" + transaction.process] || descriptions[transaction.factory + "_" + transaction.process] || transaction.processDescription;
            var designationNumber = transaction.designationNumber ? " " + transaction.designationNumber : "";

            var processedLabel = _lodash.default.template(label)({
                designationNumber: designationNumber,
                msisdn: transaction.number
            });

            return {
                value: transactionKey(transaction),
                label: processedLabel
            };
        });
    }

    function transactionKey(transaction) {
        return transaction.number ? transaction.process + transaction.number : transaction.process;
    }

    function findTransaction(possibleTransaction, selectedTransaction) {
        if (possibleTransaction.number && possibleTransaction.number !== "") {
            return possibleTransaction.process === selectedTransaction.process && possibleTransaction.number === selectedTransaction.number;
        } else {
            return possibleTransaction.process === selectedTransaction.process;
        }
    }
});
//# sourceMappingURL=TransactionHelper.js.map