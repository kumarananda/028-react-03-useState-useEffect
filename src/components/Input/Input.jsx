
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Input.css'

const Input = () => {

    const [love , setlove] = useState('We love JS')
  return (
      <>
          <div className="container  mt-4">
        <div className="row">
            <div className="col-md-4">
                <div className="card ">
                    <div className="card-header">
                    <h3>Input Form 1</h3>
                    </div>
                    
                    <div className="card-body">
                        <form action="">
                            <div className="my-3">
                                <label htmlFor="">Name</label>
                                <input className="form-control" value={love} onChange={e => setlove(e.target.value)} type="text"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <h4>{love}</h4>
            </div>
        </div>
    </div>
    
      </>

  )
}

export default Input


export const InputForm = ( ) => {

    const [name , setName] = useState('Ananda Kumar Saha')
    const [email , setEmail] = useState('anandaxyz@gmail.com')
    const [cell , setCell] = useState('+880-1913xxxxxxxx')
    const [uname , setUname] = useState('ananda67')

    return (
        <>
            <div className="container  mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card   ">
                            <div className="card-header">
                                <h3>Input Form 2</h3>
                            </div>
                            <div className="card-body text">
                                <form action="">
                                    <div className="my-3">
                                        <label htmlFor="">Name</label>
                                        <input className="form-control" value={name} onChange={e => setName(e.target.value)} type="text"></input>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="">Email</label>
                                        <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} type="text"></input>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="">Cell</label>
                                        <input className="form-control" value={cell} onChange={e => setCell(e.target.value)} type="text"></input>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="">User Name</label>
                                        <input className="form-control" value={uname} onChange={e => setUname(e.target.value)} type="text"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                            <h5>Name: {name}</h5>
                            <h5>Email: {email}</h5>
                            <h5>Name: {cell}</h5>
                            <h5>Name: {uname}</h5>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
            <hr />
        </>
    )


}

export const InputForm2 = ( ) => {

    // from input with useState
    const [input, setInput ] = useState({
        name : '',
        email : '',
        cell : '',
        uname : '',
        gender : '',
        photo : ''
    });
    // get value without destracring
    // console.log(input.name+" "+ input.email+" "+ input.cell+" "+ input.uname + " "+ input.gender);
    // with destracring
    let {name,email,cell, uname, gender, photo } = input;

    // alert manage
    const [alert, setalert] = useState({
        msg : "this is alert",
        type : 'danger',
        status : false
    })

    const hundleFornSubmit = (e) => {
        e.preventDefault()
        if( name === "" || email === '' || cell === ''|| uname === '' || gender === ''|| photo === ''){
            setalert({
                msg : "this is alert",
                type : 'danger',
                status : true
            })
        }else {

            axios.post('http://localhost:5050/users',  input //03  //{name,email,cell,uname,gender,photo} //02
            // {  
            //     id : '',
            //     name : name,
            //     email : email,
            //     cell : cell,
            //     uname : uname,
            //     gender : gender,
            //     photo : photo
            // } //01
            ).then(res  => {
                setalert({
                    msg : "Submited",
                    type : 'success',
                    status : true
                })
                setInput({
                    name : '',
                    email : '',
                    cell : '',
                    uname : '',
                    gender : '',
                    photo : ''
                })
            }
            ).catch(error => {
                console.log(error);
            }
            )

            
        }
    }
    // Alert Close
    const hundleFornSubmitAlert = ( ) => {
        setalert({
            msg : "this is alert",
            type : 'success',
            status : false
        })
    }

    // get ALLL USER DATA
    const [users, setUsers] = useState([])
    // get ALLL USER DATA
    useEffect( () => {
        axios.get('http://localhost:5050/users').then(res => {
            setUsers(res.data)

        }
        ).catch(error => {
            console.log(error);
        })
    },[ users]) //will change after edit 

    // DELET USEAR
    const hendleDataDelete = (id) => {
        axios.delete('http://localhost:5050/users/'+ id);
    }

    return (
        <>
            <div className="container-fluid firstTest py-4 InputForm2 ">
                <div className="row ">
                    <div className="col-md-3  ">
                        <div className="input-container">
                            <div className="card  ">
                                <div className="card-header">
                                <h3 className='text-center'>Add Developers Data</h3>
                                </div>
                            
                                <div className="card-body text">

                                    {
                                        alert.status && <p className={`alert alert-${alert.type} d-flex justify-content-between`}>{alert.msg}<button  onClick={ hundleFornSubmitAlert } className='btn-close'></button></p>
                                    }

                                    <form action="" onSubmit={ hundleFornSubmit }>
                                        <div className="my-1">
                                            <label htmlFor="">Name</label>: {name}
                                            <input className="form-control" value={ name } onChange={e => setInput(  { ...input, name : e.target.value }  )} type="text"/>
                                        </div>
                                        <div className="my-1"> 
                                            <label htmlFor="">Email</label>: { email }
                                            <input className="form-control" value={ email } onChange={e => setInput( { ...input, email : e.target.value })  } type="text"/>
                                        </div>
                                        <div className="my-1">
                                            <label htmlFor="">Cell</label>: { cell } 
                                            <input className="form-control" value={ cell } onChange={e => setInput( { ...input, cell : e.target.value })} type="text"/>
                                        </div>
                                        <div className="my-1">
                                            <label htmlFor="">User Name</label>
                                            <input className="form-control" value={ uname } onChange={e => setInput( { ...input, uname : e.target.value } )} type="text"/>
                                        </div>
                                        <div className="my-1">
                                            <label htmlFor="">Photo</label>
                                            <input className="form-control" value={ photo } onChange={e => setInput( { ...input, photo : e.target.value } )} type="text"/>
                                        </div>
                                        <p className='mb-0'>Gender</p>
                                        <div className="my-1">
                                            <label htmlFor="Male">Male</label> 
                                            <input id='Male' className="" name="gender" value='Male' onChange={e => setInput( { ...input, gender : e.target.value } )} type="radio"/> 
                                            
                                            <label className='' htmlFor="Female"> Female</label> 
                                            <input id='Female' className="" name="gender" value='Female' onChange={e => setInput( { ...input, gender : e.target.value } )} type="radio"/>
                                        </div>

                                        <div className="my-1">
                                            <input className="btn btn-primary w-100" value='Submit'   type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="devs-container">
                        <div className="card">
                                <div className="card-header">
                                    <h3>All Developers Data</h3>
                                </div>
                                <div className="card-body">
                                    <table className='w-100 table table-striped'>
                                        <thead>
                                        <tr>
                                        <th>Sl</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Cell</th>
                                            <th>UserName</th>
                                            <th>Gander</th>
                                            <th>Photo</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map( (data, index) => 
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.email}</td>
                                                        <td>{data.cell}</td>
                                                        <td>{data.uname}</td>
                                                        <td>{data.gender}</td>
                                                        <td><img style={{width:"40px", height:"40px"}} src={data.photo} alt="" /></td>
                                                        <td><button onClick={() => hendleDataDelete(data.id)} className='btn btn-danger btn-sm' >Delete</button></td>
                                                    </tr>
                                                
                                                )
                                            }

                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
            
            <hr />
        </>
    )


}
