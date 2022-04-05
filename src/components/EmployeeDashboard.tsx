import React from "react";
import {Employee} from "../model/Employee";

import "../css/styles.css"

interface Props {
    employees: Employee[]
}

const EmployeeDashboard: React.FC<Props> = ({employees}) => {

    function countSales(): number {
        let cnt: number = 0;
        for (let item of employees) {
            if (item.sale)
                cnt += parseFloat(String(item.sale));
        }
        return cnt;
    }

    return (
        <React.Fragment>
            <div className="flex-container">
                <div className="employee-count-box">
                    <div className="count-box-header">Employees count</div>
                    <div className="count-box-content">{employees.length}</div>
                </div>
                <div className="sales-count-box">
                    <div className="count-box-header">Sales count</div>
                    <div className="count-box-content">{employees.length > 0 ? countSales() : 0}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmployeeDashboard;