import { Link } from "react-router-dom"; 
import { LineChart, ResponsiveContainer, Line } from "recharts";
import "./chartbox.scss";

// type Props = {
//     color: string;
//     icon: string;
//     title: string;
//     dataKey: string;
//     number: number | string;
//     percentage: number;
//     chartData: object[];
// };

const ChartBox = () => {
    return (
        <div className="chartbox">
            <div className="boxInfo">
                <div className="title">
                    <img src="./images/user.svg" alt="" />
                    <span>Total Users</span>
                </div>
                <h1>11.2358</h1>
                <Link to="/">View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width='100%' height="100%">
                        <LineChart>
                            <Line type="montone" dataKey="pv" stroke="" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage">45%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    );
}

export default ChartBox;