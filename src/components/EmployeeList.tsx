import React from 'react';
import {Employee} from "../model/Employee";
import EmployeeCard from "./EmployeeCard";

import "../css/styles.css"

interface Props {
    regions:string[];
    employees: Employee[],
    setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

const EmployeeList: React.FC<Props> = ({regions,employees, setEmployees}) => {

    return (
        <React.Fragment>
            <div className="employee-box">
                <h4>Employee List</h4>
                <div className="employee-list">
                    {employees &&
                    employees.map((employee: Employee) => (
                        <EmployeeCard key={employee.id} regions={regions} employee={employee} employees={employees}
                                      setEmployees={setEmployees}/>
                    ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmployeeList;