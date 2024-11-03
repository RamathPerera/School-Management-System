import React from 'react';

function TableHeader({ headers }) {
    return(
        <thead className="bg-purple-200 text-purple-900">
            <tr>
                {headers.map((header, index) => (
                    <th key={index} className="p-3">
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader;
