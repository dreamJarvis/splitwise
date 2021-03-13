import React, {useState} from 'react';
import '../dashboard.css';

const Give = (give)=>{
    const info = give.paymentList;
    return(
        <div className="container amtContainer">
            <div className="row">
                <div className="col s12 m12">
                    <div className="card grey lighten-4 z-depth-0 giveAmt">
                        <div className="card-content grey-text">
                            <div className="card-title row grey lighten-3">
                                <img className="col m2 left responsive-img center-align valign-wrapper" src="https://img.icons8.com/nolan/64/shopping-cart-loaded.png"/>
                                <div className="col m10 left">
                                    <p className="left-align">{info.name}</p>
                                    <p className="green-text left-align">you own +${info.totalAmt}</p>
                                </div>
                            </div>
                            <div className="list-content">
                                <ul className="collection ">
                                {
                                    info.groups.map((group)=>{
                                        return (
                                            <li className="collection-item grey lighten-5 grey-text text-lighten-1" key={group.id}>you own {info.name} +${group.amt} for "{group.group}"</li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Give;