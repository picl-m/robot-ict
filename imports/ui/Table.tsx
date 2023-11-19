import React from 'react';

interface TableProps {
    minCount: number;
    maxCount: number;
}

export const Table = (props: TableProps) => {
    const getDivisionString = (number: number) => {
        if (number % 3 == 0 && number % 5 == 0) {
            return("RobotICT");
        } else if (number % 3 == 0) {
            return("Robot");
        } else if (number % 5 == 0) {
            return("ICT");
        }
            
        return(number);
    }

    const list = [];
    for (let i = props.minCount; i <= props.maxCount; i++) {
        list.push(
            <tr key={i}>
                <td>{getDivisionString(i)}</td>
            </tr>
        )
    }

    return(
        <table>
            <tbody>
                {list}
            </tbody>
        </table>
    );
};