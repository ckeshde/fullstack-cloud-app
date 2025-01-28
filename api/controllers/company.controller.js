const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

// Create a new company
exports.create = (req, res) => {
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contact_id: req.body.contact_id
    };

    Companies.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the company."
            });
        });
};

// Get all companies
exports.findAll = (req, res) => {
    Companies.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving companies."
            });
        });
};

// Get one company by ID
exports.findOne = (req, res) => {
    const id = req.params.companyId;

    Companies.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot find Company with id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Company with id=" + id
            });
        });
};

// Update one company by ID
exports.update = (req, res) => {
    const id = req.params.companyId;

    Companies.update(req.body, {
        where: { company_id: id },
        returning: true, 
    })
    .then(([num, updatedCompanies]) => { 
        if (num === 1) {
            res.send(updatedCompanies[0]); 
        } else {
            res.status(404).send({
                message: "Cannot update Company with id=" + id + ". Maybe it was not found or req.body is empty!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Company with id=" + id
        });
    });
};


// Delete one company by ID
exports.delete = (req, res) => {
    const id = req.params.companyId;

    Companies.destroy({
        where: { company_id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was deleted successfully!"
            });
        } else {
            res.send({
                message: "Cannot delete Company"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Company with id=" + id
        });
    });
};
