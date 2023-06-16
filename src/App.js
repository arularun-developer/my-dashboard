import React, { useState } from "react";
import "./App.css"
function App() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

      
  return (
    <div className="App">
  
      <section id="sidebar"  className={isActive ? 'hide': null} >
        <a href="#" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">AdminPanel</span>
        </a>
        <ul class="side-menu top">
          <li class="active">
            <a href="#">
              <i class='bx bxs-dashboard' ></i>
              <span class="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-shopping-bag-alt' ></i>
              <span class="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-doughnut-chart' ></i>
              <span class="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-message-dots' ></i>
              <span class="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-group' ></i>
              <span class="text">Team</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#">
              <i class='bx bxs-cog' ></i>
              <span class="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="logout">
              <i class='bx bxs-log-out-circle' ></i>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
     
      <section id="content">
       
        <nav>
          <i  class='bx bx-menu'  onClick={toggleClass}  ></i>
          <a href="#" class="nav-link">Categories</a>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="button" class="search-btn"><i class='bx bx-search' ></i></button>
            </div>
          </form>
          <a href="#" class="notification">
            <i class='bx bxs-bell' ></i>
            <span class="num">5</span>
          </a>
          <a href="#" class="profile">
            <img src="https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg" />
          </a>
        </nav>
      
        <main>
          <div class="head-title">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i class='bx bx-chevron-right' ></i></li>
                <li>
                  <a class="active" href="#">Home</a>
                </li>
              </ul>
            </div>
            <a href="#" class="btn-download">
              <i class='bx bxs-cloud-download' ></i>
              <span class="text">Download PDF</span>
            </a>
          </div>

          <ul class="box-info">
            <li>
              <i class='bx bxs-calendar-check' ></i>
              <span class="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i class='bx bxs-group' ></i>
              <span class="text">
                <h3>2836</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <i class='bx bxs-dollar-circle' ></i>
              <span class="text">
                <h3>$2533</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>


          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Recent Orders</h3>
                <i class='bx bx-search' ></i>
                <i class='bx bx-filter' ></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ImhOn08eaKUBOXrpTvQuBkA6-NgPoKfsaYdIe4qKuQ&s"/>
                      <p>Angle</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"/>
                      <p>Johny</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRzkEEVtiPqqpsIeWxJzt-6pieZh0gl5wWncL3yQA1XDIZKWtEcYwAvp5qwbMnDWOAQI&usqp=CAU"/>
                      <p>Alex</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status process">Process</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraQqd74PWQiILjbnCfSYDPwxPxzaucoJ2XXzN9uCfhtnm-JbJLtodtN91LHMutEewcxE&usqp=CAU"/>
                      <p>Isabella</p>
                    </td>
                    <td>01-10-2023</td>
                    <td><span class="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=740"/>
                      <p>Rose</p>
                    </td>
                    <td>01-11-2023</td>
                    <td><span class="status completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>    
            <div class="todo">
              <div class="head">
                <h3>Todos</h3>
                <i class='bx bx-plus'></i>
                <i class='bx bx-filter' ></i>
              </div>
              <ul class="todo-list">
                <li class="completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded'></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded'></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded'></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded'></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class='bx bx-dots-vertical-rounded'></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
       
      </section>
     
    </div>
  );
}

export default App;