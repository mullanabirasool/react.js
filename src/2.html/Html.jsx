import React from "react";
import img1 from '../assets/react.svg'
function Html(){
    return(
        <div>
            <h1>HTML</h1>
            <img src={img1} height="300px" width="300px" alt="" />
            <img src="./public/favicon.svg"  height="300px" width="300px"alt="" />
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmNkLA4Sdanl48SVLZmG92o32L_4P5hQJKXKZ3GpunQ&s=10"  height="300px" width="300px"alt="" />
            <table border={"1px"}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Addess</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nabi</td>
                        <td>BGR</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>mn@birasool@gmail.com</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default Html