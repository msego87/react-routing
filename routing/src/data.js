const invoices = [
    { name: "Alice", number: 1, amount: 150.75, due: "07/01/2024" },
    { name: "Bob", number: 2, amount: 200.00, due: "07/05/2024" },
    { name: "Charlie", number: 3, amount: 50.25, due: "07/10/2024" },
    { name: "David", number: 4, amount: 300.60, due: "07/15/2024" },
    { name: "Eve", number: 5, amount: 450.90, due: "07/20/2024" },
    { name: "Frank", number: 6, amount: 120.00, due: "07/25/2024" },
    { name: "Grace", number: 7, amount: 175.80, due: "07/30/2024" },
    { name: "Hank", number: 8, amount: 220.40, due: "08/01/2024" },
    { name: "Ivy", number: 9, amount: 310.70, due: "08/05/2024" },
    { name: "Jack", number: 10, amount: 95.50, due: "08/10/2024" },
];

export function getInvoices(){
    return invoices;
}

export function getInvoice(number) {
    return invoices.find((invoice) => invoice.number === number);
}

export function deleteInvoice(number) {
    invoices = invoices.filter((invoice) => invoice.number !== number); 
}