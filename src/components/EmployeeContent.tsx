import React, { useState } from 'react';
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";
import EmployeeDashboard from "./EmployeeDashboard";
import {Employee} from "../model/Employee";

import "../css/styles.css"

interface Props{
    regions: string[]
}

const EmployeeContent:React.FC<Props> = ({regions}) => {

    const [employee, setEmployee] = useState<Employee>(new Employee());
    const [employees, setEmployees] = useState<Employee[]>([])

    const handleAdd = (e:React.FormEvent) => {
        e.preventDefault();

        if(employee){
            setEmployees((employee.id = Date.now(), [...employees, employee]));
            setEmployee(new Employee(Date.now(), "","",0))
        }
    }
    return (
        <div className="employee-container">
            <h1 className="header">Employee manager</h1>
            <EmployeeDashboard employees={employees} />
            <AddEmployee regions={regions} employee={employee} setEmployee={setEmployee} handleAdd={handleAdd}/>
            <EmployeeList regions={regions} employees={employees} setEmployees={setEmployees}/>
        </div>
    );
};

export default EmployeeContent;