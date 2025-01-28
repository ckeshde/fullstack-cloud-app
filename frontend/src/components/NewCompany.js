import { useState } from 'react';

function NewCompany(props) {
    const { companies, setCompanies } = props;
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [contactId, setContactId] = useState('');

    async function createCompany(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_name: companyName,
                company_address: companyAddress,
                contact_id: contactId,
            }),
        });

        const data = await response.json();

        if (data.company_id) {
            setCompanies([...companies, data]);
        }

        setCompanyName('');
        setCompanyAddress('');
        setContactId('');
    }

    return (
        <form className='new-company' onSubmit={createCompany}>
            <input
                type='text'
                placeholder='Enter Company Name'
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
            />
            <input
                type='text'
                placeholder='Enter Company Address'
                onChange={(e) => setCompanyAddress(e.target.value)}
                value={companyAddress}
            />
            <input
                type='number'
                placeholder='Enter Contact ID'
                onChange={(e) => setContactId(e.target.value)}
                value={contactId}
            />
            <button className='button green' type='submit'>
                Create Company
            </button>
        </form>
    );
}

export default NewCompany;
