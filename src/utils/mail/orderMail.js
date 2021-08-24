const orderMail = (options) => {
    return `
        <div>
            <div style=" color: #323232; ">
                <div style=" max-width: 600px; margin:auto; background: #005CE4; padding: 20px 5px; ">
                    <div style=" text-align: center; padding: 0 0 10px; ">
                        <img src="https://res.cloudinary.com/aztec/image/upload/v1628835243/logoaztec_ojo89m.png" alt=""
                            style=" width: 140px; ">
                    </div>
                    <div style=" padding: 20px; background: #fff; border-radius: 10px; ">
                        <div align="center">
                            <div
                                style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:0 0 8px;font:500 24px/22px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a">
                                ${options.sender_status} Order
                            </div>
                        </div>
                        <div style="border-bottom: 1px solid lightsteelblue;"></div>
                        <br />
                        <h3>Product Details :</h3>
                        <div align="center">
                            <div>
                                <table style=" width: 100%; border: 1px solid #9e9e9e;  ">
                                    <thead>
                                        <th style=" border: 1px solid #9e9e9e; " ></th>
                                        <th style=" border: 1px solid #9e9e9e; " >Product Name</th>
                                        <th style=" border: 1px solid #9e9e9e; " >Quantitiy</th>
                                    </thead>
                                    <tbody style=" text-align: center; ">${options.order_list}</tbody>
                                </table>
                            </div>
                        </div>
                        <br />
                        <div>
                            <table>
                                <tr>
                                    <td>Order_id</td>
                                    <td>:</td>
                                    <td>${options.order_id}</td>
                                </tr>
                                <tr>
                                    <td>Order Status</td>
                                    <td>:</td>
                                    <td style=" font-weight: 600; --text-opacity: 1; color: ${options.order_status_color}; ">${options.order_status}</td>
                                </tr>
                                <tr>
                                    <td>Total Amount</td>
                                    <td>:</td>
                                    <td>₹${options.order_amount}</td>
                                </tr>
                                <tr>
                                    <td>${options.sender_status} Address</td>
                                    <td>:</td>
                                    <td>${options.order_address}</td>
                                </tr>
                                <tr>
                                    <td>${options.sender_status} Phone</td>
                                    <td>:</td>
                                    <td>${options.order_phone}</td>
                                </tr>
                                ${options.order_date}
                            </table>
                        </div>
                        <br />
                        <br />
                        <div style="border-bottom: 1px solid lightsteelblue;"></div>
                        <br />
                        <p style=" font-size: 14px; margin: 10px ">If you encounter any problem, please contact us at
                            aztec.cnc@gmail.com .</p>
                        <p style=" font-size: 14px; margin: 10px ">Phone : +91 9730026670</p>



                        <br />
                        <br />
                        <div style=" text-align: center; ">
                            <div style="border-bottom: 1px solid lightsteelblue;"></div>
                            <div style="padding: 20px;">
                                <div
                                    style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:0 0 8px;font:500 18px/20px Arial,Helvetica,sans-serif,Fira;">
                                    Join the Community
                                </div>
                                <div>
                                    <div 
                                        style="font-weight:normal;text-align:left;display:block;width:100%;box-sizing:border-box;vertical-align:top"
                                        width="140">
                                        <table cellpadding="0" cellspacing="0" style="float:none;margin:0 auto">
                                            <tbody>

                                                <tr>
                                                    <td
                                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:28px;line-height:18px">
                                                        <a href="https://www.facebook.com/AZtec-CNC-108812541505135"
                                                            style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/AZtec-CNC-108812541505135&amp;source=gmail&amp;ust=1628682026251000&amp;usg=AFQjCNGu2oCbKtBhaikV3aH_VMQIliuxKw">
                                                            <img alt="Facebook"
                                                                src="https://ci3.googleusercontent.com/proxy/4127NE25R-YHCblryocbyByWdvT8SHsbe2JbNGDzqjW5SzuFaLvmmf0TzDL1FqPaBF0feT8uODI9BgC1-EATZWf2ntgwBQXFwWmUdelkLfVAUukcWcHpshhpF6yhBTYBADhjoQ1tFqIMICKZ9WsOliEBXm0=s0-d-e1-ft#https://cloudinary-res.cloudinary.com/image/upload/w_33,dpr_2.0/v1513241200/mail/ico-facebook.png"
                                                                style="width:40px;vertical-align:top" width="40"
                                                                class="CToWUd">
                                                        </a>
                                                    </td>
                                                    <td width="14"
                                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:28px;line-height:18px">
                                                    </td>
                                                    <td
                                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:28px;line-height:18px">
                                                        <a href="https://twitter.com/AztecCnc"
                                                            style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/AztecCnc&amp;source=gmail&amp;ust=1628682026251000&amp;usg=AFQjCNFXGOdFT7jqh_mhqNXYZUviVHkXoQ">
                                                            <img alt="Twitter"
                                                                src="https://ci3.googleusercontent.com/proxy/uoJZDPnPqUN78-qki-XsEz76CQhNzmtS1yxVyfTcLw-7kv-r485ghcY0gQWCv47q5zDpRjb8WHTyxYJlxabnWrC-LnbwOZpYN7qcsaVZ9zdP6yIUYEn9CZ3th9QeZxxMfSFn0GIvFRmQv9PXUnwu83Gsmg=s0-d-e1-ft#https://cloudinary-res.cloudinary.com/image/upload/w_33,dpr_2.0/v1513241200/mail/ico-twitter.png"
                                                                style="width:40px;vertical-align:top" width="40"
                                                                class="CToWUd">
                                                        </a>
                                                    </td>
                                                    <td width="14"
                                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:28px;line-height:18px">
                                                    </td>
                                                    <td
                                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:28px;line-height:18px">
                                                        <a href="https://www.instagram.com/azteccnc"
                                                            style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/AztecCnc&amp;source=gmail&amp;ust=1628682026251000&amp;usg=AFQjCNFXGOdFT7jqh_mhqNXYZUviVHkXoQ">
                                                            <img alt="Instagram"
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                                                                style="width:40px;vertical-align:top" width="40"
                                                                class="CToWUd">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style=" color: rgb(165, 164, 164); text-align: left; margin: 20px auto; ">
                        <div align="center">
                            <div style=" text-align: center; padding: 10px; ">
                                <img src="https://res.cloudinary.com/aztec/image/upload/v1628657771/logo192_ms1tie.png" alt=""
                                    style=" width: 100px; ">
                            </div>
                            <div
                                style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12px;line-height:18px;padding:0 0 10px;font:500 12px/18px Arial,Helvetica,sans-serif,Fira;color:#fff">
                                © 2021 AZtecCNC. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

module.exports = orderMail