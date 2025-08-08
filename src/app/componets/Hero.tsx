import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=" custom-container entire">
      {/* Sidebar */}
      <div className="sidebar flex flex-col space-y-3">
        <p className="sidebar-item dashboard-txt">Dashboard</p>
        <p className="sidebar-item">Transactions</p>
        <p className="sidebar-item">Report</p>
        <p className="sidebar-item">Settings</p>
      </div>

       <div className="hero-main">
      <div className="hero-header">
        <div className="left-hero-header">
        <h1>Wallet Ledger <img src="Icons/wallet-dropdown.svg" className='dropdownicon' alt="" /> 
         <img src="Icons/projectStatus.svg" id='statusBox' alt="" height={28} width={75}/>
        </h1>
         </div>
        <div className="right-hero-header">
        <img src="Icons/Sharebtn.svg" alt="" id='sharebtn' />
        <img src="Icons/optionsBtn.svg" alt="" />
        </div>
        </div>
        <div className="avartar-header-section">
            <div className="avatar-group">
            <img src="Icons/avartar-1.jpg" className="avatar"/>
            <img src="Icons/avartar-2.jpg" className="avatar"/>
            <img src="Icons/avartar-3.png" className="avatar"/>
            <img src="Icons/avartar-4.jpg" className="avatar"/>
         </div>
         <div className="avartar-names">Ava, Liam, Noah</div><div className="oth-avarter">+12 others</div>
        </div>
        <div className="overview-transaction">
          <div>Overview</div>
          <div>Transactions</div>

        </div>
       
      <div className="hero-body">
        <div className='summary-title'>Summary</div>
       <div className="summary-grid">
    <div className="summary-card">
      <div className="card-header">
        <p className="label">Total Balance</p>
        <span className="dots-abs"><img src="Icons/Union.svg" alt="" /></span>
      </div>
     
      <h2 className="value">$12,345</h2>
      <p className="change negative">−5%</p>
    </div>

    <div className="summary-card">
      <div className="card-header">
        <p className="label">Total Credits</p>
        <span className="dots-abs"><img src="Icons/Union.svg" alt="" /></span>
      </div>
      <h2 className="value">$7,890</h2>
      <p className="change positive">+3%</p>
    </div>

    <div className="summary-card">
      <div className="card-header">
        <p className="label">Total Debits</p>
        <span className="dots-abs"><img src="Icons/Union.svg" alt="" /></span>
      </div>
      
      <h2 className="value">$4,455</h2>
      <p className="change negative">−2%</p>
    </div>

    <div className="summary-card">
      <div className="card-header">
        <p className="label">Transactions</p>
        <span className="dots-abs"><img src="Icons/Union.svg" alt="" /></span>
      </div>
      <h2 className="value">150</h2>
      <p className="change positive">+10%</p>
    </div>
  </div>

        <table className="w-full table-fixed border-separate border-spacing-0">
  <thead>
    <tr>
      <th className="text-left w-[230px] heading-sum-data">Date</th>
      <th className="text-left px-6 py-3 heading-sum-data">Remark</th>
      <th className="text-left px-6 py-3 heading-sum-data">Amount</th>
      <th className="text-left px-6 py-3 heading-sum-data">Currency</th>
      <th className="text-left px-6 py-3 heading-sum-data">Type</th>
    </tr>
  </thead>
 <tbody>
  <tr>
    <td className="border-b border-gray-300  w-[230px]">2025-08-01</td>
    <td className="border-b border-gray-300 px-6 py-3">Salary</td>
    <td className="border-b border-gray-300 px-6 py-3">$3,000</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge credit">
    <span className="dot"></span>• Credit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-02</td>
    <td className="border-b border-gray-300 px-6 py-3">Groceries</td>
    <td className="border-b border-gray-300 px-6 py-3">-$150</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-03</td>
    <td className="border-b border-gray-300 px-6 py-3">Gym Membership</td>
    <td className="border-b border-gray-300 px-6 py-3">-$50</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-04</td>
    <td className="border-b border-gray-300 px-6 py-3">Dinner</td>
    <td className="border-b border-gray-300 px-6 py-3">-$40</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-05</td>
    <td className="border-b border-gray-300 px-6 py-3">Movie Tickets</td>
    <td className="border-b border-gray-300 px-6 py-3">-$30</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-06</td>
    <td className="border-b border-gray-300 px-6 py-3">Rent</td>
    <td className="border-b border-gray-300 px-6 py-3">-$1,200</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-07</td>
    <td className="border-b border-gray-300 px-6 py-3">Utilities</td>
    <td className="border-b border-gray-300 px-6 py-3">-$100</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-08</td>
    <td className="border-b border-gray-300 px-6 py-3">Car Payment</td>
    <td className="border-b border-gray-300 px-6 py-3">-$400</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>
<tbody>
  <tr>
    <td className="border-b border-gray-300 px-6 py-3 w-[500px]">2023-10-09</td>
    <td className="border-b border-gray-300 px-6 py-3">Insurance</td>
    <td className="border-b border-gray-300 px-6 py-3">-$200</td>
    <td className="border-b border-gray-300 px-6 py-3">USD</td>
    <td className="border-b border-gray-300 px-6 py-3">
  <span className="badge debit">
    <span className="dot"></span>• Debit
  </span>
</td>

  </tr>
</tbody>

  
</table>




      </div>
      
    </div>
    </div>

   
    </>

  )
}

export default Hero
