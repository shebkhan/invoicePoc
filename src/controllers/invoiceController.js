import invoiceModel from '../models/invoice.js';

class InvoiceController { 
    async getAllInvoices(req, res) {
        try {
            const invoices = await invoiceModel.find();
            res.status(200).json(invoices);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getSingleInvoice(req, res) {
        try {

            console.log(req.params.invoiceNumber);

            const invoices = await invoiceModel.find({
                invoiceNumber: req.query.invoiceNumber
            });
            res.status(200).json(invoices);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async   createInvoice(req, res) {
        try {

            const invoiceData = {
                invoiceNumber: 'INV-2025-003',
                date: new Date(),
                customerName: 'Acme Corp',
                amount: 3500,
                status: 'Paid'
            };
            


            const invoice = new invoiceModel(invoiceData);
            const savedInvoice = await invoice.save();
            res.status(200).json(savedInvoice);

            return savedInvoice;
        } catch (error) {
            res.status(200).json(error.message);
            throw error;
        }
    }

 
}

export default InvoiceController;