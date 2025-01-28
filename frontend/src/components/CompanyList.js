import Company from './Company';
import NewCompany from './NewCompany';

function CompanyList(props) {
    const { companies, setCompanies } = props;

    return (
        <div className='company-list'>
            <h2>Add New Company</h2>

            <NewCompany companies={companies} setCompanies={setCompanies} />

            <hr />

            {companies.map((company) => (
                <Company
                    key={company.company_id}
                    company={company}
                    companies={companies}
                    setCompanies={setCompanies}
                />
            ))}
        </div>
    );
}

export default CompanyList;
