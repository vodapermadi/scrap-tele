import Layouts from '@/components/Layouts';
import React from 'react';

const dataScrap = () => {
  const data = [
    {
      username: 'sumanto siswanto',
      firstName: 'siswanto',
      lastName: 'sumanto',
      online: '5 menit ago',
    },
    {
      username: 'sumardi karjono',
      firstName: 'karjono',
      lastName: 'sumardi',
      online: '29 menit ago',
    },
  ];

  return (
    <>
      <Layouts>
        <table className="table p-2">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Online</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.username}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.online}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layouts>
    </>
  );
};

export default dataScrap;
