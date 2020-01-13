import React from 'react'
 class Story extends React.Component{
   constructor(props){
     super(props)
     this.state = {
       story: {}
     }
   }

   render(){
     return(
      <div className="container border">
      <div className="row" >
        <div className="col-sm-8 offset-2 border">

            <div className="row border">
                <div className="col-sm-4 ">
                    <h3 className="m-2 float-left">Add Story</h3>
                </div>
                <div className="col-sm-4 " >
                    <button className="float-right m-2">Publish</button>
                    <input type='text' />
                </div>
            </div>

            <div className="row border">
                <div className="col-sm-12 border ">
                    <form className="border">
                        <label>Name</label>
                        <input type='text' />
                        <select>
                            <option>select</option>
                        </select>
                        <input type='submit' value='submit' />
                    </form>
                    </div>
                </div>
                               
                 {/* <form>
                     <div className="form-group" >
                         <label htmlFor="Topic">Topic</label>
                         <input type="text" className="form-control form-control-plaintext"  id="topic" placeholder="Write Topic" />
                     </div>
                     <div className="form-group">
                         <label htmlFor="Topic">Title</label>
                         <input type="text" className="form-control" id="title" placeholder="Write Title" />
                     </div>
                     <div className="form-group">
                         <label htmlFor="exampleFormControlSelect1">Body</label>
                         <textarea className="form-control w-200px" id="body" cols="300" rows="10" />
                     </div>
                     <div className="form-group">
                         <label htmlFor="imageFile">Browse Image</label>
                         <input type="file" className="form-control-file" id="imageFile" />
                     </div> 
                     </form>             */}
                     {/* <form>
                         <label>Name</label>
                         <image href="" />
                         <select>
                             <option>select</option>
                         </select>
                         <input type='submit' value='submit' className='p-5' />
                     </form> */}
                    
         </div>

         </div></div>
      
       )
   }
 }

 export default Story