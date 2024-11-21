import React from 'react'
import Prop4 from './Prop4'

const Prop3 = () => {

  let course = {
                Name : "Java",
                Fees : "40000",
                Duration : "6 months",
                Institute : "Naresh IT"
  }


  return (
    <div>
         <Prop4 std = {course} />
    </div>
  )
}

export default Prop3
