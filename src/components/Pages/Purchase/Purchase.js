// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { CircularProgress } from '@mui/material';

// const Purchase = () => {
//     const { _bikeid } = useParams()
//     const [bike, setBike] = useState();
//     console.log(bike)
//     useEffect(() => {
//         fetch(`http://localhost:5000/bikedetails/${_bikeid}`)
//             .then(res => res.json())
//             .then(data => setBike(data))
//     }, [_bikeid])
//     return (
//         <div>
//             {!bike ? <CircularProgress />
//                 :
//                 <div className="col image">
//                     <div className="card h-100">
//                         <img src={bike.image} className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{bike.name}</h5>
//                             <p className="card-text">{bike.description}</p>
//                             <p className="card-text">{bike.price}</p>
//                         </div>
//                         <div className="button">
//                             <Link to="/purchaseitem">
//                                 <button>Buy Now</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             }
//         </div>
//     );
// };

// export default Purchase;