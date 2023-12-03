// src/App.js
import React, { useState } from 'react';
import Chart from './Chart';
import Recentemaillist from './Recentemaillist';
import TopMenu from './TopMenu';
import {FaCalendarAlt, FaWallet, FaClock, FaChartPie, FaMoneyBill,  FaCircle, FaDollarSign, FaDatabase, FaEye } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaUserCheck} from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { CardTitle } from 'react-bootstrap';


function NavSection() {

  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const cardDetails = [
    {
      iconLogo: <FaWallet />,
      countValue: '$143,432',
      description: 'your bank balance'
    },
    {
      iconLogo: <FaChartPie />,
      countValue: '64',
      description: 'Chart count'
    },
    {
      iconLogo: <FaUserCheck />,
      countValue: '7',
      description: 'Employees working today'
    },
    {
      iconLogo: <FaMoneyBill />,
      countValue: '$3,286.00',
      description: `This week's card spending`
    },
  ];

  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className={`conatiner-fluid`}>
      {/* <div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </div> */}
      {/* <div className='outer-wrapper'> */}

      {/* </div> */}
      <div className='container'>
        <div className='row'>

          <main className={`text-white col-sm-12 col-lg-9 col-12 m-auto`}>
            <div className=''>
              <div className='row'>
                <div className='px-2 fs-4 text-dark fw-bold my-2 d-none d-lg-block'>
                  welcome back, Arul!
                </div>
                {cardDetails.map((currentDetails, cardIndex) => (
                  <div className='col-sm-6 col-lg-3 col-6  p-1 '>
                    <Card key={cardIndex} className='pt-3 navy-blue-txt shadow'>
                      <CardTitle className='d-flex justify-content-between w-100 px-3'>
                        <div className='fs-3'>{currentDetails.iconLogo}</div>
                        <div className='fs-5 position-relative '>
                          <HiDotsVertical className='HiDotsVertical' style={{ cursor: 'pointer' }} onClick={() => toggleDropdown(cardIndex)} />
                          {openCardIndex === cardIndex && (
                            <div className="dropdown-content position-absolute rounded shadow">
                              {/* Dropdown content goes here */}
                                <div className='d-flex'>
                                  <div><FaDollarSign /></div>
                                  <div>make payment</div>
                                </div>
                                <div className='d-flex'>
                                  <div><FaDatabase /></div>
                                  <div>View balance details</div>
                                </div>
                                <div className='d-flex'>
                                  <div><FaEye /></div>
                                  <div>View account details</div>
                                </div>
                                
                                
                            </div>
                          )}

                        </div>
                      </CardTitle>
                      <Card.Body className='d-flex flex-column'>
                        <h4>{currentDetails.countValue}</h4>
                        <p className='fw-bold mb-0'>{currentDetails.description}</p>
                      </Card.Body>
                    </Card>
                  </div>
                ))}

              </div>
            </div>

            <div className=' mt-2'>
              <div className='row d-flex justify-content-evenly' id='char_wrapper'>
                <div className='col-12 col-lg-3 d-flex align-self-center'>
                  <div className='row w-100'>
                    <div className='col-6 col-lg-12 p-1'>
                      <Card className='navy-blue-txt'>
                        <CardTitle className='p-3 mb-0 fontsize15px fw-bold '>New clients</CardTitle>
                        <Card.Body className='d-flex justify-content-between pe-5'>
                          <h3 className='d-flex align-self-center'>54</h3>
                          <p className='bg-success d-flex align-self-center px-2 ms-2'>-18.7%</p>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='col-6 col-lg-12 p-1'>
                      <Card className='navy-blue-txt'>
                        <CardTitle className='p-3  mb-0 fw-bold fontsize15px'>Invoice overdude</CardTitle>
                        <Card.Body className='d-flex justify-content-between pe-5'>
                          <h2 className='d-flex align-self-center'>6</h2>
                          <p className='bg-danger  d-flex align-self-center px-2 ms-2'>+2.1%</p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
                {/* col-2 */}
                <div className='col-12 p-1 px-lg-2 col-lg-9'>
                  <Card className=''>
                    <Chart />
                  </Card>
                </div>
              </div>
            </div>

            <div className=' mt-2'>
              <div className='row'>
                <div className='col-12 p-1 px-lg-2'>
                  <Card className='pt-3'>
                    <Recentemaillist />
                  </Card>
                </div>
              </div>
            </div>
          </main>

          <aside className={`bg-light  container rounded-3 col-lg-3 col-12  border b-1 mt-1 pt-1 mb-5 pb-5`}>

            <div className='row' id='to-do_wrapper'>
              <div className='d-lg-block d-none'>
                <TopMenu />
              </div>
              <div className='col-12 m-auto col-lg-12'>

                <Card className='my-2 w-100'>
                  <Card.Body className='d-flex flex-column'>
                    <h4 className='p-0 m-0 fs-6 fw-bold'>Formation status</h4>
                    <p className='mb-0 fw-bold mb-2'>In progress</p>
                    <ProgressBar>
                      <ProgressBar className="rounded-5 light-purple-bg" now={80} />
                    </ProgressBar>
                    <div className='text-center my-1'>
                      <p className='fontsize11px mb-0 fw-bold'>Estimated processing</p>
                      <small>4-5 business days</small>
                    </div>
                    <Button className=" d-flex align-self-center fontsize11px light-purple-bg">View status</Button>
                  </Card.Body>
                </Card>
              </div>

              <div className='col-12 col-lg-12'>
                <div className='row'>
                  <div className='mb-3 mt-4 gap-2 col-12 col-sm-6 col-lg-12' id='to-do-list'>
                    <h5 className='fw-bold'>Your-to-Do-list</h5>
                    <div className='d-flex gap-3 mt-1' >
                      <div className='p-2 fs-5 rounded-circle bg-light d-flex align-self-center mb-4'><FaWallet /></div>
                      <div>
                        <h6>Run payroll</h6>
                        <p className='text-muted'>Mar 4 at 6:00 pm</p>
                      </div>
                    </div>
                    <div className='d-flex gap-3'>
                      <div className='p-2 fs-5  rounded-circle bg-light d-flex align-self-center mb-4'><FaClock /></div>
                      <div>
                        <h6>Run payroll</h6>
                        <p className='text-muted'>Mar 4 at 6:00 pm</p>
                      </div>
                    </div>
                    <div className='d-flex gap-3'>
                      <div className='p-2 fs-5  rounded-circle bg-light d-flex align-self-center mb-4'><IoDocumentTextSharp /></div>
                      <div>
                        <h6>Run payroll</h6>
                        <p className='text-muted'>Mar 4 at 6:00 pm</p>
                      </div>
                    </div>
                    <div className='d-flex gap-3'>
                      <div className='p-2 fs-5  rounded-circle bg-light d-flex align-self-center mb-4'><FaCalendarAlt /></div>
                      <div>
                        <h6>Run payroll</h6>
                        <p className='text-muted'>Mar 4 at 6:00 pm</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-lg-12'>
                    <Card className=''>
                      <Card.Body className='d-flex gap-1'>
                        <div style={{ fontSize: '12px' }}>
                          <FaCircle />
                        </div>
                        <div>
                          <h6 className='p-0 m-0'>Board meeting</h6>
                          <small className='p-0 text-muted'>Mar 22 at 6:00 pm</small>
                          <p className='text-muted fw-bold mt-2'>you have been invaited to attend a meeting of the Board Directors</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </aside>


        </div>
      </div>


    </div>
  );
}

export default NavSection;