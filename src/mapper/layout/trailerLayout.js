export default {
    layout: [
        { name: "bankCode", positions: [1, 3], default: "001" }, 
        { name: "batch", positions: [4, 7], default: "9999" },
        { name: "recordType", positions: [8, 8], default: "9" }, 
        { name: "cnabExclusive1", positions: [9, 17] },
        { name: "totalBatches", positions: [18, 23] },
        { name: "totalRecords", positions: [24, 29] }, 
        { name: "totalAccountsReconciliation", positions: [30, 35] }, 
        { name: "cnabExclusive2", positions: [36, 240] }
    ]
};
