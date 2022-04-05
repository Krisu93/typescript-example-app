import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Employee} from "../model/Employee";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css"

interface Props {
    regions:string[],
    employee: Employee,
    setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
    handleAdd: (e: React.FormEvent) => void;
}

const AddEmployee:React.FC<Props> = ({regions,employee, setEmployee, handleAdd}) => {

    //const regions: string[] = ["Asia", "Central Europe", "North Europe", "UK", "USA"];

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        switch (name) {
            case 'sale':
                if (value === '' || parseInt(value) === +value) {
                    setEmployee((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'department':
                if (value === '') {
                    setEmployee((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setEmployee((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
            <h4>Add Employee</h4>
            <Form className="form-row" onSubmit={handleAdd}>
                <div className="box">
                    <Form.Group controlId="name" className="div-employee">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="name"
                            value={employee.name}
                            placeholder="Enter name of employee"
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="region" className="div-department">
                        <Form.Label>Region</Form.Label>
                        <Form.Select
                            className="input-control"
                            onChange={(e) => handleChange(e)}
                            name="region"
                            value={employee.region}
                        >
                            <option value="" disabled selected>
                                -- select region --
                            </option>
                            {regions.map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="sale" className="div-sale">
                        <Form.Label>Sale</Form.Label>
                        <Form.Control
                            className="input-control "
                            type="number"
                            name="sale"
                            min="0"
                            value={employee.sale}
                            placeholder="Enter employee sale"
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                </div>
                <Button variant="success" type="submit" className="submit-btn">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddEmployee;