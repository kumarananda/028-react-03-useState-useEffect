import React, { useState } from 'react'

const Input = () => {

    const [love , setlove] = useState('We love JS')
  return (
    <div className="contaner">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <inpty className="form-control" type="text"></inpty>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <h1></h1>
            </div>
        </div>
    </div>
  )
}

export default Input