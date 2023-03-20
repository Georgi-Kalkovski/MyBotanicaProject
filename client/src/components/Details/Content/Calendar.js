import React from "react";
import "./Calendar.css";
import { calendarSVG } from './SvgImports';

function Calendar({ plant }) {
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    let growthM = [];
    let bloomtM = [];
    let fruitM = [];

    if (plant.growth_months) {
        growthM = plant.growth_months.split(',');
    }
    if (plant.bloom_months) {
        bloomtM = plant.bloom_months.split(',');
    }
    if (plant.fruit_months) {
        fruitM = plant.fruit_months.split(',');
    }

    function Months() {
        const monthsArr = [];
        for (let i = 0; i < 12; i++) {
            monthsArr.push(<th>{months[i]}</th>);
        }
        return monthsArr;
    }

    function GrowthMonths() {
        const monthsArr = [];
        monthsArr.push(<td>Growing</td>);
        for (let i = 0; i < 12; i++) {
            if (!growthM.includes(months[i])) {
                monthsArr.push(<td className="grey-month"></td>);
            } else {
                if (growthM[0] == months[i]) {
                    monthsArr.push(<td className="green-month start-month"></td>);
                } else if (growthM[growthM.length - 1] == months[i]) {
                    monthsArr.push(<td className="green-month end-month"></td>);
                } else {
                    monthsArr.push(<td className="green-month"></td>);
                }
            }
        }
        return monthsArr;
    }

    function BloomMonths() {
        const monthsArr = [];
        monthsArr.push(<td>Blooming</td>);
        for (let i = 0; i < 12; i++) {
            if (!bloomtM.includes(months[i])) {
                monthsArr.push(<td className="grey-month"></td>);
            } else {
                if (bloomtM[0] == months[i]) {
                    monthsArr.push(<td className="green-month start-month"></td>);
                } else if (bloomtM[bloomtM.length - 1] == months[i]) {
                    monthsArr.push(<td className="green-month end-month"></td>);
                } else {
                    monthsArr.push(<td className="green-month"></td>);
                }
            }
        }
        return monthsArr;
    }

    function FruitMonths() {
        const monthsArr = [];
        monthsArr.push(<td>Fruits</td>);
        for (let i = 0; i < 12; i++) {
            if (!fruitM.includes(months[i])) {
                monthsArr.push(<td className="grey-month"></td>);
            } else {
                if (fruitM[0] == months[i]) {
                    monthsArr.push(<td className="green-month start-month"></td>);
                } else if (fruitM[fruitM.length - 1] == months[i]) {
                    monthsArr.push(<td className="green-month end-month"></td>);
                } else {
                    monthsArr.push(<td className="green-month"></td>);
                }
            }
        }
        return monthsArr;
    }

    return (
        <>
            <div id="calendar">
                <h2>
                    <img className='svg' src={calendarSVG} />
                    <span> Calendar</span>
                </h2>
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th></th>
                            {Months()}
                        </tr>
                    </thead>
                    <tbody>
                        {growthM.length > 0 ? <tr class="row-growth">{GrowthMonths()}</tr> : ''}
                        {bloomtM.length > 0 ? <tr class="row-bloom">{BloomMonths()}</tr> : ''}
                        {fruitM.length > 0 ? <tr class="row-fruit">{FruitMonths()}</tr> : ''}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Calendar;