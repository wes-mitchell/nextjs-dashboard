import { CustomerField, InvoiceForm } from '@/app/lib/definitions';

export default function EditInvoiceForm({
    invoice,
    customers,
}: {
    invoice: InvoiceForm;
    customers: CustomerField[];
}) {
    return (
        <form>
            <input type="hidden" name="id" value={invoice.id} />
        </form>
    );
}