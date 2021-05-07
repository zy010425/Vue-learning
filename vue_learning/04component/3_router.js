var router=new VueRouter({ 
    mode:"hash",
    routes:[ 
      {path:"/", component: Index}, 
      {path:"/details/:lid", component: Details,props:true},  
      {path:"/products", component: Products}, 
      {path:"*", component: Not_Found} 
  
    ] 
  
  })

