import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TableRow({ row, onEdit, onDelete }) {
    return (
        <tr className="text-center border-t hover:bg-purple-100">
            {Object.values(row).map((value, index) => (
                <td key={index} className="p-3">
                    {value}
                </td>
            ))}
            <td className="p-3 flex justify-center gap-2">
                <button onClick={onEdit} className="text-purple-700 hover:text-purple-900">
                    <FaEdit />
                </button>
                <button onClick={onDelete} className="text-red-600 hover:text-red-800">
                    <FaTrash />
                </button>
            </td>
        </tr>
    );
}

export default TableRow;
