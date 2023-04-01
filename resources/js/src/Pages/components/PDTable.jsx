import { classNames } from '@/src/components/Classes';
import React from 'react'

function PDTable({children}) {
  return (
    <div className={classNames("overflow-auto  w-full rounded-lg", "border border-gray-200 shadow ")}>
      <table className={classNames("w-full border-collapse", "bg-white text-left", "text-sm text-gray-500 ")}>
        {children}
      </table> 
    </div> 
  );
}

PDTable.Header = ({children}) => (
    <thead className="bg-gray-200">
        <tr>{children}</tr>
    </thead>
);

PDTable.Theader = ({children, className}) => (
    <th scope="col" className={classNames("px-6 py-4 text-gray-900 uppercase ", className)}>
        {children}
    </th>
);

PDTable.TBody = ({children}) => (
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {children}
    </tbody>
);

PDTable.TBodyRow = ({children}) => (
    <tr className="hover:bg-gray-50 ">
        {children}
    </tr>
);

PDTable.TBodyColumn = ({children, className}) => (
    <td className={classNames(className)}>
        {children}
    </td>
)

export default PDTable