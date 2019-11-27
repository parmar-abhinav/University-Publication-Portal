import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import '../Style.css';

class Yourarticles extends Component
{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <Navigation></Navigation>
                <p style={{color: 'green', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}><strong>Your Articles</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tr">
                        <th>Number</th>
                        <th>Article ID</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Citation</th>
                    </tr>
                </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Yourarticles;