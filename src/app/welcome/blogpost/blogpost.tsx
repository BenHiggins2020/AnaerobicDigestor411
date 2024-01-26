import 'bootstrap/dist/css/bootstrap.min.css';


export default function BlogPost ({title, body}){

    if(title===undefined){
        title = "Jumbotron!"
    }
    if(body === undefined){
        body = "Body of text!! "
    }
    return(
        <div className='container py-4'>

        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className='container-fluid py-5'>
                <h1 className='display-5 fw-bold'> {title}</h1>
                <p className='col-md-8 fs-4'>{body}</p>

            </div>

        </div>
        </div>
    )

}