import { useState, useEffect } from 'react';  

function Company(props) {
    const { company, companies, setCompanies } = props;
    const [expanded, setExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(company.company_name);
    const [address, setAddress] = useState(company.company_address);
    const [contactId, setContactId] = useState(company.contact_id);

    const expandStyle = {
        display: expanded ? 'block' : 'none'
    };

    useEffect(() => {
        setName(company.company_name);
        setAddress(company.company_address);
        setContactId(company.contact_id);
    }, [company]);

    async function updateCompany(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost/api/companies/${company.company_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                company_name: name,
                company_address: address,
                contact_id: contactId,
            }),
        });

        if (response.ok) {
            const updatedCompany = await response.json();
            setCompanies((prevCompanies) =>
                prevCompanies.map((c) => (c.company_id === updatedCompany.company_id ? updatedCompany : c))
            );
            setIsEditing(false); 
        } else {
            console.error('Failed to update company');
        }
    }

    async function doDelete(e) {
        e.stopPropagation();

        const response = await fetch(`http://localhost/api/companies/${company.company_id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setCompanies(companies.filter((c) => c.company_id !== company.company_id));
        } else {
            console.error('Failed to delete company');
        }
    }

    return (
        <div className='company' onClick={() => setExpanded(!expanded)}>
            <div className='title'>
                <h3>Company Summary:</h3>
            </div>
            <div>
                {isEditing ? (
                    <form onSubmit={updateCompany}>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input
                            type='text'
                            value={contactId}
                            onChange={(e) => setContactId(e.target.value)}
                        />
                        <button className="button green" type='submit'>Update Company</button>
                        <button className="button red" type='button' onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                ) : (
                    <>
                        <p><span className="boldText">Company Name:</span> {company.company_name}</p>
                        <p><span className="boldText">Company Address:</span> {company.company_address}</p>
                        <p><span className="boldText">Contact ID:</span> {company.contact_id}</p>
                        <button className='button gray' onClick={() => setIsEditing(true)}>Edit Company</button>
                        <button className='button red' onClick={doDelete}>Delete Company</button>
                    </>
                )}
            </div>

            <div style={expandStyle}>
                <hr />
            </div>
        </div>
    );
}

export default Company;
