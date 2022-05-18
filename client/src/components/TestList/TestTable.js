import React from 'react'
import CardBlog from '../CardBlog/CardBlog'
function TestTable(props) {
  return (
      <div className="blog-wrap">
          {props.tests.map((test) => (
              <CardBlog key={test.id} name={test.name} numberQuestion={test.numberQuestion} test={test.test}
                  part={test.part} tag={test.tag} time={test.time}  _id={test._id}></CardBlog>
          ))}
      </div>
  )
}

export default TestTable