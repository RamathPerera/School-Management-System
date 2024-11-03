import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TableRowStudents({ row, onEdit, onDelete }) {
    return (
        <tr className="text-center border-t hover:bg-purple-100">
            <td className="p-3">{row.id}</td>
            <td className="p-3">{row.name}</td>
            <td className="p-3">{row.age}</td>
            <td className="p-3">{row.address}</td>
            <td className="p-3">{row.gender}</td>
            <td className="p-3">
                {row.birth_certificate ? (
                    <img
                        src={`http://localhost:5000/images/${row.birth_certificate}`}
                        alt="Birth Certificate"
                        className="w-20 h-20 object-cover rounded"
                    />
                ) : (
                    <span>No Image</span>
                )}
            </td>
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

export default TableRowStudents;
