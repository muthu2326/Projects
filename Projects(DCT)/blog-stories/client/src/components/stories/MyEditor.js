import React from 'react'
 class MyEditor extends React.Component{
   constructor(props){
     super(props)
     this.state = {
       story: {}
     }
   }

   render(){
     return(
      <div class="container">
      <div class="row">
        <div class="col-sm-8">col-sm-8</div>
        <div class="col-sm-4">col-sm-4</div>
      </div>
      </div>
       )
   }
 }
 export default MyEditor