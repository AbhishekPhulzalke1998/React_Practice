import React from 'react'
import {data,data1} from './Parent'

function Child3() {
  return (
    <div>
           <data.Consumer>
                        {
                             (varible) =>
                                {
                                   return(

                                    <data1.Consumer>
                                      {
                                        (variable1) =>{
                                          return(
                                            <>
                                            <h1>Context API Example</h1>
                                            <h4>Here We will pass data from parent componet to last child component by 
                                              bypasing middle child components
                                            </h4>
                                               <h1>The Name is: {varible}</h1>
                                               <h1>The Name is: {variable1}</h1>
                                               <hr></hr>
                                               </>
                                          )
                                        }
                                      }
                                    </data1.Consumer>
                                  
                                    
                                   )
                                }
       
                        }
           </data.Consumer>
    </div>
  )
}

export default Child3
