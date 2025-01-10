import express from 'express';
import InvoiceController from '../controllers/invoiceController.js';

const router = express.Router();
const invoiceController = new InvoiceController(); // No need to pass Invoice model

router.get('/list', invoiceController.getAllInvoices.bind(invoiceController));
router.post('/create', invoiceController.createInvoice.bind(invoiceController)); // Add this line
router.get('/invoice', invoiceController.getSingleInvoice.bind(invoiceController)); // Add this line

export default router;