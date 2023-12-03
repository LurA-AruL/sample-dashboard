import React from 'react';
import {FaUser } from "react-icons/fa";
import Table from 'react-bootstrap/Table'

const Recentemaillist = () => {
  const data = [
    { user: <FaUser />, name: 'Hannah Morgan', status:'Meeting sheduled',time:'1:24 pm' },
    { user: <FaUser />, name: 'Megan Clack', status:'Updated on marketing campaign',time:'12:30 pm' },
    { user: <FaUser />, name: 'Ally James', status:'Updated on marketing campaign',time:'12:40 pm' },
  ];

  return (
    <>
    <Table responsive className='w-100'>
                <thead>
                    <h5 className='ms-2'>Recent Emails</h5>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id} className=' w-100 '>
                      <td className='w-25 text-nowrap py-3'><span className='bg px-2 py-2 rounded-circle  light-purple-bg me-4'>{item.user}</span>{item.name}</td>
                        <td className='w-25 text-nowrap py-3'>{item.status}</td>
                      <td className='w-25 text-nowrap text-center py-3'>{item.time}</td>
                    </tr>
                  ))}
                </tbody>
            </Table>
    </>
    
  );
};

export default Recentemaillist;