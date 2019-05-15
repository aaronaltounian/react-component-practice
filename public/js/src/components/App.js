function App(){
    return(<div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            {/*   <TopNav>   */}
            <TopNav user="KM1LKY"/>
            {/*   </TopNav>   */}

            {/*   <SideNav>   */}
            <SideNav />
            {/*   </SideNav>   */}
          </nav>
  
          <div id="page-wrapper">
  
              <div className="container-fluid">
  
                  
                  <div className="row">
                      <div className="col-lg-12">
                          <h1 className="page-header">
                              Dashboard <small>Statistics Overview</small>
                          </h1>
                          <ol className="breadcrumb">
                              <li className="active">
                                  <i className="fa fa-dashboard"></i> Dashboard
                              </li>
                          </ol>
                      </div>
                  </div>
                  <div className="row">
  
                    {/*   </Comments>   */}
                    <Comments commentCount='256' />
                    {/*   </Comments>   */}

                    {/*   <Tasks>   */}
                    <Tasks taskCount='29' />
                    {/*   </Tasks>   */}
  
                    {/*   <Orders>   */}
                    <Orders orderCount='666' />
                    {/*   </Orders>   */}
  
  
                    {/*   <Tickets>   */}
                    <Tickets ticketCount='12' />
                    {/*   </Tickets>   */}
  
  
  
  
                  </div>
                  
                    {/*   <AreaChart>   */}
                    <AreaChart />
                    {/*   </AreaChart>   */}
  
                  <div className="row">
  
  
                      {/*   <DonutChart>   */}
                    <DonutChart />
                      {/*   </DonutChart>   */}
  
  
                      <div className="col-lg-4">
                          {/*   <TasksPanel>   */}
                            <TasksPanel />
                          {/*   </TasksPanel>   */}
  
  
                      </div>
                      <div className="col-lg-4">
  
  
                          {/*   </TransactionsPanel>   */}
                            <TransactionsPanel />
                          {/*   </TransactionsPanel>   */}
  
                      </div>
                  </div>
                  
  
              </div>
              
  
          </div>
          
  
      </div>
      </div>)
}