import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import md5 from 'md5';

// Function to get Gravatar URL based on email
const getGravatarURL = (email) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

const BlogTable = ({ posts }) => {
  const [sorting, setSorting] = useState([]);

  // Define columns with proper IDs and accessors
  const columns = [
    {
      id: 'serialNumber',
      header: 'Serial Number',
      cell: ({ row }) => row.index + 1,
    },
    {
      id: 'postTitle',
      header: 'Blog Title',
      accessorKey: 'post_title',
    },
    {
      id: 'blogOwner',
      header: 'Blog Owner',
      accessorKey: 'email',
    },
    {
      id: 'profilePicture',
      header: 'Profile Picture',
      accessorKey: 'image',
      cell: ({ getValue }) => (
        <img src={getValue()} alt='blog' className='w-10 h-10 rounded-full' />
      ),
    },
  ];

  // Initialize table instance with the actual data
 const table = useReactTable({
   data: posts,
   columns,
   state: {
     sorting,
   },
   onSortingChange: setSorting,
   getCoreRowModel: getCoreRowModel(),
   getSortedRowModel: getSortedRowModel(),
 });

  console.log('Columns:', columns);
  console.log('Table instance:', table);

  return (
    <table className='divide-x-2 divide-y-2 divide-royal-amethyst mt-12 mx-5 lg:mx-auto rounded-lg  border-r-2 border-r-royal-amethyst border-b-2 border-b-royal-amethyst'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className='px-6 py-3 text-left text-sm lg:text-base font-medium uppercase tracking-wider border-2 border-golden-saffron border-b-royal-amethyst'
                onClick={header.column.getToggleSortingHandler()}
              >
                {header.isSorted ? (
                  <span>
                    {header.column.getIsSorted() === 'desc' ? '🔽' : '🔼'}
                  </span>
                ) : null}
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className='divide-y divide-royal-amethyst'>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-2 border-royal-amethyst'
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogTable;
