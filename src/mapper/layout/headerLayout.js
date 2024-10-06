export default {
    layout: [
        { name: "bankCode", positions: [1, 3] },
        { name: "batch", positions: [4, 7], default: "0000" },
        { name: "recordType", positions: [8, 8], default: "0" },
        { name: "cnpjCpf", positions: [9, 17] },
        { name: "companyType", positions: [18, 18] },
        { name: "companyNumber", positions: [19, 32] },
        { name: "agreementCode", positions: [33, 52] },
        { name: "agencyCode", positions: [53, 57] },
        { name: "agencyDV", positions: [58, 58] },
        { name: "accountNumber", positions: [59, 70] },
        { name: "accountDV", positions: [71, 71] },
        { name: "agencyAccountDV", positions: [72, 72] },
        { name: "companyName", positions: [73, 102] },
        { name: "bankName", positions: [103, 132] },
        { name: "cnab1", positions: [133, 142] },
        { name: "fileCode", positions: [143, 143] },
        { name: "fileGenerationDate", positions: [144, 151] },
        { name: "fileGenerationTime", positions: [152, 157] },
        { name: "sequentialFileNumber", positions: [158, 163] },
        { name: "layoutVersion", positions: [164, 166], default: "103" },
        { name: "density", positions: [167, 171] },
        { name: "reservedBank", positions: [172, 191] },
        { name: "reservedCompany", positions: [192, 211] },
        { name: "cnab2", positions: [212, 240] }
    ]
};
