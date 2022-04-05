import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import {Employee} from "../model/Employee";

type Props = {
    regions: string[],
    employee: Employee,
    employees: Employee[],
    setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

const EmployeeCard = ({regions, employee, employees, setEmployees}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editEmployee, setEditEmployee] = useState<Employee>(employee);

    const handleRemove = (id: number | undefined) => {
        setEmployees(employees.filter((employee) => employee.id !== id))
    }

    const handleEdit = (event: React.FormEvent, id: number | undefined) => {
        event.preventDefault();

        const filteredEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees([editEmployee, ...filteredEmployees])
        setEdit(false);
    }

    return (
        <form>
            <Card style={{width: '14rem'}} className="employee">
                <Card.Body>
                    {edit ? (
                        <>
                            <Card.Title className="employee-title">
                                <input
                                    className="input-edit card-input-name"
                                    defaultValue={editEmployee.name}
                                    onChange={(e) => {
                                        editEmployee.name = e.target.value;
                                        setEditEmployee(editEmployee)

                                    }}/></Card.Title>
                            <div className="employee-details">
                                <span>Region: </span>
                                <select
                                    className="select-option-edit"
                                    name="region"
                                    defaultValue={editEmployee.region}
                                    onChange={(e) => {
                                        editEmployee.region = e.target.value;
                                        setEditEmployee(editEmployee)
                                    }}>
                                    <option value="default" disabled>
                                        Choose region
                                    </option>
                                    {regions.map((value, index) => (
                                        <option key={index} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                                <span>Sale:
                                    <input
                                        className="input-edit card-input-sale" type="number"
                                        defaultValue={editEmployee.sale}
                                        onChange={(e) => {
                                            editEmployee.sale = Number(e.target.value);
                                            setEditEmployee(editEmployee)
                                        }}/>
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <Card.Title className="employee-title">{employee.name}</Card.Title>
                            <div className="employee-details">
                                <div>Region: {employee.region}
                                </div>
                                <div>Sale: {employee.sale}
                                </div>
                            </div>
                        </>
                    )}
                    {
                        edit ? (
                            <Button
                                variant="warning"
                                onClick={(e) => {
                                    if (edit) {
                                        handleEdit(e, editEmployee.id);
                                    }
                                }}>Save
                            </Button>
                        ) : (
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setEdit(true)
                                }}>Edit
                            </Button>)}{' '}
                    <Button variant="danger" onClick={() => handleRemove(employee.id)}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </form>
    )
}

export default EmployeeCard;