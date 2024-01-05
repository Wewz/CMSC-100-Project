import React, { useState, useEffect, useRef } from "react";
import PaginationButtons from "../pagination/paginationButton";
import { FcSalesPerformance } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { startOfWeek, differenceInWeeks } from 'date-fns';
import { FaCoins } from "react-icons/fa6";
import { FcInTransit } from "react-icons/fc";
import { SiAdafruit } from "react-icons/si";
import { LuBeef } from "react-icons/lu";
import SalesDetails from "./saleDetails";

const SalesReport = () => {

    const isInitialRender = useRef(true);

    const [sales, setSales] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [transactionToShow, setTransactionToShow] = useState(null);

    const [actionTaken, setActionTaken] = useState(false);
    const [transactions, setTransactions] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [salesPage, setSalesPage] = useState([]);
    const [pageStart, setPageStart] = useState(0);
    const [pageEnd, setPageEnd] = useState(5);
    
    const [monthsTemp, setMonthsTemp] = useState(
        [
            'All', 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ]
    );
    const [selectedWeek, setSelectedWeek] = useState('All');
    const [weeks, setWeeks] = useState(['All']);
    const [months, setMonths] = useState(['All']);
    const [uniqueYears, setUniqueYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    
    useEffect(() => {
        setTransactions(sales);
        const years = [...new Set(sales.map(obj => new Date(obj.approval).getFullYear()))];
        setUniqueYears(years);
    }, [sales]);
        
    const filterByYear = (year) => {
        setSelectedYear(year.toString());
        
        if (isNaN(year) || year === 'All') {
            setTransactions(sales);
            setMonths(['All']);
        } 
        else {
            const filteredDates = sales.filter(obj => new Date(obj.approval).getFullYear() === parseInt(year, 10));
            setTransactions(filteredDates);
    
            const availableMonths = [...new Set(filteredDates.map(obj => new Date(obj.approval).getMonth()))];
            const sortedMonths = ['All', ...availableMonths.map(month => monthsTemp[month + 1])].sort((a, b) => {
                if (a === 'All') return -1;
                if (b === 'All') return 1; 
                return monthsTemp.indexOf(a) - monthsTemp.indexOf(b);
            });
    
            setMonths(sortedMonths);
        }
    
        setSelectedMonth('All');
    };

    const getWeek = (date) => {
        const startOfISOWeek = startOfWeek(date, { weekStartsOn: 1 });
        const weekNumber = differenceInWeeks(date, startOfISOWeek) + 1;
        return weekNumber;
    };

    const getWeeksInMonth = (year, month, filteredDates) => {
        const weeksInMonth = new Set();
    
        filteredDates.forEach((obj) => {
            const approvalDate = new Date(obj.approval);
            const objYear = approvalDate.getFullYear();
            const objMonth = approvalDate.getMonth();
    
            if (objYear === year && objMonth === month) {
                const weekNumber = getWeek(approvalDate);
                weeksInMonth.add(weekNumber);
            }
        });
    
        return Array.from(weeksInMonth).sort((a, b) => a - b);
    };
    
    const filterByMonth = (month) => {
        setSelectedMonth(month);
    
        const filteredDates = sales.filter(obj => {
            const objYear = new Date(obj.approval).getFullYear().toString();
            const objMonth = new Date(obj.approval).toLocaleString('default', { month: 'long' });
    
            return objYear === selectedYear && (month === 'All' || objMonth === month);
        });
    
        const availableWeeks = getWeeksInMonth(parseInt(selectedYear), monthsTemp.indexOf(month) - 1, filteredDates);
        setWeeks(['All', ...availableWeeks]);
    
        setTransactions(filteredDates);
    };
    
    const filterByWeek = (week) => {
        setSelectedWeek(week);
    
        const filteredDates = sales.filter(obj => {
            const objYear = new Date(obj.approval).getFullYear();
            const objMonth = new Date(obj.approval).getMonth();
            const objWeek = getWeek(new Date(obj.approval));
    
            const isYearMatch = selectedYear === '' || objYear === parseInt(selectedYear, 10);
            const isMonthMatch = selectedMonth === 'All' || objMonth === monthsTemp.indexOf(selectedMonth) - 1;
            const isWeekMatch = week === 'All' || objWeek === parseInt(week, 10);
    
            return isYearMatch && isMonthMatch && isWeekMatch;
        });
    
        setTransactions(filteredDates);
    };
    

    useEffect(() => {
        
        if (selectedMonth == 'All') {
            setWeeks(['All']);
        }

    }, [selectedMonth]);

    useEffect(() => {

        setPageCount(Math.ceil(transactions.length / 5));
        setSalesPage(transactions.slice(pageStart, pageEnd));
    }, [transactions]);

    useEffect(() => {
        setSalesPage(transactions.slice(pageStart, pageEnd));
    }, [pageStart, pageEnd]);

    const fetchSales = async () => {
        try {
          const response = await fetch(`http://localhost:3001/get-transaction-using-status/${1}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
    
          if(!data.success) return;
    
          setSales(data.transactions);
    
        } catch (error) {
          console.error('Error fetching users:', error.message);
        }
    };

    useEffect(() => {
        fetchSales();
    }, []);
    
    useEffect(() => {
    
        if(!actionTaken) return;

        fetchSales();
        setActionTaken(false);
    }, [actionTaken]);

    const handleShowDetails = (current) => {
        setTransactionToShow(current)
        setShowDetails(true);
    }
    
    const handlePageClick = (event) => {
        setPageEnd((event.selected + 1) * 5);
        setPageStart(((event.selected + 1) * 5) - 5);
    }

    const handleDate = (dateString) => {
        const parsedDate = new Date(dateString);
        const formattedDate = parsedDate.toLocaleDateString();

        const dateParts = formattedDate.split('/');

        const dayString = dateParts[1];
        const yearString = dateParts[2];
        const monthNumber = parseInt(dateParts[0], 10);

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const monthName = monthNames[monthNumber - 1];

        return monthName + " " + dayString + ", " + yearString;
    }

    const handleWeek = (week) => {

        if(week === 'All') return week;
        else if(parseInt(week) === 1) return "1st Week";
        else if (parseInt(week) === 2) return "2nd Week";
        else if (parseInt(week) === 3) return "3rd Week"
        else return week + "th Week";
    }

    const getRevenue = () => {
        var revenue = 0;
    
        for (let i = 0; i < transactions.length; i++) {
   
            if (transactions[i].product && transactions[i].product.price) {
                revenue += (transactions[i].product.price * transactions[i].quantity);
            }
        }
    
        return revenue;
    }

    const getItemsSoldCount = () => {
        var count = 0;

        for (let i = 0; i < transactions.length; i++) {
   
            if (transactions[i].quantity) {
                count += transactions[i].quantity;
            }
        }

        return count;
    }

    const getPoultryPercentage = () => {
        var percentage = 0, count = 0, total = 0;

        for (let i = 0; i < transactions.length; i++) {
   
            if (transactions[i].quantity) {

                if(transactions[i].product.ptype === 2) {
                    count += transactions[i].quantity;
                }

                total += transactions[i].quantity;
            }
        }

        return ((count / total) * 100).toFixed(2);
    }

    const getCropsPercentage = () => {
        var percentage = 0, count = 0, total = 0;

        for (let i = 0; i < transactions.length; i++) {
   
            if (transactions[i].quantity) {

                if(transactions[i].product.ptype === 1) {
                    count += transactions[i].quantity;
                }

                total += transactions[i].quantity;
            }
        }

        return ((count / total) * 100).toFixed(2);
    }

    return(
      <div className="flex w-[80%] flex-col px-28 pt-16 justify-center items-center pb-28">

        <div className="flex items-center border-b border-[#2D4944] mb-16 w-[90%] relative">

          <Link to="/" className="flex"> 
              <div className="flex text-white bg-[#2D4944] font-semibold gap-2 cursor-pointer mb-3 absolute bottom-0 left-0 p-2 text-xs rounded-xl hover:bg-[#dadada] justify-center items-center">
                  <FaArrowLeftLong size={15} />
                  Dashboard
              </div>
          </Link>

          <h1 className="text-[#2D4944] ml-28 p-4 font-bold text-4xl">Sales Report</h1>

          <div className="flex gap-x-3 text-sm mt-5 absolute right-0 mb-10">
              <div className="flex gap-x-3 text-sm mt-5 mb-3">
                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-xs text-[#2D4944] font-bold">Filter by Year:</h2>
                        <select className="p-2 bg-white text-[#2D4944] border border-[#2D4944] rounded-xl w-32" 
                            id="yearDropdown" value={selectedYear} onChange={(e) => filterByYear(parseInt(e.target.value))}>

                            <option value="" >All</option>
                            
                            {uniqueYears.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}

                        </select>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-xs text-[#2D4944] font-bold">Filter by Month:</h2>
                        <select className="p-2 bg-white text-[#2D4944] border border-[#2D4944] rounded-xl w-32" id="monthDropdown" value={selectedMonth} onChange={(e) => filterByMonth(e.target.value)}>
                            {months.map((month, index) => (
                                <option key={index} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <h2 className="text-xs text-[#2D4944] font-bold">Filter by Week:</h2>
                        <select className="p-2 bg-white text-[#2D4944] border border-[#2D4944] rounded-xl w-32" id="weekDropdown" value={selectedWeek} onChange={(e) => filterByWeek(e.target.value)}>
                            {weeks.map((week, index) => (
                                <option key={index} value={week}>
                                    {handleWeek(week)}
                                </option>
                            ))}
                        </select>
                    </div>
              </div>
          </div>
          
        </div>

        <div className="w-[90%] flex justify-center content-center items-center gap-x-5 mb-20">
            
            <div className="w-[20%] h-64 border border-[#2D4944] p-4 rounded-xl flex flex-col justify-center items-center text-center">

                <div>
                    <FcSalesPerformance size={120}/>
                </div>

                <div>
                    <div className="text-xl text-[#7e7e7e]">
                        Total Revenue:
                    </div>

                    <div className="text-2xl font-bold text-[#2D4944]">
                        ₱{getRevenue()}.00
                    </div>
                </div>

            </div>

            <div className="w-[25%] flex flex-col gap-y-4">
                <div className="w-full border border-[#2D4944] p-4 rounded-xl gap-y-4 flex flex-col justify-center items-center">

                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-4 text-white bg-[#f43f5e]">
                            <LuBeef size={50} />
                        </div>

                        <div className="flex flex-col">
                            <div className="text-4xl font-bold text-[#f43f5e]">
                                %{getPoultryPercentage()}
                            </div>

                            <div className="text-lg text-[#7e7e7e]">
                            Poultry Products
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-full border border-[#2D4944] p-4 rounded-xl gap-y-4 flex flex-col justify-center items-center">

                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-4 text-white bg-[#14b8a6]">
                            <SiAdafruit size={50} />
                        </div>

                        <div className="flex flex-col">
                            <div className="text-4xl font-bold text-[#14b8a6]">
                                %{getCropsPercentage()}
                            </div>

                            <div className="text-lg text-[#7e7e7e]">
                            Poultry Products
                            </div>
                        </div>

                    </div>

                </div>

                
            </div>

            <div className="w-[20%] h-64 border border-[#2D4944] p-4 rounded-xl flex flex-col justify-center items-center text-center">

                <div>
                    <FcInTransit size={120}/>
                </div>

                <div>
                    <div className="text-xl text-[#7e7e7e]">
                        Product Sold:
                    </div>

                    <div className="text-2xl font-bold text-[#2D4944]">
                        {getItemsSoldCount()}
                    </div>
                </div>

            </div>

        </div>

        <div className="w-[90%] mb-8 border-b border-[#2D4944] rounded-l-xl">
            <div className="w-36 p-2 text-white rounded-xl bg-[#2D4944] flex justify-center">
                Products Sold
            </div>
        </div>

        <div className="w-[90%] flex flex-col justify-center content-center items-center gap-y-5">
                {salesPage.map((sales) => (
                    <div key={sales.tid} className="w-full">
                        <div className="bg-white border border-[#2D4944] rounded-2xl flex items-center text-center justify-center p-5 font-bold text-sm">


                            <div className="flex flex-col text-[#e7ca10] items-center justify-center w-[5%]">
                                <FaCoins size={40}/>
                            </div>
                            

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Transaction ID: </p>
                                <p className="truncate">{sales.tid}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Ordered Product: </p>
                                <p className="truncate">{sales.product.ptitle}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Total Amount: </p>
                                <p className="truncate">₱{sales.quantity * sales.product.price}.00</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Date of Approval: </p>
                                <p className="truncate">{handleDate(sales.approval)}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[17%]">
                                <p className="text-[#c1c1c1]">Quantity: </p>
                                <p className="truncate">{sales.quantity}</p>
                            </div>

                            <div className="w-[10%]">
                                <div className="flex text-white bg-[#2D4944] cursor-pointer p-2 text-xs rounded-xl hover:bg-[#50726b] justify-center items-center w-[90%]"
                                onClick={(e) => handleShowDetails(sales)}>
                                    View Details
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
                <PaginationButtons pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
            <SalesDetails showDetails={showDetails} setShowDetails={setShowDetails} transactionToShow={transactionToShow} />
        </div>
    );
}

export default SalesReport;